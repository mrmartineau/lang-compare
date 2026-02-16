---
title: Functions
order: 3
---

Functions support overloading, templates, and lambdas.

```cpp
// Basic function
std::string greet(const std::string& name) {
    return "Hello, " + name + "!";
}

// Default parameters
int power(int base, int exp = 2) {
    return std::pow(base, exp);
}

// Function overloading
int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }

// Template function
template <typename T>
T first(const std::vector<T>& items) {
    return items.front();
}

// Lambda
auto multiply = [](int a, int b) { return a * b; };
auto adder = [offset = 10](int x) { return x + offset; };

// Trailing return type
auto divide(int a, int b) -> double {
    return static_cast<double>(a) / b;
}
```

