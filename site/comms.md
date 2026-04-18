# Communications Log

Record all significant communications, decisions, and updates here. Newest entries at the top.

> **Tip:** Use `/note` in Claude Code to add entries — it auto-timestamps and can update related pages.

---

### 2026-04-18 — 1LT Overton — Exercise Execution Matrix drafted (for LTC Sheaf review)

Drafted a first-pass [Exercise Execution Matrix](docs/execution-matrix.md) in response to LTC Sheaf's stated need for a tactical-level, ICP-facing playbook of intended events for the exercise window (13-15 MAY). LTC Sheaf's description: "0930 — Dispatch UAS section squad to surveil riverbanks..." — i.e., the guide the ICP follows to make sure the exercise hits all the desired situations.

**Terminology clarification:** The formal name for this product is an **Exercise Execution Matrix** (or **Synchronization Matrix** in military doctrine). It is distinct from the **MSEL (Master Scenario Events List)**, which is the *controller's* inject list and is a DIV product (Final MSEL Review 30 APR 26). The Execution Matrix is blue-force-facing; the MSEL is the controller's script.

**Draft content:**
- Summary timeline (mermaid `timeline` diagram — milestone view across 13-15 MAY)
- Three per-day execution matrices (tables), swim-laned by **ICP C2 / SECFOR / UAS / Comms / Exercise Control / Sustainment**
- 14 MAY main-day **gantt chart** (mermaid) showing parallel activities and inject windows
- Assumptions and gaps called out — key note: DIV MSEL supersedes the "{inject}" entries once issued

**Draft is pre-decisional.** Ready for LTC Sheaf to strike through, rewrite, or re-time. NAIs reference the [Operational / NAI Graphics](docs/ops-graphics.md) labels (3001 ICP through 3010 US-11W).



Resolved the three-way naming question flagged in the 18 APR Consistency Review (B1). All three references in the orders — "Mt. Carmel Armory" (DIV OPORD 26-05), "US Army Reserve Center, 399 US-11W Scenic" (RGT OPORD 26-05-01), and "Kingsport Readiness Center" (CG Intent / LTC Estes) — refer to the **same facility**.

**Canonical name and address:**

> **Armed Forces Reserve Center, 399 A US-11W Scenic, Mt Carmel, TN 37645**

The facility is a TN National Guard home station that also houses US Army National Guard Recruiting; it sits a short distance up US-11W from HAAP. "Mt Carmel Armory" is the common informal reference but is not the official name.

**Site updates:**
- [Consistency Review B1](warno-opord-review.md) — closed with canonical form.
- [Planning Gaps](planning-gaps.md) — ICP naming line resolved.
- [Mission Overview](README.md), [Back-Brief](docs/back-brief.md), [DD 2977](docs/dd2977.md), [Timeline](timeline.md), [Ops Graphics](docs/ops-graphics.md), [SA Brief](docs/sabrief.md) — canonical form applied.
- [CG Intent](docs/cg-intent.md), [DIV OPORD](docs/opord-div.md), [RGT OPORD](docs/opord-rgt.md) transcriptions — original source wording preserved; cross-reference added.

**Still cosmetic for the FRAGO:** RGT OPORD 26-05-01 text uses *"US Army Reserve Center, 399 US-11W Scenic, Mt Carmel, TN 37645"* throughout. The "A" street-number suffix is missing and the official facility name is "Armed Forces Reserve Center."

### 2026-04-18 — LTC Sheaf → ALCON (email, updated RFF / RFS — adds Part 107 sUAS operators)

LTC Sheaf sent a **corrected RFF/RFS document** (0718R) adding the FAA 14 CFR Part 107 sUAS Operators line that was missed in the 17 APR 23:22R version. 3 operators requested.

The final 3 RGT RFF/RFS now requests:

