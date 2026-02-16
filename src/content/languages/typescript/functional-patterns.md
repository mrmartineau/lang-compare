---
title: Functional Patterns
order: 7
---

All JavaScript functional patterns with full type safety. Generics enable strongly-typed higher-order functions.

```ts
// Typed higher-order functions
function map<T, U>(arr: T[], fn: (x: T) => U): U[] {
  return arr.map(fn)
}

// Typed composition
const pipe = <T>(...fns: Array<(x: T) => T>) =>
  (x: T) => fns.reduce((v, fn) => fn(v), x)

const transform = pipe<number>(
  (x) => x * 2,
  (x) => x + 1,
)

// Currying with types
const add = (a: number) => (b: number): number => a + b

// Discriminated unions (algebraic data types)
type Result<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E }

function map<T, U, E>(
  result: Result<T, E>,
  fn: (v: T) => U,
): Result<U, E> {
  return result.ok
    ? { ok: true, value: fn(result.value) }
    : result
}

// Readonly for immutability
const nums: readonly number[] = [1, 2, 3]
type Immutable<T> = { readonly [K in keyof T]: T[K] }
```

