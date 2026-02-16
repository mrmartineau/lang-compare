---
title: Debugging
order: 24
---

**IntelliJ IDEA** and **Android Studio** have excellent debuggers. Standard JVM debugging tools also apply.

```kotlin
// Print debugging
println("value: $value")
println("struct: $myObject")

// Logging (SLF4J / Logback — JVM standard)
import org.slf4j.LoggerFactory
val logger = LoggerFactory.getLogger(MyClass::class.java)
logger.info("Processing item {}", item.id)
logger.error("Failed", exception)
logger.debug("Details: {}", data)

// kotlin-logging — idiomatic Kotlin wrapper
import io.github.oshai.kotlinlogging.KotlinLogging
val logger = KotlinLogging.logger {}
logger.info { "Processing ${item.id}" }  // Lazy evaluation

// require / check — preconditions
require(age >= 0) { "Age must be non-negative: $age" }
check(isInitialized) { "Must be initialized first" }
// Throws IllegalArgumentException / IllegalStateException
```

```bash
# IntelliJ IDEA / Android Studio
# Shift+F9: Start debugging
# Click gutter for breakpoints
# Features: conditional breakpoints, evaluate expression,
# watches, coroutine debugger, inline variable values

# Coroutine debugging
# IntelliJ shows coroutine stack traces
# -Dkotlinx.coroutines.debug for enhanced output

# Android debugging
# Android Studio > Debug tab
# Layout Inspector: view hierarchy
# Database Inspector: live SQLite queries
# Network Inspector: HTTP traffic

# JVM debugging (command-line)
java -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 -jar app.jar
# Attach IntelliJ: Run > Attach to Process

# jconsole / VisualVM — JVM monitoring
jconsole  # Memory, threads, MBeans
```

