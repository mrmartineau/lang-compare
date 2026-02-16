---
title: Functional Patterns
order: 7
---

First-class functions, comprehensions, generators, and `functools` for functional programming.

```python
# Higher-order functions
def apply(fn, x):
    return fn(x)

double = lambda x: x * 2
apply(double, 5)  # 10

# Map, filter, reduce
from functools import reduce

nums = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x * x, nums))
evens = list(filter(lambda x: x % 2 == 0, nums))
total = reduce(lambda a, b: a + b, nums, 0)

# List comprehensions (preferred over map/filter)
squared = [x * x for x in nums]
evens = [x for x in nums if x % 2 == 0]

# Generator expressions (lazy)
gen = (x * x for x in range(1_000_000))

# Closures
def counter(start=0):
    count = start
    def inc():
        nonlocal count
        count += 1
        return count
    return inc

# Partial application
from functools import partial
add = lambda a, b: a + b
add5 = partial(add, 5)

# Decorators (higher-order functions)
def log(fn):
    def wrapper(*args, **kwargs):
        print(f"Calling {fn.__name__}")
        return fn(*args, **kwargs)
    return wrapper
```

