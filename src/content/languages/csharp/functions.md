---
title: Functions
order: 3
---

Methods live inside classes or structs. C# also supports local functions and lambdas.

```csharp
// Method
string Greet(string name) {
    return $"Hello, {name}!";
}

// Expression-bodied method
int Add(int a, int b) => a + b;

// Default parameters
int Power(int baseVal, int exp = 2)
    => (int)Math.Pow(baseVal, exp);

// Lambda expressions
Func<int, int> double = x => x * 2;
Action<string> log = msg => Console.WriteLine(msg);

// Local function
void Outer() {
    int Inner(int x) => x + 1;
    Console.WriteLine(Inner(5));
}

// Generic method
T First<T>(List<T> items) => items[0];
```

