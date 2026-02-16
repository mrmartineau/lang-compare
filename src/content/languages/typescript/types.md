---
title: Types
order: 2
---

Rich type system with interfaces, unions, generics, and utility types.

```ts
// Primitives
let s: string = 'hello';
let n: number = 42;
let b: boolean = true;

// Interfaces
interface User {
  name: string;
  age: number;
  email?: string; // optional
}

// Union types
type Status = 'active' | 'inactive' | 'pending';

// Generics
function identity<T>(value: T): T {
  return value;
}

// Utility types
type Partial<T> = { [P in keyof T]?: T[P] };
type ReadonlyUser = Readonly<User>;
```

