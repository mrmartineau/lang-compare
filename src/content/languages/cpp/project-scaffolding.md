---
title: Project Scaffolding
order: 11
---

Create a CMake project manually or use a tool like `cmake --init`.

```bash
# Basic CMake project
mkdir my-project && cd my-project
mkdir src

cat > CMakeLists.txt << 'EOF'
cmake_minimum_required(VERSION 3.20)
project(MyProject)
set(CMAKE_CXX_STANDARD 20)
add_executable(app src/main.cpp)
EOF

cat > src/main.cpp << 'EOF'
#include <iostream>
int main() {
    std::cout << "Hello, World!\n";
}
EOF

# Build and run
cmake -B build
cmake --build build
./build/app
```

