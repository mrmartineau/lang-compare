---
title: Conditionals
order: 5
---

`if` is an expression. `when` replaces `switch` with pattern matching.

```kotlin
// If expression
val label = if (x > 0) "positive" else "non-positive"

// If / else
if (x > 0) {
    println("positive")
} else if (x == 0) {
    println("zero")
} else {
    println("negative")
}

// When expression (like switch)
val result = when (shape) {
    is Shape.Circle -> Math.PI * shape.radius * shape.radius
    is Shape.Rect -> shape.w * shape.h
}

// When with conditions
val category = when {
    age <= 12 -> "child"
    age <= 17 -> "teen"
    age <= 64 -> "adult"
    else -> "senior"
}

// Null safety
val len = maybeStr?.length ?: 0
val city = user?.address?.city

// Safe cast
val str = value as? String
```

