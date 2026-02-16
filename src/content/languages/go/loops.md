---
title: Loops
order: 4
---

Go has only `for` — it covers all loop patterns.

```go
// Classic for loop
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// While-style
n := 0
for n < 3 {
    n++
}

// Infinite loop
for {
    break // exit
}

// Range over slice
for i, val := range []string{"a", "b", "c"} {
    fmt.Println(i, val)
}

// Range over map
for key, val := range myMap {
    fmt.Println(key, val)
}

// Range over string (runes)
for i, ch := range "hello" {
    fmt.Printf("%d: %c\n", i, ch)
}
```

