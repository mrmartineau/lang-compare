---
title: Inheritance & Composition
order: 6
---

Single class inheritance with protocols for composition. Protocol extensions provide default implementations. Structs (value types) don't support inheritance.

```swift
// Class inheritance
class Animal {
    let name: String
    init(name: String) { self.name = name }
    func speak() -> String { "\(name) makes a sound" }
}

class Dog: Animal {
    override func speak() -> String { "\(name) barks" }
}

// Protocols (composition)
protocol Drawable {
    func draw()
}
protocol Printable {
    func printOut()
}

class Canvas: Drawable, Printable {
    func draw() { /* ... */ }
    func printOut() { /* ... */ }
}

// Protocol extensions (default implementations)
protocol Greetable {
    var name: String { get }
}
extension Greetable {
    func greet() -> String { "Hello, \(name)!" }
}

// Protocol-oriented programming
protocol Shape {
    func area() -> Double
}
extension Shape {
    func describe() -> String { "Area: \(area())" }
}

// Final (prevent subclassing)
final class Singleton { /* cannot be subclassed */ }

// Structs use protocols, not inheritance
struct Point: Equatable { var x: Double; var y: Double }
```

