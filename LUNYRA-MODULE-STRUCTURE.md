# Lunyra Modular Project Structure (Android)

## Proposed root
`/mnt/c/Users/timac/.openclaw/workspace/lunyra-android`

## Modules
- `app`
  - App entry, navigation graph, DI composition root
- `core-model`
  - Shared domain models (ResonanceProfile, AtmosphereMode, SessionConfig, SessionState)
- `content-registry`
  - Data-driven registries for resonance options, atmosphere descriptors, color presets, default timers
- `session-engine`
  - Session state machine, timer logic, pause/resume/end semantics
- `audio-engine`
  - Placeholder player interfaces + looping/fade/crossfade contracts; local asset mapping hooks
- `visual-engine`
  - Atmosphere renderer contracts + implementations (StarryNight, AmbientRing, AudioOnly)
- `feature-setup`
  - Setup screen UI + state
- `feature-playback`
  - Playback screen UI, overlay controls, in-session quick settings panel
- `feature-settings`
  - Shared settings and remember-last behavior
- `data-store`
  - Persistence for last used settings + lightweight app prefs
- `qa-observability`
  - FPS/frame-time hooks, playback state logs (debug only)

## Data-driven extension strategy
Add future content by extending registry entries, not UI rewrites.

### Example model stubs
- ResonanceProfile(id, title, audioProfileId, defaultVisualBias)
- AtmosphereMode(id, title, supportsColor, rendererId)
- VisualColorPreset(id, title, argbPrimary, argbGlow)
- SessionLengthPreset(id, label, durationMs?) // null => custom
- SessionConfig(resonanceId, atmosphereId, colorId?, durationMs, options)

## Rendering contracts
- `AtmosphereRenderer`:
  - `start(config)`
  - `pause()`
  - `resume()`
  - `stop()`
  - `update(configDelta)`

## Audio contracts
- `LunyraAudioEngine`:
  - `prepare(profileId)`
  - `play()`
  - `pause()`
  - `resume()`
  - `stop(fadeOutMs)`
  - `crossfadeTo(profileId, durationMs)`
  - `setLooping(enabled)`

## Session control contracts
- `SessionController`:
  - `start(config)`
  - `pause()`
  - `resume()`
  - `end()`
  - `extend(durationMs)`
  - exposes state/timer streams for UI

## UI rules built into structure
- Active playback UI defaults to hidden controls
- Single-tap overlay is transient
- Double-tap pause/resume available globally in playback surface
- Quick settings opens as bottom sheet and applies live where safe

## Future-proof areas
- Sound packs: add new audio profile mappings
- Atmosphere themes: new renderers behind `visual-engine`
- Presets/favorites: additional persistence entities without breaking core modules
