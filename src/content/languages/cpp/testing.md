---
title: Testing
order: 13
---

No built-in testing framework. Google Test (gtest) and Catch2 are the most popular. Doctest is a lightweight alternative.

```cpp
// Google Test
#include <gtest/gtest.h>

TEST(MathTest, Addition) {
    EXPECT_EQ(1 + 2, 3);
}

TEST(MathTest, Negative) {
    EXPECT_EQ(-1 + 1, 0);
    EXPECT_GT(5, 3);
    EXPECT_TRUE(true);
}

// Parameterized tests
class AddTest : public ::testing::TestWithParam<
    std::tuple<int, int, int>> {};

TEST_P(AddTest, AddsCorrectly) {
    auto [a, b, expected] = GetParam();
    EXPECT_EQ(a + b, expected);
}

INSTANTIATE_TEST_SUITE_P(Math, AddTest,
    ::testing::Values(
        std::make_tuple(1, 2, 3),
        std::make_tuple(0, 0, 0)
    ));
```

```cpp
// Catch2 — header-only, no macros
#include <catch2/catch_test_macros.hpp>

TEST_CASE("Addition works", "[math]") {
    REQUIRE(1 + 2 == 3);

    SECTION("with negatives") {
        REQUIRE(-1 + 1 == 0);
    }
}
```

```bash
# Run tests (with CMake + CTest)
cmake -B build && cmake --build build
cd build && ctest --output-on-failure
```

