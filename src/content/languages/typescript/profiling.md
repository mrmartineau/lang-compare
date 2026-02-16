---
title: Performance Profiling
order: 21
---

Same runtime profiling as JavaScript. TypeScript adds compile-time performance tools for type checking.

```bash
# Runtime profiling — same as JavaScript
node --inspect dist/app.js
# Chrome DevTools, Clinic.js, etc.

# TypeScript compiler performance
npx tsc --generateTrace ./trace
# Open trace in chrome://tracing or
# https://ui.perfetto.dev/

# Measure type-check time
npx tsc --extendedDiagnostics
# Files:            150
# Lines:          25000
# Check time:      2.5s
# Total time:      3.1s

# @typescript/analyze-trace — analyze slow types
npx @typescript/analyze-trace ./trace
```

```ts
// Performance-aware TypeScript patterns
// Avoid deep conditional types (slow type checking)
// Use interface extends over intersection types (&)
// Prefer type aliases for unions over complex mapped types

// Benchmark with Vitest
import { bench, describe } from 'vitest'

describe('sort', () => {
  bench('Array.sort', () => {
    [3, 1, 2].sort()
  })
  bench('custom sort', () => {
    customSort([3, 1, 2])
  })
})
// Run: npx vitest bench
```

