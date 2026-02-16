---
title: Variables
order: 1
---

Variables are immutable by default. Use `mut` for mutability.

```rust
// Immutable (default)
let name = "Alice";
let age = 30;

// Mutable
let mut count = 0;
count += 1;

// Type annotation
let x: i32 = 42;
let pi: f64 = 3.14;

// Shadowing (re-declare with same name)
let x = 5;
let x = x + 1; // x is now 6
let x = "now a string"; // different type

// Constants (must be typed, compile-time)
const MAX_SIZE: usize = 100;
```

