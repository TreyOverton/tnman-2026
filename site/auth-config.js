/**
 * TabulaKit Authentication Configuration
 *
 * AUTH MODES:
 *   "public"     - No authentication required (default)
 *   "domain"     - Google sign-in restricted to a specific domain
 *   "allowlist"  - Google sign-in restricted to specific email addresses
 *
 * FIREBASE SETUP (required for "domain" and "allowlist" modes):
 *   1. Create a Firebase project at https://console.firebase.google.com
 *   2. Enable Authentication > Google sign-in provider
 *   3. Add your domain to Authentication > Settings > Authorized domains
 *   4. Copy your config values below from Project Settings > General > Web app
 */
window.TABULAKIT_AUTH = {
  mode: "domain",

  // Firebase config (required for "domain" and "allowlist" modes)
  firebase: {
    apiKey: "AIzaSyCjjnBNxe_0cjGhvMNks8KsUmLnDrDyq_0",
    authDomain: "tnman-2026.firebaseapp.com",
    projectId: "tnman-2026",
    appId: "1:1072049931332:web:b4fd334af14d20804d6811"
  },

  // For "domain" mode: allowed Google Workspace domain
  allowedDomain: "tnstateguard.org",

  // For "allowlist" mode: specific email addresses
  allowedEmails: [
    // "user@example.com"
  ]
};
