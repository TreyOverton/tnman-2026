---
title: "Implementation Plan: Participant Portal (Astro)"
description: "Design and execution plan for a separate, deployable Astro app — the participant-facing portal for TNMAN 2026"
status: draft
created_date: 2026-05-01
author: "1LT Aaron Overton, ASST S3"
---

# Implementation Plan: Participant Portal (Astro)

> **Status:** Draft — pending direction review by 1LT Aaron Overton before scaffolding begins. Companion to the existing planner site (this Docsify install). Not an order; this is the engineering plan that scopes the build.

## 1. Situation

### Background

The current site (this Docsify install at `tnman-2026.web.app`) is **the planner's site**. It carries the full body of planning artifacts: orders, JAG briefs, OIC notes, planning gaps, comms log, training trainer notes, source archive. It is appropriate for the ICP and the planning cell — the audience it was designed for.

It is **not** appropriate as a participant-facing reference during execution. Participants don't need (and shouldn't be distracted by) JAG briefs, planning gaps, orders consistency reviews, or trainer answer keys. They need their role-specific guide, the glossary, the CalTopo guide, and a small set of quick-reference items — surfaced in a layout that works on a phone in the field.

### Opportunity

We are 12 days from BMNT execution start (12 MAY 26 0520R). A purpose-built participant portal — separate URL, tighter content, mobile-first — closes three gaps at once:

1. **Distraction reduction.** Participants land in the materials they actually need with no path to internal planning content.
2. **Field utility.** A few capabilities that only make sense on a live, authenticated, GPS-capable device:
   - Auto-stamped 214-style activity log entries (DA Form 1594 analog)
   - Real-time AAR capture during execution (vs. reconstruction afterward)
   - Push-style broadcast to all participants (announcements, schedule changes)
   - Trainer-controlled inject delivery with role-aware guidance hidden until activation
3. **Admin surface.** Inject activation, broadcast send, and access-list management need to happen on-site fast — building them into the same app (gated to a narrow admin allowlist) is faster and more reliable than maintaining separate consoles.

### Constraints from existing state

- **Auth project already provisioned.** `tnman-2026` Firebase project exists with Google sign-in and `tnstateguard.org` domain restriction. Reusing it keeps a single auth surface and avoids the redirect-URI whitelist work the user has already absorbed.
- **Content authority lives in `site/`.** All participant guides, the glossary, and the CalTopo guide are markdown in `site/participant-guides/` and `site/`. Re-authoring them in the portal would fork the source of truth — every update would require two edits. The portal must read from these files, not duplicate them.
- **Some participants do not have `@tnstateguard.org` mail yet.** Domain-only auth excludes them. We need an allowlist mechanism layered on top of the domain restriction.
- **Some participants are external** (interagency, SDFF, possibly HEMA). Same allowlist need.

## 2. Mission

Stand up a separate, deployable Astro web application — the **participant portal at `tnman.web.app`** — co-located in this repository as a sibling to `site/`, sharing the same Firebase project for auth, that delivers participant-facing content and execution-time utilities (214 activity log with ICP wall-display feed, AAR capture, broadcasts, injects) with admin functions gated to a narrow allowlist, polished enough to **hand out on tablets to leadership during the Leader's Recon site walkthrough on 06 MAY 26**.

## 3. Commander's Intent

### Purpose

