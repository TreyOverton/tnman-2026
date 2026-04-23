# Task Organization

> **Status:** Draft. Uses the [ICP Organization reference](icp-org-reference.md) provided by LTC Sheaf as the structural template. Populated from the current [Mission Roster](roster.md). Every TBD must be resolved before orders issue on 30 APR 26.

## Structure Overview

```mermaid
graph TD
    IC["Incident Commander<br/>TF Commander"]
    IC --> CMD["Command Staff"]
    IC --> OPS["Operations<br/>(S3)"]
    IC --> PLN["Planning"]
    IC --> SUP["Support<br/>(S4)"]

    CMD --> PAO["PAO"]
    CMD --> LNO["Liaison (LNO)"]
    CMD --> SAF["Safety"]

    OPS --> STG["Staging Area<br/>Manager"]
    OPS --> AIR["Air Ops Branch<br/>(4/3)"]
    OPS --> SEC["SECFOR TF<br/>(3/3)"]

    PLN --> SIT["Situation Unit<br/>(S2)"]
    PLN --> RES["Resource Unit<br/>(S1)"]

    SUP --> COM["Comms Unit<br/>(S6)"]
    SUP --> MED["Medical Unit"]
```

## Incident Commander / TF Commander

| Role | Proposed | Notes |
|------|----------|-------|
| Incident Commander / TF Commander | **COL Roark (RGT CO)** | Designated by LTC Sheaf (text to 1LT Overton, 22 APR 26). |
| Deputy TF Commander | **TBD** | Typically the TF Commander's XO — candidate is **LTC Smith (RGT XO)** with COL Roark as IC. Not yet designated. |

## Command Staff

| Role | Proposed | Notes |
|------|----------|-------|
| **Public Information Office (PAO)** | **TBD** — pending assignment via LTC Epright (DIV PAO) | Open item on the [Mission Roster](roster.md). No 3 RGT personnel currently fills this slot. |
| **Liaison Officer (LNO)** | **TBD — LTC Smith or TF XO recommended** | LTC Smith (RGT XO) has the seniority and breadth of contacts to coordinate across TNNG, TEMA, HAAP, and supporting agencies. Alternative: one of the BN XOs. **Note:** CG intent also assigns 2 RGT LNO, 4 RGT LNO, and 2 DIV LNOs to 3 RGT TF — coordinate with incoming LNOs. |
| **Safety Officer** | **TBD — designation required** | No current 3 RGT Safety Officer on the mission roster. Must be designated before execution (also a [DD 2977](docs/dd2977.md) dependency). LTC Sheaf to assign. Recommend an MRC-1 officer with prior safety experience. |

## Operations Section (S3)

| Role | Proposed | Notes |
|------|----------|-------|
| **Operations Section Chief** | **LTC Sheaf (RGT S3)** — primary. **1LT Overton (ASST S3)** — alternate / battle captain. | LTC Sheaf is MRC-2; role-limited to ICP-interior by DD 2977. If LTC Sheaf is TF XO or LNO instead, 1LT Overton assumes Ops Section Chief. |
| **Staging Area Manager** | **SFC Bradley (HHC Rec NCO, MRC-1)** | Designated by LTC Sheaf (text 22 APR 26). |
| **Air Operations Branch (4 / 3)** | **Branch Chief: TBD**<br>**Part 107 Pilots: CPT Widner (4 BN XO), LT Hoskins (4 BN)** | Per LTC Sheaf 22 APR text: "4 BN won't be the Air Ops Branch Chief." Branch Chief now open — likely a DIV / adjacent-RGT assignment. **1LT Riley removed** from pilot list (not attending per same text). [Operational / NAI Graphics](docs/ops-graphics.md) TPFDD shows 5 sUAS positions on 14-15 MAY; RFF requests 3 operators total (some from adjacent RGTs). |
| **SECFOR Task Force (3 / 3)** | **TF Commander: MAJ Crosby (3 BN CO)**<br>**Assisting NCO: SFC Sturgill (S3 Ops NCO)** | 3 BN is the Focus of Main Effort (FOME). TF CDR designated by LTC Sheaf text 22 APR. **1LT Riley and SFC Ferguson are not attending** (same text) — the 3 BN XO / Acting BN 1SG slots at SECFOR TF are therefore not filled from 3 BN's primary chain. |

### SECFOR TF Subordinate Composition (Draft)

| Element | Personnel | Notes |
|---------|-----------|-------|
| A Co MP Team | SGT Malone (3 BN, MRC-3 — **single day only**), SGT Overton Ian (3 BN), PFC Human (3 BN), PV1 Gauthier (3 BN, MRC-4 — verify status) | A Co MP personnel from 3 BN. **SFC Ferguson (HQ Co 1SG) not attending** per LTC Sheaf 22 APR. |
| B Co MP Team | 2LT Steele (3 BN), PV2 Elrod (3 BN) | B Co MP personnel from 3 BN |
| 4 BN Augment | SSG Whalen (A Co 1SG), SSG Miles (MP Sqd Ldr, MRC-3 — **single day only**), 2LT Neisler (MRC-4 — verify), WO1 Hendon (MRC-4 — verify) | 4 BN named personnel from CPT Widner's list |
| 2 BN Augment (if available) | SFC Collins, SSG Burns (MRC-4 — verify), SSG Lillard, SGT Spence, SGT Walker (MRC-4 — verify), CPL Cate | 2 BN imported from alert roster; availability unconfirmed |

