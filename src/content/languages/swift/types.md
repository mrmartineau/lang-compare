---
title: Types
order: 2
---

Statically typed with structs, classes, enums, protocols, and generics.

```swift
// Primitives
let s: String = "hello"
let n: Int = 42
let f: Double = 3.14
let b: Bool = true

// Arrays and Dictionaries
let nums: [Int] = [1, 2, 3]
let ages: [String: Int] = ["Alice": 30, "Bob": 25]
let unique: Set<Int> = [1, 2, 3]

// Structs (value types)
struct Point {
    var x: Double
    var y: Double
}

// Enums (with associated values)
enum Shape {
    case circle(radius: Double)
    case rectangle(width: Double, height: Double)
}

// Protocols (like interfaces)
protocol Drawable {
    func draw()
}

// Optionals
let maybe: Int? = 42
let empty: Int? = nil
```

