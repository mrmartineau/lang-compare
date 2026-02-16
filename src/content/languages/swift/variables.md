---
title: Variables
order: 1
---

Use `let` for constants and `var` for mutable variables. Type inference is the default.

```swift
// Constants (immutable)
let name = "Alice"
let age = 30

// Variables (mutable)
var count = 0
count += 1

// Explicit type annotation
let pi: Double = 3.14159
var label: String = "hello"

// Optionals
var maybeValue: String? = nil
maybeValue = "exists"

// Tuple destructuring
let (x, y) = (1, 2)
let point = (x: 10, y: 20)
print(point.x)
```

