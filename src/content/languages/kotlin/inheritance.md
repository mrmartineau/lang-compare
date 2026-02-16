---
title: Inheritance & Composition
order: 6
---

Single class inheritance (classes are `final` by default). Interfaces with default methods, sealed hierarchies, and delegation for composition.

```kotlin
// Classes are final by default — use `open`
open class Animal(val name: String) {
    open fun speak(): String = "$name makes a sound"
}

class Dog(name: String) : Animal(name) {
    override fun speak(): String = "$name barks"
}

// Abstract classes
abstract class Shape {
    abstract fun area(): Double
    fun describe() = "Area: ${area()}"
}

// Interfaces (with default methods)
interface Serializable {
    fun toJson(): String
}
interface Printable {
    fun printOut() { println(toJson()) }
    fun toJson(): String
}

class Report : Serializable, Printable {
    override fun toJson() = "{}"
}

// Sealed classes (restricted hierarchy)
sealed class Result {
    data class Success(val data: String) : Result()
    data class Error(val msg: String) : Result()
}

// Delegation (composition pattern)
interface Closer { fun close() }
class FileCloser : Closer { override fun close() {} }

class Resource(closer: Closer) : Closer by closer
// Resource delegates close() to closer
```

