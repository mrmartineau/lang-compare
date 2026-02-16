---
title: Memory Management
order: 20
---

**Reference counting + cyclic garbage collector.** CPython uses reference counting as the primary mechanism, with a cycle detector for circular references.

```python
import sys
import gc

# Reference counting
a = [1, 2, 3]
sys.getrefcount(a)  # Shows reference count

# When refcount drops to 0, memory is freed immediately
b = a       # refcount = 2
del b       # refcount = 1
a = None    # refcount = 0 → freed

# Context managers — deterministic cleanup
with open('file.txt') as f:
    data = f.read()
# File is closed here, regardless of exceptions

# Custom context manager
class ManagedResource:
    def __enter__(self):
        self.acquire()
        return self
    def __exit__(self, *args):
        self.release()

# __del__ — destructor (not guaranteed to run)
class MyClass:
    def __del__(self):
        print("Cleaning up")
```

```python
# Garbage collector control
gc.collect()            # Force collection
gc.disable()            # Disable automatic GC
gc.get_stats()          # GC statistics
gc.get_referrers(obj)   # What references this object?

# weakref — references that don't prevent GC
import weakref
obj = SomeClass()
weak = weakref.ref(obj)
weak()  # Returns obj or None if GC'd

# Slots — reduce per-instance memory
class Point:
    __slots__ = ('x', 'y')
    def __init__(self, x, y):
        self.x = x
        self.y = y
# Uses ~40% less memory than regular class
```

