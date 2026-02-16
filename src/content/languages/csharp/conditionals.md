---
title: Conditionals
order: 5
---

`if/else`, `switch` expressions, and pattern matching.

```csharp
// If / else
if (x > 0) {
    Console.WriteLine("positive");
} else if (x == 0) {
    Console.WriteLine("zero");
} else {
    Console.WriteLine("negative");
}

// Ternary
var label = x > 0 ? "positive" : "non-positive";

// Switch expression (pattern matching)
var result = shape switch {
    Circle c => Math.PI * c.Radius * c.Radius,
    Rectangle r => r.Width * r.Height,
    _ => 0
};

// Pattern matching with when
var category = age switch {
    <= 12 => "child",
    <= 17 => "teen",
    <= 64 => "adult",
    _ => "senior"
};

// Null-coalescing
var val = input ?? "default";
var city = user?.Address?.City;
```

