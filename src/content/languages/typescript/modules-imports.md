---
title: Modules & Imports
order: 8
---

Uses ES Modules with additional type-only imports. TypeScript compiles to CJS or ESM depending on `tsconfig.json`. Supports path aliases and declaration files.

```ts
// Named exports with types
export const PI: number = 3.14
export function add(a: number, b: number): number {
  return a + b
}
export interface User {
  name: string
  age: number
}

// Default export
export default class App {}

// Named imports
import { add, PI, type User } from './math.ts'

// Type-only import (erased at compile time)
import type { User } from './types.ts'

// Namespace import
import * as math from './math.ts'

// Dynamic import
const mod = await import('./heavy.ts')

// Re-export
export { add } from './math.ts'
export type { User } from './types.ts'

// Ambient module declarations (*.d.ts)
declare module '*.css' {
  const styles: Record<string, string>
  export default styles
}
```

