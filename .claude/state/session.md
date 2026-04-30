# Session State

**Generated:** 2026-04-30
**Site:** TNMAN 2026 — 3rd Regiment's mission planner for the May 2026 TNMAN homeland defense exercise
**Theme:** #f97316 (orange) / #3bc0cb (teal)
**Auth:** domain-restricted (tnstateguard.org)
**Deploy:** **Firebase only** (tnman-2026.web.app). `.github/workflows/deploy.yml` and `netlify.toml` are on disk but not used — auth redirect URIs are whitelisted only for the Firebase domain.
**Font size:** 16px
**Deploy command:** `npx firebase-tools deploy --only hosting --project tnman-2026`. Push-to-main does NOT auto-deploy. Run `firebase login --reauth` if creds are stale — user has cached Heatherstone creds, state guard account (`aaron.overton@tnstateguard.org`) is the one that can deploy.

## Site Structure (sidebar 30 APR)

- **OPERATIONS** — Mission Overview · Timeline & Deadlines · SA Brief · Operational/NAI Graphics · Execution Matrix · ICP Layout & Workflow
- **PERSONNEL** — Mission Roster (30 organic + 3 medics + Acosta SDFF = ~34 PAX target) · Chain of Command · **ICS-203 Assignment List** · Key Contacts
- **PLANNING** — Task Organization · Risk Assessment (Moderate residual) · DD Form 2977
- **JAG BRIEFS** (between Planning and Orders) — Command Authority & Mission Sets · Personally-Owned DJI UAS · JAG UAS Memo (Harris, 18 APR)
- **ORDERS** — CG's Intent · DIV WARNO · RGT WARNO · DIV OPORD · RGT OPORD · OPORD Encl A · RGT OPORD 26-04 (IDT) · JFHQ-TN FRAGORD 3 · RGT FRAGO 26-05-01.1 · **RGT Orders 26-04-601-3** (S1 personnel orders, signed COL Roark 29 APR)
- **SUPPORTING DOCUMENTS** — Document Index · RFF/RFS · **TNMAN Comms Plan (Annex H)** · Orders Back-Brief
- **PARTICIPANT GUIDES** (new section between Supporting Docs and Reference) — Overview · Common Expectations · **Glossary / Abbreviations** · CalTopo Guide. **All 29 role pages drafted on disk** but reachable via Overview index only (sidebar kept clean). Sample/draft/coming labels stripped.
- **REFERENCE** — Reference Index · FPM Slides · Cyber WG Slides · HD WG Slide · Volunteer Pilots (SDFF) · placeholders (Tech · RFI · Precedent)
- **OIC NOTES** — SITREP — 25 APR IDT · AAR Notes · Comms Log · Planning Gaps · Orders Consistency Review · ICP Org Reference
- **TRAINING: ICS FORMS** — Participant / Trainer Notes · Commander's Brief · AAR

## Key Context

- **User:** 1LT Aaron Overton, ASST S3, 3 RGT TNSG. Working under LTC Sheaf (S3). Builds the planning products LTC Sheaf reviews and routes. Per [ICS-203](site/docs/ics-203.md): **Planning Section Chief** for the exercise.
- **User TNMAN role now public:** Planning Section Chief — visible on the ICS-203 and Task Organization pages. (Earlier guidance to suppress role in artifacts is now obsolete; ICS-203 is approved and published.)
- **Always include rank** when naming military personnel (every mention, not just first).
- **Exercise dates:** 13-17 MAY 26 for DIV; 3 RGT main execution 13-15 MAY. Phase II ENDEX 142131RMAY26 (flexibility into morning of 15 MAY confirmed by LTC Estes 26 APR).
- **Operation name:** "Mt. Carmel Site Defense" per FRAGO 26-05-01.1 (212130RAPR26).
- **Order chain:** RGT OPORD 26-05-01 final (141600RAPR26). DIV OPORD 26-05 received 17 APR. **RGT FRAGO 26-05-01.1** issued 21 APR. **FRAGO 26-05-01.2 in draft** — target NLT Sat 2 MAY; will incorporate the [ICS-203](site/docs/ics-203.md) and likely reconcile cosmetic location-name items. **DIV FRAGO** also in flight per Estes 26 APR.
- **Canonical ICP facility name:** Armed Forces Reserve Center, 399 A US-11W Scenic, Mt Carmel, TN 37645. Aliases: "Mt. Carmel Armory" / "US Army Reserve Center" / "Kingsport Readiness Center" — same facility.
- **Perimeter-only** · **Unarmed force** · **Dawn-to-dusk / RON-at-home** for TNSG (CG standing). Narrow 50-PAX RON carve-out at Mt Carmel Armory per JFHQ-TN FRAGORD 3 is for 1 RGT OPFOR / TNARNG, not TNSG-wide.
- **HAAP POC (Mr. Tony Armstrong) 20 APR guidance:** sUAS detection is primary objective; SECFOR physical footprint is outside fence, parallel to southernmost US 11W only; interior N/S/W patrols + screens **notional only**; OPFOR non-confrontational, main-gate only.

