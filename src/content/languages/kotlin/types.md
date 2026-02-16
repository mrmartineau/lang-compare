---
title: Types
order: 2
---

Statically typed with null safety, data classes, sealed classes, and generics.

```kotlin
// Primitives
val s: String = "hello"
val n: Int = 42
val f: Double = 3.14
val b: Boolean = true

// Collections
val nums: List<Int> = listOf(1, 2, 3)
val mutableNums = mutableListOf(1, 2, 3)
val ages: Map<String, Int> = mapOf("Alice" to 30)
val unique: Set<Int> = setOf(1, 2, 3)

// Data classes
data class User(val name: String, val age: Int)

// Sealed classes (restricted hierarchy)
sealed class Shape {
    data class Circle(val radius: Double) : Shape()
    data class Rect(val w: Double, val h: Double) : Shape()
}

// Enums
enum class Color { RED, GREEN, BLUE }

// Nullable types
val maybe: Int? = null
val sure: Int = 42
```

