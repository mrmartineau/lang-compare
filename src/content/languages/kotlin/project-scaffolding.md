---
title: Project Scaffolding
order: 11
---

Use IntelliJ IDEA, Android Studio, or the Kotlin project wizard.

```bash
# Using Gradle init
gradle init --type kotlin-application

# Project structure:
# app/
#   build.gradle.kts
#   src/
#     main/kotlin/App.kt
#     test/kotlin/AppTest.kt

# Run the project
./gradlew run

# Build
./gradlew build

# Android project: use Android Studio wizard
# Multiplatform: use start.kotlinlang.org

# Kotlin scripting
echo 'println("Hello!")' > script.main.kts
kotlin script.main.kts
```

