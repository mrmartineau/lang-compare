---
title: Variables
order: 1
---

Use `val` for immutable and `var` for mutable. Type inference is the default.

```kotlin
// Immutable (val)
val name = "Alice"
val age = 30

// Mutable (var)
var count = 0
count += 1

// Explicit type annotation
val pi: Double = 3.14159
var label: String = "hello"

// Nullable types
var maybeValue: String? = null
maybeValue = "exists"

// Constants (compile-time)
const val MAX_SIZE = 100

// Destructuring
val (x, y) = Pair(1, 2)
val (first, second) = listOf("a", "b")
```

