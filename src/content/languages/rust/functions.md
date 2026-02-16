---
title: Functions
order: 3
---

Functions use `fn`. The last expression is the return value (no semicolon).

```rust
// Basic function
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// Multiple parameters
fn add(a: i32, b: i32) -> i32 {
    a + b
}

// Closures
let add = |a: i32, b: i32| -> i32 { a + b };
let double = |x| x * 2;

// Generic function
fn first<T>(items: &[T]) -> Option<&T> {
    items.first()
}

// Methods (impl block)
impl User {
    fn new(name: String, age: u32) -> Self {
        Self { name, age, email: None }
    }

    fn display(&self) -> String {
        format!("{} ({})", self.name, self.age)
    }
}
```

