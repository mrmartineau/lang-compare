---
title: Testing
order: 13
---

Popular testing frameworks include Vitest, Jest, and the built-in Node.js test runner. Playwright and Cypress are used for end-to-end testing.

```js
// Vitest (recommended — fast, Vite-native)
import { describe, it, expect } from 'vitest'

describe('math', () => {
  it('adds numbers', () => {
    expect(1 + 2).toBe(3)
  })

  it('handles arrays', () => {
    expect([1, 2, 3]).toContain(2)
    expect([1, 2, 3]).toHaveLength(3)
  })
})
```

```js
// Node.js built-in test runner (v18+)
import { describe, it } from 'node:test'
import assert from 'node:assert'

describe('math', () => {
  it('adds numbers', () => {
    assert.strictEqual(1 + 2, 3)
  })
})
```

```bash
# Run tests
npx vitest           # Vitest (watch mode)
npx vitest run       # Vitest (single run)
npx jest             # Jest
node --test          # Node.js built-in

# E2E testing
npx playwright test  # Playwright
npx cypress run      # Cypress
```

