---
title: Error Handling
order: 9
---

Uses `try/catch` with exceptions, or error codes and `std::expected` (C++23).

```cpp
// Try / catch
try {
    throw std::runtime_error("something failed");
} catch (const std::runtime_error& e) {
    std::cerr << "Error: " << e.what() << "\n";
} catch (...) {
    std::cerr << "Unknown error\n";
}

// Custom exception
class AppError : public std::exception {
    std::string msg;
public:
    AppError(const std::string& m) : msg(m) {}
    const char* what() const noexcept override {
        return msg.c_str();
    }
};

// RAII for cleanup (no finally needed)
{
    std::ofstream file("out.txt");
    file << "data";
} // file automatically closed

// std::optional for "no value"
std::optional<int> find(const std::vector<int>& v, int x) {
    auto it = std::find(v.begin(), v.end(), x);
    if (it != v.end()) return *it;
    return std::nullopt;
}
```

