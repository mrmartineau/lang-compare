---
title: Variables
order: 1
---

Use `var` for type inference or explicit types. `const` and `readonly` for immutability.

```csharp
// Type inference
var name = "Alice";
var age = 30;

// Explicit types
string label = "hello";
int count = 0;

// Constants (compile-time)
const double Pi = 3.14159;

// Readonly (runtime)
readonly int maxSize = 100;

// Destructuring (tuples)
var (x, y) = (1, 2);

// Nullable types
string? maybeNull = null;
int? maybeInt = null;
```

