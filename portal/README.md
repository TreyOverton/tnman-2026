# TNMAN 2026 Participant Portal

Field-side companion app for TNMAN-26 participants. Lives at **https://tnman.web.app** (Firebase Hosting multi-site under the existing `tnman-2026` project). The planner site at `tnman-2026.web.app` is unchanged.

## What's in here

| Area | Path |
|------|------|
| Astro source | `portal/src/` |
| Content collection (reads `../site/participant-guides/`) | `portal/src/content/config.ts` |
| Firebase client (Auth + Firestore) | `portal/src/lib/firebase.ts` |
| Auth + access gate | `portal/src/lib/auth.ts` |
| Seed script (one-time, run after auth) | `portal/scripts/seed-firestore.ts` |
| Build output | `portal/dist/` (deployed by Firebase Hosting `portal` target) |
| Multi-site Firebase config | `../firebase.json` |
| Hosting target mappings | `../.firebaserc.template` (copy to `../.firebaserc`) |
| Firestore Security Rules | `../firestore.rules` |
| Firestore indexes | `../firestore.indexes.json` |

## Develop

```bash
cd portal
npm install            # already done in worktree
npm run dev            # http://localhost:4321
npm run build          # writes portal/dist/
npm run typecheck      # astro check
```

The dev server signs in against the **live** `tnman-2026` Firebase project. There is no emulator wired up. Use a real `tnstateguard.org` Google account (or one you have allowlisted via the seed step below) to sign in.

## One-time setup before first deploy

These steps must happen in this order. The user runs all of them — agents must not deploy.

### 1. Reauthenticate Firebase CLI

```bash
firebase login --reauth
```

Sign in as `aaron.overton@tnstateguard.org` (state-guard account; user has a separate cached Heatherstone account that should not be used here).

### 2. Create the `tnman` Hosting site (one-time)

The Firebase project `tnman-2026` already exists, but a second hosting site named `tnman` does not. Create it once:

```bash
firebase hosting:sites:create tnman --project tnman-2026
```

This makes `https://tnman.web.app` resolve. Existing site `tnman-2026.web.app` (the planner) is not touched.

### 3. Wire the local `.firebaserc`

```bash
cp .firebaserc.template .firebaserc     # from repo root
```

Verify the targets resolve:

```bash
firebase target --project tnman-2026
# Expected:
#   hosting:planner = tnman-2026
#   hosting:portal  = tnman
```

If they don't show, apply them:

```bash
firebase target:apply hosting planner tnman-2026 --project tnman-2026
firebase target:apply hosting portal tnman --project tnman-2026
```

### 4. Seed the access lists

The portal's auth gate is hybrid: any `@tnstateguard.org` Google account is allowed automatically, plus any email listed in Firestore at `access/allowedEmails`. Admins are read from `access/admins`.

Both docs need to exist (even with empty lists) for the rules to permit reads. Run the seed:

```bash
cd portal
npm run seed
```

The seed script writes:

- `access/admins` — `{ emails: ['aaron.overton@tnstateguard.org', 'sheaf@tnstateguard.org'] }`
- `access/allowedEmails` — `{ emails: [] }`

> **Heads up:** `sheaf@tnstateguard.org` is a placeholder for LTC Sheaf — confirm and correct his actual TNSG email before exercise day. Edit via the Admin → Access page (built in Phase 7), or re-run the seed after editing the script.

The seed script signs in via Google in your browser; the signed-in account must already be in the admin list, OR the docs must not yet exist (first-write is the bootstrap path — Firestore rules deny update by non-admins, so seeding works only when the docs are absent).

### 5. Deploy Firestore rules + indexes (before first user signs in)

```bash
firebase deploy --only firestore:rules,firestore:indexes --project tnman-2026
```

### 6. Deploy the portal

```bash
cd portal && npm run build && cd ..
npx firebase-tools deploy --only hosting:portal --project tnman-2026
```

The planner deploy is unchanged:

```bash
npx firebase-tools deploy --only hosting:planner --project tnman-2026
```

You can deploy both at once:

```bash
npx firebase-tools deploy --only hosting --project tnman-2026
```

## Architecture notes

- **Static Astro** — no SSR. All auth and data is client-side via Firebase JS SDK. Astro Content Collections render the 33 participant guide markdowns from `../site/participant-guides/` at build time. Cross-doc links in those markdowns (e.g. `/participant-guides/foo.md`) get rewritten to portal routes (`/guides/foo`) by `src/lib/markdown.ts`. Links to docs that aren't in the participant-guides folder become non-portal links.
- **Glossary** — lives at `/guides/glossary` (it's just a guide).
- **Auth** — Google sign-in only. Hybrid: TNSG domain OR Firestore allowlist OR admin list. Domain check is client-side AND enforced in Firestore rules. The rules are the source of truth; the client check is a UX nicety.
- **Wall display** — `/admin/log/display` is a large-format projection view of the live 214 feed. Designed for a 1080p TV at the ICP.
- **Injects** — three seeded scenarios (`soldier-kia`, `downed-uas`, `scenario-3-tbd`). Inactive by default with empty playbooks. Admin activates and writes per-role playbook content via `/admin/injects`. Playbook content is gated by Firestore rules — participants cannot see playbook content via dev tools before activation.

## DO NOT

- Do not edit `../site/`. That's the planner site.
- Do not run `firebase hosting:sites:create tnman` from an agent — leave it to the user.
- Do not deploy from an agent.
