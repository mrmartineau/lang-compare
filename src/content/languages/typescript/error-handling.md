---
title: Error Handling
order: 9
---

Same `try/catch` as JavaScript. Caught errors are `unknown` by default in strict mode.

```ts
// Try / catch with unknown error
try {
  JSON.parse('invalid');
} catch (error: unknown) {
  if (error instanceof SyntaxError) {
    console.error('Parse failed:', error.message);
  }
}

// Custom error classes
class AppError extends Error {
  constructor(
    message: string,
    public code: number
  ) {
    super(message);
    this.name = 'AppError';
  }
}

// Result pattern (no exceptions)
type Result<T, E = Error> =
  | { ok: true; value: T }
  | { ok: false; error: E };

function safeParse(json: string): Result<unknown> {
  try {
    return { ok: true, value: JSON.parse(json) };
  } catch (e) {
    return { ok: false, error: e as Error };
  }
}
```

