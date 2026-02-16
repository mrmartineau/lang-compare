---
title: Data Structures
order: 18
---

Rich built-in types: list, dict, set, tuple, frozenset. `collections` module adds deque, Counter, defaultdict, and more.

```python
# List — ordered, mutable
nums = [1, 2, 3]
nums.append(4)
nums.pop()
nums[0]               # 1
nums[1:3]             # [2, 3] (slicing)

# Tuple — ordered, immutable
point = (10, 20)
x, y = point          # Unpacking

# Dict — key-value (ordered since 3.7)
user = {"name": "Alice", "age": 30}
user["email"] = "a@b.com"
user.get("missing", "default")
user.keys()
user.items()

# Set — unique values
s = {1, 2, 3, 3}     # {1, 2, 3}
s.add(4)
s & {2, 3, 5}         # Intersection: {2, 3}
s | {5, 6}            # Union: {1, 2, 3, 4, 5, 6}

# Comprehensions
squares = [x**2 for x in range(10)]
evens = {x for x in range(10) if x % 2 == 0}
mapping = {k: v for k, v in pairs}
```

```python
# collections module
from collections import deque, Counter, defaultdict, namedtuple

dq = deque([1, 2, 3])
dq.appendleft(0)       # O(1) prepend

counts = Counter("abracadabra")
# Counter({'a': 5, 'b': 2, 'r': 2, 'c': 1, 'd': 1})

dd = defaultdict(list)
dd["key"].append(1)     # No KeyError

Point = namedtuple("Point", ["x", "y"])
p = Point(10, 20)
```

