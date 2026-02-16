---
title: Types
order: 2
---

JavaScript is dynamically typed. Primitives: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

```js
typeof 'hello';    // "string"
typeof 42;         // "number"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
typeof null;       // "object" (legacy bug)
typeof Symbol();   // "symbol"
typeof 42n;        // "bigint"

// Arrays and objects
const arr = [1, 2, 3];
const obj = { key: 'value' };
```

