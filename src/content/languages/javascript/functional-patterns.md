---
title: Functional Patterns
order: 7
---

First-class functions, closures, and a rich set of array methods for functional programming.

```js
// Higher-order functions
const apply = (fn, x) => fn(x)
const double = (x) => x * 2
apply(double, 5) // 10

// Map, filter, reduce
const nums = [1, 2, 3, 4, 5]
const squared = nums.map((x) => x * x)
const evens = nums.filter((x) => x % 2 === 0)
const sum = nums.reduce((acc, x) => acc + x, 0)

// Function composition
const compose = (f, g) => (x) => f(g(x))
const addOne = (x) => x + 1
const doubleAndAdd = compose(addOne, double)

// Closures
function counter(start = 0) {
  let count = start
  return { inc: () => ++count, get: () => count }
}

// Currying
const add = (a) => (b) => a + b
const add5 = add(5)
add5(3) // 8

// Chaining
const result = [1, 2, 3, 4, 5]
  .filter((x) => x > 2)
  .map((x) => x * 10)
  .reduce((a, b) => a + b, 0)
```

