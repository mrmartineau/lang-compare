---
title: Loops
order: 4
---

Standard `for`, range-based `for`, `while`, and STL algorithms.

```cpp
// Classic for loop
for (int i = 0; i < 5; i++) {
    std::cout << i << "\n";
}

// Range-based for (C++11)
std::vector<std::string> items = {"a", "b", "c"};
for (const auto& item : items) {
    std::cout << item << "\n";
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

// STL algorithms
std::vector<int> nums = {1, 2, 3};
std::for_each(nums.begin(), nums.end(),
    [](int x) { std::cout << x; });

// Ranges (C++20)
auto squares = nums
    | std::views::transform([](int x) { return x * x; });
```

