---
title: Functions
order: 3
---

Functions can return multiple values. Methods are functions with a receiver.

```go
// Basic function
func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

// Variadic function
func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

// Method (function with receiver)
func (u User) FullName() string {
    return u.FirstName + " " + u.LastName
}

// Anonymous function
add := func(a, b int) int { return a + b }
```

