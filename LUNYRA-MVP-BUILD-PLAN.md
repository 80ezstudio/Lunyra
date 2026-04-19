# Lunyra MVP Build Plan (Source of Truth: 2026-03-17 brief)

## 0) Lock + Scope
- Active app: **Lunyra only**
- Fedora/Fidara: **paused archive only**
- Platform: **Android only**
- Business model MVP: **paid one-time (~£1.69), no ads, no subscription**
- Product posture: premium, dark, minimal, immersive, sleep-friendly

## 1) MVP Deliverables
1. Splash screen (max 3s, tappable skip, branded mood)
2. Setup screen (Resonance, Atmosphere, Color, Session Length, More Options)
3. Start session flow to immersive playback
4. Playback screen with:
   - full-screen atmosphere rendering
   - single tap: temporary controls overlay
   - double tap: pause/resume
   - quick settings bottom sheet (live apply where possible)
5. Session timer engine (15m/30m/1h/2h/4h/8h + custom-ready architecture)
6. Placeholder audio architecture ready for external assets + looping/fades/crossfade hooks
7. Last-used settings persistence

## 2) Milestones
### M1 — Foundation (now)
- Create modular project structure
- Define domain models + content registry
- Add navigation skeleton (Splash -> Setup -> Playback)
- Add settings persistence layer

### M2 — Setup UX
- Build premium dark setup UI
- Implement selector groups:
  - Resonance: Still / Soft / Balanced / Bowl / Deep
  - Atmosphere: Starry Night / Ambient Ring / Audio Only
  - Color: Amber / Blue / Violet / Moonlight / Teal (where relevant)
  - Session length presets + custom architecture hook
- Fixed bottom Start button

### M3 — Playback UX
- Full-screen immersive playback container
- Controls overlay (single tap)
- Double-tap pause/resume
- Quick settings bottom sheet in-session
- Live apply for resonance/atmosphere/color/brightness where possible

### M4 — Atmosphere Renderers
- Starry Night renderer (subtle twinkle, sparse stars, shooting star cadence ~45s)
- Ambient Ring renderer (single premium breathing ring, color-driven)
- Audio Only mode (near-black screen, minimal stimulation)

### M5 — Session + Audio Engine Stub
- Session state machine + timer
- Placeholder audio router:
  - play/pause/stop
  - fade-in/out hooks
  - crossfade hook
  - seamless loop strategy hooks
- Background playback policy hooks

### M6 — Polish + Test APK
- Motion smoothing + transition polish
- Battery/perf sanity pass
- Build debug APK and run device checklist

## 3) Acceptance Criteria (MVP)
- App opens with branded splash and transitions smoothly to setup
- User can configure and start session in <20 seconds
- Playback enters full-screen immersive mode without clutter
- Single tap overlay + double tap pause/resume work reliably
- Quick settings panel works without breaking immersion
- Session timer supports long durations up to 8 hours
- Last settings restored on relaunch
- Architecture supports adding sound packs/visual themes/presets without major rewrites

## 4) Explicit Non-Goals (this phase)
- No ad SDK
- No subscription/paywall complexity in MVP scaffold
- No overbuilt wellness dashboard features
- No final production audio assets yet (placeholder integration only)

## 5) Immediate Next Execution
1. Scaffold `lunyra-android` multi-module project
2. Implement core domain models + content registry
3. Wire nav skeleton and placeholder screens
4. Build first foundation APK
