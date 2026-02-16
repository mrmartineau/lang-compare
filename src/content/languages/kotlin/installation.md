---
title: Installation & Getting Started
order: 12
---

Install the Kotlin compiler standalone, or get it bundled with IntelliJ IDEA or Android Studio. Kotlin runs on the JVM, so a JDK is required.

```bash
# macOS (Homebrew)
brew install kotlin

# SDKMAN (recommended for JVM languages)
curl -s https://get.sdkman.io | bash
sdk install kotlin
sdk install java 21-tem  # Also install a JDK

# Linux (snap)
sudo snap install kotlin --classic

# Verify
kotlin -version
kotlinc -version
java -version  # JDK required
```

```bash
# REPL — Kotlin has a built-in REPL
kotlinc          # Start REPL
# >>> val x = 42
# >>> println(x)

# Kotlin Playground — try in the browser
# https://play.kotlinlang.org/

# Run a script (.kts file)
kotlin script.main.kts

# Compile and run
kotlinc hello.kt -include-runtime -d hello.jar
java -jar hello.jar

# Run directly (Kotlin 1.9+)
kotlin hello.kt

# Kotlin Notebooks — in IntelliJ IDEA
# Similar to Jupyter, for interactive exploration
```

