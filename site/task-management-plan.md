---
title: "Implementation Plan: Task Tracking"
description: "Firestore-backed task tracker integrated into the planner site as a tabbed second view; prototype for TabulaKit v2 task tracking on AWS"
status: draft
created_date: 2026-05-06
author: "1LT Aaron Overton, ASST S3"
---

# Implementation Plan: Task Tracking

> **Status:** Draft — pending review by LTC John Sheaf and 1LT Aaron Overton before the execution task list is captured. Companion to the participant portal plan; intended as the reference implementation for TabulaKit v2 task tracking.

## 1. Situation

### Background

LTC John Sheaf and 1LT Aaron Overton are conducting an end-to-end review of this planner site to identify the work remaining before TNMAN execution (12 MAY 26). Items on that punch list need to be captured, assigned, commented on, and tracked through to completion. There is no tracking mechanism on the site itself today; the existing GitHub-issues skills (`/chart`, `/horizon`, `/path`) do not fit, because most stakeholders — including LTC John Sheaf — do not have GitHub accounts and cannot be assigned to issues.

### Constraints

- **No external accounts for users.** Every site user must be able to view, create, comment on, and update tasks without leaving the site or signing up for anything new. The only sign-in is the existing Google sign-in.
- **Single auth surface.** Firebase Auth is already domain-restricted to `tnstateguard.org`. The task system reuses it; users sign in once.
- **Assignment by email.** Assignee = `tnstateguard.org` user (or future allowlisted external email, per the portal pattern). No GitHub usernames.
- **Interactive on the deployed site.** Viewing, commenting, and "mark for review" must work from the live site for non-admin users. AI (this assistant, Claude Code) handles bulk creation from the planning conversation.
- **Expedient.** Useful for tonight's LTC John Sheaf / 1LT Aaron Overton review; functional within roughly one working day.
- **Re-usable.** This is the prototype for TabulaKit v2 task tracking. TabulaKit v2 is targeted at AWS (DynamoDB + AppSync + Cognito), so the data layer must sit behind an interface thin enough to swap implementations without rewriting the UI.
- **UI honesty.** The planner site is Docsify. Embedding an Astro app inside Docsify is awkward and fragile; better to add tabs at the site shell level that switch between Docsify content and a tasks UI. The tasks UI is vanilla JS + the Firebase web SDK already loaded for auth — no Astro, no React.

### Why Firestore (not GitHub Issues)

| | GitHub Issues | Firestore |
|---|---|---|
| Stakeholders without GitHub accounts | Cannot be true assignees; needs label-as-assignee workaround | Assignee = email; works for any `tnstateguard.org` user out of the box |
| Site interactivity (view/comment/transition) | Static site → GitHub API requires a server-side proxy holding a token | Browser SDK writes directly with rule enforcement; auth already wired |
| Reusability for TabulaKit v2 (AWS-bound) | GitHub-specific; doesn't translate to AWS | Firestore → DynamoDB is a near-1:1 schema/rules translation behind a thin store interface |
| Real-time updates (multiple reviewers seeing the same list) | Polling or webhook | Native `onSnapshot` |
| Existing `/chart`, `/horizon`, `/path` skills | Already wired | Need to be rebuilt — but only the AI side, and only what we use |

The cost of rebuilding the AI-side skills for Firestore is real, but small: those skills are thin wrappers over `gh issue create` etc. The benefit (every stakeholder can participate, the result generalizes to TabulaKit v2 on AWS) outweighs the rebuild.

## 2. Mission

Stand up a Firestore-backed task tracker integrated into this planner site as a **tabbed second view** alongside the existing Docsify content, so 1LT Aaron Overton, LTC John Sheaf, and any `tnstateguard.org`-signed-in user can create, view, comment on, and transition tasks tonight, with the data layer abstracted thinly enough that the same UI ports to DynamoDB + AppSync for TabulaKit v2.

## 3. Commander's Intent

### Purpose

