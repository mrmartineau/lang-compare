---
title: Performance Profiling
order: 21
---

**Built-in profiling** via `pprof` and the `testing` package. Go has excellent profiling tools out of the box.

```go
// Benchmarks in test files
func BenchmarkSort(b *testing.B) {
    data := generateData(1000)
    b.ResetTimer()
    for i := 0; i < b.N; i++ {
        sort.Ints(data)
    }
}

// Memory benchmarks
func BenchmarkAlloc(b *testing.B) {
    b.ReportAllocs()
    for i := 0; i < b.N; i++ {
        _ = make([]int, 1000)
    }
}
```

```bash
# CPU profiling
go test -bench . -cpuprofile cpu.prof
go tool pprof cpu.prof
# (pprof) top10
# (pprof) web       # Opens flame graph in browser

# Memory profiling
go test -bench . -memprofile mem.prof
go tool pprof -alloc_space mem.prof

# HTTP pprof — profile running servers
import _ "net/http/pprof"
# Visit http://localhost:6060/debug/pprof/

# Trace — goroutine scheduling, GC, syscalls
go test -trace trace.out
go tool trace trace.out

# Flame graphs
go tool pprof -http=:8080 cpu.prof

# Benchstat — compare benchmark results
go install golang.org/x/perf/cmd/benchstat@latest
benchstat old.txt new.txt
```

