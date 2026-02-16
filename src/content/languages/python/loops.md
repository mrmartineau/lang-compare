---
title: Loops
order: 4
---

`for` loops iterate over any iterable. `while` for condition-based loops.

```python
# For loop
for i in range(5):
    print(i)

# Iterate over a list
for item in ["a", "b", "c"]:
    print(item)

# Enumerate (index + value)
for i, val in enumerate(["a", "b", "c"]):
    print(i, val)

# While loop
n = 0
while n < 3:
    n += 1

# List comprehension
squares = [x ** 2 for x in range(10)]

# Dict comprehension
mapping = {k: v for k, v in [("a", 1), ("b", 2)]}
```

