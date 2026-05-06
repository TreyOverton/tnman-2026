# Session State

**Generated:** 2026-05-04
**Site:** TNMAN 2026 — 3rd Regiment's mission planner for the May 2026 TNMAN homeland defense exercise
**Theme:** #f97316 (orange) / #3bc0cb (teal)
**Auth:** domain-restricted (tnstateguard.org)
**Deploy:** **Firebase, multi-site under `tnman-2026` project**:
  - `planner` target → `site/` → **https://tnman-2026.web.app** (Docsify, the planner site)
  - `portal` target → `portal/dist/` → **https://tnman.web.app** (Astro, the participant portal — live since 1 MAY 26)
  - Both deploy manually; push-to-main does NOT auto-deploy. Auth redirect URIs whitelisted only for Firebase domains.
  - `netlify.toml` and `.github/workflows/deploy.yml` exist on disk (re-added by past `/tabula-update`) but are **not the active deployment path**.
**Font size:** 16px
**Last live commit (planner):** `ad16594` (TabulaKit framework update)
**Portal status:** **MERGED to main** as of commit `21f2b21` (3 MAY 26). The build worktree and `worktree-agent-...` branch (local + remote) were removed 4 MAY after the merge — no longer relevant.

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
- **OIC NOTES** — SITREP 25 APR · AAR Notes · Comms Log · Planning Gaps · Orders Consistency Review · ICP Org Reference · **ICP Gap Analysis (new 3 MAY)** · Participant Portal Plan (Astro)
- **TRAINING: ICS FORMS** — Participant Notes · Trainer Notes · Commander's Brief · AAR

### Portal (https://tnman.web.app — Astro, `portal/`, on main)

Participant-facing field tool, mobile-first, tight nav. Routes:
- `/` (home) · `/guides` · `/guides/[slug]` (33 role pages) · `/guides/glossary` · `/guides/caltopo` · `/guides/common`
- `/log` (214 activity log entry, optional GPS) · `/aar` (single-textarea observation) · `/injects` (active injects only)
- Admin (`/admin/*`, gated by Firestore admins doc) — `/admin/log` + `/admin/log/display` (ICP wall feed) · `/admin/aar` · `/admin/broadcast` · `/admin/injects` · `/admin/injects/[slug]` · `/admin/access`

## Key Context

- **User:** 1LT Aaron Overton, ASST S3, 3 RGT TNSG. Working under LTC John Sheaf (S3, john.sheaf@tnstateguard.org). Deep technical proficiency; builds the planning products and analysis that LTC Sheaf reviews and routes.
- **Always include rank** when naming military personnel (every mention).
- **Firebase deploy:**
  - Planner: `npx firebase-tools deploy --only hosting:planner --project tnman-2026` (or `--only hosting` if firebase.json is single-site — depends on which config is active)
  - Portal: `npx firebase-tools deploy --only hosting:portal --project tnman-2026`
  - Reauth first: `firebase login --reauth` (state-guard account `aaron.overton@tnstateguard.org`)
- **Mt. Carmel Site Defense** — 3 RGT's named operation within DIV TNMAN-26.
- **Canonical ICP facility name:** Armed Forces Reserve Center, 399 A US-11W Scenic, Mt Carmel, TN 37645.
- **Perimeter-only constraint:** No TNSG personnel enter HAAP premises. ICP outside the perimeter.
- **Unarmed force:** TNSG unarmed by default; no weapons for this mission.
- **Dawn-to-dusk:** CG standing policy; no overnight TNSG presence at the ICP.
- **HEMA integration:** FRAGO 2 S3 Task 5 — BPT integrate Holston Emergency Management Agency NET 140900RMAY26.

## Personnel

- **30 organic PAX** (HHC 11 / 2 BN 3 / 3 BN 9 / 4 BN 7) per LTC Sheaf 29 APR roster. PV1 Elrod removed 30 APR. **SGT Ian Overton restored 3 MAY** to SECFOR foot patrol as RTO (commit `57d4995`).
- **Expected attachments:** 3 medics from 61st MED Co (1 named: MAJ Gampe; 2 of 3 still TBD), 1 PAO rep (DIV; pending LTC Epright), 4 LNOs (2 RGT, 4 RGT, 2 DIV PMO).
- **31 PAX** referenced by DIV (Estes/Cox) = 28 organic + 3 attached medics. Math may now be off after roster updates; sizing tables at the DIV level may still say 31.
- **DIV-tracked TPFDD totals (FRAGO 2 / 30 APR):** 42-50 Estimated Actual / 73-83 Notional / 120-125 Estimated Total. ADVON 11 → 25.

## Upcoming Deadlines