## Current Posture (as of 30 APR)

### Personnel — 30 organic (was 31 on 29 APR; PV1 Elrod removed 30 APR — no IET / no PHA / not sworn in)
- **HHC 11** (5 MRC-1 / 5 MRC-2 / 1 MRC-4 — McCroskey)
- **2 BN 3** (Borrilez · Sobel · Collins only)
- **3 BN 9** (4 MRC-1 / 1 MRC-2 / 2 MRC-3 / 2 unknown — Riley, Ferguson)
- **4 BN 7** (2 MRC-1 / 1 MRC-2 / 1 MRC-3 / 3 MRC-4)
- **+3 attached medics** from 61st MED Co (1 named: **MAJ Markus F. Gampe**)
- **+SFC Acosta** (TNSG IRR / SDFF) as Pilot 3 / SDFF Agency Rep — on the recon team and on the ICS-203
- **Working on-the-ground target: ~34 PAX**

### ICS-203 (COL Roark approved 29-30 APR; FRAGO 26-05-01.2 forthcoming)
- IC = COL Roark · Deputy IC = LTC Smith · Safety = SFC Sturgill · RCSM = CSM Seals · Chaplain = MAJ Bennett
- Ops Chief = LTC Sheaf · Ops Deputy = 1SG Collins · Asst Ops = SGT Malone (MRC-3 single-day)
- Staging Area Mgr = MAJ Rookard · SECFOR Branch Dir = MAJ Crosby · SECFOR Deputy = SFC Ferguson · Screen Div = 2LT Garrison
- **Air Ops Branch Director = CPT Borrilez** (was open; now filled by 2 BN CO dual-hat)
- Pilots: CPT Widner (1) · 1LT Riley (2) · SFC Acosta (3, SDFF)
- Planning Chief = 1LT Overton · Planning Deputy = 2LT Sobel · RUL = 1LT Fielitz-Scarbrough · SITL = 1SG Snow · Documentation = CPT McCroskey · Tech Spec: SSG Miles + WO1 Hendon
- Logistics Chief = CPT Haddix · Logistics Deputy = SFC Bradley · Service Branch = 2LT Neisler · Comms Unit = CSM Rutherford / SSG Singh · Medical = MAJ Gampe + 2 TBD
- **Screen patrol math:** 3 PAX physical (Whalen squad-leading; Human; PV2 Charles Elrod) — 2 short of a 5-man squad. "One almost-actual / two notional" framing still holds.
- **Open billets:** PIO (DIV PAO via LTC Epright); incoming LNOs from 2 RGT (1) / 4 RGT (1, possibly MAJ Thomas / MAJ Hamlin per 28 APR comms meeting) / DIV (2)

### Comms (per Annex H + 28 APR meeting + 27 APR Wemyss/Estes)
- HF Net via SHARES; **3 RGT call sign AAN4ZR**; HHC AAN4ZX, 3 BN AAN4AB, 2 BN AAN4AH
- A4U Net at **1300-1330 CST** on 14 MAY and 15 MAY (NCS = AAN4YR at TNG JOC)
- Frequencies (DELTA 5.7785 MHz USB / ECHO 9.295 MHz USB) **placeholders pending TNG confirmation**
- **VHF: TNSG04 = Mt Carmel Site Defense channel; 3 RGT call sign Buccaneer**
- **TACN:** ~3 radios for 3 RGT; G6 has 10 + 10 requested; CW4 Simpson oversees field employment
- **WINLINK formally in PACE** as Alternate; CW2 Roach (2 RGT 51st SIG) owns the comms plan
- **3 RGT stands up HF antenna 13 MAY evening**; transmits all day 14 MAY

### TPFDD (23 APR split, still authoritative)
- **14 MAY peak:** 54 Actual on-ground · 70 Notional · 124 Total

## Upcoming Deadlines

- **30 APR 26:** ~~S1 Regimental Orders~~ **MET 29 APR** (Orders 26-04-601-3 issued, signed COL Roark) · S6 SOI + Signal Annex (Annex H mostly drafted) · S3 TPFDD · Convoy plans to CDR · DIV Final MSEL Review · DD 2977 routing.
- **NLT Sat 02 MAY 26:** **FRAGO 26-05-01.2** publication (LTC Sheaf drafting) — incorporates ICS-203.
- **02 MAY 26:** CG confirmation brief (tentative 1000R, LTC Estes coordinating) — FRAGO 26-05-01.1 S3 Task 2.
- **06 MAY 26 @ 1455R:** **Leader's Recon — Walgreens link-up** (4500 W Stone Dr, Kingsport, TN). 7-PAX team locked: Roark, Estes, Seals, Sheaf, Crosby, Overton, Acosta.
- **06 MAY 26 @ 1500R:** Recon at HAAP Main Gate.
- **13 MAY 26 evening:** HF antenna stand-up at ICP.
- **13-15 MAY 26:** Execution. ENDEX 142131R with flexibility into morning 15 MAY.

