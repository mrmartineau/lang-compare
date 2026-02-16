---
title: Concurrency
order: 17
---

**Single-threaded event loop** with async/await. Web Workers and `worker_threads` provide true parallelism.

```js
// async/await — non-blocking I/O
async function fetchData() {
  const res = await fetch('/api/data')
  return res.json()
}

// Promise.all — concurrent requests
const [users, posts] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
])

// Promise.allSettled — don't fail on one rejection
const results = await Promise.allSettled([
  fetch('/api/a'),
  fetch('/api/b'),
])

// setTimeout / setInterval
setTimeout(() => console.log('delayed'), 1000)
```

```js
// Worker threads (Node.js) — true parallelism
import { Worker, isMainThread, parentPort } from 'worker_threads'

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url))
  worker.on('message', (msg) => console.log(msg))
  worker.postMessage('start')
} else {
  parentPort.on('message', () => {
    parentPort.postMessage('done')
  })
}

// Web Workers (browser) — similar API
// const worker = new Worker('worker.js')
```

