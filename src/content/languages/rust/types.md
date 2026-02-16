---
title: Types
order: 2
---

Statically typed with powerful enums, structs, traits, and generics.

```rust
// Primitives
let s: &str = "hello";
let n: i32 = 42;
let f: f64 = 3.14;
let b: bool = true;
let c: char = 'a';

// Structs
struct User {
    name: String,
    age: u32,
    email: Option<String>,
}

// Enums (algebraic data types)
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
}

// Vectors and HashMaps
let nums: Vec<i32> = vec![1, 2, 3];
let mut map = HashMap::new();
map.insert("key", "value");

// Option and Result
let maybe: Option<i32> = Some(42);
let result: Result<i32, String> = Ok(42);
```

