# Safe Plan: Internal Legacy Fidara Name Cleanup

## Objective
Remove remaining internal legacy `fidara` naming safely, without UX behavior changes.

## Risk policy
- Behavior-preserving refactor only
- No visual/interaction changes in same PR/commit batch
- Small staged commits with build verification after each stage

## Stages

### Stage 1 — Inventory + freeze
- Generate inventory of legacy names in:
  - package declarations
  - imports
  - module names
  - gradle ids
  - resources/strings
- Freeze feature work during rename window

### Stage 2 — Package-level rename (app first)
- Rename `com.fidara.app...` -> `com.lunyra.app...`
- Update imports/references
- Build + smoke test

### Stage 3 — Module package rename
- Rename package namespaces in shared modules
  - spinner-core, session-logic, etc.
- Keep module boundaries unchanged
- Build + smoke test

### Stage 4 — Module/artifact naming cleanup
- Rename module directories only if needed and safe
- Update `settings.gradle.kts` + dependencies
- Build + smoke test

### Stage 5 — Resource/string cleanup
- Replace stale user-visible names
- Keep UX text already approved
- Build + smoke test

### Stage 6 — Final verification
- Full assembleDebug
- Manual run through splash/setup/playback
- Quick settings and renderer sanity pass

## Guardrails
- One stage per commit
- No mixed feature work during rename stage
- Keep backup branch/tag before stage 1

## Rollback
- If any stage breaks runtime behavior, revert that stage commit only and re-run from previous green state.
