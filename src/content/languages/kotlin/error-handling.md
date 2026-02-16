---
title: Error Handling
order: 9
---

Uses `try/catch/finally`. All exceptions are unchecked. `Result` type for functional error handling.

```kotlin
// Try / catch
try {
    val n = "abc".toInt()
} catch (e: NumberFormatException) {
    println("Parse error: ${e.message}")
} catch (e: Exception) {
    println("Error: ${e.message}")
} finally {
    println("always runs")
}

// Try as expression
val number = try {
    input.toInt()
} catch (e: NumberFormatException) {
    -1
}

// Throwing
fun divide(a: Int, b: Int): Int {
    require(b != 0) { "Cannot divide by zero" }
    return a / b
}

// Result type
fun safeParse(s: String): Result<Int> = runCatching {
    s.toInt()
}

val result = safeParse("42")
    .getOrDefault(0)

// Custom exception
class AppException(msg: String, val code: Int)
    : Exception(msg)
```

