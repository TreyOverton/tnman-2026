# TNMAN Comms Plan (Annex H)

DIV-level communications plan for TNMAN-26, owned by TNSG HHC G6 (LTC Hughes) with CW2 Roach (2 RGT 51st SIG) executing. Authoritative document is **Annex H** ([docx](/docs/source/TNMAN-Annex-H.docx)) — this page is the readable transcription. The 28 APR 26 [comms working meeting](/docs/source/TNMAN-Comms-Discussion-Notes-28APR.docx) added refinement.

> **Status:** draft. Frequencies in Annex H are placeholders (DELTA/ECHO MHz pending TNG confirmation per CW2 Roach action item). Net Control schedule and PACE specifics may be refined by FRAGO.

## Scope

- **Operational period:** 13-15 MAY 26 (Annex H header reads 13 MAY 2025; treated as typo — TNMAN-26 is May 2026).
- **Units involved:** 2 RGT, 3 RGT, 4 RGT, HHC G6.
- **Mission split (per 28 APR meeting):**
  - **Drone Mapping (Fall Creek Falls)** — VHF, HF, Starlink. Tue/Wed (12-13 MAY). MAJ Wemyss / SGT Wade.
  - **Cyber** — PC only, no comms. LT Mule.
  - **JBAT (bridge)** — TDOT provides main comms; ~3 TACN radios. CPT Gray.
  - **Mt. Carmel Site Defense (3 RGT)** — 1 CP comms with HF on **Thursday 14 MAY**. ~3 TACN radios. 4 RGT may provide notional support; **MAJ Thomas and MAJ Hamlin LNOs from 4 RGT** [unverified — pending confirmation; 4 BN organic LNO list still TBD].
  - **JOC (Volunteer XRAY)** — manned during exercise by TNNG. **CPL Jernigan** working at JOC with **CW2 Roach** as RTO support. Operates A4U net for radio checks.

## HF Network — Frequencies (Pending Final)

| Channel | Name | Frequency | Mode |
|---------|------|-----------|------|
| Primary | DELTA | **5.7785 MHz** | USB |
| Secondary | ECHO | **9.295 MHz** | USB |

**Net Control:** AAN4YR operating from TNG JOC (Volunteer XRAY).

**A4U Net schedule:** 14 MAY 26 and 15 MAY 26, **18:00-18:30 Zulu (13:00-13:30 CST)**. Net Control opens, takes radio reports, may call for ICS-213 messages via WINLINK. NCS may switch to secondary frequency if conditions warrant.

## SHARES Call Signs

| Call Sign | Unit | Location Supporting |
|-----------|------|---------------------|
| **AAN4YR** | TNSG HHC G6 | TNG JOC |
| **AAN4ZR** | TNSG 3rd RGT | Holston Army Ammunition Plant |
| **AAN4ZX** | TNSG 3rd RGT, HHC | Holston Army Ammunition Plant |
| **AAN4AB** | TNSG 3rd RGT, 3 BN | Holston Army Ammunition Plant |
| **AAN4AH** | TNSG 3rd RGT, 2 BN | Holston Army Ammunition Plant |
| **AAN4ZQ** | TNSG 2nd RGT, 51st BN | Orthomosaic Mapping Mission (Fall Creek Falls) |

## VHF Plan

VHF coordinates **between drone team and Field CP at Fall Creek Falls**, plus tactical channels at Mt. Carmel and JBAT sites. Channel assignments per mission:

| Mission | Channel |
|---------|---------|
| Mapping (Fall Creek Falls) | TNSG01 |
| JBAT (bridge) | TNSG02 |
| **Mt. Carmel Site Defense** | **TNSG04** |

VHF channel matrix (Annex H, abridged):

| # | Name | Rx Freq | Tx Freq | Tone Type | Tone Freq |
|---|------|---------|---------|-----------|-----------|
| 1 | TNSG01 | 139.1625 | 139.1625 | — | 151.4 |
| 2 | TNSG02 | 139.1750 | 139.1750 | — | 151.4 |
| 3 | TNSG03 | 140.2875 | 140.2875 | — | 151.4 |
| 4 | TNSG04 | 141.3500 | 141.3500 | — | 151.4 |
| 5 | TNSG05 | 141.9625 | 141.9625 | — | 151.4 |
| 6 | TNSG06 | 149.1250 | 149.1250 | — | 151.4 |
| 7 | TNSG07 | 141.3500 | 149.1250 (offset 7.775−) | — | 151.4 |

