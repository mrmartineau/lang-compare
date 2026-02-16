---
title: Build & Compile Model
order: 16
---

**Ahead-of-time compiled via LLVM.** Swift compiles to native code. Apps can also use the Swift runtime for dynamic features.

```bash
# Compile a single file
swiftc hello.swift -o hello

# Build with SPM
swift build                   # Debug
swift build -c release        # Release

# Run
swift run

# Xcode build
xcodebuild -scheme MyApp -configuration Release build

# Output: native binary (macOS/Linux), .app bundle (macOS/iOS)
```

**Execution model:**
- Source → SIL (Swift Intermediate Language) → LLVM IR → Machine code
- Whole-module optimization (`-whole-module-optimization`) for release builds
- Swift runtime is included in the OS on Apple platforms (since iOS 12.2)
- On Linux, the Swift runtime is bundled with the binary
- Supports both static and dynamic linking
- Incremental compilation for fast debug builds