- **SECFOR:** 12 foot patrol + 3 screen + 2 QRF (17 pax total)
- **OPFOR:** 1 team of 6-8 pax *(matched by 1 RGT per DIV OPORD)*
- **LNOs:** 1 × 2 RGT, 1 × 4 RGT, 2 × DIV PMO *(all matched by DIV OPORD)*
- **TACN Radio Team:** 3 pax + 3 radios *(gap — open G6 item)*
- **HF Radio Team:** 3 pax + 2 radios *(gap — open G6 item)*
- **Part 107 sUAS Operators:** 3 *(RGT OPORD tasks 4 BN for 1; gap for other 2)*
- **Field Medical (RFS):** 3 × 68W *(matched by 61st MED BN / 31st MED Co per DIV OPORD)*
- **JAG (RFS):** 1 *(matched — COL Williams per DIV OPORD)*
- **PAO (RFS):** 1 *(matched — DIV PMO per DIV OPORD)*

Site updates: [RFF / RFS](docs/rff-rfs.md) page added. Source: [2026-04-18_SHEAF_ops-intel-graphics-rff-rfs.eml](/docs/source/emails/2026-04-18_SHEAF_ops-intel-graphics-rff-rfs.eml).

### 2026-04-17 — LTC Sheaf → 1LT Overton (email, DIV OPORD 26-05 + back-brief request)

LTC Sheaf forwarded the **DIV OPORD 26-05 (TNMAN 2026)** for inclusion in the planning portal. Two documents attached: the **signed PDF** (dated 161200RAPRIL2026 — issued 2 days ahead of the CG-stated NLT 1000 hrs 18 APR 26) and a **Draft 2 DOCX** working copy.

LTC Sheaf's instruction: "I'd like to do an Orders Consistency Review and construct an 'Orders Brief-back' (Summary) of the expectations for 3 RGT."

Two additional items LTC Sheaf mentioned:

1. He reached out to the BN CDRs in response to 1LT Overton's concern about "gouge getting down to the lowest level" — worried about any "Ferguson Effect" dynamic.
2. He will forward a message from COL Roark (originated from CSM Barton, 1 RGT) for inclusion into the OIC Notes — **not yet received**.

**Actions taken on the portal:**

- [DIV OPORD 26-05](docs/opord-div.md) page created; source PDF + Draft 2 DOCX stored at `/docs/source/div-opord-26-05/`.
- [Orders Back-Brief](docs/back-brief.md) skeleton created — to be refined into the 18 APR CG brief pre-read.
- [Orders Consistency Review](warno-opord-review.md) **re-opened** — 15 FRAGO-candidate items identified (ICP naming, 6-hr establishment clock, 1 RGT billeting question, MRC clarification, CCIRs, DA 7566, reports NLT, LNO integration, PHA gate, IET requirement, AT-in-lieu CG/DCGO approval, unpaid status, RFF submission task, 2 RGT / 4 RGT DS relationship, 1 RGT COMMEX 13-25 MAY typo, sweep residual "Tasl" typo).
- [Planning Gaps](planning-gaps.md) updated — DIV OPORD marked received; new blockers added for PHA verification, IET verification, AT-in-lieu approvals, unpaid-volunteer comms, ICP naming, 1 RGT billeting, RFF/RFS submission.

Source: [2026-04-17_SHEAF_div-opord-for-documentation.eml](/docs/source/emails/2026-04-17_SHEAF_div-opord-for-documentation.eml) · [DIV OPORD PDF](/docs/source/div-opord-26-05/div-opord-26-05.pdf).

### 2026-04-17 — LTC Sheaf → ALCON (email, DRAFT Ops/Intel Graphics + RFF/RFS)

LTC Sheaf distributed two 3-RGT-staff-level products at 2322R to COL Roark, CSM Seals, LTC Smith (Scott Smith), 1LT Overton — with LTC Smith (Scott), CSM Rutherford, CPT Borrilez, MAJ Crosby, CPT Haddix, CW4 Simpson, 1LT Fielitz-Scarbrough, SFC Bradley on Cc.

LTC Sheaf's framing: *"FYI / SA, here is something to consider. This is an OPS / INTEL Graphic for use during the exercise. S2 can refine as needed. Additionally, this is the RFF / RFS requirements which I have 'intuited' up to this point. Feel free to add, subtract, and otherwise edit either of these documents as you see fit."*

**Ops/Intel Graphic** — NAI overlay on HAAP satellite imagery identifying 10 NAIs (3001 ICP, 3002 Main Gate, 3003 Critical Infra 1, 3004 Railway/Pipeline, 3005 Critical Infra 2, 3006 Railway/ASP, 3007 Waterway, 3008 Bridge, 3009 Railway Switch, 3010 US-11W) and the TNNG/TNSG boundary along US-11W with Screen + 3 Patrol positions. New page: [Operational / NAI Graphics](docs/ops-graphics.md).

