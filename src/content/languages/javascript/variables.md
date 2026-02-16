---
title: Variables
order: 1
---

Use `const` for immutable bindings and `let` for mutable ones. `var` is legacy and function-scoped.

```js
const name = 'Alice';
let age = 30;
var legacy = true; // function-scoped, avoid

// Destructuring
const { x, y } = { x: 1, y: 2 };
const [first, ...rest] = [1, 2, 3];
```

