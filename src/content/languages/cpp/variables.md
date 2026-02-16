---
title: Variables
order: 1
---

Use `auto` for type inference or explicit types. `const` and `constexpr` for immutability.

```cpp
// Auto (type inference, C++11)
auto name = std::string("Alice");
auto age = 30;

// Explicit types
int count = 0;
double pi = 3.14159;
std::string label = "hello";

// Constants
const int maxSize = 100;
constexpr int bufferSize = 1024; // compile-time

// References
int x = 10;
int& ref = x; // reference to x

// Pointers
int* ptr = &x;
auto uptr = std::make_unique<int>(42);

// Structured bindings (C++17)
auto [first, second] = std::make_pair(1, 2);
```

