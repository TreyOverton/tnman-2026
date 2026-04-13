# Session State

**Generated:** 2026-04-13
**Site:** TNMAN 2026 — 3rd Regiment's mission planner for the May 2026 TNMAN homeland defense exercise
**Theme:** #f97316 (orange) / #3bc0cb (teal)
**Auth:** domain-restricted (tnstateguard.org)
**Deploy:** Firebase (tnman-2026.web.app), GitHub Pages, Netlify all configured
**Font size:** 16px

## Site Structure

- **OPERATIONS** — Mission Overview, Timeline & Deadlines
- **PERSONNEL** — Mission Roster (39 PAX + attachments), Chain of Command, Key Contacts
- **PLANNING** — Task Organization (draft, 12 dependencies), Risk Assessment (Moderate residual)
- **DOCUMENTS** — Document Index, SA Brief, DIV WARNO, RGT WARNO, RGT OPORD (final coord draft), OPORD Encl A Storyboard, DD Form 2977 (Moderate residual, COL Roark approval), CG's Intent
- **REFERENCE** — Reference Index, FPM Slides, Cyber WG Slides, Participant Guide (placeholder), Tech & Platforms (placeholder), RFI Log (placeholder), Exercise Precedent (placeholder)
- **OIC NOTES** — AAR Notes, Comms Log, Planning Gaps, Orders Consistency Review (complete), ICP Org Reference, JAG Pre-Brief

## Key Context

- **User:** 1LT Aaron Overton, ASST S3, 3 RGT TNSG. Working under LTC Sheaf (S3). Deep technical proficiency; builds the planning products and analysis that LTC Sheaf reviews and routes.
- **Always include rank** when naming military personnel (every mention, not just first).
- **Firebase:** Run `firebase login --reauth` before any Firebase CLI action (user has cached Heatherstone creds; needs state guard account).
- **Exercise dates:** 13-15 MAY 26 for 3 RGT (ADVON 13, main day 14, AAR 15). Phase II ENDEX 142131RMAY26.
- **OPORD status:** Final coordinating draft (131200RAPR26) submitted to COL Roark / CSM Seals. LTC Sheaf will FRAGO once DIV OPORD arrives.
- **DIV OPORD:** Due NLT 18 APR 1000R per CG intent. Not yet received.
- **Perimeter-only constraint:** No TNSG personnel enter HAAP premises. ICP sits outside perimeter.
- **Unarmed force:** TNSG is unarmed by default; no Soldiers carry weapons for this mission.
- **Dawn-to-dusk / RON-at-home:** CG standing policy; no overnight duty.

## Upcoming Deadlines

- **14-16 APR 26** — FPM Videoconference (LTC Estes coordinating)
- **15 APR 26** — S1 roster lock (S1 Task 1/2)
- **18 APR 26** — S3 TF org estimate due; Report to DIV; DIV OPORD NLT 1000; CG operational brief
- **25 APR 26** — IDT (monthly drill, face-to-face TNMAN coordination)
- **30 APR 26** — S1 orders, S6 SOI/Signal Annex, S3 TPFDD, convoy plans to CDR, DD 2977 routing
- **02 MAY 26** — Brief CG and DIV staff

## Recent Changes

- CG's Intent reference page created from LTC Estes' FPM email (key: 3 medics not 2, incoming LNOs from 2/4 RGT and DIV, 6 OPFOR from 1 RGT, daily COMMEX)
- Final coordinating OPORD draft — all consistency review items resolved
- Risk assessment at Moderate overall (O-7 ROE and L-1 Title 10/SAD pending JAG)
- Mermaid diagram support added and working
- Mobile responsive tables (stacked card layout)
- TabulaKit framework updated to latest upstream (CSS extraction, scrollbar theming)

## Uncommitted Work

Clean working tree.

## Open Items (Top Priority)

1. **CG brief draft for 18 APR** — LTC Sheaf needs an operational brief for BG Stewart, pre-read to G3
2. **TF org estimate due 18 APR** — Task org has 12 unresolved dependencies (IC designation, Safety Officer, section chiefs, etc.)
3. **Personnel assessment** — LTC Sheaf needs refined numbers to build sUAS and SECFOR teams for 14 MAY; will request adjacent RGT reinforcement if short
4. **7 MRC-4 personnel** still need status verification before 30 APR (Burns removed — discharged)
5. **JAG consultation** not yet initiated (pre-brief prepared but not shared)
6. **DIV OPORD** expected NLT 18 APR — will trigger FRAGO to RGT OPORD
7. **Placeholder pages** — Participant Guide, Technology & Platforms, RFI Log, Exercise Precedent
