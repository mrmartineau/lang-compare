---
title: Functional Patterns
order: 7
---

First-class closures, trailing closure syntax, and rich collection methods. Enums with associated values for algebraic data types.

```swift
// Closures
let double = { (x: Int) -> Int in x * 2 }
let add: (Int, Int) -> Int = { $0 + $1 }

// Collection methods
let nums = [1, 2, 3, 4, 5]
let squared = nums.map { $0 * $0 }
let evens = nums.filter { $0 % 2 == 0 }
let sum = nums.reduce(0, +)

// Chaining
let result = (0..<100)
    .filter { $0 % 2 == 0 }
    .map { $0 * $0 }
    .prefix(10)
    .reduce(0, +)

// Optional chaining (like Maybe monad)
let name: String? = "Alice"
let upper = name.map { $0.uppercased() }
let len = name.flatMap { $0.isEmpty ? nil : $0.count }

// Enums as algebraic data types
enum Result<T, E: Error> {
    case success(T)
    case failure(E)

    func map<U>(_ fn: (T) -> U) -> Result<U, E> {
        switch self {
        case .success(let v): return .success(fn(v))
        case .failure(let e): return .failure(e)
        }
    }
}

// Higher-order functions
func apply<T>(_ fn: (T) -> T, to value: T) -> T {
    fn(value)
}
```

