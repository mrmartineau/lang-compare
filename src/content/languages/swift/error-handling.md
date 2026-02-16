---
title: Error Handling
order: 9
---

Uses `do/try/catch` with typed errors conforming to the `Error` protocol.

```swift
// Define errors
enum AppError: Error {
    case notFound(String)
    case invalidInput
}

// Throwing function
func loadFile(name: String) throws -> String {
    guard !name.isEmpty else {
        throw AppError.invalidInput
    }
    return "contents"
}

// Do / try / catch
do {
    let data = try loadFile(name: "test.txt")
    print(data)
} catch AppError.notFound(let name) {
    print("Not found: \(name)")
} catch {
    print("Error: \(error)")
}

// try? (returns optional)
let maybe = try? loadFile(name: "test.txt")

// try! (force unwrap, crashes on error)
let forced = try! loadFile(name: "safe.txt")

// Defer for cleanup
func process() {
    let file = openFile()
    defer { closeFile(file) }
    // work with file...
}
```

