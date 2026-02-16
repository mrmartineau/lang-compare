---
title: Data Structures
order: 18
---

Kotlin distinguishes mutable and immutable collection interfaces: `List`/`MutableList`, `Map`/`MutableMap`, `Set`/`MutableSet`.

```kotlin
// List — ordered (immutable by default)
val list = listOf(1, 2, 3)
val mutable = mutableListOf(1, 2, 3)
mutable.add(4)
mutable.removeAt(0)
list[0]                  // 1
list.size                // 3
list.contains(2)         // true

// Map — key-value
val map = mapOf("alice" to 95, "bob" to 87)
val mutableMap = mutableMapOf("alice" to 95)
mutableMap["charlie"] = 72
map["alice"]             // 95 (nullable)
map.getOrDefault("missing", 0)

// Set — unique values
val set = setOf(1, 2, 3)
val mutableSet = mutableSetOf(1, 2, 3)
mutableSet.add(4)
set.contains(2)          // true
set intersect setOf(2, 3, 5)  // [2, 3]

// Pair and Triple
val pair = "age" to 30
val (key, value) = pair
```

```kotlin
// Collection operations (rich stdlib)
val doubled = list.map { it * 2 }
val evens = list.filter { it % 2 == 0 }
val sum = list.reduce { acc, x -> acc + x }
val grouped = items.groupBy { it.category }
val chunked = list.chunked(2)
val windowed = list.windowed(3)

// Sequences — lazy evaluation
val result = (1..1_000_000).asSequence()
    .filter { it % 2 == 0 }
    .map { it * it }
    .take(10)
    .toList()

// Destructuring
data class Point(val x: Int, val y: Int)
val (x, y) = Point(10, 20)

// Array (JVM array, fixed size)
val arr = arrayOf(1, 2, 3)
val intArr = intArrayOf(1, 2, 3) // Primitive array
```

