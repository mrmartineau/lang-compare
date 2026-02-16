---
title: Package Management
order: 10
---

Uses Gradle (Kotlin DSL or Groovy) to manage dependencies from Maven Central.

```kotlin
// build.gradle.kts
dependencies {
    implementation("com.squareup.okhttp3:okhttp:4.12.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.8.0")
    testImplementation("junit:junit:4.13.2")
}

// Version catalogs (libs.versions.toml)
// [versions]
// okhttp = "4.12.0"
// [libraries]
// okhttp = { module = "com.squareup.okhttp3:okhttp", version.ref = "okhttp" }
```

```bash
# Sync dependencies
./gradlew build

# Show dependency tree
./gradlew dependencies
```

