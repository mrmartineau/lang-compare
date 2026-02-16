---
title: Loops
order: 4
---

`for` loops with ranges, `while`, and rich collection functions.

```kotlin
// For with range
for (i in 0 until 5) {
    println(i)
}

// For over collection
for (item in listOf("a", "b", "c")) {
    println(item)
}

// With index
for ((i, item) in listOf("a", "b").withIndex()) {
    println("$i: $item")
}

// While
var n = 0
while (n < 3) {
    n++
}

// Do-while
do {
    n--
} while (n > 0)

// Functional
val squares = (0 until 10).map { it * it }
val evens = listOf(1, 2, 3, 4).filter { it % 2 == 0 }
val sum = listOf(1, 2, 3).reduce { acc, x -> acc + x }

// Repeat
repeat(3) { println("hello") }
```

