---
title: Loops
order: 4
---

Same loop constructs as JavaScript, with type safety.

```ts
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For...of with typed arrays
const items: string[] = ['a', 'b', 'c'];
for (const item of items) {
  console.log(item); // item is string
}

// For...in
const obj: Record<string, number> = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}

// Array methods (type-safe)
[1, 2, 3].map((x): string => x.toString());
[1, 2, 3].filter((x): x is number => x > 1);
```

