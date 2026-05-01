# Session State

**Generated:** 2026-05-01
**Site:** TNMAN 2026 — 3rd Regiment's mission planner for the May 2026 TNMAN homeland defense exercise
**Theme:** #f97316 (orange) / #3bc0cb (teal)
**Auth:** domain-restricted (tnstateguard.org)
**Deploy:** **Firebase, multi-site under `tnman-2026` project**:
  - `planner` target → `site/` → **https://tnman-2026.web.app** (Docsify, the planner site)
  - `portal` target → `portal/dist/` → **https://tnman.web.app** (Astro, the participant portal — live as of 1 MAY 26)
  Both deploy manually — push-to-main does NOT auto-deploy. The auth redirect URIs are whitelisted only for Firebase domains.
**Font size:** 16px
**Last live commit (planner):** `27f631f` (DD-2977 submission)
**Last live state (portal):** worktree branch `worktree-agent-ad2322b0801fd6d73` (NOT yet merged to `main`)

## Site Structure

### Planner (https://tnman-2026.web.app — Docsify, `site/`)

- **OPERATIONS** — Mission Overview · Timeline & Deadlines · SA Brief · NAI Graphics · Execution Matrix · ICP Layout & Workflow
- **PERSONNEL** — Mission Roster (30 organic) · Chain of Command · ICS-203 Assignment List · Key Contacts
- **PLANNING** — Task Organization · Risk Assessment · DD Form 2977
- **JAG BRIEFS** — Command Authority & Mission Sets · Personally-Owned DJI UAS · DSCA & TNSG Authority · JAG UAS Memo (Harris 18 APR)
- **ORDERS** — CG's Intent · DIV WARNO · RGT WARNO · DIV OPORD · RGT OPORD · OPORD Encl A · IDT OPORD 26-04 · JFHQ-TN FRAGORD 3 · RGT FRAGO 26-05-01.1 · RGT FRAGO 26-05-01.2 · RGT Orders 26-04-601-3
- **SUPPORTING DOCUMENTS** — Document Index · RFF / RFS · TNMAN Comms Plan (Annex H) · Orders Back-Brief
- **PARTICIPANT GUIDES** — Overview · Common Expectations · Glossary · CalTopo Guide (~30 role-specific guides under `/site/participant-guides/`)
- **REFERENCE** — Reference Index · FPM Slides · Cyber WG · HD WG · Volunteer Pilots (SDFF) · Tech & Platforms · RFI Log · Exercise Precedent
- **OIC NOTES** — SITREP 25 APR · AAR Notes · Comms Log · Planning Gaps · Orders Consistency Review · ICP Org Reference · **Participant Portal Plan (Astro) [new 1 MAY]**
- **TRAINING: ICS FORMS** — Participant Notes · Trainer Notes · Commander's Brief · AAR

### Portal (https://tnman.web.app — Astro, `portal/`, on worktree branch)

Participant-facing field tool, mobile-first, tight nav. Routes:
- `/` (home) · `/guides` · `/guides/[slug]` (33 role pages) · `/guides/glossary` · `/guides/caltopo` · `/guides/common`
- `/log` (214 activity log entry, optional GPS) · `/aar` (single-textarea observation capture) · `/injects` (active injects only)
- Admin: `/admin/*` (gated by Firestore admins doc) — `/admin/log` + `/admin/log/display` (ICP wall feed) · `/admin/aar` · `/admin/broadcast` · `/admin/injects` · `/admin/injects/[slug]` · `/admin/access`

## Key Context

- **User:** 1LT Aaron Overton, ASST S3, 3 RGT TNSG. Working under LTC John Sheaf (S3, john.sheaf@tnstateguard.org). Deep technical proficiency; builds the planning products and analysis that LTC Sheaf reviews and routes.
- **Always include rank** when naming military personnel (every mention).
- **Firebase deploy:**
  - Planner: `npx firebase-tools deploy --only hosting:planner --project tnman-2026`
  - Portal: `npx firebase-tools deploy --only hosting:portal --project tnman-2026`
  - Reauth first: `firebase login --reauth` (state-guard account `aaron.overton@tnstateguard.org`)
- **Mt. Carmel Site Defense** — 3 RGT's named operation within DIV TNMAN-26.
- **Canonical ICP facility name:** Armed Forces Reserve Center, 399 A US-11W Scenic, Mt Carmel, TN 37645.
- **Perimeter-only constraint:** No TNSG personnel enter HAAP premises. ICP outside the perimeter.
- **Unarmed force:** TNSG unarmed by default; no weapons for this mission.
- **Dawn-to-dusk:** CG standing policy; no overnight TNSG presence at the ICP.
- **HEMA integration:** FRAGO 2 S3 Task 5 — BPT integrate Holston Emergency Management Agency NET 140900RMAY26.

