---
title: Generics & Type System
order: 19
---

**Powerful generics with trait bounds.** Monomorphized at compile time (zero-cost). Supports associated types, lifetimes, and const generics.

```rust
// Generic function
fn identity<T>(value: T) -> T { value }

// Trait bounds — constrain type parameters
fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut max = &list[0];
    for item in &list[1..] {
        if item > max { max = item; }
    }
    max
}

// Multiple bounds
fn print_debug<T: std::fmt::Debug + Clone>(item: T) {
    println!("{:?}", item.clone());
}

// Where clause (cleaner for complex bounds)
fn process<T, U>(t: T, u: U) -> String
where
    T: std::fmt::Display + Clone,
    U: std::fmt::Debug,
{
    format!("{} {:?}", t, u)
}
```

```rust
// Generic structs
struct Wrapper<T> {
    value: T,
}

impl<T: std::fmt::Display> Wrapper<T> {
    fn show(&self) { println!("{}", self.value); }
}

// Associated types (in traits)
trait Iterator {
    type Item;
    fn next(&mut self) -> Option<Self::Item>;
}

// Lifetime generics
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}

// Const generics
fn create_array<const N: usize>() -> [i32; N] {
    [0; N]
}
let arr = create_array::<5>(); // [0, 0, 0, 0, 0]

// Trait objects (dynamic dispatch)
fn print_all(items: &[&dyn std::fmt::Display]) {
    for item in items { println!("{}", item); }
}
```

