---
title: Testing
order: 13
---

Go has a built-in testing framework in the `testing` package. No external dependencies needed. `testify` is a popular assertion library.

```go
// math_test.go — test files end in _test.go
package math

import "testing"

func TestAdd(t *testing.T) {
    result := Add(1, 2)
    if result != 3 {
        t.Errorf("Add(1, 2) = %d; want 3", result)
    }
}

// Table-driven tests (idiomatic Go pattern)
func TestAddTable(t *testing.T) {
    tests := []struct {
        a, b, want int
    }{
        {1, 2, 3},
        {0, 0, 0},
        {-1, 1, 0},
    }
    for _, tt := range tests {
        got := Add(tt.a, tt.b)
        if got != tt.want {
            t.Errorf("Add(%d, %d) = %d, want %d",
                tt.a, tt.b, got, tt.want)
        }
    }
}

// Benchmarks
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(1, 2)
    }
}
```

```bash
# Run tests
go test ./...           # All packages
go test -v ./...        # Verbose
go test -run TestAdd    # Specific test
go test -bench .        # Run benchmarks
go test -cover          # With coverage
go test -race ./...     # Race condition detection
```

