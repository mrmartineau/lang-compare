---
title: Error Handling
order: 9
---

Use `try/except/finally`. Python uses exceptions extensively.

```python
# Try / except
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
finally:
    print("always runs")

# Multiple exceptions
try:
    data = json.loads(raw)
except (ValueError, KeyError) as e:
    print(f"Bad data: {e}")

# Raising exceptions
def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

# Custom exceptions
class AppError(Exception):
    def __init__(self, message, code):
        super().__init__(message)
        self.code = code
```

