---
title: Performance Profiling
order: 21
---

JVM profiling tools: **JMH** for benchmarks, **VisualVM/JFR** for runtime profiling, **Android Profiler** for mobile.

```kotlin
// JMH (Java Microbenchmark Harness) via kotlinx-benchmark
// build.gradle.kts:
// plugins { id("org.jetbrains.kotlinx.benchmark") version "0.4.10" }

import org.openjdk.jmh.annotations.*

@State(Scope.Benchmark)
class SortBenchmark {
    private val data = (0 until 1000).shuffled()

    @Benchmark
    fun sortList(): List<Int> = data.sorted()

    @Benchmark
    fun sortArray(): IntArray = data.toIntArray().also { it.sort() }
}
```

```bash
# JFR (Java Flight Recorder) — low-overhead profiling
java -XX:StartFlightRecording=duration=60s,filename=rec.jfr -jar app.jar
# Analyze with JDK Mission Control (jmc)

# VisualVM — GUI profiler
visualvm  # CPU, memory, threads, heap dump

# async-profiler — sampling profiler (low overhead)
# https://github.com/async-profiler/async-profiler
./profiler.sh -d 30 -f flame.html <pid>

# IntelliJ IDEA Profiler
# Run > Profile (built-in CPU + memory profiler)
# Generates flame charts and call trees

# Android Profiler (Android Studio)
# CPU, Memory, Network, Energy profiling
# System Trace for detailed thread analysis

# Kotlin-specific: measure time
import kotlin.time.measureTime
val duration = measureTime {
    doExpensiveWork()
}
println("Took $duration")

# Gradle build profiling
./gradlew build --scan  # Build scan
./gradlew build --profile  # HTML report
```

