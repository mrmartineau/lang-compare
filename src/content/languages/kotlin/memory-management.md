---
title: Memory Management
order: 20
---

**JVM garbage collector** — generational GC with multiple collector options (G1, ZGC, Shenandoah). Kotlin/Native uses its own GC.

```kotlin
// Memory is automatically managed by the JVM GC
val list = mutableListOf(1, 2, 3)
// GC collects when objects are unreachable

// Closeable — deterministic cleanup (like IDisposable)
import java.io.Closeable

class ManagedResource : Closeable {
    override fun close() { /* release resources */ }
}

// use — auto-close (like try-with-resources)
FileReader("data.txt").use { reader ->
    reader.readText()
} // reader.close() called automatically

// BufferedReader
File("data.txt").bufferedReader().use { it.readText() }
```

```kotlin
// Value classes — avoid boxing overhead
@JvmInline
value class UserId(val id: Long)
// No heap allocation at runtime (inlined)

// Sequences — lazy, avoids intermediate collections
val result = (1..1_000_000).asSequence()
    .filter { it % 2 == 0 }
    .map { it * it }
    .take(10)
    .toList()  // Only one list allocated

// WeakReference
import java.lang.ref.WeakReference
val weak = WeakReference(heavyObject)
weak.get()  // Returns object or null if GC'd

// JVM GC tuning
// -XX:+UseG1GC (default since JDK 9)
// -XX:+UseZGC (low-latency, JDK 15+)
// -Xmx512m (max heap size)
// -XX:+PrintGCDetails (GC logging)

// Kotlin/Native — uses tracing GC (since 1.7.20)
// Previously used reference counting with cycle detection
```