So that the LTC John Sheaf / 1LT Aaron Overton site review tonight produces a captured, assigned, trackable backlog rather than a verbal punch list, and so that the patterns we settle on (auth-restricted Firestore, abstract store interface, tabs-in-shell UI integration) become the reference implementation for TabulaKit v2's task tracking on AWS.

### Success Criteria

| Metric | Target | Rationale |
|---|---|---|
| Tab bar visible on planner site (Plan & Docs / Tasks) | Live before tonight's review | Tonight's gate |
| Signed-in user can create a task on the deployed site | <30s for a basic task | Capture must be friction-free during review |
| Signed-in user can comment on any task | Comments persist with attribution | Discussion must thread |
| Signed-in user can transition own/assigned task ("mark for review") | One click | Status changes should not require admin intervention |
| Task list filters by status, area, assignee | All three present | Bare minimum for a 50–100 item list |
| AI (Claude Code) can bulk-create tasks from conversation | Service-account write path documented and working | Lets us seed the backlog from the review notes immediately |
| Firestore rules unit-testable and enforced | Anyone signed in reads; only creator/assignee/admin transitions; only admin deletes | Defense in depth |
| Store interface in `tasks-store.js` swappable | All UI calls go through the interface; no direct `firebase/firestore` imports in components | Portability gate for TabulaKit v2 |

### What "good" looks like at end of tonight

LTC John Sheaf and 1LT Aaron Overton finish the review with roughly 30 captured tasks in the system, each with title, area, assignee, brief description; both can pull up the Tasks tab on their phones and see the same live list; comments thread on individual tasks; a couple of items already moved to "in review."

## 4. Design Decisions (COA Analysis)

### 4.1 Backend — Firestore vs. GitHub Issues vs. roll-our-own

Covered in Section 1; **Firestore** is the choice. GitHub Issues fails the no-external-accounts and on-site-interactivity constraints; rolling our own server is unnecessary infrastructure when Firestore already covers domain-auth + rules + real-time.

### 4.2 UI integration — Docsify-embedded vs. tabbed shell vs. separate app

| | Embedded inside a Docsify page | Tabbed shell (separate `tasks.html`, top tabs) | Separate Astro/SPA app |
|---|---|---|---|
| Implementation cost | Medium — fights Docsify lifecycle, hash routing collides | Low — small topbar in `index.html` + new `tasks.html` | High — second app surface, second deploy target |
| Cognitive cost for users | Low (one URL) | Low (tabs feel like one site) | Medium (two URLs to remember) |
| Code separation | Bad — tasks JS lives inside markdown content | Good — clean HTML entrypoint | Good, but more infra |
| Portability to TabulaKit v2 | Tied to Docsify | Pattern transfers — any docs framework can sit alongside a tasks page | Heavyweight |
| Mobile UX | Constrained by Docsify layout | Full control of `tasks.html` layout | Full control |

**Recommendation: Tabbed shell.** Add a small topbar in [site/index.html](site/index.html) with two tabs ("Plan & Docs" | "Tasks"). The Tasks tab navigates to `tasks.html` at the site root — a plain HTML file that loads the same Firebase config and renders a tasks SPA in vanilla JS. Same Firebase Auth, same Firebase Hosting site, just two entrypoints. The user feels it as "tabs in one site." Docsify's sidebar is automatically absent on `tasks.html` because Docsify isn't loaded there.

This pattern is what TabulaKit v2 generalizes: "TabulaKit shell" is `[Docs entrypoint, Tasks entrypoint, ...others]` with shared auth and a top tab bar.

### 4.3 Real-time — polling vs. Firestore listeners

`onSnapshot` listeners on the task list and on the open task detail. Detached on tab change / page hide. At our scale (a few dozen tasks, fewer than 10 simultaneous viewers) this is well within Firebase's free tier and well within battery budget on phones.

### 4.4 Assignment model — single assignee vs. multiple

