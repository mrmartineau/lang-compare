---
title: Memory Management
order: 20
---

**Garbage collected.** V8 uses a generational GC (Scavenger for young gen, Mark-Sweep/Mark-Compact for old gen). No manual memory management.

```js
// Memory is automatically allocated and freed
let obj = { name: 'Alice' }  // Allocated on heap
obj = null                     // Eligible for GC

// WeakRef — reference that doesn't prevent GC
let target = { data: 'important' }
const weak = new WeakRef(target)
weak.deref()  // { data: 'important' } or undefined

// FinalizationRegistry — callback when object is GC'd
const registry = new FinalizationRegistry((value) => {
  console.log(`${value} was garbage collected`)
})
registry.register(target, 'my-target')

// WeakMap / WeakSet — keys are weakly held
const cache = new WeakMap()
cache.set(someObj, expensiveResult)
// When someObj is GC'd, the entry is removed
```

**Common memory issues:**
- **Closures** retaining references longer than needed
- **Event listeners** not removed (use `AbortController`)
- **Detached DOM nodes** still referenced in JS
- **Large arrays/buffers** — use streaming or `ArrayBuffer`
- **Timers** (`setInterval`) not cleared

Use Chrome DevTools → Memory tab to profile heap snapshots and detect leaks.

