---
title: Types
order: 2
---

Dynamically typed with built-in types: `int`, `float`, `str`, `bool`, `list`, `dict`, `tuple`, `set`.

```python
# Primitives
s: str = "hello"
n: int = 42
f: float = 3.14
b: bool = True

# Collections
items: list[int] = [1, 2, 3]
mapping: dict[str, int] = {"a": 1, "b": 2}
pair: tuple[int, str] = (1, "hello")
unique: set[int] = {1, 2, 3}

# None (null equivalent)
value: str | None = None

# Type checking
isinstance(42, int)  # True
type(42)             # <class 'int'>
```

