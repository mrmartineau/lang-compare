---
title: Modules & Imports
order: 8
---

Swift uses modules (frameworks/packages) as the unit of code distribution. All files in a target share the same namespace. Access control governs visibility.

```swift
// Import a module
import Foundation
import UIKit
import SwiftUI

// Import specific symbol
import struct Foundation.URL
import func Darwin.sqrt

// All files in a module share scope — no need to
// import sibling files within the same target

// Access control
public class PublicAPI {}       // visible everywhere
internal class DefaultAccess {} // same module (default)
fileprivate class FileOnly {}   // same file only
private class ScopeOnly {}     // enclosing scope

// Package (SPM) structure:
// Sources/
//   MyLib/
//     Models/User.swift
//     Services/Auth.swift
//   MyApp/
//     main.swift

// Expose module API in Package.swift:
// .target(name: "MyLib"),
// .target(name: "MyApp", dependencies: ["MyLib"])

// @_exported re-exports a module
@_exported import Foundation
```

