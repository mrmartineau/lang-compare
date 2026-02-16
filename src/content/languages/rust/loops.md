---
title: Loops
order: 4
---

`for`, `while`, and `loop` (infinite). Iterators are idiomatic.

```rust
// For loop with range
for i in 0..5 {
    println!("{}", i);
}

// Iterate over a collection
let items = vec!["a", "b", "c"];
for item in &items {
    println!("{}", item);
}

// While loop
let mut n = 0;
while n < 3 {
    n += 1;
}

// Infinite loop with break
loop {
    break;
}

// Loop with return value
let result = loop {
    if condition {
        break 42;
    }
};

// Iterator methods
let squares: Vec<i32> = (0..10).map(|x| x * x).collect();
let sum: i32 = vec![1, 2, 3].iter().sum();
```

