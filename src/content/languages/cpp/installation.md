---
title: Installation & Getting Started
order: 12
---

Install a C++ compiler (GCC, Clang, or MSVC) and optionally CMake for build management.

```bash
# macOS — Clang comes with Xcode Command Line Tools
xcode-select --install
clang++ --version

# Linux (Ubuntu/Debian) — GCC
sudo apt install build-essential cmake
g++ --version

# Linux — Clang
sudo apt install clang

# Windows — MSVC via Visual Studio, or MinGW/MSYS2
# Download from https://visualstudio.microsoft.com/

# Verify
g++ --version    # or clang++ --version
cmake --version
```

```bash
# No built-in REPL — but cling provides one
# Install cling: https://github.com/root-project/cling
cling

# Compiler Explorer — try in the browser
# https://godbolt.org/

# Compile and run
g++ -std=c++20 -o hello hello.cpp && ./hello
clang++ -std=c++20 -o hello hello.cpp && ./hello

# With CMake
cmake -B build && cmake --build build && ./build/app

# Quick compile + run
echo '#include <iostream>
int main() { std::cout << "Hello!\\n"; }' > /tmp/h.cpp && g++ -o /tmp/h /tmp/h.cpp && /tmp/h
```

