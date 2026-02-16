---
title: Data Structures
order: 18
---

STL containers: `vector`, `map`, `unordered_map`, `set`, `deque`, `list`, `array`, `stack`, `queue`, `priority_queue`.

```cpp
#include <vector>
#include <map>
#include <unordered_map>
#include <set>
#include <array>

// vector — dynamic array (most common)
std::vector<int> v = {1, 2, 3};
v.push_back(4);
v.pop_back();
v[0];                    // 1
v.size();                // 3
v.empty();               // false

// array — fixed-size (stack allocated)
std::array<int, 3> arr = {1, 2, 3};

// map — sorted key-value (red-black tree)
std::map<std::string, int> m;
m["alice"] = 95;
m.contains("alice");     // true (C++20)
m.erase("alice");

// unordered_map — hash map (faster lookup)
std::unordered_map<std::string, int> um;
um["bob"] = 87;
auto it = um.find("bob");

// set — sorted unique values
std::set<int> s = {3, 1, 2};
s.insert(4);
s.contains(2);           // true (C++20)
```

```cpp
// Iteration
for (auto& [key, val] : m) { /* structured binding */ }
for (const auto& x : v) { /* range-for */ }

// Algorithms
#include <algorithm>
#include <ranges>

std::sort(v.begin(), v.end());
auto it = std::find(v.begin(), v.end(), 2);
bool has = std::ranges::contains(v, 3); // C++23

// Ranges (C++20)
auto evens = v | std::views::filter([](int x) { return x % 2 == 0; });

// stack, queue, priority_queue (adaptors)
#include <stack>
std::stack<int> stk;
stk.push(1);
stk.top();  // 1
stk.pop();
```

