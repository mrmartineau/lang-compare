---
title: Performance Profiling
order: 21
---

Chrome DevTools and Node.js built-in profiler are the primary tools. `performance.now()` for manual timing.

```js
// Manual timing
const start = performance.now()
doExpensiveWork()
console.log(`Took ${performance.now() - start}ms`)

// console.time / console.timeEnd
console.time('fetch')
await fetch('/api/data')
console.timeEnd('fetch')  // fetch: 142.3ms

// Performance API (browser)
performance.mark('start')
doWork()
performance.mark('end')
performance.measure('work', 'start', 'end')
console.log(performance.getEntriesByName('work'))
```

```bash
# Node.js built-in profiler
node --prof app.js
node --prof-process isolate-*.log > profile.txt

# Node.js inspector (CPU + heap profiling)
node --inspect app.js
# Open chrome://inspect in Chrome

# Clinic.js — Node.js performance toolkit
npx clinic doctor -- node app.js
npx clinic flame -- node app.js
npx clinic bubbleprof -- node app.js

# Chrome DevTools
# Performance tab: CPU flame chart, call tree
# Memory tab: heap snapshots, allocation timeline
# Lighthouse: web performance auditing
```

