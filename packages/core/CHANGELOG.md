# @envelop/core

## 0.3.2

### Patch Changes

- 28ad742: Cleanup for some traces related to the tracedOrchestrator
- 28ad742: Improve TypeScript types
- 28ad742: Improve runtime performance by reducing calls to prepareSchema
- Updated dependencies [28ad742]
  - @envelop/types@0.2.2

## 0.3.1

### Patch Changes

- 7f4901d: Fix issues with contextFactory and missing context coming from GraphQL pipeline orchestrator
- Updated dependencies [7f4901d]
  - @envelop/types@0.2.1

## 0.3.0

### Minor Changes

- a5bee94: \* Allow access to context in all phases
  - Improve usage of `getEnveloped` function and allow to pass initial context there
- eb6f53b: ESM Support for all plugins and envelop core

### Patch Changes

- Updated dependencies [a5bee94]
- Updated dependencies [eb6f53b]
  - @envelop/types@0.2.0

## 0.2.2

### Patch Changes

- fd76b26: add missing useEnvelop plugin export

## 0.2.1

### Patch Changes

- 8fa4ae2: Add useMaskedErrors plugin.

## 0.2.0

### Minor Changes

- d4c8f90: Allow plugins to manage and load other plugins
- d4c8f90: Improve execution times by simplifying some parts of `envelop` code
- d4c8f90: Remove `extends` and replaces with `useEnvelop` plugin

### Patch Changes

- d4c8f90: useTiming: improve plugin creation based on config
- d4c8f90: Introduce TS strict mode

## 0.1.4

### Patch Changes

- ced704e: Allow plugins to stop execution and return errors
- Updated dependencies [ced704e]
  - @envelop/types@0.1.4

## 0.1.3

### Patch Changes

- 5fc65a4: Improve type safety for plugins context
- Updated dependencies [5fc65a4]
  - @envelop/types@0.1.3

## 0.1.2

### Patch Changes

- f5177eb: Added `setResult` to the result of onResolverCalled
- Updated dependencies [f5177eb]
  - @envelop/types@0.1.2

## 0.1.1

### Patch Changes

- 925a1ea: Extend `onSchemaChange` and allow to override schema. Make sure to avoid infinite loops.
- 3b92779: Fix missing exports for built-in plugins
- Updated dependencies [925a1ea]
  - @envelop/types@0.1.1

## 0.1.0

### Minor Changes

- 2fba0b4: Initial version bump

### Patch Changes

- Updated dependencies [2fba0b4]
  - @envelop/types@0.1.0

## 0.0.2

### Patch Changes

- b1333b0: Initial packages release
- Updated dependencies [b1333b0]
  - @envelop/types@0.0.2

## 0.0.1

### Patch Changes

- c499ae8: First bump as envelop
- 2cfc726: Fixes
- Updated dependencies [c499ae8]
- Updated dependencies [2cfc726]
  - @envelop/types@0.0.1