**Single assignee** for v1. "Watcher" / "cc" semantics are not needed for tonight's purpose; the comments thread serves group discussion.

### 4.5 Storage abstraction — direct Firestore calls vs. store interface

**Store interface.** All UI components go through `lib/tasks-store.js` with methods:

```
listTasks(filters) -> Promise<Task[]>
subscribeTasks(filters, callback) -> unsubscribe
getTask(id) -> Promise<Task>
subscribeTask(id, callback) -> unsubscribe
createTask(input) -> Promise<Task>
updateTask(id, patch) -> Promise<Task>
deleteTask(id) -> Promise<void>
listComments(taskId) -> Promise<Comment[]>
subscribeComments(taskId, callback) -> unsubscribe
addComment(taskId, text) -> Promise<Comment>
```

The Firestore implementation lives in `lib/tasks-store-firestore.js`. The DynamoDB + AppSync implementation will live in TabulaKit v2 as `lib/tasks-store-appsync.js` with the same exported surface. UI imports `./tasks-store` and the build chooses an implementation. **This is the primary portability gate.** Component code never sees `firebase/firestore` directly.

### 4.6 Authentication mode — domain only vs. domain + allowlist

For the planner site (current scope), **domain-only** is sufficient — the planner audience is internal. The portal plan already covers a hybrid `access/allowedEmails` mechanism; if/when tasks need external collaborators, we adopt the same hybrid model. We leave it out for v1 to ship faster.

### 4.7 Admin model

Same `access/admins` collection introduced for the portal. v1 admins: 1LT Aaron Overton and LTC John Sheaf. Admin powers in the task system: delete any task, change any field on any task, edit any comment.

## 5. Architecture

### 5.1 Repo layout (additions only)

```
site/
├── index.html                     # add small topbar with tabs (Plan & Docs / Tasks)
├── tasks.html                     # NEW — tasks SPA entrypoint
├── css/
│   └── tasks.css                  # NEW — tasks UI styling
├── js/
│   ├── tasks-app.js               # NEW — top-level tasks app boot
│   ├── tasks-store.js             # NEW — store interface (re-exports impl)
│   ├── tasks-store-firestore.js   # NEW — Firestore implementation
│   ├── tasks-list.js              # NEW — list view
│   ├── tasks-detail.js            # NEW — detail view
│   ├── tasks-create.js            # NEW — new-task form
│   └── shell-tabs.js              # NEW — topbar tab logic, shared by index.html and tasks.html
firestore.rules                    # NEW (or extend portal rules) — task & comment rules
firestore.indexes.json             # NEW — composite indexes for filters
scripts/
└── seed-tasks.mjs                 # NEW — admin SDK script for AI-side bulk task creation
```

### 5.2 Firestore schema

| Collection | Doc shape | Read | Write |
|---|---|---|---|
| `tasks/{autoId}` | `{ title: string, description: markdown, area: string, status: 'open'\|'in-review'\|'done', assignee_email: string \| null, assignee_name: string \| null, created_by_email, created_by_name, created_at: ts, updated_at: ts, due_date?: ts, priority?: 'low'\|'med'\|'high' }` | any signed-in user | create: any signed-in user (must set `created_by_email` to self); update: assignee, creator, or admin; delete: admin |
| `tasks/{taskId}/comments/{autoId}` | `{ author_email, author_name, text: markdown, created_at: ts }` | any signed-in user | create: any signed-in user (must set `author_email` to self); update: own comment only; delete: admin or own |
| `access/admins` | `{ emails: string[] }` (single doc, shared with portal plan) | any signed-in user | admins only (bootstrap via Firebase console: 1LT Aaron Overton and LTC John Sheaf) |
| `taskAreas/{slug}` (v2 optional) | `{ slug, label, color? }` | any signed-in user | admins only |

**Indexes:**
- `tasks` by `status` + `updated_at desc`
- `tasks` by `assignee_email` + `updated_at desc`
- `tasks` by `area` + `updated_at desc`

