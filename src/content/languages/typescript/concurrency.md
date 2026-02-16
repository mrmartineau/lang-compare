---
title: Concurrency
order: 17
---

Same event-loop model as JavaScript, with full type safety for async patterns.

```ts
// async/await with typed returns
async function fetchUser(id: number): Promise<User> {
  const res = await fetch(`/api/users/${id}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  return res.json() as Promise<User>
}

// Promise.all — typed tuple return
const [users, posts] = await Promise.all([
  fetchUsers(),   // Promise<User[]>
  fetchPosts(),   // Promise<Post[]>
])
// users: User[], posts: Post[]

// AbortController — cancellation
const controller = new AbortController()
const res = await fetch('/api/data', {
  signal: controller.signal,
})
controller.abort() // Cancel the request

// Async iterators
async function* generateIds(): AsyncGenerator<number> {
  let id = 0
  while (true) {
    yield id++
    await new Promise(r => setTimeout(r, 100))
  }
}

for await (const id of generateIds()) {
  if (id > 10) break
  console.log(id)
}
```

