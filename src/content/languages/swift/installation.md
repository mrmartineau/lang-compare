---
title: Installation & Getting Started
order: 12
---

Swift comes bundled with Xcode on macOS. On Linux, install via the official toolchain or swiftly.

```bash
# macOS — included with Xcode
xcode-select --install
swift --version

# macOS — standalone (without Xcode)
brew install swift

# Linux (Ubuntu)
# Download from https://swift.org/download/
# Or use swiftly (version manager)
curl -L https://swiftlang.github.io/swiftly/swiftly-install.sh | bash
swiftly install latest

# Windows — download from https://swift.org/download/

# Verify
swift --version
```

```bash
# REPL — Swift has a built-in REPL
swift                  # Start REPL
# > let x = 42
# > print(x)

# Swift Playgrounds — interactive learning (macOS/iPad)
# Xcode Playgrounds — rapid prototyping in Xcode

# Run a script
swift hello.swift

# Run a package
swift run

# Online playground
# https://swiftfiddle.com/
```

