# Session State

**Generated:** 2026-04-24
**Site:** TNMAN 2026 — 3rd Regiment's mission planner for the May 2026 TNMAN homeland defense exercise
**Theme:** #f97316 (orange) / #3bc0cb (teal)
**Auth:** domain-restricted (tnstateguard.org)
**Deploy:** **Firebase only** (tnman-2026.web.app). `.github/workflows/deploy.yml` and `netlify.toml` are on disk but not used — auth redirect URIs are whitelisted only for the Firebase domain. Do not re-activate GitHub Pages or Netlify.
**Font size:** 16px
**Deploy command:** `npx firebase-tools deploy --only hosting --project tnman-2026`. Push-to-main does NOT auto-deploy anything. Run `firebase login --reauth` if creds are stale — user has cached Heatherstone creds, state guard account (`aaron.overton@tnstateguard.org`) is the one that can deploy.

## Site Structure

- **OPERATIONS** — Mission Overview · Timeline & Deadlines
- **PERSONNEL** — Mission Roster (28 PAX) · Chain of Command · Key Contacts
- **PLANNING** — Task Organization · Risk Assessment (Moderate residual)
- **DOCUMENTS** — Document Index · SA Brief · DIV WARNO · DIV OPORD · **FRAGORD 3 (JFHQ-TN)** · RGT WARNO · RGT OPORD · **FRAGO 26-05-01.1** · OPORD Encl A · RFF/RFS · Operational/NAI Graphics · Orders Back-Brief · Execution Matrix · IDT OPORD (26-04) · DD 2977 · CG's Intent
- **REFERENCE** — Reference Index · FPM Slides · Cyber WG Slides · HD WG Slide · placeholders (Participant Guide · Tech · RFI · Precedent)
- **OIC NOTES** — **SITREP — 25 APR IDT** · AAR Notes · Comms Log · Planning Gaps · Orders Consistency Review · ICP Org Reference · JAG Pre-Brief

## Key Context

- **User:** 1LT Aaron Overton, ASST S3, 3 RGT TNSG. Working under LTC Sheaf (S3). Builds the planning products LTC Sheaf reviews and routes.
- **User's TNMAN role:** Not yet designated; LTC Sheaf has a proposed role he needs to get approved. Keep this out of any written artifact until confirmed.
- **Always include rank** when naming military personnel (every mention, not just first).
- **Exercise dates:** 13-17 MAY 26 for DIV; 3 RGT main execution 13-15 MAY. Phase II ENDEX 142131RMAY26.
- **Operation name:** "Mt. Carmel Site Defense" per FRAGO 26-05-01.1 (212130RAPR26).
- **OPORD status:** RGT OPORD 26-05-01 final (141600RAPR26). DIV OPORD 26-05 received 17 APR (signed 161200RAPRIL2026). RGT FRAGO 26-05-01.1 issued 21 APR, distributed ALCON 22 APR.
- **Canonical ICP facility name:** Armed Forces Reserve Center, 399 A US-11W Scenic, Mt Carmel, TN 37645. Aliases: "Mt. Carmel Armory" (DIV OPORD / TNARNG FRAGORD 3 — via 278th ACR as facility provider), "US Army Reserve Center" (RGT OPORD), "Kingsport Readiness Center" (CG Intent) — all the same facility.
- **Perimeter-only:** No TNSG enters HAAP premises.
- **Unarmed force:** TNSG carries no weapons for this mission.
- **Dawn-to-dusk / RON-at-home:** CG standing policy for TNSG. Narrow carve-out per JFHQ-TN FRAGORD 3 (278th ACR provides 50-PAX RON space at Mt Carmel Armory) is primarily for 1 RGT OPFOR / TNARNG — not a TNSG-wide extension. Clarification pending with LTC Estes.
- **Mr. Armstrong (HAAP POC) 20 APR guidance:** sUAS detection is his primary objective; SECFOR **physical footprint is outside perimeter fence, parallel to southernmost US 11W only**; interior N/S/W patrols + screens **notional only** (tabletop); OPFOR non-confrontational, main-gate only.

## Current Posture (post 23 APR strikethroughs + TPFDD split + 24 APR minor doc refresh)

- **Roster:** 28 PAX (HHC 10, 2 BN 3, 3 BN 8, 4 BN 7). MRC: 14/8/3/3.
- **2 BN narrowed** to CO / XO / HQ Co 1SG only — no organic comms / admin / S3 NCO.
- **No organic JAG** — CPT McCroskey struck. All legal routes via **COL Williams (PMO)** per DIV OPORD §3.i.6.(h).
- **Part 107 pilots:** **CPT Widner only** organic. 1LT Riley (22 APR) and LT Hoskins (23 APR) not attending. RFF ask for 2+ more RPICs is load-bearing.
- **TPFDD 14 MAY peak:** **54 Actual on-ground / 70 Notional (tabletop) / 124 Total (retained for RFF/sizing)**. **Medical / hydration / bathroom / chow / transport sized to 54, not 124.**
- **MRC-3 list (3):** MAJ Crosby, SGT Malone, SSG Miles. Single-day 14 MAY, full mitigation. BG Cox concurrence required.
- **MRC-4 list (3, all 4 BN):** MAJ Bennett, 2LT Neisler, WO1 Hendon. Verify before 30 APR or route deviation.
- **Task org billets locked 22 APR:** IC = COL Roark · SECFOR TF CDR = MAJ Crosby · Staging Area Mgr = SFC Bradley · Situation Unit Ldr = 1SG Snow · Resource Unit Ldr = 1LT Fielitz-Scarbrough. Deputy TF CDR / Safety Officer / Air Ops Branch Chief / PAO / Plans / Sustain Chiefs still open.

