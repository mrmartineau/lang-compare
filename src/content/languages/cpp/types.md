---
title: Types
order: 2
---

Statically typed with primitives, classes, templates, and smart pointers.

```cpp
// Primitives
int n = 42;
double f = 3.14;
bool b = true;
char c = 'a';

// Strings
std::string s = "hello";
std::string_view sv = "view"; // non-owning

// Containers
std::vector<int> nums = {1, 2, 3};
std::map<std::string, int> ages = {
    {"Alice", 30}, {"Bob", 25}
};
std::array<int, 3> fixed = {1, 2, 3};

// Structs / Classes
struct Point { int x; int y; };
class User {
public:
    std::string name;
    int age;
};

// Enums
enum class Color { Red, Green, Blue };

// Optional (C++17)
std::optional<int> maybe = 42;
std::optional<int> empty = std::nullopt;
```

