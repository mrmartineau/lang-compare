---
title: Memory Management
order: 20
---

**Manual memory management** with RAII (Resource Acquisition Is Initialization). Smart pointers automate ownership. No garbage collector.

```cpp
// RAII — resources tied to object lifetime
{
    std::string s = "hello";  // Allocated
    std::vector<int> v = {1, 2, 3};
} // Destructors called, memory freed automatically

// Smart pointers (prefer over raw new/delete)
#include <memory>

// unique_ptr — sole ownership
auto ptr = std::make_unique<MyClass>(args);
// Automatically deleted when ptr goes out of scope

// shared_ptr — reference counted
auto shared = std::make_shared<MyClass>(args);
auto copy = shared;  // refcount = 2
// Deleted when last shared_ptr is destroyed

// weak_ptr — non-owning reference
std::weak_ptr<MyClass> weak = shared;
if (auto locked = weak.lock()) {
    // Use locked (shared_ptr)
}
```

```cpp
// Raw allocation (avoid in modern C++)
int* raw = new int(42);
delete raw;

int* arr = new int[100];
delete[] arr;

// Stack vs heap
int stack_var = 42;              // Stack (automatic)
auto heap_var = new int(42);     // Heap (manual)

// Move semantics — transfer ownership without copying
std::vector<int> v1 = {1, 2, 3};
std::vector<int> v2 = std::move(v1);
// v1 is now empty, v2 owns the data

// Custom RAII wrapper
class FileHandle {
    FILE* fp;
public:
    FileHandle(const char* path) : fp(fopen(path, "r")) {}
    ~FileHandle() { if (fp) fclose(fp); }
    // Delete copy, allow move
    FileHandle(const FileHandle&) = delete;
    FileHandle(FileHandle&& other) : fp(other.fp) { other.fp = nullptr; }
};
```

