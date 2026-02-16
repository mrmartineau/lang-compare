---
title: Functional Patterns
order: 7
---

Functions are first-class. Closures and higher-order functions are supported, but Go favours explicit loops over functional chaining.

```go
// First-class functions
func apply(fn func(int) int, x int) int {
    return fn(x)
}
double := func(x int) int { return x * 2 }
apply(double, 5) // 10

// Closures
func counter(start int) func() int {
    count := start
    return func() int {
        count++
        return count
    }
}
inc := counter(0)
inc() // 1
inc() // 2

// Higher-order filter (manual, no generics before 1.18)
func filter[T any](s []T, fn func(T) bool) []T {
    var result []T
    for _, v := range s {
        if fn(v) {
            result = append(result, v)
        }
    }
    return result
}

// Map with generics (Go 1.18+)
func mapSlice[T, U any](s []T, fn func(T) U) []U {
    result := make([]U, len(s))
    for i, v := range s {
        result[i] = fn(v)
    }
    return result
}

evens := filter([]int{1,2,3,4}, func(x int) bool {
    return x%2 == 0
})
```

