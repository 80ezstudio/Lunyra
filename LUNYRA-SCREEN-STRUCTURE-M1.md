# Lunyra Screen Structure — M1 Lock

## 1) Finalized Setup/Settings Layout (MVP)
Top to bottom order:
1. Header (Lunyra title + subtle subtitle)
2. Resonance selector (pill group): Still / Soft / Balanced / Bowl / Deep
3. Atmosphere selector (card/pill group): Starry Night / Ambient Ring / Audio Only
4. Color selector (compact premium chips; contextual only — shown for Ambient Ring, hidden for Starry Night and Audio Only)
5. Session Length selector (15m, 30m, 1h, 2h, 4h, 8h, Custom)
6. More Options (collapsible):
   - Fade out on end
   - Night level / dimness
   - Breathing pace
   - Remember last settings
   - Screen Behavior
7. Fixed bottom Start button

Design constraints:
- dark, restrained, elegant spacing
- no cluttered dashboard feel
- setup is clear and quick (<20 sec path to Start)

## 2) Finalized Splash Direction
- Duration: auto transition up to ~2.5–3s
- Tap-to-skip enabled
- Starry near-black backdrop, subtle glow
- Center logo mark + “Lunyra” wordmark
- Optional developer name placeholder area (to fill later)
- No loud animation; soft fade only

## 3) Finalized Playback Interaction Model (MVP)
Default playback state:
- full-screen immersive view
- controls hidden

Gestures:
- Single tap: show temporary overlay controls (auto-hide ~3s)
- Double tap: quick pause/resume

Overlay controls:
- Pause/Resume
- Session Settings (bottom sheet)
- End Session
- Remaining time

Quick settings in playback:
- opens without hard exiting session
- closing bottom sheet returns directly to live session
- applies live where possible to keep calm flow

## 4) Live-update Matrix (during playback)
Live update: YES
- Resonance profile (engine crossfade hook)
- Atmosphere mode
- Ring color
- Night level / brightness
- Breathing pace (ambient ring)

Live update: CONDITIONAL
- Timer extension/reduction (safe guard: never negative; smooth UX)

Live update: NO (requires session restart in MVP)
- Deep structural content-pack switch (future)

## 5) M1 Progress Snapshot (first milestone)
Completed now:
- M1 screen architecture lock (this doc)
- First UI scaffold code started for:
  - Splash screen
  - Setup screen
  - Playback screen
- Basic nav flow scaffold:
  Splash -> Setup -> Playback

Scaffold paths:
- `lunyra-android/app/src/main/java/com/lunyra/app/ui/screens/SplashScreen.kt`
- `lunyra-android/app/src/main/java/com/lunyra/app/ui/screens/SetupScreen.kt`
- `lunyra-android/app/src/main/java/com/lunyra/app/ui/screens/PlaybackScreen.kt`
- `lunyra-android/app/src/main/java/com/lunyra/app/nav/LunyraNav.kt`
- `lunyra-android/app/src/main/java/com/lunyra/app/ui/model/LunyraUiModels.kt`

Next (M2):
- convert placeholder controls into premium visual language from references
- add quick settings bottom sheet with live apply
- begin renderer hooks for StarryNight/AmbientRing/AudioOnly
