---
title: Inheritance & Composition
order: 6
---

Supports single and multiple inheritance with MRO (Method Resolution Order). Mixins and protocols (structural typing) for composition.

```python
# Single inheritance
class Animal:
    def __init__(self, name: str):
        self.name = name
    def speak(self) -> str:
        return f"{self.name} makes a sound"

class Dog(Animal):
    def speak(self) -> str:
        return f"{self.name} barks"

# Multiple inheritance
class Swimmer:
    def swim(self): return "swimming"

class Flyer:
    def fly(self): return "flying"

class Duck(Animal, Swimmer, Flyer):
    pass

# Super and MRO
class Puppy(Dog):
    def __init__(self, name: str):
        super().__init__(name)
        self.young = True

# Abstract base classes
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self) -> float: ...

# Protocols (structural typing, Python 3.8+)
from typing import Protocol

class Drawable(Protocol):
    def draw(self) -> None: ...
# Any class with draw() satisfies Drawable
```

