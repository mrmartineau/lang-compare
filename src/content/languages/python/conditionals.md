---
title: Conditionals
order: 5
---

`if/elif/else` blocks. Python 3.10+ adds `match/case` for pattern matching.

```python
# If / elif / else
if x > 0:
    print("positive")
elif x == 0:
    print("zero")
else:
    print("negative")

# Ternary (inline if)
label = "positive" if x > 0 else "non-positive"

# Match / case (Python 3.10+)
match command:
    case "quit":
        exit()
    case "hello":
        print("Hi!")
    case _:
        print("Unknown command")

# Truthy / falsy
if not []:
    print("empty list is falsy")
```

