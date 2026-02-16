---
title: Memory Management
order: 20
---

**Garbage collected** with a concurrent, tri-color mark-and-sweep collector. Low-latency GC pauses (typically < 1ms).

```go
// Memory is automatically managed
obj := &MyStruct{Name: "Alice"}
// No need to free — GC handles it

// Stack vs heap — compiler decides (escape analysis)
func createLocal() int {
    x := 42      // Stays on stack (doesn't escape)
    return x
}

func createHeap() *int {
    x := 42      // Escapes to heap (returned as pointer)
    return &x
}

// See escape analysis decisions
// go build -gcflags='-m' .
```

```go
// sync.Pool — reuse temporary objects (reduce GC pressure)
var bufPool = sync.Pool{
    New: func() any { return new(bytes.Buffer) },
}

buf := bufPool.Get().(*bytes.Buffer)
buf.Reset()
// ... use buf ...
bufPool.Put(buf) // Return to pool

// runtime — GC control
import "runtime"
runtime.GC()                    // Force GC
runtime.ReadMemStats(&stats)    // Memory statistics

// GOGC — tune GC aggressiveness
// GOGC=100 (default): GC when heap doubles
// GOGC=50: GC more often (less memory, more CPU)
// GOMEMLIMIT=1GiB: soft memory limit (Go 1.19+)

// Finalizers (rarely needed)
runtime.SetFinalizer(obj, func(o *MyType) {
    o.Close()
})
```