**RFF/RFS** — 3 RGT draft request for forces and support to DIV. (Updated 18 APR with Part 107 sUAS operators — see above.) New page: [RFF / RFS](docs/rff-rfs.md).

The Ops/Intel Graphic complements 1SG Snow's standing NAI-identification tasking from 11 APR and is the S2 base layer for future SA brief refinement.

Source: [2026-04-18_SHEAF_ops-intel-graphics-rff-rfs.eml](/docs/source/emails/2026-04-18_SHEAF_ops-intel-graphics-rff-rfs.eml).

### 2026-04-13 — LTC Sheaf fwd LTC Estes → 1LT Overton (email, Planning Portal + OPFOR POC)

LTC Sheaf forwarded a reply from **LTC Estes (2 RGT CO)** regarding the planning portal. Two items:

1. **LTC Sheaf shared tnman-2026.web.app with LTC Estes** for SA on 3 RGT planning efforts. Credited 1LT Overton for compiling the information. LTC Sheaf also noted he has not yet received a Google Meet link for the 18 APR CG briefing.
2. **LTC Estes confirms 1 RGT OPFOR**: "1st Regiment volunteered 6 PAX to role play OPFOR at Holston — one less task for you to worry about." **POC for role player coordination is RCSM John Barton** (john.barton@tnstateguard.org), copied on the email.

LTC Sheaf's instruction: "Not going into the OPORD, just put it in OIC Notes."

Source: [3-RGT-TNMAN-26-Planning-Portal-App.eml](/docs/source/emails/3-RGT-TNMAN-26-Planning-Portal-App.eml)

### 2026-04-13 — LTC Sheaf fwd LTC Estes → COL Roark / MAJ Garner (email, FPM Videoconference + CG's Intent)

LTC Sheaf forwarded an email from **LTC Estes (2 RGT CO)** containing the CG's intent for TNMAN and detailed task assignments from the 31 MAR TNMAN Videoconference. LTC Estes spoke with BG Cox on 13 APR and received guidance. LTC Sheaf marked this "information only" and requested it be added to the planning app.

