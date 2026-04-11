/**
 * TabulaKit Site Configuration
 *
 * Edit these values to customize your documentation site.
 * The /startup wizard will configure these for you automatically.
 */
window.TABULAKIT_CONFIG = {
  // Site identity
  name: "TNMAN 2026",
  description: "3rd Regiment's mission planner for the May 2026 TNMAN homeland defense exercise, managed by the regimental S3 shop.",
  logo: "favicon.png",  // Path to logo image (optional, shown in sidebar)
  titlePrefix: "TNMAN",  // Prefix for browser tab title (format: "{prefix} :: {page}")

  // Theme colors (CSS custom property overrides)
  theme: {
    color: "#f97316",           // Primary accent color (headings)
    tealColor: "#3bc0cb",       // Secondary accent (links, nav highlights)
    sidebarWidth: "280px",
    baseFontSize: "20px"
  },

  // Docsify options (merged into window.$docsify)
  docsify: {
    subMaxLevel: 3,
    search: true
  }
};
