---
title: Build & Compile Model
order: 16
---

**Ahead-of-time compiled to native binary.** C++ compiles through a preprocessor → compiler → assembler → linker pipeline.

```bash
# Direct compilation
g++ -std=c++20 -O2 -o myapp main.cpp
clang++ -std=c++20 -O2 -o myapp main.cpp

# With CMake (standard build system)
cmake -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build
./build/myapp

# Compile steps (explicit)
g++ -c main.cpp -o main.o    # Compile to object file
g++ main.o -o myapp           # Link

# Cross-compilation
x86_64-linux-gnu-g++ -o myapp main.cpp

# Output: native binary, .o object files, .a/.so libraries
```

**Execution model:**
- Source → Preprocessor (#include expansion) → Compiler → Assembly → Object files → Linker → Binary
- Headers are textually included (slow — modules in C++20 help)
- Template instantiation happens at compile time (can be slow)
- No runtime, no GC — manual memory or RAII
- Link-time optimization (LTO) can significantly improve performance

