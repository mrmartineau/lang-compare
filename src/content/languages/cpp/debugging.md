---
title: Debugging
order: 24
---

**GDB** and **LLDB** are the standard debuggers. Compile with `-g` for debug symbols. Sanitizers catch runtime errors.

```bash
# Compile with debug info
g++ -g -O0 -o myapp main.cpp
clang++ -g -O0 -o myapp main.cpp

# GDB
gdb ./myapp
# run                    (start)
# break main.cpp:42      (breakpoint)
# next                   (step over)
# step                   (step into)
# print variable         (inspect)
# backtrace              (call stack)
# watch variable         (data breakpoint)
# info threads           (list threads)
# thread 2               (switch thread)

# LLDB (macOS default)
lldb ./myapp
# Same workflow, slightly different syntax
# b main.cpp:42, r, n, s, p variable, bt
```

```cpp
// Print debugging
#include <iostream>
std::cerr << "debug: " << value << std::endl;

// Assertions
#include <cassert>
assert(ptr != nullptr && "pointer must not be null");

// static_assert (compile-time)
static_assert(sizeof(int) == 4, "int must be 4 bytes");
```

```bash
# Sanitizers — catch bugs at runtime
g++ -fsanitize=address -g -o myapp main.cpp    # Memory errors
g++ -fsanitize=undefined -g -o myapp main.cpp  # Undefined behavior
g++ -fsanitize=thread -g -o myapp main.cpp     # Data races

# VS Code — C/C++ extension or CodeLLDB
# CLion (JetBrains) — built-in debugger
# Visual Studio — best Windows C++ debugger

# Valgrind — memory error detection
valgrind --leak-check=full ./myapp

# Core dumps
ulimit -c unlimited
./myapp  # Crashes → generates core file
gdb ./myapp core
```

