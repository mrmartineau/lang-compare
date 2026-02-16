---
title: Conditionals
order: 5
---

Standard `if/else`, ternary operator, and `switch`.

```js
// If / else
if (x > 0) {
  console.log('positive');
} else if (x === 0) {
  console.log('zero');
} else {
  console.log('negative');
}

// Ternary
const label = x > 0 ? 'positive' : 'non-positive';

// Switch
switch (color) {
  case 'red':
    console.log('#f00');
    break;
  case 'blue':
    console.log('#00f');
    break;
  default:
    console.log('unknown');
}

// Nullish coalescing
const val = input ?? 'default';

// Optional chaining
const city = user?.address?.city;
```

