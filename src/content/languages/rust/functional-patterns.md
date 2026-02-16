---
title: Functional Patterns
order: 7
---

Iterators, closures, and `Option`/`Result` combinators are core to idiomatic Rust. Zero-cost abstractions make functional style performant.

```rust
// Closures
let double = |x: i32| x * 2;
let add = |a: i32, b: i32| a + b;

// Iterator combinators
let nums = vec![1, 2, 3, 4, 5];
let squared: Vec<i32> = nums.iter().map(|x| x * x).collect();
let evens: Vec<&i32> = nums.iter().filter(|x| *x % 2 == 0).collect();
let sum: i32 = nums.iter().sum();

// Chaining
let result: i32 = (0..100)
    .filter(|x| x % 2 == 0)
    .map(|x| x * x)
    .take(10)
    .sum();

// Option combinators
let name: Option<String> = Some("Alice".into());
let upper = name.map(|n| n.to_uppercase());
let len = name.and_then(|n| if n.is_empty() { None } else { Some(n.len()) });
let fallback = name.unwrap_or("default".into());

// Result combinators
let parsed: Result<i32, _> = "42".parse();
let doubled = parsed.map(|n| n * 2);
let chained = parsed.and_then(|n| if n > 0 { Ok(n) } else { Err("negative") });

// Higher-order functions
fn apply(f: impl Fn(i32) -> i32, x: i32) -> i32 { f(x) }
```

