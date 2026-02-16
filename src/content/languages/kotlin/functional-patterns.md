---
title: Functional Patterns
order: 7
---

First-class functions, extension functions, scope functions, and rich collection APIs. Kotlin blends OOP and FP naturally.

```kotlin
// Lambdas
val double = { x: Int -> x * 2 }
val add: (Int, Int) -> Int = { a, b -> a + b }

// Collection methods
val nums = listOf(1, 2, 3, 4, 5)
val squared = nums.map { it * it }
val evens = nums.filter { it % 2 == 0 }
val sum = nums.reduce { acc, x -> acc + x }

// Chaining
val result = (0 until 100)
    .filter { it % 2 == 0 }
    .map { it * it }
    .take(10)
    .sum()

// Scope functions
val user = User("Alice", 30).apply {
    println(name)  // configure
}
val len = name?.let { it.length } ?: 0

// Sealed classes (algebraic data types)
sealed class Result<out T> {
    data class Ok<T>(val value: T) : Result<T>()
    data class Err(val msg: String) : Result<Nothing>()
}
fun <T, U> Result<T>.map(fn: (T) -> U): Result<U> =
    when (this) {
        is Result.Ok -> Result.Ok(fn(value))
        is Result.Err -> this
    }

// Higher-order + extension functions
fun <T> T.applyFn(fn: (T) -> T): T = fn(this)
5.applyFn { it * 2 } // 10
```

