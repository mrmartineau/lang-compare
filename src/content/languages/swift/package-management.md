---
title: Package Management
order: 10
---

Swift Package Manager (SPM) is built into Swift and Xcode.

```bash
# Add a dependency in Package.swift:
# dependencies: [
#     .package(url: "https://github.com/Alamofire/Alamofire",
#              from: "5.0.0")
# ]

# Resolve dependencies
swift package resolve

# Update dependencies
swift package update

# Show dependencies
swift package show-dependencies

# In Xcode: File > Add Package Dependencies
# Paste the repository URL and select version
```

