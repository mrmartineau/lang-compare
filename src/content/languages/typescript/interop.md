---
title: Interop
order: 22
---

Same runtime interop as JavaScript, plus type declaration files (`.d.ts`) for typing external libraries and APIs.

```ts
// Type declarations for untyped JS libraries
// @types/node, @types/express, etc.
npm install --save-dev @types/node

// Declare types for a JS module without types
declare module 'untyped-lib' {
  export function doStuff(input: string): number
}

// Declare global variables (e.g., injected by scripts)
declare global {
  interface Window {
    analytics: { track(event: string): void }
  }
}

// WebAssembly with types
const wasm = await WebAssembly.instantiateStreaming(
  fetch('module.wasm')
)
const add = wasm.instance.exports.add as (a: number, b: number) => number
```

```ts
// JSON import (with resolveJsonModule)
import data from './config.json'
// data is fully typed based on JSON structure

// Import assertions
import schema from './schema.json' with { type: 'json' }

// Interop with JSDoc-typed JavaScript
// TypeScript can check .js files with JSDoc annotations
/** @param {string} name */
function greet(name) { return `Hello ${name}` }

// Ambient declarations (*.d.ts files)
// Describe the shape of existing JS code
// without rewriting it in TypeScript
```

