# Lunyra Audio Integration Path (MVP-ready, asset-drop friendly)

## Goal
Prepare a clean, low-risk path so Tim can drop real audio files from laptop into project assets later, with stable mapping to resonance profiles and session modes.

## 1) Asset folder structure (locked)
Base:
- `lunyra-android/app/src/main/assets/audio/`

Subfolders:
- `resonance/still/`
- `resonance/soft/`
- `resonance/balanced/`
- `resonance/bowl/`
- `resonance/deep/`
- `atmosphere/starry_night/`
- `atmosphere/ambient_ring/`
- `atmosphere/audio_only/`
- `ui/` (optional future UI sounds)

## 2) File naming convention (locked)
Use lowercase snake_case only.

Primary loop tracks:
- `res_<profile>_v<major>_<index>.ogg`
  - examples:
    - `res_still_v1_01.ogg`
    - `res_deep_v1_02.ogg`

Optional atmosphere layers:
- `atm_<mode>_v<major>_<index>.ogg`
  - examples:
    - `atm_starry_night_v1_01.ogg`
    - `atm_ambient_ring_v1_01.ogg`

Rules:
- format: `.ogg` preferred for size + looping behavior
- no spaces
- no uppercase
- stable filename once referenced in registry

## 3) Mapping model (resonance + atmosphere)
Runtime should map by ids, not by hardcoded file paths in UI logic.

Example mapping source:
- `app/src/main/assets/audio/audio_registry.json`

Registry maps:
- resonance profile id -> list of primary loop tracks
- atmosphere mode id -> optional layer tracks
- crossfade compatibility tags

## 4) Looping / fade / crossfade requirements
- seamless looping:
  - decode + pre-roll next loop before boundary
  - no gap/click target
- fade-in:
  - default 1200–1800 ms at session start
- fade-out:
  - default 1800–2600 ms at session end/manual stop
- crossfade (resonance switch):
  - default 1500–2200 ms
  - maintain one active primary stream + one transition stream

## 5) Session behavior mapping
At session start:
1. choose resonance primary loop from registry (deterministic or weighted)
2. choose optional atmosphere layer track (if configured)
3. start with fade-in
4. timer end -> fade-out then stop

In-session live changes:
- resonance change -> crossfade to new mapped track
- atmosphere change -> add/remove/crossfade atmosphere layer as supported

## 6) Battery/perf guardrails
- max concurrent audio layers in MVP: 2
  - primary resonance + one atmosphere layer
- avoid unnecessary decoder churn
- reuse prepared players where possible
- background playback only when explicitly allowed in settings

## 7) Asset drop workflow (operator)
1. Put files in proper folders.
2. Update `audio_registry.json` entries.
3. Build debug APK.
4. Validate loop boundaries and transition quality on device.

## 8) Engineering guardrails (forward)
- keep content integration registry-driven (no UI hardcoded asset paths)
- avoid implementation choices tied to a single test device layout/behavior
- preserve module seams so future sounds/themes/features can be added without rewrites
- keep compatibility maintenance visible in release planning (SDK/AGP/Kotlin cadence)

## 9) Non-goals (this phase)
- no final sound design decisions yet
- no advanced mixer UI yet
- no DSP feature expansion beyond launch-critical fades/loops/crossfades