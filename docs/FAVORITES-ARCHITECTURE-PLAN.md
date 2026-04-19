# Saved Combinations / Favorite Sessions — Architecture First Plan

## Scope
Data structure + service contracts only (no overbuilt UI in this phase).

## Goal
Allow users to save and recall preferred session combinations later, without changing current MVP flow complexity.

## Data model (proposed)
`SavedCombination`
- `id: String` (UUID)
- `name: String` (user label, e.g., "Sleep Deep Blue")
- `resonanceId: String`
- `atmosphereId: String`
- `colorId: String?`
- `durationMinutes: Int`
- `nightLevel: Float`
- `breathingPace: Float`
- `fadeOutOnEnd: Boolean`
- `screenBehaviorDimOnIdle: Boolean`
- `createdAt: Long`
- `updatedAt: Long`
- `lastUsedAt: Long?`
- `isPinned: Boolean`

## Storage approach
- local persistent store (DataStore/Room decision can be deferred)
- repository abstraction from day one:
  - `SavedCombinationsRepository`

## Service contracts
- `list(): Flow<List<SavedCombination>>`
- `get(id): SavedCombination?`
- `create(combination)`
- `update(combination)`
- `delete(id)`
- `apply(id): SessionConfig`
- `markUsed(id)`

## MVP integration points (minimal)
- Setup screen: optional "Apply saved" entry point later
- Playback quick settings: optional "Save current" action later

## Constraints
- no heavy favorites UI now
- no cloud sync now
- no sharing/export now
- keep architecture modular and future-ready

## QA readiness checks
- serialization/deserialization correctness
- backward compatibility when adding fields
- safe defaults if missing optional fields
