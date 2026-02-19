---
title: Variables
order: 1
---

Variables don't need type declarations. Naming conventions indicate scope: `local`, `@instance`, `@@class`, `$global`, `CONSTANT`.

```ruby
# Local variables
name = 'Alice'
age = 30
is_active = true

# Constants (uppercase start)
MAX_SIZE = 100
PI = 3.14159

# Instance variables
@name = 'Alice'

# Class variables
@@count = 0

# Global variables (avoid)
$debug = true

# Multiple assignment
a, b, c = 1, 2, 3
first, *rest = [1, 2, 3, 4]  # first=1, rest=[2,3,4]

# Frozen (immutable) strings
name = 'Alice'.freeze
# name << ' Bob'  # => FrozenError

# String interpolation
greeting = "Hello, #{name}!"
```

