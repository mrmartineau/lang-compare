---
title: Interop
order: 22
---

**100% Java interop** — call any Java library from Kotlin and vice versa. Kotlin/Native has C interop. KMP shares code across platforms.

```kotlin
// Java interop — seamless, no wrappers needed
import java.util.ArrayList
import java.io.File

val list = ArrayList<String>()  // Java class
list.add("hello")

val file = File("data.txt")
val content = file.readText()  // Kotlin extension on Java class

// Kotlin is fully callable from Java
// @JvmStatic, @JvmField, @JvmOverloads for better Java API
class MyClass {
    companion object {
        @JvmStatic fun create(): MyClass = MyClass()
    }

    @JvmOverloads
    fun greet(name: String, greeting: String = "Hello") =
        "$greeting, $name!"
}
```

```kotlin
// Kotlin/Native — C interop
// Define in .def file:
// headers = mylib.h
// Build: generates Kotlin bindings from C headers
import mylib.*
val result = my_c_function(42)

// Kotlin Multiplatform — shared code
// expect/actual pattern
expect fun platformName(): String

// In JVM module:
actual fun platformName(): String = "JVM"
// In iOS module:
actual fun platformName(): String = "iOS"

// Platform-specific calls
import platform.Foundation.NSDate  // iOS/macOS
import kotlinx.cinterop.*         // C interop

// Process — call system commands (JVM)
val process = Runtime.getRuntime().exec("ls -la")
val output = process.inputStream.bufferedReader().readText()
```

