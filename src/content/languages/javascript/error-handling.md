---
title: Error Handling
order: 9
---

Use `try/catch/finally` for synchronous and async error handling.

```js
// Try / catch
try {
  JSON.parse('invalid');
} catch (error) {
  console.error('Parse failed:', error.message);
} finally {
  console.log('always runs');
}

// Throwing errors
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Async error handling
try {
  const res = await fetch('/api');
  const data = await res.json();
} catch (err) {
  console.error('Fetch failed:', err);
}

// Promise catch
fetch('/api')
  .then((res) => res.json())
  .catch((err) => console.error(err));
```

