---
title: Project Scaffolding
order: 11
---

Use SPM for command-line tools or Xcode for app projects.

```bash
# Create a new package (library)
swift package init --name MyLib

# Create an executable
swift package init --type executable --name MyApp

# Project structure created:
# MyApp/
#   Package.swift
#   Sources/
#     main.swift

# Build and run
swift build
swift run

# Create an iOS/macOS app
# Open Xcode > File > New > Project
# Select template (App, Framework, etc.)

# Build for release
swift build -c release
```

