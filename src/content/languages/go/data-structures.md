---
title: Data Structures
order: 18
---

Built-in: arrays, slices, maps, and channels. No generics-based collection library in stdlib (use slices/maps packages).

```go
// Arrays — fixed size
var arr [3]int = [3]int{1, 2, 3}

// Slices — dynamic, most common
s := []int{1, 2, 3}
s = append(s, 4)
s[0]                    // 1
s[1:3]                  // [2, 3]
len(s)                  // 4
cap(s)                  // capacity

// Make with initial capacity
s := make([]int, 0, 100)

// Maps — key-value
m := map[string]int{
    "alice": 95,
    "bob":   87,
}
m["charlie"] = 72
val, ok := m["alice"]   // ok = true
delete(m, "bob")

// Iteration
for i, v := range s { fmt.Println(i, v) }
for k, v := range m { fmt.Println(k, v) }
```

```go
// Structs as data containers
type Point struct {
    X, Y float64
}

// Slices/maps packages (Go 1.21+)
import "slices"
slices.Sort(s)
slices.Contains(s, 3)
idx := slices.Index(s, 2)

import "maps"
maps.Keys(m)
maps.Values(m)

// No built-in set — use map[T]struct{}
set := map[string]struct{}{}
set["a"] = struct{}{}
_, exists := set["a"]   // exists = true
```

