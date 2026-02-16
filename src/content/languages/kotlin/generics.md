---
title: Generics & Type System
order: 19
---

**Reified generics** (inline functions), declaration-site variance (`in`/`out`), and type projections. Null safety built into the type system.

```kotlin
// Generic function
fun <T> identity(value: T): T = value

// Constraints (upper bounds)
fun <T : Comparable<T>> max(a: T, b: T): T =
    if (a > b) a else b

// Multiple bounds
fun <T> process(item: T) where T : Serializable, T : Comparable<T> {
    // T must implement both
}

// Generic class
class Stack<T> {
    private val items = mutableListOf<T>()
    fun push(item: T) = items.add(item)
    fun pop(): T = items.removeLast()
}

// Reified type parameters (inline functions only)
inline fun <reified T> isType(value: Any): Boolean = value is T
isType<String>("hello")  // true — type available at runtime!
```

```kotlin
// Variance
// out = covariant (producer)
interface Source<out T> { fun next(): T }
// in = contravariant (consumer)
interface Sink<in T> { fun accept(item: T) }

// Use-site variance (type projections)
fun copy(from: Array<out Any>, to: Array<in Any>) {
    for (i in from.indices) to[i] = from[i]
}

// Null safety — built into the type system
val name: String = "Alice"      // Non-null
val nullable: String? = null    // Nullable
val length = nullable?.length   // Safe call → Int?
val forced = nullable!!.length  // Throws if null
val default = nullable ?: "Unknown"  // Elvis operator

// Smart casts
fun describe(obj: Any): String = when (obj) {
    is String -> "String of length ${obj.length}"
    is Int -> "Int: $obj"
    else -> "Unknown"
}
```

