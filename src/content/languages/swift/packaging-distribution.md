---
title: Packaging & Distribution
order: 23
---

Libraries via **Swift Package Manager**. Apps via **App Store** (Xcode), **Homebrew**, or direct binary distribution.

```swift
// Package.swift — library distribution
// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "MyLib",
    platforms: [.macOS(.v13), .iOS(.v16)],
    products: [
        .library(name: "MyLib", targets: ["MyLib"]),
        .executable(name: "mycli", targets: ["CLI"]),
    ],
    targets: [
        .target(name: "MyLib"),
        .executableTarget(name: "CLI", dependencies: ["MyLib"]),
        .testTarget(name: "MyLibTests", dependencies: ["MyLib"]),
    ]
)
```

```bash
# Publish — push to any Git repo with a tag
git tag 1.0.0
git push origin 1.0.0
# Users: .package(url: "https://github.com/user/MyLib", from: "1.0.0")

# Swift Package Index — discovery
# https://swiftpackageindex.com/

# Build release binary
swift build -c release
# Output: .build/release/mycli

# App Store distribution (Xcode)
# Product > Archive > Distribute App

# Homebrew formula
# Create a formula pointing to the release binary/tarball
brew tap user/tap
brew install mycli

# Notarization (macOS)
xcrun notarytool submit MyApp.zip --apple-id <email> --team-id <team>
```

