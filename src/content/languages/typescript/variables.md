---
title: Variables
order: 1
---

Same as JavaScript but with type annotations. Types can be explicit or inferred.

```ts
const name: string = 'Alice';
let age: number = 30;

// Type inference (preferred when obvious)
const inferred = 'hello'; // type: string

// Destructuring with types
const { x, y }: { x: number; y: number } = { x: 1, y: 2 };
const [first, ...rest]: number[] = [1, 2, 3];

// Constants with literal types
const direction = 'north' as const; // type: "north"
```

