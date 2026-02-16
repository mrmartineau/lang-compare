---
title: Modules & Imports
order: 8
---

Kotlin uses packages (like Java) and Gradle modules for project structure. Files don't need to match directory structure, but conventionally do. Visibility modifiers control access.

```kotlin
// Package declaration
package com.myapp.models

// Imports
import java.util.Date
import kotlinx.coroutines.launch
import com.myapp.utils.Helper

// Import with alias
import com.myapp.models.User as AppUser

// Wildcard import
import kotlin.math.*

// Top-level declarations (no class needed)
fun helper() = "I'm a top-level function"
val PI = 3.14159

// Visibility modifiers
public class PublicApi          // visible everywhere (default)
internal class ModuleOnly       // same Gradle module
private class FilePrivate       // same file
// protected — subclasses only (class members)

// Gradle multi-module structure:
// app/
//   build.gradle.kts
// core/
//   build.gradle.kts
// settings.gradle.kts:
//   include(":app", ":core")

// Depend on another module:
// dependencies {
//     implementation(project(":core"))
// }

// Kotlin Multiplatform (expect/actual)
expect fun platformName(): String // common
actual fun platformName() = "JVM" // jvm
```

