# TabulaKit

TabulaKit is a documentation site template powered by [Docsify](https://docsify.js.org/). It renders markdown files as a single-page application with zero build step — edit markdown, push, and your site updates automatically.

## Repository Structure

```
tabulakit/
├── site/                      # All site content lives here
│   ├── index.html             # Docsify app shell (rarely needs editing)
│   ├── config.js              # Site name, theme colors, Docsify options
│   ├── auth-config.js         # Authentication mode and Firebase config
│   ├── _sidebar.md            # Navigation sidebar
│   ├── README.md              # Home page content
│   ├── getting-started.md     # Getting started guide
│   ├── 404.html               # SPA routing fallback
│   └── *.md                   # Your documentation pages
│
├── firebase.json              # Firebase hosting config (the only active target)
├── .firebaserc.template       # Firebase project ID template
│
└── .claude/
    ├── CLAUDE.md              # This file
    ├── settings.json          # Permissions and hooks
    └── commands/              # Slash command skills
```

## How to Help the User

### Adding Content

1. Create a new `.md` file in `site/`
2. Add a link to it in `site/_sidebar.md`
3. That's it — Docsify picks it up automatically

### Sidebar Navigation

`site/_sidebar.md` controls the left navigation. Format:

```markdown
- [Page Title](filename.md)
- **SECTION HEADER**
- [Another Page](another.md)
```

Bold text creates section headers. Indentation creates nested items.

### Site Configuration

`site/config.js` controls the site identity and theme:

- `name` — site title (shown in sidebar and browser tab)
- `description` — subtitle text
- `logo` — path to a logo image (optional, shown in sidebar)
- `theme.color` — primary accent color (hex value)
- `theme.sidebarWidth` — sidebar width in CSS units
- `theme.baseFontSize` — base font size in CSS units
- `docsify.subMaxLevel` — heading depth shown in sidebar
- `docsify.search` — enable/disable full-text search

### Authentication

`site/auth-config.js` controls access. Three modes:

| Mode | Effect |
|------|--------|
| `"public"` | No sign-in required (default) |
| `"domain"` | Google sign-in, restricted to one domain |
| `"allowlist"` | Google sign-in, restricted to specific emails |

Domain and allowlist modes require Firebase config values. See `site/deploy-firebase.md`.

### Deployment

**Firebase is the only active deployment target.** The site runs in `"domain"` auth mode (restricted to `tnstateguard.org`) — Firebase Hosting is the host where the auth redirect URIs are whitelisted and where the content is intended to live. GitHub Pages and Netlify have been intentionally removed; do not re-add them.

| Target | Config File |
|--------|-------------|
| Firebase | `firebase.json` · `.firebaserc` |

Firebase deploys are manual: `npx firebase-tools deploy --only hosting`. Push-to-main does not trigger any deploy.

### Local Preview

Each site has a preview port stored in `.tabulakit/config.json` (`previewPort` field, range 3100–3800). Use that port:

```bash
npx live-server site --port=<previewPort from .tabulakit/config.json>
```

## Working with This Repo

- **Content goes in `site/`** — all markdown files, images, and assets
- **Never edit `index.html`** unless you know what you're doing — it contains the Docsify runtime, theme, and auth logic
- **Config changes go in `config.js` and `auth-config.js`** — not in `index.html`
- **Commit messages** should be concise and descriptive
- **Push to `main`** does NOT auto-deploy. Firebase deploys are manual via `npx firebase-tools deploy --only hosting`.

## Available Skills

| Skill | Purpose |
|-------|---------|
| `/startup` | Initial site setup wizard — name, theme, deployment target |
| `/orient` | Save session state so the next Claude Code session picks up where you left off |
| `/publish` | Save and publish changes to the live site |
| `/tabula-update` | Check for and apply the latest TabulaKit template improvements |

## Permissions

This repository's `.claude/settings.json` grants broad file access so you can freely edit site content, configuration, and documentation without permission prompts. This is intentional — TabulaKit is a content-focused project where most work is editing markdown and config files.
