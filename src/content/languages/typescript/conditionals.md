---
title: Conditionals
order: 5
---

Same as JavaScript, plus type narrowing and exhaustive checks.

```ts
// Type narrowing with if
function process(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase()); // string
  } else {
    console.log(value.toFixed(2)); // number
  }
}

// Discriminated unions
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; side: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
  }
}

// Satisfies operator
const palette = {
  red: '#f00',
  green: '#0f0',
} satisfies Record<string, string>;
```

