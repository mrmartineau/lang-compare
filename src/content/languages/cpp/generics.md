---
title: Generics & Type System
order: 19
---

**Templates** — compile-time code generation. More powerful than generics (Turing-complete). C++20 adds concepts for constraints.

```cpp
// Function template
template<typename T>
T identity(T value) { return value; }

identity(42);       // T = int
identity("hello");  // T = const char*

// Concepts (C++20) — constrain templates
#include <concepts>

template<typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

template<Numeric T>
T add(T a, T b) { return a + b; }

// Requires clause
template<typename T>
requires std::totally_ordered<T>
T max(T a, T b) { return a > b ? a : b; }

// Class template
template<typename T>
class Stack {
    std::vector<T> items;
public:
    void push(T item) { items.push_back(std::move(item)); }
    T pop() {
        T item = std::move(items.back());
        items.pop_back();
        return item;
    }
};
```

```cpp
// Template specialization
template<typename T>
std::string to_string(T value) { return std::to_string(value); }

template<>
std::string to_string(bool value) { return value ? "true" : "false"; }

// Variadic templates
template<typename... Args>
void print(Args... args) {
    (std::cout << ... << args) << '\n';  // Fold expression
}

// Non-type template parameters (like const generics)
template<int N>
struct Array {
    int data[N];
};
Array<5> arr;

// SFINAE / if constexpr (compile-time branching)
template<typename T>
auto describe(T val) {
    if constexpr (std::is_integral_v<T>) return "integer";
    else if constexpr (std::is_floating_point_v<T>) return "float";
    else return "other";
}
```

