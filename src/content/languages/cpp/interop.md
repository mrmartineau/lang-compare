---
title: Interop
order: 22
---

C++ has native **C ABI compatibility**. Widely used as the "lingua franca" for interop. Bindings exist for most languages.

```cpp
// extern "C" — expose C-compatible functions
extern "C" {
    int add(int a, int b) { return a + b; }
    double my_sqrt(double x) { return std::sqrt(x); }
}
// Callable from C, Python (ctypes), Rust (FFI), etc.

// Call C libraries from C++
extern "C" {
    #include <sqlite3.h>
}

// dlopen — load shared libraries at runtime
#include <dlfcn.h>
void* handle = dlopen("libplugin.so", RTLD_LAZY);
auto fn = (int(*)(int))dlsym(handle, "compute");
int result = fn(42);
dlclose(handle);
```

```cpp
// pybind11 — C++ ↔ Python
#include <pybind11/pybind11.h>
namespace py = pybind11;

int add(int a, int b) { return a + b; }

PYBIND11_MODULE(mymodule, m) {
    m.def("add", &add, "Add two numbers");
}

// Embind — C++ ↔ JavaScript (Emscripten/WASM)
#include <emscripten/bind.h>
EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::function("add", &add);
}

// SWIG — auto-generate bindings for many languages
// swig -python -c++ mylib.i

// System commands
#include <cstdlib>
std::system("ls -la");
```

