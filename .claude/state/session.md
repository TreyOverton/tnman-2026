# Session State

**Generated:** 2026-04-30
**Site:** TNMAN 2026 — 3rd Regiment's mission planner for the May 2026 TNMAN homeland defense exercise
**Theme:** #f97316 (orange) / #3bc0cb (teal)
**Auth:** domain-restricted (tnstateguard.org)
**Deploy:** **Firebase only** (tnman-2026.web.app). `netlify.toml` and `.github/workflows/deploy.yml` exist on disk (re-added by an earlier `/tabula-update`) but are **not the active deployment path**. Live deploys are manual via `npx firebase-tools deploy --only hosting`. Per session-long user direction, the auth redirect URIs are whitelisted only for the Firebase domain.
**Font size:** 16px
**Last live commit:** `46452fb` (relative-link conversion fix)

## Site Structure

- **OPERATIONS** — Mission Overview · Timeline & Deadlines · SA Brief · NAI Graphics · Execution Matrix · ICP Layout & Workflow
- **PERSONNEL** — Mission Roster (30 organic) · Chain of Command · ICS-203 Assignment List · Key Contacts
- **PLANNING** — Task Organization · Risk Assessment · DD Form 2977
- **JAG BRIEFS** — Command Authority & Mission Sets · Personally-Owned DJI UAS · DSCA & TNSG Authority · JAG UAS Memo (Harris 18 APR)
- **ORDERS** — CG's Intent · DIV WARNO · RGT WARNO · DIV OPORD · RGT OPORD · OPORD Encl A · IDT OPORD 26-04 · JFHQ-TN FRAGORD 3 · RGT FRAGO 26-05-01.1 · **RGT FRAGO 26-05-01.2 (new 30 APR)** · RGT Orders 26-04-601-3
- **SUPPORTING DOCUMENTS** — Document Index · RFF / RFS · TNMAN Comms Plan (Annex H) · Orders Back-Brief
- **PARTICIPANT GUIDES** — Overview · Common Expectations · Glossary · CalTopo Guide (~30 role-specific guides under `/site/participant-guides/`)
- **REFERENCE** — Reference Index · FPM Slides · Cyber WG · HD WG · Volunteer Pilots (SDFF) · Tech & Platforms · RFI Log · Exercise Precedent
- **OIC NOTES** — SITREP 25 APR · AAR Notes · Comms Log · Planning Gaps · Orders Consistency Review · ICP Org Reference
- **TRAINING: ICS FORMS** — Participant Notes · Trainer Notes · Commander's Brief · AAR

## Key Context

- **User:** 1LT Aaron Overton, ASST S3, 3 RGT TNSG. Working under LTC Sheaf (S3). Deep technical proficiency; builds the planning products and analysis that LTC Sheaf reviews and routes.
- **Always include rank** when naming military personnel (every mention).
- **Firebase deploy:** `npx firebase-tools deploy --only hosting`. Run `firebase login` if a fresh session has no auth — the `aaron.overton@tnstateguard.org` account is the one with deploy permission for `tnman-2026`. Push-to-main does NOT auto-deploy.
- **Mt. Carmel Site Defense** — 3 RGT's named operation within DIV TNMAN-26.
- **Canonical ICP facility name:** Armed Forces Reserve Center, 399 A US-11W Scenic, Mt Carmel, TN 37645. Aliases across the orders ("Mt. Carmel Armory" / "US Army Reserve Center, Mt Carmel" / "Kingsport Readiness Center") all refer to the same facility.
- **Perimeter-only constraint:** No TNSG personnel enter HAAP premises. ICP outside the perimeter.
- **Unarmed force:** TNSG unarmed by default; no weapons for this mission.
- **Dawn-to-dusk:** CG standing policy; no overnight TNSG presence at the ICP. Some TNARNG/278th ACR personnel RON authorized at the Armory per JFHQ-TN FRAGORD 3.
- **HEMA integration:** FRAGO 2 S3 Task 5 — BPT integrate Holston Emergency Management Agency NET 140900RMAY26.

## Personnel

- **30 organic PAX** (HHC 11 / 2 BN 3 / 3 BN 9 / 4 BN 7) per Sheaf 29 APR roster. PV1 Elrod removed 30 APR (not sworn in / no IET / no PHA → DIV OPORD §3.j.(11).(d)).
- **Expected attachments:** 3 medics from 61st MED Co (1 named: MAJ Gampe; 2 of 3 still TBD), 1 PAO rep (DIV; pending LTC Epright), 4 LNOs (2 RGT, 4 RGT, 2 DIV PMO).
- **31 PAX** referenced by DIV (Estes/Cox) = 28 organic + 3 attached medics. Math now slightly off after 30 APR roster → 30 organic; sizing tables at the DIV level may still say 31.
- **DIV-tracked TPFDD totals (FRAGO 2 / 30 APR):** 42-50 Estimated Actual / 73-83 Notional / 120-125 Estimated Total (was flat 54/70/124 prior). ADVON 11 → 25 with pilots/medics relocated. §107 sUAS lane = 5 TNSG + 5 IA pilots = 10.

## Upcoming Deadlines