So that every participant — TNSG soldier, attached medic, LNO, interagency partner — can pull up the portal on their phone in the field and find exactly what they need (their role's playbook, the comms plan, the glossary) without ever seeing a JAG brief or a planning gap, while OIC and S3 retain a fast, authenticated surface to push information out and capture observations as they happen.

### Success Criteria

| Metric | Target | Rationale |
|--------|--------|-----------|
| Portal live at `tnman.web.app` | NLT 06 MAY 26 (Leader's Recon tablet handoff) | Demo gate — leadership gets tablets at the site walkthrough |
| Google sign-in works for `@tnstateguard.org` + allowlisted emails | 100% of organic + attached PAX have access | Access gate cannot be a blocker on game day |
| Participant Guides render from `site/participant-guides/` source | All 30+ role guides + glossary + CalTopo guide | Single source of truth — no content fork |
| 214 activity log captures user identity, server timestamp, GPS (when permitted) | Working on phone (iOS Safari, Android Chrome) | Primary device is mobile in the field |
| AAR entry submission persists to Firestore | Round-trip < 2s on LTE | Slow capture is no capture |
| Broadcast sent by admin appears within 5s on all open clients | Verified on 3+ clients simultaneously | "Push" is the whole point |
| Inject activation reveals role-specific guidance only after toggle | Pre-activation: invisible to clients (rules-enforced) | Premature disclosure breaks training value |
| Admin functions restricted to admin allowlist | Non-admins see no admin UI; rules block writes | Defense in depth |
| Content updates flow via existing markdown edits | Editing `site/participant-guides/foo.md` updates portal on next deploy | Authoring habit unchanged |

### What "good" looks like at exercise end

A participant who only ever used the portal — never the planner site — was able to do their job. An OIC who pushed three broadcasts and triggered two injects from their phone has a Firestore record of every entry. The AAR draft on 15 MAY is seeded with real-time observations rather than reconstructed memory.

## 4. Design Decisions (COA Analysis)

This section walks the meaningful design choices, not the implementation details. Each has at least two options considered.

### 4.1 Repo layout — subfolder vs. parallel repo

| | Subfolder (`portal/` sibling of `site/`) | Parallel repo |
|---|---|---|
| Content sync | Astro reads `../site/participant-guides/*.md` directly via glob — zero sync mechanism | Submodule, copy script, or republish — fragile |
| CI / deploy | One pipeline, one Firebase project, two hosting targets | Two of everything |
| Cognitive overhead | One repo to clone, one branch model | Context switch, drift risk |
| Risk | Monorepo node_modules sprawl; TabulaKit `/tabula-update` runs need to be portal-aware | Cleaner boundary |

**Recommendation: Subfolder.** Sync is the dominant cost driver; subfolder reduces it to nothing. The TabulaKit-update concern is mitigated because TabulaKit modifies `site/` only — the portal lives outside its scope.

### 4.2 Hosting — multi-site Firebase vs. separate Firebase project

| | Multi-site (one project, two hosting sites) | Separate project |
|---|---|---|
| Auth | Single project — same auth domain, same redirect URIs | Second project, second OAuth client, second redirect-URI whitelist |
| Firestore | Same database — broadcasts/injects/logs accessible from either | Two databases or cross-project reads |
| Cost / billing | Same project | Same Spark tier, different boundary |
| Deployment | `firebase deploy --only hosting:portal` | Separate deploy command and login |

**Recommendation: Multi-site under existing `tnman-2026` project.** Reusing the auth surface alone justifies it; the user has already done the redirect-URI whitelisting work for this project.

`firebase.json` becomes a `hosting` array with two entries (`planner` → `site`, `portal` → `portal/dist`); `.firebaserc` gets target mappings. Existing deploys continue to work; portal deploys with `firebase deploy --only hosting:portal`.

### 4.3 Content delivery — read source markdown vs. import via package

| | Astro Content Collections reading `../site/...` | Copy/build step that ingests at build time |
|---|---|---|
| Source of truth | Single — the existing `.md` files | Single, but with a build-time copy |
| Curation (only certain files appear in portal) | Explicit allowlist in a manifest file | Explicit allowlist in build script |
| Astro idiomatic | Yes — Content Collections support arbitrary `base` | Less so |
| Risk | TabulaKit-specific link conventions (e.g., `/site/...` absolute paths from session memory) need translation for Astro's router | Same translation needed |

**Recommendation: Astro Content Collections, base path `../site/`, with an explicit manifest** of which files/folders are in scope. The portal manifest starts as:

- `participant-guides/**/*.md`
- `glossary.md` (lives in `participant-guides/`)
- `participant-guides/caltopo.md`
- `participant-guides/common.md`
- `comms.md` is NOT included (planner-only); a portal-specific comms summary page can be authored if needed
- A small portal-only `home.md` or similar lives in the portal repo (not in `site/`)

A small adapter rewrites cross-directory `/<path>.md` links to portal-routable paths. The convention is workable because the planner site uses absolute `/`-prefixed links throughout (per session memory).

### 4.4 Auth — domain-only vs. domain + allowlist vs. allowlist-only

The planner site currently runs `mode: "domain"` against `tnstateguard.org`. The portal needs:

- **`@tnstateguard.org`** users → allowed by domain
- **Specific external emails** (soldiers without TNSG mail, interagency, SDFF, HEMA) → allowed by explicit allowlist
- **Admin** users → narrower allowlist for admin UI/writes

**Recommendation: Hybrid mode** — admit if domain matches **OR** email is in `allowedEmails` Firestore collection. Plus a separate `admins` collection for admin gating.

Why Firestore-backed (not a hardcoded array in `auth-config.js`)? Because access changes will happen mid-exercise. Editing `auth-config.js` requires a redeploy; a Firestore record edit (via the admin UI we're already building) is instant.

Security model: Firestore rules check the calling user's email against the `allowedEmails` doc and the `admins` doc. The client-side gate is UX courtesy; the rules are the actual enforcement.

### 4.5 Inject delivery — client-side gating vs. rules-enforced reveal

The "trainer-side guidance hidden until inject activation" requirement is a real security ask. If the guidance ships in the static bundle and is only hidden by client-side logic, a participant with browser dev tools can read it before activation and the training value is lost.

**Recommendation: Firestore-backed injects, rules-enforced reveal.** The inject document carries `active: false | true`; the `playbook` field (map of `roleKey -> guidance markdown`) is gated by `allow read: if resource.data.active == true || isAdmin()`. Until an admin flips it to active, no client (other than admins) can read the playbook. The static bundle ships only the inject *titles* and slots, not the content.

## 5. Architecture

### 5.1 Repo layout

```
tnman-2026/
├── site/                       # existing Docsify (planner)
├── portal/                     # NEW — Astro app
│   ├── astro.config.mjs
│   ├── package.json
│   ├── tsconfig.json
│   ├── public/                 # static assets unique to portal (logo, favicon)
│   ├── src/
│   │   ├── content/
│   │   │   └── config.ts       # Content Collections — base ../../site
│   │   ├── components/
│   │   │   ├── BroadcastBanner.astro
│   │   │   ├── InjectCard.astro
│   │   │   ├── LogEntry.astro
│   │   │   └── AarEntry.astro
│   │   ├── layouts/
│   │   │   ├── PortalLayout.astro
│   │   │   └── AdminLayout.astro
│   │   ├── pages/
│   │   │   ├── index.astro
│   │   │   ├── guides/[slug].astro
│   │   │   ├── glossary.astro
│   │   │   ├── caltopo.astro
│   │   │   ├── log.astro          # 214-style activity log
│   │   │   ├── aar.astro          # AAR capture
│   │   │   ├── injects.astro      # active injects (read-only for participants)
│   │   │   └── admin/
│   │   │       ├── index.astro
│   │   │       ├── access.astro   # allowlist editor
│   │   │       ├── broadcast.astro
│   │   │       ├── injects.astro  # inject definitions + activation
│   │   │       ├── log.astro      # all-users log view
│   │   │       └── aar.astro      # all-users AAR view
│   │   └── lib/
│   │       ├── firebase.ts        # Firebase init (reuse tnman-2026 project)
│   │       ├── auth.ts            # signIn / signOut / hasAccess / isAdmin
│   │       ├── log.ts             # writeLogEntry, listLogEntries
│   │       ├── aar.ts
│   │       ├── broadcast.ts
│   │       ├── injects.ts
│   │       └── geo.ts             # GPS capture w/ permission UX
│   └── content-manifest.json      # explicit allowlist of site/ files surfaced in portal
├── firebase.json                  # multi-site hosting
├── .firebaserc                    # target mappings
└── firestore.rules                # NEW — auth/admin/inject access rules
```

### 5.2 Firestore schema

| Collection | Doc shape | Read | Write |
|---|---|---|---|
| `access/allowedEmails` | `{ emails: string[] }` (single doc) | any auth'd user (so client can decide whether to render the gate) | admins only |
| `access/admins` | `{ emails: string[] }` (single doc) | any auth'd user | admins only (bootstrap: 1LT Aaron Overton, LTC Sheaf seed via console) |
| `activityLog/{autoId}` | `{ uid, email, displayName, timestamp, gps?: {lat, lon, accuracy}, message }` | own entries: self; all entries: admins | self (own entry only) |
| `aar/{autoId}` | `{ uid, email, displayName, timestamp, role?, phase?, observation, recommendation? }` | own + admins | self |
| `broadcasts/{autoId}` | `{ from, timestamp, message, severity }` | any auth'd user | admins |
| `injects/{slug}` | `{ title, scenario, active: bool, activatedAt?, playbook: { [roleKey]: markdown } }` | title/scenario/active: any auth'd; playbook: only when `active==true` OR admin | admins |

### 5.3 Auth flow

1. User hits portal URL (e.g., `tnman-portal.web.app` or a chosen subdomain).
2. If unauthenticated → Google sign-in (popup or redirect).
3. After sign-in, client checks: `email.endsWith('@tnstateguard.org') || allowedEmails.includes(email)`. If neither, render an "access pending" page with a `mailto:` to OIC.
4. Admin pages additionally check `admins.includes(email)`; otherwise 404.

### 5.4 Real-time delivery

- `broadcasts` and `injects` use Firestore `onSnapshot` listeners on the layout level, so every page receives updates.
- Broadcast renders as a dismissible banner at the top of every page; persists to a "broadcast history" panel.
- Inject activation triggers a banner and routes/highlights the inject card on `/injects`.

### 5.5 GPS capture

- Browser `navigator.geolocation.getCurrentPosition()` with explicit user-prompted permission per session.
- Stored only on log entries the user creates; never silently captured.
- HTTPS satisfied by Firebase Hosting.

## 6. Execution

### Phase 0 — Scaffold + Firebase wiring (½ day)

- `portal/` Astro app initialized (`npm create astro@latest portal -- --template minimal --typescript strict`)
- `firebase.json` converted to multi-site; `.firebaserc` targets added
- Existing planner deploy continues to work unchanged (verify with a `--only hosting:planner` deploy)
- Empty portal deploys to its hosting target

### Phase 1 — Auth + access gate (½ day)

- Firebase SDK init in `portal/src/lib/firebase.ts` against the existing `tnman-2026` project
- `auth.ts` with sign-in / sign-out / `hasAccess` / `isAdmin`
- Add the portal's eventual hosting domain to the project's authorized OAuth redirect URIs (per the user's pre-existing whitelist policy)
- Bootstrap: seed `access/admins` with 1LT Aaron Overton and LTC Sheaf via Firebase console
- Sign-in works end-to-end on a phone

### Phase 2 — Content surface (1 day)

- Astro Content Collections wired to `../site/` with manifest
- Routes: `/`, `/guides/[slug]`, `/glossary`, `/caltopo`
- Layout, navigation (tight: home / guides / log / AAR / injects), mobile-first CSS
- Cross-doc link adapter (translates planner-site absolute `/` paths to portal routes; drops links into the planner-only set)

### Phase 3 — 214 activity log + ICP wall display (½ day)

- `firestore.rules` for `activityLog`
- `/log` page: list of own entries + new-entry form
- `geo.ts` GPS capture with permission UX (button: "Add location to this entry")
- Admin view at `/admin/log`
- **`/admin/log/display`** — ICP wall-display variant: large fonts, auto-scroll/refresh, optimized for projection on the ICP screen. Search/filter on `/admin/log` is a stretch goal.

### Phase 4 — AAR capture (½ day)

- Same shape as activity log; fields: observation, recommendation, optional role/phase tags
- `/aar` (own) + `/admin/aar` (all)

### Phase 5 — Broadcasts (½ day)

- `BroadcastBanner` component in `PortalLayout`
- `/admin/broadcast` send form
- Verified across 3+ devices simultaneously

### Phase 6 — Injects (1 day)

- `injects/{slug}` documents authored ahead of time (titles + scenarios + role-keyed playbook)
- `firestore.rules` enforces playbook gating
- `/admin/injects` toggles `active`; `/injects` shows active injects with the current user's role guidance

### Phase 7 — Admin allowlist UI + handoff (½ day)

- `/admin/access` editor for `allowedEmails`
- Quick-reference admin doc for OIC/S3 (how to broadcast, activate inject, add email)
- Field test on the Leader's Recon (06 MAY 26)

### Total: ~5 working days. Buffer: 1 day for QA, browser/mobile compat, and field-test fixes.

### Main effort

**Phase 6 (Injects).** It is the riskiest piece (security-rules-enforced reveal) and the highest training-value piece. If we cut scope, we cut Phase 6 last, not first.

## 7. Resources

| Role | Allocation | Focus |
|---|---|---|
| 1LT Aaron Overton | Build + admin/UX decisions | Lead implementation |
| Claude Code | Pair on scaffolding, Firestore rules, Astro content adapter | Acceleration |
| LTC Sheaf | Sanity-check participant content scope; identify any role guides that should NOT be in the portal | Content gate |
| OIC (1LT Aaron Overton) | Admin user; primary broadcast/inject operator | Field operator |

### Tools

- Astro 5.x (matches mojo's invest-heatherstone pattern)
- Firebase Hosting (multi-site), Firebase Auth, Firestore
- Existing `tnman-2026` Firebase project — no new project needed
- TypeScript strict; no React unless a specific island demands it (keep bundle small for mobile)

## 8. Timeline

| Date | Milestone |
|---|---|
| 01 MAY (today) | Plan reviewed; scope confirmed; sidebar entry live |
| 02 MAY | CG confirmation brief (separate) — Phase 0 + Phase 1 if time |
| 03–04 MAY | Phase 1–3 (auth, content surface, 214 log) |
| 05 MAY | Phase 4–5 (AAR, broadcasts) |
| 06 MAY | **Leader's Recon — portal usable on phones** |
| 07–10 MAY | Phase 6 (injects), Phase 7 (admin), seed inject content with LTC Sheaf |
| 11 MAY | Buffer / fixes / final field test |
| 12–15 MAY | Exercise execution — portal in active use |

## 9. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Astro Content Collections can't ergonomically read out-of-app source | Low | Medium | Content adapter falls back to a build-time copy; structurally cheap to switch |
| Phone GPS permission denied by participants | Medium | Low | Log entries work without GPS; metadata is opt-in |
| Real-time Firestore listeners chew battery on participant phones | Low | Low | Detach listeners on background; participants get pull-to-refresh fallback |
| Inject playbook leaks via dev tools before activation | Low if rules right; Medium if wrong | High to training value | Firestore rules unit-tested; nothing inject-sensitive shipped in static bundle |
| Domain restriction blocks soldiers without TNSG mail | Certain (already known) | High | Hybrid auth (domain OR allowlist) is in scope from Phase 1 |
| Time crunch: 5 working days is aggressive | Medium | High | Phase 6 (injects) is the cut line; portal can ship without it and still serve the participant-content + 214 + AAR + broadcast purposes |
| TabulaKit v2 (Astro replacement, per session state) lands mid-build and fragments effort | Low (no timeline yet) | Medium | Portal is a separate app — TabulaKit v2 migration affects `site/`, not `portal/` |
| Multi-site Firebase config breaks existing planner deploy | Low | High | Verify `--only hosting:planner` works before any portal deploy |

### Decision Points

- **End of Phase 1 (auth working):** if hybrid-auth Firestore-rules approach is shaky, fall back to `auth-config.js`-style hardcoded allowlist + manual redeploys.
- **End of Phase 5 (broadcasts working):** go/no-go on Phase 6 (injects) based on calendar pressure. If we don't have 1.5 clear days, we ship without injects and run them via verbal/comms-net during exercise.
- **48 hrs before BMNT (10 MAY):** feature freeze. Bug fixes and content only after this point.

## 10. Decisions (answers to open questions, locked 2026-05-01)

1. **Hosting URL — `tnman.web.app`.** Firebase Hosting site name `tnman` under the existing `tnman-2026` project. No custom subdomain (tnstateguard.org domain is not accessible to us).
2. **Initial admins — 1LT Aaron Overton and LTC Sheaf.** Seeded into `access/admins` Firestore doc on first run via `scripts/seed-firestore.ts`. Additional admins can be added through the admin allowlist UI later.
3. **Content scope — start with what we have, iterate from observed use.** Ship with `site/participant-guides/` (33 files), the glossary, and the CalTopo guide. No portal-side authoring of summaries until we see what participants actually need.
4. **Inject scenarios — three slots, two named.** Ship with three empty inject documents:
   - `soldier-kia` — "Soldier killed in action" (scenario summary stub; empty playbook)
   - `downed-uas` — "Downed UAS drone" (scenario summary stub; empty playbook)
   - `scenario-3-tbd` — "Scenario 3 (TBD)" (placeholder; user provides scenario before exercise)

   Playbook content (role-keyed response guidance) is authored in the admin UI by 1LT Aaron Overton / LTC Sheaf before exercise.
5. **AAR — single textarea only.** One free-text "Observation" field with brief inline guidance ("What did you see? What should we change?"). No structured tags, no role/phase fields, no separate "recommendation" field. Mobile-first: it must be trivial to tap and submit on a phone.
6. **AAR attribution — always attributed.** No anonymous mode. Submitter identity (display name, email) is captured on every entry.

## 11. Operational Notes

### 11.1 Worktree workflow

Implementation runs in a **git worktree on a branch off main**, not on `main` itself. Rationale: 1LT Aaron Overton needs to keep `main` clean for content updates (FRAGOs, roster updates, OIC notes) during the build window. The worktree gives the build its own checkout so neither side blocks the other.

- Worktree branch: `portal-build` (or similar, set at agent launch)
- Main checkout: untouched by build; user authors content edits on `main` as usual
- Merge: when the build is acceptance-ready, merge the worktree branch back to `main` and deploy from `main`

### 11.2 06 MAY 26 tablet demo gate

The portal will be **handed out on tablets to leadership during the Leader's Recon site walkthrough on 06 MAY 26**. This is a high-visibility moment for 3 RGT (and by extension LTC Sheaf and 1LT Aaron Overton). The build does not have to be feature-complete by then, but everything that is shipped must be polished:

- Sign-in flow: fast, no errors, clear access-denied messaging
- Mobile/tablet layout: tested on iPad Safari, Android Chrome, iPhone Safari
- Golden path for every page must work without console errors
- No broken images, no 404s on internal links, no rendering glitches

The demo itself doubles as a pre-test — observed usage informs what gets prioritized in the 12-15 MAY exercise window.

### 11.3 Deployment notes

- One-time manual step: create the Firebase Hosting site `tnman` in the Firebase console (or via `firebase hosting:sites:create tnman`). The portal target in `.firebaserc` references this site.
- Deploy command (after merge to main): `npx firebase-tools deploy --only hosting:portal`
- Reauth pattern (per session memory): `firebase login --reauth` first, signed in as `aaron.overton@tnstateguard.org` — that's the account with deploy permission for the project.
- Existing planner deploy command becomes `npx firebase-tools deploy --only hosting:planner` (the multi-site config splits the previously implicit single target into two named targets).

### 11.4 Execution pacing

The phase estimates in Section 6 (½ day each) reflect **human working-day** durations and are conservative for a continuous AI build session. Actual elapsed time for a single uninterrupted build will be substantially shorter; per-phase commits give natural review checkpoints.

---

*Plan author: 1LT Aaron Overton. Decisions locked 2026-05-01. Implementation in progress in worktree branch `portal-build`.*
