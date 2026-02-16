---
title: Functions
order: 3
---

Defined with `def`. Support default args, keyword args, and type hints.

```python
# Basic function
def greet(name: str) -> str:
    return f"Hello, {name}!"

# Default parameters
def power(base: int, exp: int = 2) -> int:
    return base ** exp

# *args and **kwargs
def log(*args, **kwargs):
    print(*args, **kwargs)

# Lambda (anonymous function)
add = lambda a, b: a + b

# Decorators
def timer(func):
    def wrapper(*args):
        import time
        start = time.time()
        result = func(*args)
        print(f"{time.time() - start:.2f}s")
        return result
    return wrapper
```

