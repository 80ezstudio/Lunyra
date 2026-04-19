/**
 * CONFIG.js — Single source of truth for all values that need verification.
 * Update values here, then re-deploy. All HTML/templates reference these.
 *
 * VERIFIED values: copy from verified source and remove the ASSUMPTION comment.
 * ASSUMPTION values: marked with "ASSUMPTION:" — replace before deploying.
 */

window.LUNYRA_CONFIG = {

  // ── DOMAIN ────────────────────────────────────────
  // ASSUMPTION: Replace with real domain once chosen.
  DOMAIN: 'https://80ezstudio.github.io/Lunyra',

  // ── PLAY STORE ────────────────────────────────────
  // ASSUMPTION: Replace with actual Play Store URL once listing is live.
  PLAY_URL: 'https://play.google.com/store/apps/details?id=com.lunyra.app',

  // ── CONTACT ───────────────────────────────────────
  // ASSUMPTION: Replace with real contact email.
  CONTACT_EMAIL: '80ezstudio@gmail.com',

  // ── SOCIAL IMAGE ──────────────────────────────────
  // ASSUMPTION: Create and upload og-image.png (1200×630px) before deploying.
  OG_IMAGE: 'https://80ezstudio.github.io/Lunyra/assets/og-image.png',

  // ── FAVICON ───────────────────────────────────────
  // ASSUMPTION: Create and upload favicon.png (512×512px, transparent) before deploying.
  FAVICON: 'favicon.png',

  // ── APP PACKAGE ───────────────────────────────────
  // ASSUMPTION: Verify this matches the actual Play Store listing package name.
  PACKAGE_ID: 'com.lunyra.app',

  // ── RATING (leave empty until real Play Store data exists) ──
  // ASSUMPTION: Do not display star ratings until verified from Play Console.
  PLAY_RATING: '',        // e.g. '4.7' — leave empty if not yet available
  PLAY_RATING_COUNT: '',  // e.g. '312' — leave empty if not yet available

  // ── SCREENSHOTS ───────────────────────────────────
  // ASSUMPTION: Replace with real screenshot URLs once available.
  SCREENSHOTS: {
    home:       'assets/screenshot-home.png',
    soundscape: 'assets/screenshot-soundscape.png',
    ambient:   'assets/screenshot-ambient.png',
    breathing: 'assets/screenshot-breathing.png',
    home2:     'assets/screenshot-home-2.png',
  }
};
