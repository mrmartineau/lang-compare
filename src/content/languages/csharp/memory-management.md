---
title: Memory Management
order: 20
---

**Generational garbage collector** (Gen 0, 1, 2 + LOH). Supports `IDisposable` for deterministic cleanup and `Span<T>` for stack allocation.

```csharp
// GC is automatic — no manual free
var list = new List<int> { 1, 2, 3 };
// GC collects when Gen 0 fills up

// IDisposable — deterministic cleanup
using var file = File.OpenRead("data.txt");
// file.Dispose() called at end of scope

// Classic using statement
using (var conn = new SqlConnection(connStr))
{
    conn.Open();
    // ...
} // Dispose() called here

// Implement IDisposable
class ManagedResource : IDisposable
{
    private bool _disposed;
    public void Dispose()
    {
        if (!_disposed)
        {
            // Release resources
            _disposed = true;
        }
    }
}
```

```csharp
// Stack allocation with Span<T> and stackalloc
Span<int> numbers = stackalloc int[100];
// No heap allocation, no GC pressure

// ArrayPool — reuse arrays
var pool = ArrayPool<byte>.Shared;
byte[] buffer = pool.Rent(1024);
// ... use buffer ...
pool.Return(buffer);

// WeakReference
var weak = new WeakReference<MyObject>(obj);
if (weak.TryGetTarget(out var target))
    target.DoSomething();

// GC control
GC.Collect();                    // Force collection
GC.GetTotalMemory(true);        // Total managed memory
GC.TryStartNoGCRegion(1024);    // Suppress GC temporarily

// Value types (struct) live on stack — no GC
struct Point { public int X, Y; }

// ref struct — guaranteed stack-only
ref struct StackOnly { public Span<int> Data; }
```

