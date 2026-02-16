---
title: Functional Patterns
order: 7
---

LINQ, lambdas, delegates, and expression-bodied members bring functional style to C#.

```csharp
// Lambdas and delegates
Func<int, int> double = x => x * 2;
Func<int, int, int> add = (a, b) => a + b;
Action<string> log = msg => Console.WriteLine(msg);

// LINQ (functional collection processing)
var nums = new[] { 1, 2, 3, 4, 5 };
var squared = nums.Select(x => x * x);
var evens = nums.Where(x => x % 2 == 0);
var sum = nums.Aggregate(0, (acc, x) => acc + x);

// Chaining
var result = Enumerable.Range(0, 100)
    .Where(x => x % 2 == 0)
    .Select(x => x * x)
    .Take(10)
    .Sum();

// Higher-order functions
T Apply<T>(Func<T, T> fn, T value) => fn(value);

// Pattern matching as expression
string Describe(object obj) => obj switch {
    int n when n > 0 => "positive",
    int n => "non-positive",
    string s => $"string: {s}",
    _ => "unknown"
};

// Immutable records
record Point(int X, int Y);
var p1 = new Point(1, 2);
var p2 = p1 with { X = 10 }; // non-destructive mutation

// Local functions
int Factorial(int n) {
    int Go(int x, int acc) => x <= 1 ? acc : Go(x - 1, acc * x);
    return Go(n, 1);
}
```

