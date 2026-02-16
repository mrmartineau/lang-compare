---
title: Memory Management
order: 20
---

**Same GC as JavaScript** — TypeScript compiles to JS, so memory management is identical. Types help prevent some leak patterns.

```ts
// using declarations (TC39 Stage 3 / TS 5.2+)
// Automatic resource cleanup via Symbol.dispose
class FileHandle implements Disposable {
  handle: number
  constructor(path: string) { this.handle = openFile(path) }
  [Symbol.dispose]() { closeFile(this.handle) }
}

{
  using file = new FileHandle('/tmp/data')
  // file is automatically disposed at end of block
}

// AsyncDisposable
class Connection implements AsyncDisposable {
  async [Symbol.asyncDispose]() {
    await this.close()
  }
}
await using conn = new Connection()
```

**TypeScript-specific patterns:**
- Types help catch null reference issues (`strictNullChecks`)
- `WeakRef<T>` and `WeakMap<K, V>` are fully typed
- `using` declarations prevent resource leak patterns
- No additional memory overhead — types are erased at compile time
- Same debugging tools as JavaScript (Chrome DevTools, Node.js `--inspect`)

