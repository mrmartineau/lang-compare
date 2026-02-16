---
title: Functional Patterns
order: 7
---

Lambdas, `<algorithm>`, `<ranges>`, and `std::function` enable functional patterns. C++20 ranges add composable pipelines.

```cpp
// Lambdas
auto double_val = [](int x) { return x * 2; };
auto add = [](int a, int b) { return a + b; };

// Capture by value and reference
int offset = 10;
auto adder = [offset](int x) { return x + offset; };
auto inc = [&offset]() { offset++; };

// STL algorithms
std::vector<int> nums = {1, 2, 3, 4, 5};

std::vector<int> squared;
std::transform(nums.begin(), nums.end(),
    std::back_inserter(squared),
    [](int x) { return x * x; });

auto sum = std::accumulate(nums.begin(), nums.end(), 0);

// C++20 Ranges (composable pipelines)
#include <ranges>
auto result = nums
    | std::views::filter([](int x) { return x % 2 == 0; })
    | std::views::transform([](int x) { return x * x; });

// std::function (type-erased callable)
std::function<int(int)> fn = [](int x) { return x + 1; };

// Higher-order function
template <typename F>
auto apply(F fn, int x) { return fn(x); }

// std::optional chaining
std::optional<int> val = 42;
auto doubled = val.transform([](int x) { return x * 2; });
```

