---
title: Variables
order: 1
---

Use `var` for explicit declarations or `:=` for short declarations with type inference.

```go
// Short declaration (most common)
name := "Alice"
age := 30

// Explicit var
var count int = 0
var label string

// Multiple declarations
var (
    x int    = 1
    y string = "hello"
)

// Constants
const Pi = 3.14159
const (
    StatusOK    = 200
    StatusNotFound = 404
)
```