- **02 MAY 26** — CG confirmation brief (time TBD; may be 1000R per LTC Estes); coordinated by LTC Estes
- **02 MAY 26** — Target NLT for FRAGO 26-05-01.2 distribution (already issued 30 APR; just pending battalion ALCON drop)
- **06 MAY 26 1500R** — Leader's Recon (Walgreens link-up at 1455R per 30 APR ticker)
- **12 MAY 26 0520R** — BMNT, Phase II execution begins (some assembly NLT 13 MAY 0519R BMNT)
- **13-15 MAY 26** — Main exercise window (HF antenna up evening 13 MAY; main day 14 MAY; AAR / demob 15 MAY)
- **141300RMAY26** — 3 BN main-gate security test (replaces cancelled OPFOR; civilian attire; ≤2 PAX)
- **142131RMAY26** — Phase II ENDEX NLT
- **DIV FRAGO** — was expected "this week" per Estes 26 APR; verify on next pull whether it has issued

## Active Open Items

1. **PAO representative** — pending DIV PAO assignment via LTC Epright. Last unfilled Command Staff billet.
2. **Incoming LNO names** — 2 RGT (1), 4 RGT (1), DIV (2). 4 RGT candidates floated as MAJ Thomas / MAJ Hamlin (unverified).
3. **61st MED Co attached medics — 2 of 3 names still TBD** (MAJ Gampe is the first named).
4. **MRC-4 / unknown verification** — Bennett, Neisler, Hendon (4 BN MRC-4); Riley, Ferguson (3 BN MRC-unknown after 29 APR roster blanks); McCroskey (HHC, restored 29 APR).
5. **JAG pre-briefs (3 submitted, 0 responses)** — Command Authority & Mission Sets · Personally-Owned DJI UAS · DSCA & TNSG Authority. Per DIV OPORD, JAG addressee is COL Williams (PMO).
6. **HF frequencies** — formal request from LTC Estes to LTC Hughes (TNSG HHC G6) on 26 APR; awaiting reply-all from G6.
7. **TACN radios** — DIV G6 sending 3 (per FRAGO 2 S6 Task 1); 3 RGT self-trains (no DIV team provided).
8. **Civilian-support-to-military-operations phrasing** — present in FRAGO 2 S3 Task 5; the [DSCA pre-brief](site/docs/jag-brief-dsca.md) asks JAG to clarify; FRAGO 2 retains the phrase pending JAG response.

## Recent Changes (30 APR session)

- **FRAGO 26-05-01.2 issued + processed** — COL Roark approved without comment. New page at `site/docs/frago-26-05-01-2.md`. 7 enclosures + Annex H. OPFOR cancelled by DIV HQ; 3 BN's main-gate test fills the role. RFF/RFS now carries DIV-provisioning Status column. TPFDD refined to hour-bands.
- **DSCA & TNSG Authority JAG pre-brief added** (3rd in the JAG section). Asks JAG to correct the "civilian support to military operations" framing.
- **`breaks: true` shipped upstream** in PR #11 (squash-merged into `heatherstoneio/tabulakit:main` as `9775467`). All three of the previously-local `index.html` mods (sidebar alias, binary-link download hook, breaks:true) are now upstream. Future `/tabula-update` runs should be no-ops for them.
- **Cascading 404 saga** — diagnosed and fixed on 30 APR (commits `3e2941d` → `6788598` → `46452fb`):
  - Symptom: Document Index `.md` links 404; subsequent navigations corrupted route state.
  - Root causes: (a) `c0cd463` collateral revert had stripped the alias and download-hook from the local `index.html`; (b) `relativePath: true` works for the first hop but Docsify's route handling accumulates path segments on subsequent navigations.
  - Fix: restore alias + download hook (already upstream); do NOT use `relativePath: true`; convert all 583 cross-directory `.md` links across 59 files to absolute paths so they don't need `relativePath:true`. Documented in `index.html` as a NOTE block so it doesn't get re-added.

## Uncommitted Work

Clean working tree on `main` at `46452fb`. Pull tomorrow morning brings everything live.

## Notes on Site State

- **TabulaKit v2 (Astro replacement) is in the works** per user 30 APR. No timeline. Until v2 lands, this site continues on Docsify v1 and the local mods stay relevant. When v2 arrives the migration will likely require reauthoring config and may obsolete the link-conversion approach. See memory `project_tabulakit_v2.md`.
- **`site/index.html` local mods** — three of them (sidebar alias, binary-link download hook, `markdown: { breaks: true }`) are also upstream now. The `index.html` carries a NOTE block explicitly warning future sessions NOT to add `relativePath: true` (it causes navigation route corruption).
- **All cross-directory `.md` links use absolute paths** starting with `/`. Newly authored markdown should follow that pattern — don't introduce relative `.md` links from nested directories or the next session will re-walk this rake. Same-directory links can be relative or absolute; absolute is preferred for consistency.
- **Source archive** under `site/docs/source/` holds authoritative copies (signed PDFs, DOCX, PPTX, EML). Transcribed markdown pages cite their source files at the top.
- **Sheaf's xlsx return pattern** (per `feedback_xlsx_strikethrough.md` memory): when LTC Sheaf returns a Mission Roster or similar workbook, **always parse `xl/styles.xml` for `<strike/>` font indices** before declaring "no content change" — he marks personnel as not-attending by striking rows in Excel rather than deleting them.
