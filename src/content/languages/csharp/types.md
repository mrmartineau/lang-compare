---
title: Types
order: 2
---

Statically typed with value types, reference types, generics, and records.

```csharp
// Value types
int n = 42;
double f = 3.14;
bool b = true;
char c = 'a';

// Reference types
string s = "hello";
int[] arr = { 1, 2, 3 };

// Classes
class User {
    public string Name { get; set; }
    public int Age { get; set; }
}

// Records (immutable by default)
record Point(int X, int Y);

// Enums
enum Color { Red, Green, Blue }

// Generics
List<int> nums = new() { 1, 2, 3 };
Dictionary<string, int> map = new() { ["a"] = 1 };

// Nullable reference types
string? nullable = null;
```

