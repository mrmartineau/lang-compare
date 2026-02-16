---
title: Modules & Imports
order: 8
---

Traditionally uses header files (`#include`) with a preprocessor. C++20 introduced modules for faster compilation and better encapsulation. Libraries are linked at build time.

```cpp
// Header includes (traditional)
#include <iostream>       // standard library
#include <vector>
#include "myheader.h"     // project header

// Include guards (in header files)
#ifndef MY_HEADER_H
#define MY_HEADER_H
// declarations...
#endif

// Or pragma once (widely supported)
#pragma once

// Namespaces
namespace mylib {
    void helper();
}
using namespace std; // import all (discouraged)
using std::vector;   // import specific

// C++20 Modules
// math.cppm (module interface)
export module math;
export int add(int a, int b) { return a + b; }

// main.cpp (consumer)
import math;
import <iostream>; // header unit

// Forward declarations
class MyClass; // declare without defining

// Static/shared libraries
// Linked via CMake: target_link_libraries(app mylib)
// Or pkg-config: pkg-config --libs libfoo
```

