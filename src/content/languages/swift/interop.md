---
title: Interop
order: 22
---

**Seamless Objective-C interop** and **C interop** built in. Swift can import C headers directly. Bridging to other languages via C ABI.

```swift
// C interop — import C functions directly
import Darwin  // or Glibc on Linux

let result = sqrt(16.0)  // C math function
let str = strdup("hello")
free(str)

// Import a C library via module map
// module MyCLib [system] {
//   header "mylib.h"
//   link "mylib"
// }
import MyCLib
myCFunction()

// Unsafe pointers (for C interop)
let ptr = UnsafeMutablePointer<Int>.allocate(capacity: 1)
ptr.pointee = 42
ptr.deallocate()
```

```swift
// Objective-C interop (automatic bridging)
import Foundation
let str = NSString(string: "Hello")
let url = NSURL(string: "https://example.com")

// @objc — expose Swift to Objective-C
@objc class MyClass: NSObject {
    @objc func doSomething() { }
}

// Swift ↔ Kotlin (via Skip framework)
// Compiles Swift to Kotlin for Android

// Swift ↔ C++ (Swift 5.9+)
// Enable in build settings: C++ Interoperability = Enabled
// Import C++ headers directly in Swift

// Process — call system commands
import Foundation
let process = Process()
process.executableURL = URL(fileURLWithPath: "/bin/ls")
process.arguments = ["-la"]
try process.run()
```