## Personnel

- **30 organic PAX** (HHC 11 / 2 BN 3 / 3 BN 9 / 4 BN 7) per Sheaf 29 APR roster.
- **Expected attachments:** 3 medics from 61st MED Co (1 named: MAJ Gampe; 2 of 3 still TBD), 1 PAO rep (DIV; pending LTC Epright), 4 LNOs (2 RGT, 4 RGT, 2 DIV PMO).
- **31 PAX** referenced by DIV (Estes/Cox) = 28 organic + 3 attached medics.
- **DIV-tracked TPFDD totals (FRAGO 2 / 30 APR):** 42-50 Estimated Actual / 73-83 Notional / 120-125 Estimated Total. ADVON 11 → 25.

## Upcoming Deadlines

- **02 MAY 26** — CG confirmation brief (time TBD; may be 1000R per LTC Estes)
- **02 MAY 26** — Target NLT for FRAGO 26-05-01.2 distribution
- **06 MAY 26 1500R** — Leader's Recon (Walgreens link-up at 1455R) — **ALSO: portal tablet demo gate**
- **12 MAY 26 0520R** — BMNT, Phase II execution begins
- **13-15 MAY 26** — Main exercise window
- **141300RMAY26** — 3 BN main-gate security test
- **142131RMAY26** — Phase II ENDEX NLT

## Active Open Items

1. **PAO representative** — pending DIV PAO assignment via LTC Epright.
2. **Incoming LNO names** — 2 RGT (1), 4 RGT (1), DIV (2). 4 RGT candidates floated: MAJ Thomas / MAJ Hamlin (unverified).
3. **61st MED Co attached medics — 2 of 3 names still TBD** (MAJ Gampe is the first named).
4. **MRC-4 / unknown verification** — Bennett, Neisler, Hendon (4 BN MRC-4); Riley, Ferguson (3 BN MRC-unknown); McCroskey (HHC, restored 29 APR).
5. **JAG pre-briefs (3 submitted, 0 responses)** — Command Authority & Mission Sets · Personally-Owned DJI UAS · DSCA & TNSG Authority.
6. **HF frequencies** — formal request from LTC Estes to LTC Hughes (TNSG HHC G6) on 26 APR; awaiting reply-all.
7. **TACN radios** — DIV G6 sending 3 (per FRAGO 2 S6 Task 1); 3 RGT self-trains.
8. **Civilian-support-to-military-operations phrasing** — present in FRAGO 2 S3 Task 5; the DSCA pre-brief asks JAG to clarify.
9. **Portal: inject content authoring** — three slots seeded (`soldier-kia`, `downed-uas`, `scenario-3-tbd`); titles + scenarios stubbed; **playbook content (per-role response guidance) not yet written**. To be authored via `/admin/injects/[slug]` before exercise.
10. **Portal: scenario-3-tbd** — third inject scenario not yet decided. User and LTC Sheaf to choose.
11. **Portal: branch merge** — worktree branch `worktree-agent-ad2322b0801fd6d73` not yet merged to main. Pending user review.

## Recent Changes (1 MAY 26 session)

### Participant portal — full build, live at https://tnman.web.app