### 5.3 Firestore rules (sketch — to be unit-tested before going live)

```
match /databases/{database}/documents {

  function isSignedIn() {
    return request.auth != null
      && request.auth.token.email_verified == true
      && request.auth.token.email.matches('.*@tnstateguard\\.org$');
  }

  function isAdmin() {
    return isSignedIn()
      && get(/databases/$(database)/documents/access/admins).data.emails.hasAny([request.auth.token.email]);
  }

  match /tasks/{taskId} {
    allow read: if isSignedIn();
    allow create: if isSignedIn()
                  && request.resource.data.created_by_email == request.auth.token.email;
    allow update: if isSignedIn() && (
                    resource.data.assignee_email == request.auth.token.email ||
                    resource.data.created_by_email == request.auth.token.email ||
                    isAdmin()
                  );
    allow delete: if isAdmin();

    match /comments/{commentId} {
      allow read: if isSignedIn();
      allow create: if isSignedIn()
                    && request.resource.data.author_email == request.auth.token.email;
      allow update: if isSignedIn()
                    && resource.data.author_email == request.auth.token.email;
      allow delete: if isAdmin() || resource.data.author_email == request.auth.token.email;
    }
  }

  match /access/admins {
    allow read: if isSignedIn();
    allow write: if isAdmin();
  }
}
```

Rules will be unit-tested with `@firebase/rules-unit-testing` before any task is written. The hybrid (domain + allowlist) variant from the portal plan can replace `isSignedIn()` later without touching the per-collection rules.

### 5.4 UI surfacing — tabs and routes

**Top tab bar** is a thin, sticky horizontal bar at the top of every page. Two tabs:

- **Plan & Docs** — active when on `/index.html` or any `/#/...` Docsify route
- **Tasks** — active when on `/tasks.html` or any `/tasks.html#...` route

