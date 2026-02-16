---
title: Interop
order: 22
---

Python excels at interop via **ctypes**, **cffi**, **Cython**, and **pybind11** for C/C++. Also strong at subprocess and REST/HTTP integration.

```python
# ctypes — call C shared libraries directly
import ctypes

libc = ctypes.CDLL("libc.so.6")  # or "libc.dylib" on macOS
libc.printf(b"Hello from C!\n")

libm = ctypes.CDLL("libm.so.6")
libm.sqrt.restype = ctypes.c_double
libm.sqrt(ctypes.c_double(16.0))  # 4.0

# cffi — cleaner C FFI
from cffi import FFI
ffi = FFI()
ffi.cdef("double sqrt(double x);")
lib = ffi.dlopen("libm.so.6")
lib.sqrt(16.0)  # 4.0
```

```python
# subprocess — call any system command
import subprocess

result = subprocess.run(
    ["ls", "-la"],
    capture_output=True, text=True
)
print(result.stdout)

# pybind11 — C++ ↔ Python binding
# C++ side:
# #include <pybind11/pybind11.h>
# int add(int a, int b) { return a + b; }
# PYBIND11_MODULE(mymod, m) { m.def("add", &add); }
# Python side:
import mymod
mymod.add(1, 2)  # 3

# Cython — write C extensions in Python-like syntax
# .pyx files compiled to C for performance

# REST / HTTP — universal interop
import requests
resp = requests.get("https://api.example.com/data")
data = resp.json()
```