- **06 MAY 26 1500R** — Leader's Recon (Walgreens link-up at 1455R). **Portal tablet demo gate** — leadership gets tablets at the site walkthrough.
- **12 MAY 26 0520R** — BMNT, Phase II execution begins
- **13-15 MAY 26** — Main exercise window (HF antenna up evening 13 MAY; main day 14 MAY; AAR / demob 15 MAY)
- **141300RMAY26** — 3 BN main-gate security test (replaces cancelled OPFOR; civilian attire; ≤2 PAX)
- **142131RMAY26** — Phase II ENDEX NLT

## Active Open Items

1. **PAO representative** — pending DIV PAO assignment via LTC Epright. Last unfilled Command Staff billet.
2. **Incoming LNO names** — 2 RGT (1), 4 RGT (1), DIV (2). 4 RGT candidates floated as MAJ Thomas / MAJ Hamlin (unverified).
3. **61st MED Co attached medics — 2 of 3 names still TBD** (MAJ Gampe is the first named).
4. **MRC-4 / unknown verification** — Bennett, Neisler, Hendon (4 BN MRC-4); Riley, Ferguson (3 BN MRC-unknown); McCroskey (HHC, MRC-4). Per DD-2977 v2 / BG Cox guidance, all of these default to MRC-3 controlled-environment treatment with individual deployment plans (Block 4) rather than blocking on verification.
5. **JAG pre-briefs (3 submitted, 0 responses)** — Command Authority & Mission Sets · Personally-Owned DJI UAS · DSCA & TNSG Authority. Per DIV OPORD, JAG addressee is COL Williams (PMO).
6. **HF frequencies** — formal request from LTC Estes to LTC Hughes (TNSG HHC G6) on 26 APR; awaiting reply-all.
7. **TACN radios** — DIV G6 sending 3 (per FRAGO 2 S6 Task 1); 3 RGT self-trains.
8. **Civilian-support-to-military-operations phrasing** — present in FRAGO 2 S3 Task 5; the DSCA pre-brief asks JAG to clarify.
9. **Portal: inject content authoring** — three slots seeded (`soldier-kia`, `downed-uas`, `scenario-3-tbd`); titles + scenarios stubbed; **playbook content (per-role response guidance) not yet written**. To be authored via `/admin/injects/[slug]` before exercise.
10. **Portal: scenario-3-tbd** — third inject scenario not yet decided. User and LTC Sheaf to choose.
11. **WBGT meter at the ICP** — DD-2977 v2 Heat Risk supplement assumes a Kestrel 5400 (or equivalent). If 3 RGT does not source one before 13 MAY, Safety Officer falls back to NWS hourly Heat Index for ZIP 37660 (already in the supplement as a documented substitute). LTC Hughes (G6) may have one — query.

## Recent Changes

### DD-2977 v2 (1 MAY 26 — BG Cox feedback)

BG Cox replied 1 MAY 26 1551R requesting two adjustments before approval; v2 incorporated and PDF-rendered before suspense:

- **Hazard #4 (SECFOR outdoor duty):** Forecast WBGT for 14 MAY 26 at HAAP (78–83°F, Heat Cat 1–2 White-Green flag) published; full TB MED 507 / FM 7-22 work/rest cycle table; day-of measurement protocol (Kestrel 5400 or NWS Heat Index fallback, hourly readings posted at ICP); action ladder for Heat Cat 3/4/5 escalation. Safety Officer added as implementer.
- **Block 4 (Hazard #10 — Medical readiness):** Restructured as individual deployment plans per SM (no more boilerplate). Per BG Cox: "MRC Deployment Comments vary for each SM and are required to be reviewed and an individual plan made." 9 SMs total: 3 MRC-3 (Crosby, Malone, Miles) + 4 MRC-4 (McCroskey, Bennett, Neisler, Hendon) + 2 unknown (Riley, Ferguson). MRC-4 and unknown defaulted to MRC-3 treatment per BG Cox's "MRC 4s ... most likely will only be approved as MRC 3" guidance. Substitution recommendations flagged for Malone (PFC Human / PV2 Elrod) and Miles (SSG Whalen).
- **PDF:** [`/docs/source/DD-2977-TNMAN-26-1MAY26-v2.pdf`](docs/source/DD-2977-TNMAN-26-1MAY26-v2.pdf) — landscape Letter, ~12 pp, page-numbered footer. Rendered via `npx md-to-pdf` (puppeteer + chromium). DOCX is still v1 (historical); LTC Sheaf to follow with signed version after concurrence.

### Participant portal — built and live at https://tnman.web.app

- **Implementation plan:** `site/participant-portal-plan.md`, 11 sections (followed spirit of mojo's `/opord` + `/prep` skills).
- **Astro 5 portal app** at `portal/` (sibling to `site/`). 33 participant guides + glossary + CalTopo + utility pages (214 log, AAR, injects, broadcasts, admin/*). 48 pages total at build.
- **Multi-site Firebase config** in `firebase.json` — planner config preserved exactly; portal target uses cache headers (`_astro/**` immutable).
- **Firestore enabled** on `tnman-2026` (one-time Test Mode → seeded → locked rules deployed). nam5 region.
- **Hosting site `tnman` created** via `firebase hosting:sites:create tnman --project tnman-2026`. Targets in `.firebaserc`: `planner→tnman-2026`, `portal→tnman`.
- **Seed script** at `portal/scripts/seed-firestore.ts` — runs WITHOUT auth (Test Mode allows it). Wrote `access/admins`, `access/allowedEmails`, three inject docs.
- **Auth flow** — `signInWithRedirect` for both Google and email-link (passwordless). Email-link enabled in Firebase Auth (Email/Password provider; only the passwordless sub-toggle ON).
- **Cross-origin auth fix** — `authDomain` set to `tnman.web.app` (not `tnman-2026.firebaseapp.com`). Required adding `https://tnman.web.app/__/auth/handler` to OAuth client Authorized redirect URIs **in Google Cloud Console** (project `tnman-2026`, OAuth 2.0 Client ID starting `1072049931332-a6a10n2gb5kp6t9om7hnmbdq5s70cbm0`). Without this, Google rejects with "Access blocked: This app's request is invalid."
- **AccessGate UI** — full-screen overlay (no longer a small card with content visible behind), `body[data-auth="pending|gated|allowed"]` state machine. Errors render prominently in red.
- **Inject playbook security** — playbook lives in subcollection `injects/{slug}/private/playbook`. Firestore rules deny read unless parent `active==true` OR caller is admin. Participants cannot see playbook content via dev tools before activation.
- **Admin allowlist seeded** — `aaron.overton@tnstateguard.org` + `john.sheaf@tnstateguard.org`.
- **Worktree merged to main** as `21f2b21` (3 MAY); worktree directory + branch (local + remote) cleaned up 4 MAY.

### Other planner changes

- **ICP Gap Analysis** added under OIC NOTES (`site/icp-gap-analysis.md`, commit `57d4995`).
- **SGT Ian Overton restored** to SECFOR foot patrol as RTO (same commit).
- **Three TabulaKit upstream updates** (`d925802`, `b50d4d2`, `ad16594`) — host-bridge for VS Code preview panel (postMessage protocol for back/forward/reload), mermaid theming refresh, and the latest framework iteration.
- **`breaks: true` shipped upstream** in PR #11 (squash-merged into `heatherstoneio/tabulakit:main` as `9775467`). All three of the previously-local `index.html` mods (sidebar alias, binary-link download hook, breaks:true) are now upstream — `/tabula-update` runs are no-ops for them.
- **Docsify frontmatter strip** — `index.html` `beforeEach` hook strips a leading YAML `---...---` block from any page before render. Future planning docs with frontmatter render cleanly.

## Uncommitted Work

- `.tabulakit/config.json` — modified (likely localized state from a recent `/tabula-update` run; safe to commit or leave). No other changes pending.

## Notes on Site State

- **Portal is LIVE at https://tnman.web.app**, fully functional sign-in (both Google redirect and email-link passwordless), seeded admin list, locked-down Firestore rules. Now lives on `main`.
- **TabulaKit v2 (Astro replacement)** is in the works per user 30 APR. Migration will likely require reauthoring config and may obsolete the link-conversion approach. See memory `project_tabulakit_v2.md`. Unrelated to the participant portal — this portal is its own app.
- **`site/index.html` carries a NOTE block** warning future sessions not to add `relativePath: true` (causes navigation route corruption). The frontmatter-strip hook (`beforeEach`) was added 1 MAY.
- **All cross-directory `.md` links use absolute paths** starting with `/`. Newly authored markdown should follow this pattern.
- **Source archive** under `site/docs/source/` holds authoritative copies (signed PDFs, DOCX, PPTX, EML). Transcribed markdown pages cite their source files at the top.
- **Sheaf's xlsx return pattern** — when LTC Sheaf returns a Mission Roster or similar workbook, parse `xl/styles.xml` for `<strike/>` font indices before declaring "no content change" (he marks personnel as not-attending by striking rows).
- **Portal auth setup is non-trivial** — multi-site Firebase + `authDomain` set to portal's own domain + OAuth redirect URI registered in Google Cloud Console. Future sessions touching auth should know all three knobs.
- **DD-2977 PDF rendering** uses `npx md-to-pdf` with `/tmp/dd2977-pdf/config.js` (landscape, table-friendly CSS, page footer). First run downloads chromium; subsequent runs are fast. Pattern reusable for any markdown→PDF need.
