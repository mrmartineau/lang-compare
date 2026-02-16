---
title: Memory Management
order: 20
---

**Automatic Reference Counting (ARC)** — deterministic, compile-time inserted retain/release. No GC pauses.

```swift
// ARC automatically manages reference counts
class Person {
    let name: String
    init(name: String) { self.name = name }
    deinit { print("\(name) is being deinitialized") }
}

var person: Person? = Person(name: "Alice") // refcount = 1
var another = person   // refcount = 2
person = nil           // refcount = 1
another = nil          // refcount = 0 → deinit called

// Strong reference cycles — use weak/unowned to break
class Parent {
    var child: Child?
}
class Child {
    weak var parent: Parent?   // Weak — can be nil
    unowned let owner: Parent  // Unowned — never nil (crash if wrong)
}
```

```swift
// Closures and capture lists
class ViewController {
    var name = "Main"

    func setup() {
        // Strong capture (default) — can cause retain cycle
        // fetchData { self.name }

        // Weak capture — breaks cycle
        fetchData { [weak self] in
            guard let self else { return }
            print(self.name)
        }

        // Unowned capture — when you know self outlives closure
        fetchData { [unowned self] in
            print(self.name)
        }
    }
}

// Value types (struct, enum) — stack allocated, no ARC
struct Point { var x: Double; var y: Double }
// Copied on assignment, no reference counting needed

// Autoreleasepool (for Objective-C interop)
autoreleasepool {
    // Heavy temporary object creation
}
```

