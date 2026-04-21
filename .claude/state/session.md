# Session State

**Generated:** 2026-04-18
**Site:** TNMAN 2026 — 3rd Regiment's mission planner for the May 2026 TNMAN homeland defense exercise
**Theme:** #f97316 (orange) / #3bc0cb (teal)
**Auth:** domain-restricted (tnstateguard.org)
**Deploy:** **Firebase only** (tnman-2026.web.app). GitHub Pages and Netlify configs have been removed and should not be re-added — the site's auth redirect URIs are whitelisted only for the Firebase domain.
**Font size:** 16px

## Site Structure

- **OPERATIONS** — Mission Overview, Timeline & Deadlines
- **PERSONNEL** — Mission Roster (39 PAX + attachments), Chain of Command, Key Contacts
- **PLANNING** — Task Organization (draft, 12 dependencies), Risk Assessment (Moderate residual)
- **DOCUMENTS** — Document Index, SA Brief, DIV WARNO, **DIV OPORD** (new), RGT WARNO, RGT OPORD (final), OPORD Encl A Storyboard, **RFF/RFS** (new), **Operational/NAI Graphics** (new), **Orders Back-Brief** (new), **Execution Matrix** (new), DD Form 2977, CG's Intent
- **REFERENCE** — Reference Index, FPM Slides, Cyber WG Slides, Participant Guide (placeholder), Tech & Platforms (placeholder), RFI Log (placeholder), Exercise Precedent (placeholder)
- **OIC NOTES** — AAR Notes, Comms Log, Planning Gaps, Orders Consistency Review (**re-opened**), ICP Org Reference, JAG Pre-Brief

## Key Context

- **User:** 1LT Aaron Overton, ASST S3, 3 RGT TNSG. Working under LTC Sheaf (S3). Deep technical proficiency; builds the planning products and analysis that LTC Sheaf reviews and routes.
- **Always include rank** when naming military personnel (every mention, not just first).
- **Firebase:** Run `firebase login --reauth` (or `npx firebase-tools login`) before any CLI action — user has cached Heatherstone creds; state guard account is the one that can deploy tnman-2026.
- **Deploy command:** `npx firebase-tools deploy --only hosting`. Push-to-main does NOT auto-deploy anything.
- **Exercise dates:** 13-17 MAY 26 for DIV; 3 RGT main execution 13-15 MAY (ADVON 13, main day 14, AAR 15). Phase II ENDEX 142131RMAY26.
- **OPORD status:** RGT OPORD 26-05-01 issued final (141600RAPR26). DIV OPORD 26-05 **received 17 APR** (signed 161200RAPRIL2026, 2 days ahead of NLT). FRAGO pending from LTC Sheaf.
- **Canonical ICP facility name:** Armed Forces Reserve Center, 399 A US-11W Scenic, Mt Carmel, TN 37645. Aliases in the orders: "Mt. Carmel Armory" (DIV OPORD), "US Army Reserve Center, Mt Carmel" (RGT OPORD), "Kingsport Readiness Center" (CG Intent) — all the same facility.
- **Perimeter-only constraint:** No TNSG personnel enter HAAP premises. ICP sits outside perimeter.
- **Unarmed force:** TNSG is unarmed by default; no Soldiers carry weapons for this mission.
- **Dawn-to-dusk / RON-at-home:** CG standing policy; no overnight duty. **Possible exception:** DIV OPORD tasks 3 RGT to provide a sleeping area for 1 RGT SECFOR/OPFOR at the ICP — tension with policy, awaiting clarification.

## Upcoming Deadlines

- **14-16 APR 26** — FPM Videoconference (LTC Estes coordinating)
- **~~15 APR 26~~** — S1 roster lock *(passed; still open in practice pending 2 BN responses)*
- **18 APR 26** — S3 TF org estimate due; CG operational brief (DIV OPORD already received 17 APR)
- **25 APR 26** — IDT (monthly drill, face-to-face TNMAN coordination)
- **30 APR 26** — S1 orders, S6 SOI/Signal Annex, S3 TPFDD, convoy plans to CDR, DD 2977 routing, Final MSEL Review (DIV)
- **02 MAY 26** — Brief CG and DIV staff

## Recent Changes (this session — 18 APR)

