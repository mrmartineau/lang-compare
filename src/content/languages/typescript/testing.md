---
title: Testing
order: 13
---

Same testing tools as JavaScript — Vitest and Jest work natively with TypeScript. Type-level testing is also possible.

```ts
// Vitest with TypeScript (zero config)
import { describe, it, expect } from 'vitest'

function add(a: number, b: number): number {
  return a + b
}

describe('add', () => {
  it('adds two numbers', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('returns a number', () => {
    const result: number = add(1, 2)
    expect(typeof result).toBe('number')
  })
})
```

```ts
// Type-level testing with expectTypeOf (Vitest)
import { expectTypeOf } from 'vitest'

expectTypeOf(add).toBeFunction()
expectTypeOf(add).parameter(0).toBeNumber()
expectTypeOf(add).returns.toBeNumber()
```

```bash
# Run tests
npx vitest           # Vitest (watch mode)
npx jest             # Jest (needs ts-jest or @swc/jest)
node --test          # Node.js built-in (with tsx loader)

# Type-check as a test step
npx tsc --noEmit
```

