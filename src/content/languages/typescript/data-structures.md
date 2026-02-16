---
title: Data Structures
order: 18
---

Same runtime structures as JavaScript, with full type annotations. Generics make collections type-safe.

```ts
// Typed arrays
const nums: number[] = [1, 2, 3]
const names: Array<string> = ['Alice', 'Bob']

// Tuples — fixed-length typed arrays
const pair: [string, number] = ['age', 30]
const [key, value] = pair

// Readonly collections
const frozen: readonly number[] = [1, 2, 3]
const frozenTuple: readonly [string, number] = ['a', 1]

// Map with typed keys and values
const map = new Map<string, number>()
map.set('count', 42)

// Set
const ids = new Set<number>([1, 2, 3])

// Record — typed object with uniform value types
const scores: Record<string, number> = {
  alice: 95,
  bob: 87,
}

// Interface for structured data
interface User {
  name: string
  age: number
  tags: Set<string>
}

// Discriminated unions as data structures
type Tree<T> =
  | { kind: 'leaf'; value: T }
  | { kind: 'node'; left: Tree<T>; right: Tree<T> }
```

