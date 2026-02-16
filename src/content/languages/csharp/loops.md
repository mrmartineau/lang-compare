---
title: Loops
order: 4
---

Standard `for`, `foreach`, `while`, and LINQ for functional iteration.

```csharp
// For loop
for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}

// Foreach
foreach (var item in new[] { "a", "b", "c" }) {
    Console.WriteLine(item);
}

// While
int n = 0;
while (n < 3) {
    n++;
}

// Do-while
do {
    n--;
} while (n > 0);

// LINQ
var squares = Enumerable.Range(0, 10)
    .Select(x => x * x)
    .ToList();

var evens = new[] { 1, 2, 3, 4 }
    .Where(x => x % 2 == 0);
```

