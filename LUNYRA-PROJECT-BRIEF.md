# Lunyra — Project Brief (Initial)
Date: 2026-03-17
Status: ACTIVE

## Product intent
Lunyra is now the primary Android app build. This brief sets immediate MVP preparation only and intentionally defers major UI decisions until final product brief + image references are provided.

## MVP scope (v1 only)
Must-have:
- Core interactive loop (single focused mode)
- Smooth touch interaction and responsive visual feedback
- Stable performance baseline for internal testing
- Clean minimal navigation and settings entry point
- Debug APK output for rapid on-device iteration

Out of scope for this stage:
- Multi-mode expansion
- Complex theming library shipping all variants
- Full audio design system (deferred until visuals/UI/settings alignment)
- Non-Android platforms

## Modular structure (future-ready)
Planned module boundaries:
- `app` — shell, navigation, composition root
- `interaction-core` — touch/gesture + timing/input loop
- `visual-engine` — effects, pulse systems, render behaviors
- `theme-engine` — palettes, style tokens, visual profiles
- `settings` — runtime toggles and user controls
- `audio-engine` — deferred implementation hook
- `feature-api` — contracts for future features/modes
- `qa-observability` — perf counters, frame/touch diagnostics

Principle: keep seams stable so sounds, themes, and features can be added later without rewrites.

## Android-first implementation prep
- Kotlin + Compose baseline
- Min SDK 29 (unless changed in final brief)
- Debug-signing-first workflow
- Build script prepared for rapid `assembleDebug` cycles
- Device-first QA loop (internal)

## Decision gate (do not cross yet)
Pending user inputs before major UI build decisions:
1. Final full product brief
2. Image references / visual reference pack

Until then:
- proceed with architecture, module contracts, and neutral scaffolding only
- avoid locking major layout/art direction decisions
