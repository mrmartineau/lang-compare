---
title: Interop
order: 22
---

JavaScript interops with native code via **N-API/node-addon-api** (Node.js), **WebAssembly**, and **Web APIs** (browser).

```js
// WebAssembly — run compiled code in JS
const wasmModule = await WebAssembly.instantiateStreaming(
  fetch('module.wasm')
)
const result = wasmModule.instance.exports.add(1, 2)

// Node.js native addons (N-API)
// Written in C/C++, compiled with node-gyp
const addon = require('./build/Release/myaddon.node')
addon.hello() // Calls native C++ function

// Node.js FFI with ffi-napi
const ffi = require('ffi-napi')
const libm = ffi.Library('libm', {
  ceil: ['double', ['double']],
})
libm.ceil(1.5) // 2

// Child process — call any system command
import { execSync, spawn } from 'child_process'
const output = execSync('ls -la').toString()
```

```js
// Browser Web APIs
navigator.geolocation.getCurrentPosition(pos => { })
const stream = await navigator.mediaDevices.getUserMedia({ video: true })

// postMessage — cross-origin / worker communication
worker.postMessage({ type: 'compute', data })
window.parent.postMessage('done', 'https://parent.com')

// JSON — universal data interchange
const data = JSON.parse(jsonString)
const json = JSON.stringify(data)
```

