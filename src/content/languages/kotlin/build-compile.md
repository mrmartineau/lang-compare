---
title: Build & Compile Model
order: 16
---

**Compiled to JVM bytecode (default), or native/JS.** Kotlin targets multiple backends via the Kotlin compiler.

```bash
# Compile to JVM bytecode
kotlinc hello.kt -include-runtime -d hello.jar
java -jar hello.jar

# Build with Gradle
./gradlew build
./gradlew run

# Kotlin/Native — compile to native binary (no JVM)
# Uses Kotlin/Native compiler (LLVM-based)
# Output: native executable

# Kotlin/JS — compile to JavaScript
# Output: .js files for browser or Node.js

# Kotlin Multiplatform — shared code across targets
./gradlew :shared:build
```

**Execution model:**
- **JVM**: Source → Kotlin IR → JVM bytecode (.class/.jar) → JIT (HotSpot)
- **Native**: Source → Kotlin IR → LLVM IR → Machine code
- **JS**: Source → Kotlin IR → JavaScript
- **WASM**: Source → Kotlin IR → WebAssembly (experimental)
- JVM target benefits from HotSpot JIT, tiered compilation, and GC
- Gradle build can be slow — use build cache and configuration cache