**Major new information — see full reference: [CG's Intent for TNMAN 26](docs/cg-intent.md)**

Key items affecting 3 RGT planning:

1. **DIV OPORD due NLT 18 APR 1000R** — the document we've been waiting for has a deadline now.
2. **FPM Videoconference this week (14-16 APR)** — LTC Estes requesting availability Tue/Wed/Thu.
3. **CG + DIV staff brief 02 MAY** — second briefing beyond the 18 APR report.
4. **61st MED BN providing 3 medical personnel (not 2)** from 31st MED Co, Green/Yellow tab.
5. **2 RGT and 4 RGT each providing 1 LNO** to 3 RGT ICP.
6. **DIV Staff providing 2 LNOs to 3 RGT TF**, plus PAO (1 pax), Mob Cell, Class I supply, and legal review (RUF + UAS policy).
7. **1 RGT providing 6 PAX OPFOR at Holston, 13-15 MAY.**
8. **Daily COMMEX** (HF/TACN) 1 per day, 13-15 May.
9. **ICP location**: CG says "Kingsport Readiness Center" vs OPORD "US Army Reserve Center, Mt Carmel" — likely same facility; confirm.

Source: [TNMAN26-FPM-Videoconference.eml](/docs/source/emails/TNMAN26-FPM-Videoconference.eml)

### 2026-04-13 — LTC Sheaf → 1LT Overton (email, TNMAN-26 Next Steps + final OPORD draft)

LTC Sheaf sent an updated OPORD draft (dtd 131200RAPR26) and outlined three near-term action items.

**OPORD changes from the 132100RAPR26 revision:**

- **Greeneville spelling fixed** (was "Greenville")
- **Phase I/II seam fixed** — Phase I now ends at 120520RMAY26, matching Phase II start
- **S3 Task 3 / S4 Task 2 APR→MAY typo fixed** — now correctly reads "130800RMAY26"
- **S1 Task 3 trailing "ca" removed**
- **S3 task numbering fixed** — sequential 1-7
- **One remaining typo:** S4 Task 1 still reads "Tasl" instead of "Task"

**Action items from LTC Sheaf:**

1. **Create an execution timeline** of OPORD taskings from 15 APR 26 through 172359RMAY26, highlighting known exercise execution actions with DTGs. *(Our existing [Timeline](timeline.md) largely covers this — may need reformatting for LTC Sheaf's preferred view.)*
2. **Refine personnel participation assessment** so LTC Sheaf can build sUAS and SECFOR teams to execute tasking on 14 MAY 26. If numbers are insufficient, LTC Sheaf will request reinforcement from adjacent RGTs.
3. **Draft an operational brief to the CG for 18 APR 26.** Needs to go to G3 BEAVER as a pre-read/read-ahead before the brief. This is a new hard deadline — 5 days away.

LTC Sheaf also thanked 1LT Overton for technical proficiency in plan generation.

Source: [TNMAN-26-Next-Steps.eml](/docs/source/emails/TNMAN-26-Next-Steps.eml) · [RO-26-05-01-final-draft.docx](/docs/source/RO-26-05-01-final-draft.docx)

### 2026-04-13 — LTC Sheaf → COL Roark / CSM Seals (email, final coordinating drafts)

LTC Sheaf sent the final coordinating drafts of the RGT OPORD 26-05-01 (TNMAN-26) with enclosure, plus a separate RGT WARNO 26-04 for IDT on 25 APR 26, to COL Roark and CSM Seals for review, comment, and edits. Cc: LTC Smith (Scott), 1LT Overton.

Key points from LTC Sheaf's message:

- **DIV OPORD for TNMAN-26 has still not been received.** LTC Sheaf states he has "exercised disciplined initiative to comply with the DIV CDR's intent" and will issue a FRAGO to adjust the RGT OPORD once the DIV OPORD arrives.
- LTC Sheaf acknowledges having held the documents "until the last possible moment" waiting for further DIV guidance.
- The attached documents are the same drafts already in our system ([RGT OPORD 26-05-01](docs/opord-rgt.md) revised 132100RAPR26, plus the storyboard enclosure).

**New item:** RGT WARNO 26-04 for IDT on **25 APR 26** — this is a separate order for the April IDT period, not an update to the TNMAN OPORD. Not yet imported to this site.

Source: [Final-Coordinating-Drafts-TNMAN-26-OPORD-WARNO-26-04.eml](/docs/source/emails/Final-Coordinating-Drafts-TNMAN-26-OPORD-WARNO-26-04.eml)

### 2026-04-11 — CPT Borrilez → 1LT Overton (email thread, 2BN roster response)

CPT Borrilez responded to the 2 BN roster review request. Key points from the thread:

1. **SSG Burns and MSG Klaus are both discharged** — remove from all rosters. (SSG Burns was on the mission roster; MSG Klaus was not.)
2. CPT Borrilez will "recheck with staff" on availability. Some 2 BN Soldiers are truck drivers who would have to take leave without pay; commitment depends on whether orders are issued.
3. CPT Borrilez and 2LT Sobel are likely to attend if orders come through.
4. **Billeting concern:** CPT Borrilez noted that 4 BN and 2 BN returning home nightly would be "disagreeable" given the distance. 1LT Overton explained the CG dawn-to-dusk / RON-at-home policy and offered hosting at his home near the Holston Armory (guest room, spare mattresses, cots, hamburgers for guests). Also flagged HHC armory and ETSU research center as potential options. Billeting capacity depends on final numbers from 4 BN and 2 BN.

**Action:** SSG Burns removed from mission roster and DD 2977. Awaiting CPT Borrilez's follow-up with specific names/availability. Billeting planning to proceed once headcount is clearer.

Source: [TNMAN-2026-2BN-Roster-Review-Response.eml](/docs/source/emails/TNMAN-2026-2BN-Roster-Review-Response.eml)

### 2026-04-11 — LTC Sheaf → 1SG Snow (email, Imagery for TNMAN-26)

LTC Sheaf sent the Google Earth imagery of the HAAP AO to **1SG Snow (HHC S2 NCO)** and tasked him to:

1. Review the imagery and **identify potential Named Areas of Interest (NAIs)** based on the scenario.
2. **Develop a situational brief** including weather considerations, critical points on the installation, and NAIs.
3. Call LTC Sheaf to discuss.

**Important sUAS clarification from LTC Sheaf:** 3 RGT will **NOT** take imagery or video of anything within the HAAP perimeter fence line. The primary purpose of sUAS during the exercise is to **test the installation's drone detection system**. Imagery/video capture within the fence is a moot point.

This aligns with TCA 39-13-609 drone privacy constraints (see [Risk Assessment L-2](risk.md)) and simplifies the JAG consultation on UAS collection/retention — no imagery product is generated.

Cc: LTC Smith (Scott), 1LT Overton. Source: [Imagery-for-TNMAN-26.eml](/docs/source/emails/Imagery-for-TNMAN-26.eml)

### 2026-04-13 — LTC Sheaf → 1LT Overton (email, revised draft RGT OPORD 26-05-01)

LTC Sheaf sent a revised coordinating draft of [RGT OPORD 26-05-01](docs/opord-rgt.md) (now dtd 132100RAPR26). LTC Sheaf made the following changes in response to the [Orders Consistency Review](warno-opord-review.md):

1. **Phase II ENDEX revised** — moved from 132131RMAY26 to **142131RMAY26** (Phase II now ends 14 MAY evening; 15 MAY half-day/AAR falls into Phase III). LTC Sheaf confirmed the main execution day is 14 MAY, with exercise support actions occurring 12-15 MAY.
2. **MOB Cell task intentionally omitted** — LTC Sheaf clarifies this is a DIV G1 task, not an RGT S1 task. 3 RGT will NOT provide personnel to the DIV MOB Cell at Sidco.
3. **61st MED BN attachment tasks added** — New S3 Task 3 and S4 Task 2 added for coordinating receipt of 61st MED BN medical augmentation ICW S3/S4.
4. **AO scoped down** — VTS-T, VTS-S, VTS-M dropped from the AO description. AO now reads "TEMA East Region and Home Station / Drill Locations."
5. **TNNG LOI cited** — added to references as "TNNG Letter of Instruction, dtd 11 DEC 24." LTC Sheaf has requested a copy from MAJ Callison.
6. **S3 Task 2 deadline** — Task Force Organization estimate now due **NLT 18 APR 26**.

**Potential issues noted in the revised draft:**

- S3 Task 3 and S4 Task 2 date reads "130800R**APR**26" — likely should be "130800R**MAY**26" (13 MAY is ADVON day; 13 APR is today and already past).
- S1 Task 3 has a trailing "ca" typo at end of sentence.
- S3 task numbering has two "3." entries (should be "3." then "4." etc.).

Source: [Initial-Coordinating-Draft-RGT-OPORD-26-05-01.eml](/docs/source/emails/Initial-Coordinating-Draft-RGT-OPORD-26-05-01.eml) · [RO-26-05-01-revised.docx](/docs/source/RO-26-05-01-revised.docx)

### 2026-04-11 — CG standing policy: dawn-to-dusk + RON at home

Capturing a previously-issued CG direction so we do not lose track of it in planning:

- **Dawn-to-dusk duty day** — TNSG participation in TNMAN 26 is limited to daylight hours.
- **RON at home or hotel** — Soldiers participating on more than one day must return home (or to a hotel of their choosing) overnight. No billeting at the ICP.

**Impact on 3 RGT plans:**

- Any OPORD language implying overnight assembly at the ICP must be reviewed and rewritten (the current draft RGT OPORD has Phase II starting 120520RMAY26 BMNT, which is consistent with dawn arrival, and ends 132131RMAY26 EENT, which is also end-of-day — but longer-duration multi-day participation needs a daily home→ICP→home cycle, not an ICP billet).
- Convoy / fatigue controls in the [Risk Assessment](risk.md) O-3 and [DD Form 2977](docs/dd2977.md) Block 3 updated accordingly: daily round-trip driving, 2-driver rule for >4 hr one-way legs, Soldiers with long commutes may self-fund a hotel in the Mt Carmel area to shorten the daily drive.
- Combined with the MRC-3 single-day-only mitigation (see DD 2977 Block 4 addendum), MRC-3 personnel participating only on 14 MAY naturally fit this policy.

### 2026-04-11 — PAO assignment path: LTC Epright (DIV PAO) is the POC

3 RGT wants a PAO representative assigned for TNMAN-26. **LTC Daniel Epright, Division PAO** is the POC for working out how that assignment is made. LTC Sheaf plans to contact LTC Epright directly. Logged as an open item on the [Mission Roster](roster.md) pending a name and contact info.

### 2026-04-11 — Verbal, off-hand: two medics expected from 61st MED BN

We were told verbally and somewhat off-hand that two medics will be attached to 3 RGT for TNMAN-26. The verbal mention referred to "911th" but per the [DIV WARNO](docs/warno-div.md) the tasked unit is **61st MED BN**. No names, ranks, or contact information have been provided, and there is no written confirmation of the specific attachment. Noted on the [Mission Roster](roster.md) as an expected attachment and added to the Open Items list for follow-up. 61st MED BN CO is **BG Cox** (recently promoted from COL).

### 2026-04-11 — 1LT Overton → MAJ Crosby (email, 3BN roster review)

Sent MAJ Crosby the draft 3BN mission roster (14 personnel) and asked him to confirm additions, removals, rank/position/MRC updates since the Mar 2026 alert roster, and status on PV1 Gauthier. Called out the departures already applied (1SG Snow to HHC S2 NCO; 2LT Zeinali, PV2 Caleb Crosby, PV2 Danger, PV1 Tobin removed). Also requested address/phone/email/MRC for any additions and most-recent PHA date if available.

### 2026-04-11 — 1LT Overton → CPT Borrilez (email, 2BN roster review)

Sent CPT Borrilez the 2BN roster (9 personnel) imported directly from the 1 MAR 2026 alert recall roster as a starting point and asked whether 2 BN intends to support TNMAN 2026, who is actually available, and any adds/removes/changes since 1 MAR. Also requested address/phone/email/MRC for any additions and most-recent PHA date if available. This is the first outreach to 2 BN — LTC Sheaf had flagged 2 BN posture as unknown.

### 2026-04-02 — LTC Smith (3 RGT XO) → TNSG G6 Team (email, G6 Questions for TNMAN)

LTC Smith asked the TNSG G6 Team for clarification on several comms items discussed at a recent TNMAN 26 Google Meet:

- **TACN Radios** — Based on CG / CW4 Simpson discussion, 3 RGT will require at least 4 TACN radios for the Holston Defense Mission. LTC Smith asks whether training will be provided and whether there is a plan to get the radios to the 3 RGT AO.
- **ATAK** — 3 RGT needs training and technical setup help; most previously-trained personnel are no longer with the unit.
- **Starlink at ICP** — LTC Smith asked whether 3 RGT can receive a Starlink for the ICP in Mt Carmel for internet access.

**Important personnel note:** LTC Smith stated that **CSM Michael Rutherford is the new 3 RGT S6** and must be included in all comms discussions going forward. Mission roster updated to move CSM Rutherford from 3 BN CSM to Regimental HQ as S6 NCO.

To: TNSG G6 Team, Timmy Hughes (rank **?**), CW4 Simpson. Cc: CSM Rutherford, LTC Sheaf, COL Roark, 1LT Overton. Source: [G6-Questions-for-TNMAN.eml](/docs/source/emails/G6-Questions-for-TNMAN.eml)

### 2026-03-26 — LTC Sheaf → 3 BN CDRs / XOs (email, URGENT Rapid Feasibility Assessment)

**BLUF:** LTC Sheaf asked whether 3 RGT can provide approx. 30 Soldiers to support the TNMAN Exercise (SECFOR approx. 20 Pax, UAS 4 Pax, ICP Support TBD, Comms Support TBD). The estimate of 3 RGT involvement has increased from 2 Pax for a security task to approx. 30 Pax across multiple tasks in a 7-day window.

Key dates in the email: 13 MAY ADVON, 14 MAY Main Body, 15 MAY ENDEX / ExFil.

LTC Sheaf asked each BN CDR to respond ASAP with the number of Soldiers their BN can provide, and to collect — but not yet send — detailed questions so he can compile them after receiving fuller data from the TNNG Planner.

To: CPT Borrilez, 2LT Sobel, MAJ Crosby, 1LT Riley, CPT Haddix, CPT Widner. Cc: COL Roark, LTC Smith (Scott), CSM Seals, 1LT Overton, SFC Collins, SFC Ferguson, SSG Whalen. Source: [URGENT-Rapid-Feasibility-Assessment.eml](/docs/source/emails/URGENT-Rapid-Feasibility-Assessment.eml)

### 2026-03-26 — LTC Estes (2 RGT CO) → TNSG leadership (email fwd, FPM Slides)

LTC Estes forwarded the FPM slide brief from the TNMAN 26 Final Planning Meeting at Sidco. Originally prepared by MAJ Crandall (TNARNG J3/7) and distributed to TNNG / TEMA planners and TNSG leadership that morning. 1LT Overton was on the Cc list. Slide content is now transcribed at [FPM Slides (26-27 MAR 26)](docs/fpm-slides.md) with a link to the source PDF.

To: Kevin Stewart (CG, rank **?**), COL Cox (DCG-O, 61st CO), Chris Beaver (rank **?**), LTC Sheaf, 1LT Overton, CPT Smith (Keith). Source: [TNMAN26-FPM-Slides-Unclassified.eml](/docs/source/emails/TNMAN26-FPM-Slides-Unclassified.eml)

### 2026-03-18 — LTC Estes (2 RGT CO) → TNSG leadership (email, 19 MAR Prep Meeting)

LTC Estes announced a 19 MAR videoconference (1800 CT / 1900 ET) to prepare for the TNMAN 26 Final Planning Meeting (26-27 MAR at Sidco). The agenda centered on questions from 2LT Gabriel Sussman (TNARNG, at SBOLC) regarding TNSG's two assigned sites:

- **Holston** — 3 RGT assigned engineering (LIDAR assessment) and SECFOR
- **Caney Fork Welcome Center** — engineering (bridge assessment) and SECFOR

2LT Sussman's open questions (carried into our prep meeting):

- Specific missions for each site
- Finalize engineering assignments: LIDAR mapping and SECFOR at Holston; bridge assessment and drone activity at Caney Fork
- Transportation of engineers to Holston if 3 RGT accepts that mission
- Dates of participation

Bridge assessment is constrained to approx. 6 personnel transportable by UH-60 Blackhawk (pending confirmation from TNNG SAO). FAA UAS waivers and TDOT permissions are required before conducting UH-60 operations and the bridge assessment.

TDOT POCs provided by 2LT Sussman: Errol Christos (TDOT TEMA LNO, errol.christos@tn.gov), Lee Bogle (TDOT, lee.bogle@tn.gov).

To: 1LT Overton, Allen Nunley (rank **?**), Chris Beaver (rank **?**), Chris Hoekstra (rank **?**), Daniel Smiley (rank **?**), Jared Gray (rank **?**), LTC Sheaf, CPT Smith (Keith), CPT Brown (Melvin), CW4 Simpson, COL Darling, MAJ Griggs, COL Roark, LTC Smith (Scott), LTC Estes, Jamieson Conkin (rank **?**), Kevin Stewart (CG, rank **?**), COL Cox, COL Vantrump. Source: [TNSG-TNMAN-26-Prep-Meeting-19MAR.eml](/docs/source/emails/TNSG-TNMAN-26-Prep-Meeting-19MAR.eml)

### 2026-04-11 — LTC Sheaf (4/3) → S1 (email, sent 7 APR)

LTC Sheaf provided initial 4/3 personnel nominations for TNMAN 2026 and offered HHC and 3/3 as fully available. Named from 4/3:

- CPT Haddix
- CPT Widner
- MAJ Bennett
- 2LT Neisler
- WO1 Hendon
- SSG Whalen
- SSG Miles

LTC Sheaf stated HHC and 3/3 can be used in full, and that 2/3 availability is currently unknown. He asked for a current roster size estimate and noted the final roster will need address, phone, email, and MRC status, and if possible most-recent PHA date. He acknowledged names will be subtracted as planning progresses.

**Action taken:** Initial [Mission Roster](roster.md) built — 38 personnel (7 named from 4/3, 13 HHC, 18 from 3/3). 2/3 and PHA data remain open. MAJ Bennett MRC unknown (not in Mar 2026 regimental PDF).
