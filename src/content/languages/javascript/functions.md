---
title: Functions
order: 3
---

Functions can be declared, expressed, or written as arrow functions.

```js
// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

// Default parameters
function power(base, exp = 2) {
  return base ** exp;
}

// Rest parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
```

