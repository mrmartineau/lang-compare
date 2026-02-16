---
title: Functions
order: 3
---

Functions use named parameters by default. Closures are first-class.

```swift
// Basic function
func greet(name: String) -> String {
    return "Hello, \(name)!"
}

// Argument labels
func move(from start: Int, to end: Int) -> Int {
    return end - start
}
move(from: 0, to: 10)

// Default parameters
func power(base: Int, exp: Int = 2) -> Int {
    return Int(pow(Double(base), Double(exp)))
}

// Closures
let add = { (a: Int, b: Int) -> Int in a + b }
let doubled = [1, 2, 3].map { $0 * 2 }

// Generic function
func first<T>(_ items: [T]) -> T? {
    return items.first
}

// Throwing function
func parse(_ input: String) throws -> Int {
    guard let n = Int(input) else {
        throw ParseError.invalidInput
    }
    return n
}
```

