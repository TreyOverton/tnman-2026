# Session State

**Generated:** 2026-04-27
**Site:** TNMAN 2026 — 3rd Regiment's mission planner for the May 2026 TNMAN homeland defense exercise
**Theme:** #f97316 (orange) / #3bc0cb (teal)
**Auth:** domain-restricted (tnstateguard.org)
**Deploy:** **Firebase only** (tnman-2026.web.app). `.github/workflows/deploy.yml` and `netlify.toml` are on disk but not used — auth redirect URIs are whitelisted only for the Firebase domain. Do not re-activate GitHub Pages or Netlify.
**Font size:** 16px
**Deploy command:** `npx firebase-tools deploy --only hosting --project tnman-2026`. Push-to-main does NOT auto-deploy. Run `firebase login --reauth` if creds are stale — user has cached Heatherstone creds, state guard account (`aaron.overton@tnstateguard.org`) is the one that can deploy.

## Site Structure

- **OPERATIONS** — Mission Overview · Timeline & Deadlines
- **PERSONNEL** — Mission Roster (28 organic + 3 medics = 31 tracked) · Chain of Command · Key Contacts
- **PLANNING** — Task Organization · Risk Assessment (Moderate residual)
- **DOCUMENTS** — Document Index · SA Brief · DIV WARNO · DIV OPORD · FRAGORD 3 (JFHQ-TN) · RGT WARNO · RGT OPORD · FRAGO 26-05-01.1 · OPORD Encl A · RFF/RFS · Operational/NAI Graphics · Orders Back-Brief · Execution Matrix · **ICP Layout & Workflow (new 26 APR)** · IDT OPORD (26-04) · DD 2977 · CG's Intent
- **REFERENCE** — Reference Index · FPM Slides · Cyber WG Slides · HD WG Slide · placeholders (Participant Guide · Tech · RFI · Precedent)
- **OIC NOTES** — SITREP — 25 APR IDT · AAR Notes (25 APR submitted 251500RAPR26) · Comms Log · Planning Gaps · Orders Consistency Review · ICP Org Reference · JAG Pre-Brief

## Key Context

- **User:** 1LT Aaron Overton, ASST S3, 3 RGT TNSG. Working under LTC Sheaf (S3). Builds the planning products LTC Sheaf reviews and routes.
- **User's TNMAN role:** Not yet publicly designated; LTC Sheaf has a proposed role. **Keep this out of any written artifact** until user discloses it.
- **Always include rank** when naming military personnel (every mention, not just first).
- **Exercise dates:** 13-17 MAY 26 for DIV; 3 RGT main execution 13-15 MAY. Phase II ENDEX 142131RMAY26 (flexibility into morning of 15 MAY confirmed by LTC Estes 26 APR).
- **Operation name:** "Mt. Carmel Site Defense" per FRAGO 26-05-01.1 (212130RAPR26).
- **OPORD status:** RGT OPORD 26-05-01 final (141600RAPR26). DIV OPORD 26-05 received 17 APR. RGT FRAGO 26-05-01.1 issued 21 APR, distributed ALCON 22 APR. **DIV FRAGO publishing this week (26 APR forward)** — content TBD.
- **Canonical ICP facility name:** Armed Forces Reserve Center, 399 A US-11W Scenic, Mt Carmel, TN 37645. Aliases: "Mt. Carmel Armory" (DIV / TNARNG), "US Army Reserve Center" (RGT), "Kingsport Readiness Center" (CG Intent) — same facility.
- **Perimeter-only** · **Unarmed force** · **Dawn-to-dusk / RON-at-home** for TNSG (CG standing). Narrow 50-PAX RON carve-out at Mt Carmel Armory per JFHQ-TN FRAGORD 3 is for 1 RGT OPFOR / TNARNG, not TNSG-wide.
- **HAAP POC (Mr. Tony Armstrong) 20 APR guidance:** sUAS detection is primary objective; SECFOR physical footprint is outside fence, parallel to southernmost US 11W only; interior N/S/W patrols + screens **notional only**; OPFOR non-confrontational, main-gate only.

## Current Posture (as of 27 APR — post 26 APR DIV CG TNMAN-wide update)

### Personnel
- **Roster:** 28 organic (HHC 10, 2 BN 3, 3 BN 8, 4 BN 7). MRC: 14/8/3/3.
- **Estes' DIV-tracked count: 31 PAX** = 28 organic + 3 attached 61st MED Co medics.
- **2 BN narrowed** to CO / XO / HQ Co 1SG only.
- **No organic JAG** — routes via COL Williams (PMO).
- **Part 107 pilots:** **CPT Widner only** organic. RFF ask is load-bearing.
- **MRC-3 (3):** MAJ Crosby, SGT Malone, SSG Miles. BG Cox concurrence required.
- **MRC-4 (3, all 4 BN):** MAJ Bennett, 2LT Neisler, WO1 Hendon. Verify NLT 30 APR.

### TPFDD (23 APR split)
- **14 MAY peak:** 54 Actual on-ground · 70 Notional (tabletop) · 124 Total. Sizing (medical / hydration / bathroom / chow / transport) = 54.

### 14 MAY Inject Sequence (DIV-issued via BG Cox 25 APR AAR — **authoritative**)
- **0600** — 31 SM transit / staging
- **0900** — Holston EMA arrives at ICP
- **1000** — SECFOR patrols **4 notional + 1 live** (1 physical team on US 11W; 4 tabletop in ICP)
- **1200** — ICP established at Mt Carmel AFRC; waterway breach inject (notional)
- **1300** — OPFOR main gate scenarios (HA-driven)
- **1400-1430** — UAS attack / detection / response
- **1600** — ICP IOC

