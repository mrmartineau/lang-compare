---
title: Modules & Imports
order: 8
---

ES Modules (ESM) are the standard. CommonJS (CJS) is legacy but still used in Node.js. Bundlers like Vite, esbuild, and webpack handle bundling for the browser.

```js
// Named exports
export const PI = 3.14
export function add(a, b) { return a + b }

// Default export
export default class App {}

// Named imports
import { add, PI } from './math.js'

// Default import
import App from './App.js'

// Rename imports
import { add as sum } from './math.js'

// Import everything
import * as math from './math.js'

// Dynamic import (code splitting)
const module = await import('./heavy.js')

// Re-export
export { add } from './math.js'
export { default } from './App.js'

// CommonJS (Node.js legacy)
const fs = require('fs')
module.exports = { add }
```

