---
title: Concurrency
order: 17
---

**Structured concurrency** with async/await, actors, and task groups. Built into the language since Swift 5.5.

```swift
// async/await
func fetchData() async throws -> Data {
    let (data, _) = try await URLSession.shared.data(
        from: URL(string: "https://api.example.com")!
    )
    return data
}

// Concurrent tasks with async let
async let users = fetchUsers()
async let posts = fetchPosts()
let (u, p) = try await (users, posts)

// Task groups — dynamic concurrency
let results = try await withThrowingTaskGroup(of: String.self) { group in
    for url in urls {
        group.addTask { try await fetch(url) }
    }
    var collected: [String] = []
    for try await result in group {
        collected.append(result)
    }
    return collected
}
```

```swift
// Actors — safe shared mutable state
actor Counter {
    private var count = 0

    func increment() { count += 1 }
    func value() -> Int { count }
}

let counter = Counter()
await counter.increment()
print(await counter.value())

// MainActor — run on main thread (UI)
@MainActor
func updateUI() {
    label.text = "Updated"
}

// Task — launch unstructured concurrent work
Task {
    let data = try await fetchData()
    await updateUI(with: data)
}
```

