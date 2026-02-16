---
title: Generics & Type System
order: 19
---

**Dynamically typed** with optional type hints (PEP 484+). Generics via `typing` module. Type checkers (mypy, pyright) enforce at analysis time.

```python
# Generic functions (Python 3.12+ syntax)
def identity[T](value: T) -> T:
    return value

# Constrained generics
from typing import Protocol

class HasLength(Protocol):
    def __len__(self) -> int: ...

def get_length[T: HasLength](x: T) -> int:
    return len(x)

# Generic classes
class Box[T]:
    def __init__(self, value: T) -> None:
        self.value = value

    def map[U](self, fn: Callable[[T], U]) -> "Box[U]":
        return Box(fn(self.value))
```

```python
# Pre-3.12 syntax (still common)
from typing import TypeVar, Generic

T = TypeVar("T")

class Stack(Generic[T]):
    def __init__(self) -> None:
        self._items: list[T] = []

    def push(self, item: T) -> None:
        self._items.append(item)

    def pop(self) -> T:
        return self._items.pop()

# Union types
def process(value: int | str) -> str:
    return str(value)

# TypeGuard — narrow types
from typing import TypeGuard

def is_string_list(val: list[object]) -> TypeGuard[list[str]]:
    return all(isinstance(x, str) for x in val)

# Variance
from typing import TypeVar
T_co = TypeVar("T_co", covariant=True)
T_contra = TypeVar("T_contra", contravariant=True)
```

