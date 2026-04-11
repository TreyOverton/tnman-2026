# Deploy to Firebase

Use Firebase if you want to control who can access your site. It supports three modes: fully public, restricted to a Google Workspace domain (e.g., everyone at `@yourcompany.com`), or restricted to a specific list of email addresses.

If you don't need access control, [GitHub Pages](deploy-github-pages.md) is simpler.

## What You Need to Do Manually

Firebase requires a few steps in your browser that Claude Code can't do for you.

### Step 1: Create a Firebase Project

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project**
3. Give it a name and follow the prompts (you can accept all defaults)
4. When it's done, note your **Project ID** — it's shown below the project name on the project home page

### Step 2: Register a Web App

1. On the Firebase project home page, click the **web icon** (`</>`) to add a web app
2. Give it a nickname (anything — e.g., "docs site")
3. You do **not** need Firebase Hosting checked here
4. Click **Register app**
5. You'll see a code block with your config values — **keep this page open**, you'll need these values in the next section

### Step 3: Enable Google Sign-In (Skip If Public)

Only needed if you're restricting access:

1. In the Firebase Console sidebar, click **Authentication**, then **Get started**
2. Click **Google** in the sign-in providers list
3. Toggle **Enable**, choose a support email, and click **Save**

That's everything in Firebase Console.

## What Claude Code Does for You

Tell Claude Code you want to deploy to Firebase and give it your Project ID and config values from Step 2. It will:

- Set up your `.firebaserc` with your project ID
- Update `site/auth-config.js` with your Firebase config and auth mode
- Install the Firebase CLI if needed
- Log you in (opens a browser window for Google sign-in)
- Run `firebase deploy`

Or if you prefer to do it yourself:

```bash
cp .firebaserc.template .firebaserc        # Copy the template
# Edit .firebaserc — replace YOUR_FIREBASE_PROJECT_ID with your actual project ID
# Edit site/auth-config.js — add your Firebase config values and set your auth mode
npm install -g firebase-tools               # Install Firebase CLI (once)
firebase login                              # Log in (opens browser)
firebase deploy                             # Deploy
```

Your site will be live at `https://YOUR_PROJECT_ID.web.app`.

## Choosing an Auth Mode

Edit the `mode` value in `site/auth-config.js`:

| Mode | Who Can Access | When to Use |
|------|---------------|-------------|
| `"public"` | Anyone | You want Firebase hosting but don't need access control |
| `"domain"` | Anyone with an `@yourcompany.com` Google account | Company or school internal docs |
| `"allowlist"` | Only specific email addresses you list | Small team or client-facing docs |

For **domain** mode, also set `allowedDomain` to your domain (e.g., `"yourcompany.com"`).

For **allowlist** mode, add email addresses to the `allowedEmails` list.

> **During development**, auth is automatically skipped on `localhost` so you can preview without signing in.

## Advanced: Custom Domain

1. In Firebase Console, go to **Hosting** > **Add custom domain**
2. Follow the DNS verification steps
3. If using auth, also add the domain under **Authentication** > **Settings** > **Authorized domains**
