---
title: Inheritance & Composition
order: 6
---

Rust has no class inheritance. Uses traits for shared behavior, generics for polymorphism, and composition via struct fields.

```rust
// Traits (shared behavior)
trait Speak {
    fn speak(&self) -> String;
}

struct Dog { name: String }
impl Speak for Dog {
    fn speak(&self) -> String {
        format!("{} barks", self.name)
    }
}

// Default implementations
trait Greet {
    fn name(&self) -> &str;
    fn greet(&self) -> String {
        format!("Hello, {}!", self.name())
    }
}

// Trait inheritance (supertraits)
trait Animal: Speak + std::fmt::Display {}

// Composition via fields
struct PetOwner {
    pet: Dog,
    name: String,
}

// Generic bounds (static dispatch)
fn announce(speaker: &impl Speak) {
    println!("{}", speaker.speak());
}

// Trait objects (dynamic dispatch)
fn announce_dyn(speaker: &dyn Speak) {
    println!("{}", speaker.speak());
}

// Derive macros (auto-implement traits)
#[derive(Debug, Clone, PartialEq)]
struct Point { x: f64, y: f64 }
```

