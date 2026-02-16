---
title: Conditionals
order: 5
---

`if/else`, `switch` with pattern matching, and `guard` for early exits.

```swift
// If / else
if x > 0 {
    print("positive")
} else if x == 0 {
    print("zero")
} else {
    print("negative")
}

// Ternary
let label = x > 0 ? "positive" : "non-positive"

// Switch (exhaustive, no fallthrough)
switch shape {
case .circle(let radius):
    print("Circle: \(radius)")
case .rectangle(let w, let h):
    print("Rect: \(w)x\(h)")
}

// Guard (early exit)
func process(value: String?) {
    guard let unwrapped = value else {
        print("no value")
        return
    }
    print(unwrapped)
}

// If-let (optional binding)
if let city = user?.address?.city {
    print(city)
}

// Nil coalescing
let val = input ?? "default"
```

