---
title: Data Structures
order: 18
---

Rich `System.Collections.Generic` namespace: `List<T>`, `Dictionary<K,V>`, `HashSet<T>`, `Queue<T>`, `Stack<T>`, and more.

```csharp
// List<T> — dynamic array
var list = new List<int> { 1, 2, 3 };
list.Add(4);
list.Remove(2);
list.Contains(3);        // true
list.Count;              // 3

// Dictionary<TKey, TValue>
var dict = new Dictionary<string, int>
{
    ["alice"] = 95,
    ["bob"] = 87,
};
dict["charlie"] = 72;
dict.TryGetValue("alice", out var score);
dict.ContainsKey("bob");

// HashSet<T>
var set = new HashSet<int> { 1, 2, 3 };
set.Add(4);
set.Contains(2);
set.IntersectWith(new[] { 2, 3, 5 });

// Arrays — fixed size
int[] arr = { 1, 2, 3 };
int[,] matrix = { { 1, 2 }, { 3, 4 } };
```

```csharp
// Queue and Stack
var queue = new Queue<string>();
queue.Enqueue("first");
var item = queue.Dequeue();

var stack = new Stack<int>();
stack.Push(1);
var top = stack.Pop();

// Immutable collections
using System.Collections.Immutable;
var iList = ImmutableList.Create(1, 2, 3);
var iDict = ImmutableDictionary<string, int>.Empty
    .Add("a", 1);

// LINQ on any collection
var evens = list.Where(x => x % 2 == 0).ToList();
var grouped = items.GroupBy(x => x.Category);

// Span<T> — stack-allocated view (no allocation)
Span<int> span = stackalloc int[] { 1, 2, 3 };
```