- **DIV OPORD 26-05 received 17 APR** and fully transcribed; source PDF + Draft 2 DOCX archived under `site/docs/source/div-opord-26-05/`
- New page: **RFF / RFS** — 3 RGT request for forces/support (17 SECFOR, OPFOR, LNOs, TACN/HF teams, Part 107 sUAS, 3 medics, JAG, PAO)
- New page: **Operational / NAI Graphics** — 10 NAIs on HAAP overlay (3001 ICP … 3010 US-11W), TNNG/TNSG boundary, Screen + 3 Patrol positions
- New page: **Orders Back-Brief** — one-page summary of 3 RGT expectations across DIV/CG/RGT orders (for CG brief read-ahead)
- New page: **Exercise Execution Matrix** — blue-force playbook for 13-15 MAY, swim-laned by ICP C2 / SECFOR / UAS / Comms / Exercise Control / Sustainment, with mermaid timeline + gantt diagrams
- **Orders Consistency Review re-opened** — 19 findings (15 FRAGO candidates, 3 open blockers)
- ICP facility naming resolved — canonical form now used in all 3 RGT products
- **GitHub Pages + Netlify deploys removed** — Firebase is the only target
- **Docsify `alias` fix** in `site/index.html` — prevents sidebar from disappearing on nested routes under Firebase's SPA rewrite

## Uncommitted Work

Clean working tree. Last three commits: `e5df193` (deploy cleanup) → `79e4165` (sidebar alias fix) → `77fec3d` (DIV OPORD + new pages).

## Open Items (Top Priority)

1. **FRAGO to RGT OPORD** — LTC Sheaf's vehicle for incorporating the 15 FRAGO candidates from the re-opened [Consistency Review](site/warno-opord-review.md) §B. Drivers: 6-hr ICP establishment, 1 RGT OPFOR billeting resolution, CCIRs, DA 7566, 2-hr closure NLT, LNO integration, ICP address cosmetic fix.
2. **1 RGT OPFOR billeting at ICP** — DIV OPORD tasks 3 RGT to provide sleeping area; tension with CG dawn-to-dusk/RON-at-home policy. Needs DIV G3 / CG clarification.
3. **CG Operational Brief draft for 18 APR** — LTC Sheaf briefs BG Stewart; pre-read to G3 BEAVER. The [Back-Brief](site/docs/back-brief.md) is the scaffold.
4. **TF org estimate due 18 APR** — [Task Organization](site/taskorg.md) has 12 unresolved dependencies.
5. **Personnel blockers surfaced by DIV OPORD:**
   - PHA currency verification (61st will NOT provide PHAs during TNMAN — now a hard gate)
   - IET attendance verification (Soldiers without IET cannot attend)
   - AT-in-lieu CG/DCGO approvals
   - Unpaid-volunteer status comms to participants
6. **Part 107 sUAS sourcing** — RFF requests 3; only 4 BN's named pilot (1) is organic. Gap of 2.
7. **TACN/HF radio sourcing** — still open from 2 APR G6 Questions email; RFF now re-surfaces the need.
8. **7 MRC-4 personnel** still need status verification before 30 APR (SSG Burns removed — discharged).
9. **JAG consultation** not yet initiated; DIV OPORD names **COL Williams (PMO)** as the addressee for RUF + UAS review.
10. **Execution Matrix** is a first-pass draft awaiting LTC Sheaf's review; DIV MSEL (30 APR) will supersede the `{inject}` assumptions.
11. **Placeholder pages** — Participant Guide, Technology & Platforms, RFI Log, Exercise Precedent (Participant Guide will need the new DIV OPORD personnel rules: unpaid status, IET requirement, AT-in-lieu).

## Notes on Site State

- The **Docsify sidebar alias** (in `site/index.html`) is the reason nested-route navigation now works on Firebase. If `tabula-update` overwrites index.html in a future session, that alias must be re-added or the sidebar will disappear on every page except Home.
- The **source-document archive** under `site/docs/source/` holds the authoritative copies (signed PDFs, DOCX, PPTX, EML). Transcribed markdown pages cite their source files at the top of each page.
- Two transcription pages have deliberate **editor's notes** preserving original imprecise language while pointing to the canonical form — [RGT OPORD](site/docs/opord-rgt.md) (ICP facility name), and [DIV OPORD](site/docs/opord-div.md) (COMMEX date-range typo in 1 RGT sub-task).
