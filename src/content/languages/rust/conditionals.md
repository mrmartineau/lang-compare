---
title: Conditionals
order: 5
---

`if/else` is an expression. `match` is powerful pattern matching.

```rust
// If / else (is an expression)
let label = if x > 0 {
    "positive"
} else if x == 0 {
    "zero"
} else {
    "negative"
};

// Match (exhaustive pattern matching)
match shape {
    Shape::Circle(r) => std::f64::consts::PI * r * r,
    Shape::Rectangle(w, h) => w * h,
}

// Match with guards
match age {
    0..=12 => "child",
    13..=17 => "teen",
    18..=64 => "adult",
    _ => "senior",
}

// If let (single pattern)
if let Some(value) = maybe_value {
    println!("Got: {}", value);
}

// Let-else
let Some(x) = optional else {
    return;
};
```

