---
title: Package Management
order: 10
---

No built-in package manager. vcpkg and Conan are the most popular options.

```bash
# Using vcpkg
vcpkg install fmt
vcpkg install boost:x64-linux

# Using Conan
conan install . --build=missing

# CMake FetchContent (download at build time)
# In CMakeLists.txt:
# FetchContent_Declare(fmt
#   GIT_REPOSITORY https://github.com/fmtlib/fmt
#   GIT_TAG 10.1.1)
# FetchContent_MakeAvailable(fmt)

# System package managers
sudo apt install libboost-all-dev  # Debian/Ubuntu
brew install fmt                    # macOS
```