### Comms (per 26 APR Estes → Hughes)
- 3 RGT stands up HF antenna **13 MAY evening**, sends all day **14 MAY**, possibly into **15 MAY**. HF frequencies pending from LTC Hughes (TNSG HHC G6).
- **Starlink** at the site planned as part of PACE.
- **PERSTATs to Chief Hogan** throughout 14 MAY.

### Task Org Billets (locked 22 APR)
- IC = COL Roark · SECFOR TF CDR = MAJ Crosby · Staging Area Mgr = SFC Bradley · Situation Unit Ldr = 1SG Snow · Resource Unit Ldr = 1LT Fielitz-Scarbrough.
- **Open:** Deputy TF CDR, Safety Officer, Air Ops Branch Chief, PAO, Plans Chief, Sustain Chief.

## Upcoming Deadlines

- **30 APR 26:** S1 Regimental Orders · S6 SOI + Signal Annex · S3 TPFDD · Convoy plans to CDR · DIV Final MSEL Review · DD 2977 routing.
- **02 MAY 26:** CG confirmation brief (tentative 1000R, LTC Estes coordinating) — FRAGO 26-05-01.1 S3 Task 2.
- **06 MAY 26 @ 1500R:** Leader's Recon to Mt Carmel — FRAGO 26-05-01.1 S3 Task 3 (narrowed from 5-7 MAY window per BG Cox 25 APR AAR).
- **13 MAY 26 evening:** HF antenna stand-up at ICP.
- **13-15 MAY 26:** Execution. ENDEX 142131R with flexibility into morning 15 MAY.

## Recent Changes (this stretch — 24-27 APR)

- **`932e857`** — Session state refresh (this commit).
- **`4d97483`** — New page: **ICP Layout & Workflow** (`site/docs/icp-layout.md`) per LTC Sheaf's 26 APR follow-up "I need to start thinking about what the ICP will look like and the work flow of information."
- **`b47e605`** — 26 APR forwarded TNMAN Update incorporated (Sheaf → Estes G6 HF request + Estes DIV-CG status + Cox 25 APR planning AAR with DIV-issued 14 MAY timeline).
- **`b201d22`** + **`7d37d73`** — Print-view polish (headings, stacked tables, AAR observations, dark-background stripping).
- **`1cb7bf7`** — Training-doc title and sidebar tightening.
- **`53515e0`** + **`9b3fe80`** + **`49b60fe`** + **`66c6535`** — 25 APR AAR + Brief finalized and submission stamped 251500RAPR26 (SSG Singh credited; materials non-retention; quality rubric formatting).
- **`a87f006`** + **`6908e19`** — SITREP refresh; 24 APR minor doc refresh (TPFDD typo, RFF wording, NAI distance annotations).
- Earlier: 23 APR TPFDD split + roster strikethroughs; 22 APR FRAGO 26-05-01.1 distribution; 21 APR FRAGO and IDT OPORD; 17-20 APR DIV OPORD receipt and consistency review re-open.

## Uncommitted Work

Clean working tree. Last commit: `932e857`. In sync with origin/main.

## Open Items (Top Priority)

1. **HF frequencies** — pending from LTC Hughes (TNSG HHC G6) per Estes' 26 APR request.
2. **DIV FRAGO this week** — incoming; will likely supersede or update several pending items.
3. **MRC-3 deviation concurrence** from BG Cox.
4. **PHA-currency mechanism** — DIV §4.c.(4) rules out on-site PHAs; BG Cox guidance still needed.
5. **31st MED Co attachment names / ranks** — 3 medics; written tasking still pending. Estes confirming with 61st MedCo.
6. **Air Ops Branch Chief + Part 107 pilot augmentation** — CPT Widner is the only organic pilot.
7. **Safety Officer designation** — required for DD 2977 signature routing.
8. **JAG consultation** with COL Williams (PMO) — RUF + UAS review.
9. **3 MRC-4 verifications** (Bennett / Neisler / Hendon) before 30 APR.
10. **2 / 4 RGT LNO names** — pending.
11. **CG confirmation brief (2 MAY)** — confirm time / format.
12. **ICP Layout & Workflow** — first draft in place; revs after 6 MAY 1500R recon.
13. **Starlink at ICP** — confirm equipment + procurement / tasking path.
14. **Placeholder pages** — Participant Guide, Tech & Platforms, RFI Log, Exercise Precedent.

## Notes on Site State

- **Docsify sidebar alias fix** in `site/index.html` (added 18 APR) prevents sidebar disappearance on nested routes under Firebase's SPA rewrite. If `tabula-update` overwrites index.html in a future session, the alias must be re-added.
- **Source archive** under `site/docs/source/` holds authoritative copies (signed PDFs, DOCX, PPTX, XLSX, EML). Every transcribed page cites its source at the top.
- **DD 2977 DOCX** at `site/docs/source/DD-2977-TNMAN-26.docx` — landscape Funnel-Fury-style worksheet, linked from the top of `site/docs/dd2977.md`.
- **SITREP file naming:** `sitrep-25apr.md` is preserved for AAR value. Future sitreps should be new files (`sitrep-02may.md`, etc.).
- **LTC Estes referenced the planning portal directly to the CG and DIV staff on 26 APR** — they can sign in with TNSG email. Site reach is now visible to the very top of the chain; keep the index pages tidy and the SITREP / Top Open Items current.
- **User TNMAN role:** Still not disclosed in any written artifact. Do not surface it until user explicitly tells you to.