## Upcoming Deadlines

- **25 APR 26 (TOMORROW):** IDT at HHC 3 RGT · TNMAN Ops Brief 1300-1500 · BG Cox + LTC Estes expected in person. SITREP (full + print) ready for LTC Sheaf.
- **30 APR 26:** S1 Regimental Orders · S6 SOI + Signal Annex · S3 TPFDD · Convoy plans to CDR · DIV Final MSEL Review · DD 2977 routing.
- **02 MAY 26:** CG confirmation brief (tentative 1000R, LTC Estes coordinating) — FRAGO 26-05-01.1 S3 Task 2.
- **5-7 MAY 26:** Leader's Recon to Mt Carmel — FRAGO 26-05-01.1 S3 Task 3.
- **13-15 MAY 26:** Execution.

## Recent Changes (this session — 24 APR)

- **`a87f006`** — SITREP + print view refreshed for 23 APR roster strikethrough, 54/70/124 TPFDD split, 1-organic-pilot reality, no-organic-JAG, 2 BN narrowing, 24 APR NAI distance annotations.
- **`6908e19`** — 24 APR minor doc refresh (TPFDD "Rest"→"Reset" typo fix, RFF "incident commander" wording, NAI ~2200 m / ~2700 m distances).
- Preceded by `58390a4` (TabulaKit framework update), `7ac5aa2` (2 BN availability notes), `262f4b0` (23 APR TPFDD + roster strikethrough), `4d21aab` (SITREP decisions + print view + DD 2977 refresh + DOCX), `d906ffd` (initial SITREP), `725d4a3` (15 APR email catch-up — FRAGORD 3 + HD WG).

## Uncommitted Work

Clean working tree. Last commit: `a87f006`. In sync with origin/main.

## Open Items (Top Priority)

1. **MRC-3 deviation concurrence** from BG Cox (at tomorrow's IDT or shortly after).
2. **PHA-currency mechanism** — BG Cox guidance needed; DIV §4.c.(4) rules out on-site PHAs.
3. **31st MED Co attachment names / ranks** — 3 × Green/Yellow tab; no written tasking yet.
4. **Air Ops Branch Chief + Part 107 pilot augmentation** — CPT Widner is the only organic pilot. DIV / adjacent-RGT fill requested.
5. **Safety Officer designation** — required for DD 2977 signature routing.
6. **JAG consultation** with COL Williams (PMO) — RUF + UAS review. Mission has no organic JAG.
7. **3 MRC-4 verifications** (Bennett / Neisler / Hendon, all 4 BN) before 30 APR.
8. **DIV RFF/RFS sourcing status** — need LTC Estes readout.
9. **2 / 4 RGT LNO names** — pending.
10. **CG confirmation brief (2 MAY) time / format** — seeking confirmation from LTC Estes.
11. **1 RGT OPFOR billeting scope** at Mt Carmel Armory — does it extend to TNSG personnel or strictly 1 RGT? Ask LTC Estes.
12. **IET attendance verification** (DIV §3.j) · **AT-in-lieu approvals** (CG + DCGO) · **Unpaid-volunteer status comms** in S1 orders.
13. **TACN / HF radio sourcing + ATAK + Starlink** — G6 open items from 2 APR.
14. **Placeholder pages** — Participant Guide (needs DIV personnel rules: unpaid status, IET, AT-in-lieu), Tech & Platforms, RFI Log, Exercise Precedent.

## Notes on Site State

- **Docsify sidebar alias fix** in `site/index.html` (added 18 APR) prevents sidebar disappearance on nested routes under Firebase's SPA rewrite. If `tabula-update` overwrites index.html in a future session, that alias must be re-added.
- **Source archive** under `site/docs/source/` holds authoritative copies (signed PDFs, DOCX, PPTX, XLSX, EML). Every transcribed page cites its source at the top.
- **DD 2977 DOCX** at `site/docs/source/DD-2977-TNMAN-26.docx` — landscape Funnel-Fury-style worksheet, linked from the top of `site/docs/dd2977.md`. Rebuild with the python-docx script pattern if hazard register changes materially.
- **SITREP is dated 25 APR** — safe to leave named `sitrep-25apr.md`; content is preserved for AAR value. Future sitreps should be new files (`sitrep-02may.md`, etc.).
- **User messaging preference:** LTC Sheaf proposed a TNMAN role; user has not disclosed it and asked it be kept out of written artifacts. Do not surface this in any page until told otherwise.
