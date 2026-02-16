---
title: Loops
order: 4
---

Standard `for`, `while`, and iterator-based loops.

```js
// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// For...of (iterables)
for (const item of [1, 2, 3]) {
  console.log(item);
}

// For...in (object keys)
for (const key in { a: 1, b: 2 }) {
  console.log(key);
}

// While
let n = 0;
while (n < 3) {
  n++;
}

// Array methods
[1, 2, 3].forEach((x) => console.log(x));
[1, 2, 3].map((x) => x * 2);
```

