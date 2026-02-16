---
title: Functions
order: 3
---

Functions support default arguments, named parameters, and lambdas.

```kotlin
// Basic function
fun greet(name: String): String {
    return "Hello, $name!"
}

// Single-expression function
fun add(a: Int, b: Int) = a + b

// Default and named parameters
fun power(base: Int, exp: Int = 2): Int {
    return base.toDouble().pow(exp).toInt()
}
power(base = 3, exp = 4)

// Lambda
val double = { x: Int -> x * 2 }
val sum = listOf(1, 2, 3).fold(0) { acc, x -> acc + x }

// Extension function
fun String.addExclamation() = "$this!"
"hello".addExclamation() // "hello!"

// Generic function
fun <T> first(items: List<T>): T = items.first()

// Higher-order function
fun apply(x: Int, fn: (Int) -> Int): Int = fn(x)
```

