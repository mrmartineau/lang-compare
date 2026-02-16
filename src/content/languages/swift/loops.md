---
title: Loops
order: 4
---

`for-in` loops, `while`, and functional methods on collections.

```swift
// For-in with range
for i in 0..<5 {
    print(i)
}

// For-in over array
for item in ["a", "b", "c"] {
    print(item)
}

// Enumerated (index + value)
for (i, val) in ["a", "b", "c"].enumerated() {
    print(i, val)
}

// While
var n = 0
while n < 3 {
    n += 1
}

// Repeat-while (do-while)
repeat {
    n -= 1
} while n > 0

// Functional methods
let squares = (0..<10).map { $0 * $0 }
let evens = [1, 2, 3, 4].filter { $0 % 2 == 0 }
let sum = [1, 2, 3].reduce(0, +)
```

