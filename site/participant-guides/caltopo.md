# CalTopo — Mobile Setup and Use

CalTopo is the location-sharing app every TNMAN-26 participant runs on a personal mobile device. It gives the ICP — specifically the **Situation Unit (1SG Snow)** and **Safety Officer (SFC Sturgill)** — a live picture of where personnel are during the exercise window. With ~30+ PAX moving between the ICP, staging area, vehicles, and the screen-patrol footprint along US-11W, this is the most reliable way to keep accountability without burning radio time.

This guide is short on purpose. Set it up correctly once before 12 MAY 26, and it's hands-off during the exercise.

## Setup (do this before 12 MAY 26)

### 1. Install the app

| Platform | Install |
|----------|---------|
| iOS | Search "**CalTopo**" in the App Store |
| Android | Search "**CalTopo**" in Google Play |

The app is free for our use case.

### 2. Create or sign in

- Open CalTopo, tap **Sign In** — or create a free account if you don't have one.
- Use a **personal email**, not your `tnstateguard.org` email, so the account is yours after the exercise.

### 3. Grant location "Always" permission ← *the one step everyone gets wrong*

CalTopo can only share your location continuously if it has permission to access location **even when the app is not in the foreground**. This is the single most common setup failure.

**iOS:**

- Settings → CalTopo → **Location** → **Always**
- Settings → CalTopo → **Background App Refresh** → **On**
- Settings → CalTopo → **Precise Location** → **On**

If you grant only "While Using the App," your location stops updating the moment your screen locks. You'll appear frozen on the map.

**Android:**

- Settings → Apps → CalTopo → Permissions → Location → **Allow all the time**
- Disable any battery-saver "deep sleep" or "auto-restrict" feature for CalTopo. The control varies by manufacturer (Samsung, Pixel, Motorola each name it differently — search for "battery optimization" or "background activity").

### 4. Join the TNMAN-26 team map

The link to join the shared TNMAN-26 team map will be distributed at the **0600 daily briefing on 13 MAY** — and earlier via the participant pre-brief if available. Open the link on your phone; CalTopo will prompt you to add it to your map list.

After joining:

- You should see your **own marker** on the map (a colored dot with your callsign / name) within ~30 seconds
- You should see the markers for **other participants** who've joined and granted location permissions

If you don't see yourself, your "Always" location permission isn't set — go back to Step 3.

## Exercise-day procedure

### Before you leave home (each morning, 13/14/15 MAY)

- Phone fully charged
- CalTopo open, your dot visible on the team map, your callsign correct
- Bring a **charging cable + portable battery pack** if you have one

### At the ICP (0600 sign-in)

- The Situation Unit will verify your CalTopo dot is live as part of sign-in. If yours is not, troubleshoot before going to your assigned position.
- Lock your screen between active uses — CalTopo continues tracking when locked, as long as "Always" permission is granted.

### During the operational period

- Open the app every couple of hours just to confirm it's still running. Some phones aggressively kill background apps.
- If you change positions (staging → screen patrol → ICP, etc.), no action needed — your dot moves automatically.
- If you notice your dot is stuck or you've gone offline, return to the ICP and notify the Situation Unit.

### End of day

- Sign out at the ICP.
- You may turn off "Always" location permission overnight to save battery if you wish — turn it back on the next morning before you leave home.

### After ENDEX (15 MAY)

- After the debrief, you may turn off CalTopo location sharing entirely.
- The shared TNMAN-26 team map will be deleted within 30 days. Your account remains under your control.

## Privacy

- Your location is visible only to other participants on the TNMAN-26 team map.
- It is **not posted publicly**.
- It is **not retained beyond the exercise period**.
- The app does not record audio, video, or messages — only your location point and timestamp.

## Battery reality check

Continuous GPS at moderate accuracy uses ~10-20% battery per hour on most phones.

- A daily 0600-2030 window is ~14 hours.
- A fully charged phone with light other use may last most of the day, but **bring a charger or battery pack regardless**.
- Logistics is planning a **multi-USB charging strip** at the ICP staging area.

## If you don't have a personal mobile device

This is unusual but possible. If you cannot run CalTopo on a personal device, notify **1LT Fielitz-Scarbrough (RUL)** at sign-in. The Situation Unit will track your location through periodic radio check-ins via your section's TACN/VHF callsign. Plan accordingly with your Section Chief.

## Troubleshooting

| Symptom | Cause / fix |
|---------|-------------|
| My dot is frozen | "Always" permission not set, or battery-optimization is killing the app in background. Re-check Step 3. |
| App crashes when I open it | Force-quit, reinstall. If still failing, sign in on a different device or fall back to radio check-ins. |
| I can see myself but not others | You're on a personal map, not the shared team map — re-tap the team map link. |
| Battery drains fast | Lower screen brightness; close other apps; use a battery pack. CalTopo is the dominant drain regardless. |
| I left the app and now I'm offline on the team map | Reopen the app. Background activity must be enabled. |

## Why this matters (one paragraph)

Real-time team tracking lets the **Safety Officer** find anyone who needs help fast, lets the **Situation Unit** maintain an accurate picture without burning every radio check, and lets the **IC** see at a glance whether the team is where the IAP says they should be. We don't have armed PAX, we're scattered across an external perimeter and an interior ICP, and we have one "almost-actual" foot patrol on US-11W — losing track of a person on this exercise is a real-world risk, not just a training inefficiency. A working dot on the team map is your single most reliable comms.

## Related

- [Common Expectations](/participant-guides/participant-guides/common.md) — full participant baseline
- [Execution Matrix](/docs/execution-matrix.md) — what's happening when, so you know if your dot should be moving
- [Situation Unit Leader role](/participant-guides/participant-guides/situation-unit-leader.md) — who watches the team map
