---
title: Conditionals
order: 5
---

`if/else`, `switch`, and `if` with initializer (C++17).

```cpp
// If / else
if (x > 0) {
    std::cout << "positive\n";
} else if (x == 0) {
    std::cout << "zero\n";
} else {
    std::cout << "negative\n";
}

// Ternary
auto label = (x > 0) ? "positive" : "non-positive";

// If with initializer (C++17)
if (auto it = map.find("key"); it != map.end()) {
    std::cout << it->second;
}

// Switch
switch (color) {
    case Color::Red:   std::cout << "red"; break;
    case Color::Green: std::cout << "green"; break;
    default:           std::cout << "other"; break;
}

// std::variant + std::visit (pattern matching)
std::visit([](auto&& arg) {
    std::cout << arg;
}, myVariant);
```

