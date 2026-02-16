---
title: Types
order: 2
---

Statically typed with basic types, structs, slices, maps, and interfaces.

```go
// Basic types
var s string = "hello"
var n int = 42
var f float64 = 3.14
var b bool = true

// Structs
type User struct {
    Name  string
    Age   int
    Email string
}

// Slices (dynamic arrays)
nums := []int{1, 2, 3}

// Maps
ages := map[string]int{
    "Alice": 30,
    "Bob":   25,
}

// Interfaces
type Reader interface {
    Read(p []byte) (n int, err error)
}

// Type alias
type ID = string
```