The tab bar lives in a small shared snippet ([shell-tabs.js](site/js/shell-tabs.js), once it exists) injected by both [index.html](site/index.html) and `tasks.html`. Visual: ~40px tall, primary theme color (#f97316) underline on the active tab, sign-out + signed-in-user pill on the right. Mobile: same height, tabs centered, user pill collapses to an avatar.

**Tasks SPA routes** (hash-based, simple):

| Route | Purpose |
|---|---|
| `tasks.html` | List view (default filter: open) |
| `tasks.html#filter=mine` | List filtered to assignee = me |
| `tasks.html#filter=area:operations` | Filtered by area |
| `tasks.html#new` | New-task form |
| `tasks.html#task=<id>` | Detail view for one task (full-screen on mobile, side-pane on desktop) |

**List view layout:**

- Sticky filter bar: status (open / in-review / done / all), area, assignee, "mine" toggle
- Sticky **+ New Task** button
- List rows: title, area pill, assignee initials, status pill, last-update relative time
- Row click → detail
- Mobile: single column; filter bar collapses behind a "Filters" button

**Detail view layout:**

- Title (editable inline by anyone with edit rights)
- Status pill (clickable for assignee/creator/admin → status select)
- Metadata table at top: area, assignee, due date, priority, created-by, created-at
- Description (markdown rendered; pencil icon to edit)
- Comments thread chronological; new-comment textarea sticky at bottom
- "Mark for review" / "Mark done" buttons visible per role

**New-task form:**

- Title (required), description (markdown), area (curated dropdown), assignee (dropdown of known users + free-text email), due date (optional), priority (optional)
- Submit → `tasks-store.createTask` → navigate to detail view

### 5.5 AI-side task creation

Bulk creation from the planning conversation runs through `scripts/seed-tasks.mjs`, an Admin-SDK Node script that authenticates with a service-account JSON. Input is a JSON array of task objects (or stdin); the script fans them out to `tasks/` documents. Used during tonight's review to capture the punch list as fast as LTC John Sheaf and 1LT Aaron Overton identify items.

This is the only path that bypasses the auth domain check — service accounts have full access by default. The service-account JSON is gitignored and lives outside the repo (e.g. `~/.config/tnman-2026/firebase-admin.json`); the script reads its path from an env var.

### 5.6 Portability to TabulaKit v2 / DynamoDB

The store interface is the contract. The DynamoDB + AppSync implementation maps as follows:

| Firestore primitive | DynamoDB / AppSync equivalent |
|---|---|
| Collection `tasks` | DynamoDB table `Tasks`, partition key `id` |
| Subcollection `comments` | Separate `TaskComments` table, partition key `taskId`, sort key `createdAt#commentId` |
| `onSnapshot` | AppSync `@aws_subscribe` GraphQL subscription |
| Firestore rules | AppSync resolver authz directives + Cognito identity claims |
| Domain-restricted auth | Cognito user pool with email-domain check via pre-token-generation Lambda |
| `access/admins` doc | Cognito group `Admins` |

Schema field shapes are unchanged. Rules logic translates to AppSync resolvers that read `$context.identity.claims.email` and group memberships. The UI does not change; only `lib/tasks-store-*.js` changes.

## 6. Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Firestore rules misconfigured → leaked or blocked tasks | Low if unit-tested | High | Rules unit tests with `@firebase/rules-unit-testing` before any write goes live |
| Tab bar feels janky / visual regression on planner site | Medium | Medium | Keep topbar minimal (40px, theme color); test on mobile + desktop before tonight |
| Service-account JSON committed by accident | Low | High | Gitignore + path outside repo; `seed-tasks.mjs` reads from env var only |
| Tonight gate slips past LTC John Sheaf review | Medium | Medium | UI can be partial — list + create + detail without comments is still useful; comments can land same evening |
| TabulaKit v2 picks a different shape that obsoletes this work | Low | Low (already accepted) | This *is* the reference implementation; v2 is informed by it, not constrained against it |
| Hash-route SPA collides with Docsify hash routes | Low (different files) | Low | `tasks.html` is a separate entrypoint; Docsify never loads there |
| Astro participant portal and tasks SPA diverge in look/feel | Medium | Low | Defer cross-app design system to TabulaKit v2; for now tasks SPA matches planner site theme |

## 7. Decisions still open (for review)

1. **Areas list — derive or curate?** Recommend a curated dropdown matching the planner sidebar sections (Operations, Personnel, Planning, JAG, Orders, Supporting Docs, Participant Guides, Reference, OIC Notes, Training, Tech) plus "Other".
2. **Mobile-first or desktop-first for tonight?** LTC John Sheaf reviewing alongside 1LT Aaron Overton implies desktop. Recommend desktop-first layout, mobile-acceptable.
3. **AI write path — service account or signed-in user?** Service account is simpler; signed-in user (Claude Code authenticates as `aaron.overton@tnstateguard.org`) gives cleaner attribution. Recommend service account with `created_by_name: "Claude (on behalf of 1LT Aaron Overton)"`.
4. **Whether to keep `/chart`, `/horizon`, `/path` skills.** The GitHub-issue versions don't need to be deleted; they can co-exist for projects that want them. New skills (e.g. `/task-add`, `/task-list`) layer on top of `seed-tasks.mjs`.
5. **Markdown rendering on `tasks.html`.** Docsify's `marked` is already loaded on the planner site but won't be on `tasks.html`. Recommend a small standalone `marked` include on `tasks.html`.
6. **Where do tasks for *this build itself* live — inside this system, or in a flat list at the bottom of this plan?** Recommend the plan ships with a captured execution task list (per the user's process), then the system absorbs that list once running.
7. **Admin bootstrap.** Seed `access/admins` with `aaron.overton@tnstateguard.org` and `john.sheaf@tnstateguard.org` via the Firebase console before first deploy.

---

*Plan author: 1LT Aaron Overton. Pending review by LTC John Sheaf and 1LT Aaron Overton; execution task list to be captured after review.*
