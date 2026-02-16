---
title: Generics & Type System
order: 19
---

**Reified generics** — type information preserved at runtime (unlike Java). Supports constraints, covariance, and contravariance.

```csharp
// Generic method
T Identity<T>(T value) => value;

// Constraints
T Max<T>(T a, T b) where T : IComparable<T>
    => a.CompareTo(b) > 0 ? a : b;

// Multiple constraints
void Process<T>(T item)
    where T : class, IDisposable, new()
{
    // T must be: reference type, IDisposable, have parameterless constructor
}

// Generic class
class Stack<T>
{
    private readonly List<T> _items = new();
    public void Push(T item) => _items.Add(item);
    public T Pop()
    {
        var item = _items[^1];
        _items.RemoveAt(_items.Count - 1);
        return item;
    }
}
```

```csharp
// Variance (on interfaces and delegates)
// Covariant (out) — can return T
interface IProducer<out T> { T Produce(); }
// Contravariant (in) — can accept T
interface IConsumer<in T> { void Consume(T item); }

// IEnumerable<out T> is covariant:
IEnumerable<object> objects = new List<string>(); // OK

// Generic interfaces
interface IRepository<T> where T : class
{
    Task<T?> FindByIdAsync(int id);
    Task SaveAsync(T entity);
}

// Nullable reference types (C# 8+)
string? nullable = null;     // Allowed
string nonNull = "hello";    // Compiler warns if null assigned

// Pattern matching with types
object obj = 42;
if (obj is int n) Console.WriteLine(n * 2);

// Generic math (C# 11+)
T Add<T>(T a, T b) where T : INumber<T> => a + b;
```