## Planning Section

| Role | Proposed | Notes |
|------|----------|-------|
| **Planning Section Chief** | **TBD** | Not directly staffed in the current roster. Options: **1LT Overton (ASST S3)** — natural fit for planning, though dual-hatted; or **CPT Meager's successor as S1 once identified** (CPT Meager is gone). LTC Sheaf to designate. |
| **Situation Unit (S2)** | **Unit Leader: 1SG Snow (HHC S2 NCO)** | Designated by LTC Sheaf (text 22 APR 26). Unit Leader is filled at the NCO level — no officer directly above 1SG Snow in the S2 chain, but the leader role is explicit. |
| **Resource Unit (S1)** | **Unit Leader: 1LT Fielitz-Scarbrough (HHC S1 Officer)** | Confirmed by LTC Sheaf (text 22 APR 26). 1LT Fielitz-Scarbrough is the RGT S1 and is already responsible for personnel tracking per the OPORD. MRC-2; role-limited to ICP-interior. |

## Support Section (S4)

| Role | Proposed | Notes |
|------|----------|-------|
| **Support Section Chief** | **TBD** | No dedicated RGT S4 officer on the roster. 3 BN has **2LT Garrison (BN S4)** and 4 BN has **2LT Neisler (BN S4, MRC-4 — verify)**. One of the BN S4s is likely dual-hatted as the task force S4 at ICP. LTC Sheaf to designate. |
| **Communications Unit (S6)** | **Unit Leader: CSM Rutherford (new 3 RGT S6 NCO)**<br>**3 BN S6: SSG Singh**<br>**3 BN S6 C&E Officer: CPT Moore (MRC-4 — verify)** | CSM Rutherford is the RGT S6 per LTC Smith's 2 APR email. SSG Singh moved from HHC to 3 BN as S6. Communication plan status is blocked on unresolved TACN radios, ATAK training, and Starlink — see [G6 Questions email](comms.md). |
| **Medical Unit** | **3 Green/Yellow tab medics attached from 61st MED BN (31st MED Co) — names TBD** | Per CG intent. Upgraded from 2 to 3. 61st MED BN CO is BG Cox. No 3 RGT organic medical personnel. |

## Attached Forces

| Unit | Role | Status |
|------|------|--------|
| 61st MED BN (31st MED Co) | 3 Medics (Green/Yellow tab) | Per CG intent; no names / ranks / MRC yet |
| 2 RGT | 1 LNO to ICP | Per CG enabling task; name TBD |
| 4 RGT | 1 LNO to ICP | Per CG enabling task; name TBD |
| DIV Staff | 2 LNOs to 3 RGT TF | Per CG enabling task; names TBD |
| DIV PAO | 1 PAO rep | Per CG enabling task; consolidates with TNARNG PAO |
| DIV Staff | On-site Mob Cell | Individual Orders Production |
| 1 RGT | 6 OPFOR at Holston | 13-15 MAY; not under 3 RGT C2 but on-site |

## Dependencies for Final Task Organization

This draft cannot be locked until the following are resolved. Each item also appears on [Planning Gaps](planning-gaps.md).

**Resolved by LTC Sheaf text 22 APR 26:** IC (COL Roark) · Staging Area Manager (SFC Bradley) · SECFOR TF CDR (MAJ Crosby) · Situation Unit Leader (1SG Snow) · Resource Unit Leader (1LT Fielitz-Scarbrough). Not attending: 1LT Riley, SFC Ferguson.

**Open:**

1. **Deputy TF Commander** — with COL Roark as IC, the candidate is LTC Smith (RGT XO); not yet designated.
2. **Air Operations Branch Chief** — LTC Sheaf 22 APR: "4 BN won't be the Air Ops Branch Chief." Now an open billet — likely DIV / adjacent-RGT fill.
3. **Safety Officer designation** — (Blocker per DD 2977.)
4. **Operations Section Chief** — LTC Sheaf or 1LT Overton, depending on TF XO / LNO decisions.
5. **PAO representative** — via LTC Epright.
6. **Planning Section Chief designation**.
7. **Support Section Chief designation** (likely one of the BN S4s dual-hatted).
8. **61st MED BN attachment names and MRC**.
9. **2 BN availability confirmation** (CPT Borrilez) — the 2 BN SECFOR augment cannot be assumed until this lands.
10. **MRC-4 status verification** for 8 personnel currently flagged as unverified.
11. **3 BN CSM vacancy** — confirm interim or acting.
12. **3 BN XO / Acting BN 1SG alternates** — with 1LT Riley and SFC Ferguson not attending, confirm whether MAJ Crosby designates internal alternates for the SECFOR TF or fills from the broader 3 BN roster.