- **Implementation plan authored** — `site/participant-portal-plan.md`, 11 sections (Situation / Mission / Commander's Intent / Decisions / Architecture / Execution / Resources / Timeline / Risks / Decisions / Operational Notes). Sidebar entry under OIC NOTES. Followed the spirit of mojo's `/opord` + `/prep` skills (single combined doc since scope warranted it).
- **Astro 5 portal app built** in worktree by sub-agent — 8 phase commits on branch `worktree-agent-ad2322b0801fd6d73` (path `.claude/worktrees/agent-ad2322b0801fd6d73`). 33 participant guides + glossary + CalTopo + utility pages (214 log, AAR, injects, broadcasts, admin/*). 48 pages total at build.
- **Multi-site Firebase config** — `firebase.json` converted to `hosting: [...]` array. Planner config preserved exactly. Portal target uses cache headers for `_astro/**` (immutable) + sensible defaults for HTML/CSS/JS.
- **Firestore enabled** on `tnman-2026` (one-time Test Mode → seeded → locked rules deployed). nam5 region.
- **Hosting site `tnman` created** via `firebase hosting:sites:create tnman --project tnman-2026`. Targets applied: `planner→tnman-2026`, `portal→tnman`.
- **Seed script** at `portal/scripts/seed-firestore.ts` — runs WITHOUT auth (Test Mode allows it; popup auth doesn't work in Node). Wrote `access/admins`, `access/allowedEmails`, three inject docs.
- **Auth flow** — switched from `signInWithPopup` to `signInWithRedirect` for both Google and email-link (passwordless). Email-link sign-in is enabled in Firebase Auth (Email/Password provider with only the passwordless sub-toggle ON; password sub-toggle OFF — supported config).
- **Cross-origin auth fix** — set `authDomain: 'tnman.web.app'` (not `tnman-2026.firebaseapp.com`). Required adding `https://tnman.web.app/__/auth/handler` to the OAuth client's Authorized redirect URIs **in Google Cloud Console** (project `tnman-2026`, OAuth 2.0 Client ID starting `1072049931332-a6a10n2gb5kp6t9om7hnmbdq5s70cbm0`). Without this the redirect lands but Google rejects with "Access blocked: This app's request is invalid."
- **AccessGate UI** — full-screen overlay (no longer a small card with content visible behind), `body[data-auth="pending|gated|allowed"]` state machine drives render order. Errors render prominently in red (no longer muted gray that's easy to miss).
- **Inject playbook security** — playbook lives in subcollection `injects/{slug}/private/playbook`. Firestore rules deny read unless parent `active==true` OR caller is admin. Participants cannot see playbook content via dev tools before activation.
- **Admin allowlist seeded** — `aaron.overton@tnstateguard.org` + `john.sheaf@tnstateguard.org`.

### Planner site

- **Plan doc + sidebar entry added** under OIC NOTES.
- **Docsify frontmatter strip** — `index.html` now has a `beforeEach` hook that strips a leading YAML `---...---` block from any page before render. Future planning docs with frontmatter render cleanly.

## Uncommitted Work

### `main`
- `site/_sidebar.md` — added portal plan entry under OIC NOTES
- `site/index.html` — added Docsify `beforeEach` frontmatter-strip hook
- `site/participant-portal-plan.md` — new file (implementation plan)
- `.claude/state/session.md` — this file

### worktree `worktree-agent-ad2322b0801fd6d73` (not merged)
- `portal/README.md` — updated admin email (john.sheaf@…)
- `portal/package-lock.json` — npm install delta
- `portal/scripts/seed-firestore.ts` — removed popup auth (uses Test Mode unauth writes), updated email
- `portal/src/components/AccessGate.astro` — full-screen overlay, two sign-in methods, prominent errors, state machine, removed redundant subtitle
- `portal/src/layouts/PortalLayout.astro` — body `data-auth="pending"` initial state
- `portal/src/lib/auth.ts` — popup → redirect, added `sendEmailSignInLink` + `completeEmailSignInIfPresent` + `completeRedirectSignInIfPresent`
- `portal/src/lib/firebase.ts` — `authDomain: 'tnman.web.app'` (was `tnman-2026.firebaseapp.com`)
- `portal/src/styles/global.css` — `.gate-overlay` full-screen rules + state machine + prominent error styling

These should be committed on the worktree branch before merge review.

## Notes on Site State

- **Portal is LIVE at https://tnman.web.app**, fully functional sign-in (both Google redirect and email-link passwordless), seeded admin list, locked-down Firestore rules.
- **Worktree NOT merged to main yet** — user wants to review before merge. After merge, future portal deploys flow from main; until then, portal deploys must be from the worktree.
- **TabulaKit v2 (Astro replacement)** is in the works; this portal build is independent — TabulaKit v2 affects `site/`, not `portal/`.
- **`site/index.html` carries a NOTE block** warning future sessions not to add `relativePath: true` (causes navigation route corruption). The frontmatter-strip hook (`beforeEach`) was added 1 MAY.
- **All cross-directory `.md` links use absolute paths** starting with `/`. Newly authored markdown should follow this pattern.
- **Source archive** under `site/docs/source/` holds authoritative copies (signed PDFs, DOCX, PPTX, EML).
- **Sheaf's xlsx return pattern** — when LTC Sheaf returns a Mission Roster or similar workbook, parse `xl/styles.xml` for `<strike/>` font indices before declaring "no content change" (he marks personnel as not-attending by striking rows).
- **Portal auth setup is non-trivial** — multi-site Firebase + `authDomain` set to portal's own domain + OAuth redirect URI registered in Google Cloud Console. Future sessions touching auth should know all three knobs.
