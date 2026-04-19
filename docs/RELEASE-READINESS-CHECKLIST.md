# Lunyra Release-Readiness Checklist (MVP)

## A) Naming + package hygiene
- [ ] Rename remaining internal legacy package paths from `com.fidara...` to `com.lunyra...`
- [ ] Confirm applicationId/packageName final choice and consistency across modules
- [ ] Remove stale Fedora/Fidara references from user-visible strings/resources
- [ ] Keep migration scripted and reversible

## B) Product scope lock
- [ ] MVP scope freeze enforced (no feature creep)
- [ ] Visual-first, premium dark, sleep-friendly behavior preserved
- [ ] Setup -> Playback core flow QA-approved

## C) Audio readiness
- [ ] Asset folder structure present
- [ ] Registry-based mapping wired
- [ ] Seamless loop tests pass (no click/gap)
- [ ] Fade-in/out and crossfade behavior validated

## D) UX + quality
- [ ] Splash timing + skip behavior validated
- [ ] Setup clarity and spacing validated in dark-room use
- [ ] Overlay behavior and quick settings verified
- [ ] Starry Night and Ambient Ring mood pass approved
- [ ] Long session stability check (>=2h internal) completed

## E) Performance + reliability
- [ ] Frame smoothness acceptable on target device(s)
- [ ] Battery behavior acceptable for long sessions
- [ ] Background playback behavior verified
- [ ] Crash-free internal test sessions target met
- [ ] Responsive layout pass complete across common Android phone sizes
- [ ] Graceful larger-screen behavior validated (no broken spacing/cropping)
- [ ] Visual fidelity pass complete across multiple densities/resolutions (no blur/stretch/low-res artifacts)
- [ ] Ambient ring/stars/glow/shooting-star rendering remains crisp via scalable/procedural rendering approach

## F) SDK + compatibility maintenance
- [ ] Target/compile SDK review completed for current release cycle
- [ ] Compatibility matrix reviewed for AGP/Gradle/Kotlin updates
- [ ] High-priority Android platform changes tracked for next maintenance window

## G) Play Store readiness
- [ ] Final app name and short/long descriptions
- [ ] Privacy policy URL (if required by used APIs)
- [ ] Data safety form completed accurately
- [ ] App icon, feature graphic, screenshots prepared
- [ ] Content rating completed
- [ ] Pricing set (one-time paid ~£1.69 target)
- [ ] Countries/distribution and support email set

## H) Release blockers (must clear)
- [ ] Package naming cleanup complete
- [ ] Audio integration path fully tested with real assets
- [ ] Launch QA checklist passed on actual target Android devices
- [ ] No high-severity UX/perf defects open
- [ ] No one-device-only layout assumptions in active screens

## I) Pre-launch final gate
- [ ] Internal release candidate build signed and archived
- [ ] Final go/no-go review done
- [ ] Store listing and build alignment rechecked before publish
## F) Play Store readiness
- [ ] Final app name and short/long descriptions
- [ ] Privacy policy URL (if required by used APIs)
- [ ] Data safety form completed accurately
- [ ] App icon, feature graphic, screenshots prepared
- [ ] Content rating completed
- [ ] Pricing set (one-time paid ~£1.69 target)
- [ ] Countries/distribution and support email set

## G) Release blockers (must clear)
- [ ] Package naming cleanup complete
- [ ] Audio integration path fully tested with real assets
- [ ] Launch QA checklist passed on actual target Android devices
- [ ] No high-severity UX/perf defects open

## H) Pre-launch final gate
- [ ] Internal release candidate build signed and archived
- [ ] Final go/no-go review done
- [ ] Store listing and build alignment rechecked before publish