## Recent Changes (last 8 commits)

- **`8070792`** — Fix participant-guide sibling links (drop leading `/` to keep Docsify hash routing intact). Resolved the 404-after-first-click bug.
- **`c0cd463`** — Revert Docsify `relativePath: true` / alias config (it broke navigation site-wide).
- **`b917bca`** — First (failed) routing fix attempt + add Glossary page.
- **`ba2f949`** — Drafted all 27 remaining participant-guide role pages (Command Staff 6, Operations 10, Planning 5, Logistics 5, SDFF Rep 1).
- **`98ea171`** — Participant Guides scaffold (Overview, Common, CalTopo, IC sample, SITL sample) + sidebar restructure (Orders / Supporting Documents split, JAG Briefs section, pages relocated). PV1 Elrod removed from roster.
- **`2322f94`** — ICS-203 page (COL Roark approved 29 APR) + RGT Orders 26-04-601-3 page.
- **`68f46f6`** — 27-29 APR drop processed (comms plan, JAG briefs split, 31 PAX roster).
- **`e33d3b7`** — Earlier session-state refresh.

## Uncommitted Work

Clean working tree. Last commit: `8070792`. In sync with origin/main and live on Firebase.

## Open Items (Top Priority)

1. **FRAGO 26-05-01.2 publish** — LTC Sheaf drafting, NLT 2 MAY. Incorporates ICS-203 + cosmetic location-name fix.
2. **HF frequencies** — DELTA / ECHO are placeholders; pending TNG confirmation per CW2 Roach.
3. **DIV FRAGO** — incoming, will likely supersede or update several pending items.
4. **MRC-3 deviation concurrence** from BG Cox (Crosby, Malone, Miles).
5. **PHA-currency mechanism** — DIV §4.c.(4) rules out on-site PHAs; pre-execution gate.
6. **Other 2 of 3 medic names** (61st MED Co attachment) — MAJ Gampe is the first named.
7. **MRC verifications** before execution: McCroskey (HHC, MRC-4 restored 29 APR), Bennett / Neisler / Hendon (4 BN, MRC-4); Riley / Ferguson (3 BN, MRC unknown).
8. **2 / 4 RGT LNO names** — pending; 4 RGT possibly MAJ Thomas / MAJ Hamlin (unverified).
9. **PIO assignment** — pending DIV PAO via LTC Epright. Last open Command Staff billet.
10. **JAG responses** — both pre-briefs submitted (Command Authority + DJI Personal Use); no responses yet from TNSG JAG.
11. **CG confirmation brief (2 MAY)** — confirm time / format.
12. **Web portal for ICS-214 / AAR notes** — 1LT Overton's project, in development. Hardcopy fallback planned.
13. **Participant Guides review pass** — LTC Sheaf + 1LT Overton to review all 29 role pages before publication.
14. **Starlink at ICP** — confirm equipment + procurement / tasking path.
15. **Placeholder pages** — Tech & Platforms · RFI Log · Exercise Precedent.

## Notes on Site State

- **Docsify routing:** With **default config** (no `relativePath`, no alias), sibling links inside subdirectories must use **path-from-root without leading `/`** — e.g., `(participant-guides/ic.md)` from `participant-guides/README.md`. **Do NOT** use leading `/` (causes full page navigation, scrambles SPA history) and do NOT add `relativePath: true` (it breaks sidebar navigation when on subdir pages). The 8070792 commit codifies this. Cross-directory links use `..` (e.g., `../docs/X.md`).
- **Participant Guides folder layout:** all 32 pages live at `site/participant-guides/*.md` (Overview/README · Common · Glossary · CalTopo · 29 role pages). Sidebar keeps it clean (only the 4 top-level entries); Overview is the index for role pages. **Sample / coming / draft labels are NOT used** — the user knows everything is draft until reviewed.
- **Source archive** under `site/docs/source/` — authoritative copies (signed PDFs, DOCX, PPTX, XLSX, EML). Every transcribed page cites its source at the top.
- **DD 2977 DOCX** at `site/docs/source/DD-2977-TNMAN-26.docx`.
- **SITREP file naming:** `sitrep-25apr.md` is preserved for AAR value. Future sitreps should be new files (`sitrep-02may.md`, etc.).
- **LTC Estes referenced the planning portal directly to the CG and DIV staff on 26 APR** — they can sign in with TNSG email. Site reach is now visible to the very top of the chain.
- **VS Code preview panel** is the TabulaKit extension's own preview (user is the extension author). It currently has URL bar / refresh / zoom / start-server but no back/forward buttons. Browser back works fine in real browsers.
