---
title: Functions
order: 3
---

Functions with typed parameters, return types, and overloads.

```ts
// Typed function
function greet(name: string): string {
  return `Hello, ${name}!`;
}

// Arrow function with types
const add = (a: number, b: number): number => a + b;

// Optional and default parameters
function power(base: number, exp: number = 2): number {
  return base ** exp;
}

// Generic function
function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Function type
type Callback = (data: string) => void;
```