**Note:** No repeater used during the exercise.

## VHF Call Signs (Excerpt — 3 RGT)

| Unit | Call Sign |
|------|-----------|
| **3rd REG** | **Buccaneer** |
| 3 RGT 2 BN | Senator |
| 3 RGT 3 BN | Pioneer |
| 3 RGT 4 BN | Tornado |
| (DIV HQ) | Raider |
| (HHC) | Governor |
| (61st) | Stinger |
| (1 RGT) | Tiger |
| (2 RGT) | Commodore |
| (4 RGT) | Mocs |

Second-digit suffix conventions: 1=G/S1, 2=G/S2, 3=G/S3, 4=G/S4, 5=XO, 6=CO, 7=CSM, G6/S6 (no suffix). Full table in Annex H source.

## PACE Plan (per Annex H)

- **Primary:** Voice via USB (HF SSB)
- **Alternate:** SHARES WINLINK (Pactor / VARA / Telnet) to AAN4YR
- **Contingency / Emergency:** Frequency change driven by NCS; announcement via voice and WINLINK

**Frequency-change protocol:** Any change is sent by NCS to all RTOs via SHARES WINLINK. RTOs check WINLINK before any HF operation. Passwords and accounts must be valid.

**Power:** Maximum SSB voice on UPCOMM. Digital modes capped at ½ rated output.

**Net cycle:** AAN4YR opens net 18:00 Zulu and announces close ≤ 18:30 Zulu via voice and WINLINK. DIV TOC may close early.

## Reporting / Forms Conventions

- **ICS 205** — channel/frequency assignments per operational area (separate from Annex H tables).
- **ICS 213** — General Message format. Line 7 begins and ends with **"EXERCISE EXERCISE EXERCISE"** for all exercise traffic, voice or digital.
- **ICS 214** — team activity log.
- **ICS 309** — HF station communications log. NCS retains station logs ≥ 1 year.
- **WINLINK SPOTREP-2 / SITREP** formats may be requested as injects. Send to AAN4YR by default.
- "Never assume sent traffic is received and understood until the sender receives an acknowledgement."

## Action Items from 28 APR 26 Comms Discussion

1. **CW2 Roach** — work with TEMA and TNNG to set frequencies and schedule for the HF Net (voice + digital). Publish comms plan and schedule and request G6 review/approval. (Restated 27 APR — ownership of the comms-plan request moved from 3 RGT to **CW2 Roach (2 RGT)**; 3 RGT no longer needs to submit it separately.)
2. **G6 (LTC Hughes)** — disseminate approved plan to all TNSG units after final review.
3. **Each Regimental S6** — respond to CW2 Roach and G6 with intent to participate and personnel involvement.
4. **CW4 Simpson** — oversee P25 TACN radio use at field locations he designates; provide training as needed. ~10 TACN on hand at G6 + 10 additional requested from TNG.
5. **MAJ Wemyss** — publish AAR to LTC Estes and G6 upon exercise completion.
6. **TCAN radio request to LTC Hughes (G6)** — covers 3 RGT (3 ea), JBAT (3 ea).
7. **Send slide presentation** to call participants (action open).

## 27 APR HF / WinLink Direction (LTC Estes via MAJ Wemyss)

After several telecoms with S6/G6 personnel, the agreed direction is:

- All regiments, locations, and the JOC participate in HF Network communications **per a published schedule** during 13-17 MAY (as practical).
- 2 RGT 51st SIG sets up and maintains a **TOC at Fall Creek Falls 12-13 MAY** supporting HF, drone, and TACN missions.
- **Stress HF throughout the exercise** to bank repetitions (LTC Estes' direction to CW2 Roach).
- The TNMAN comms plan will be in the **next FRAGO** (DIV FRAGO) per SGM Nunley's tasking.

## Cross-References

- [Reference Index → Annex H source](/docs/source/TNMAN-Annex-H.docx)
- [Reference Index → 28 APR meeting notes](/docs/source/TNMAN-Comms-Discussion-Notes-28APR.docx)
- [Reference Index → TNSG Radio Contacts (12 MAY 25)](/docs/source/TNSG-Radio-Contacts.xlsx)
- [Comms Log](/comms.md) — full traffic on 27-28 APR
- [Planning Gaps](/planning-gaps.md) — HF/TACN/Starlink open items
- [Execution Matrix](/docs/execution-matrix.md) — Comms swim-lane
