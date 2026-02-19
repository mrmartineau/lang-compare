---
title: Types
order: 2
---

Ruby is dynamically typed. Everything is an object — even integers and booleans. Optional type annotations via RBS or Sorbet.

```ruby
# Core types — all are objects
42.class          # Integer
3.14.class        # Float
'hello'.class     # String
true.class        # TrueClass
nil.class         # NilClass
:symbol.class     # Symbol
[1, 2].class      # Array
{ a: 1 }.class    # Hash
(1..5).class      # Range

# Type checking
42.is_a?(Integer)     # true
42.is_a?(Numeric)     # true (parent class)
'hi'.respond_to?(:upcase)  # true (duck typing)

# Symbols — immutable, interned strings
:name
:status
:'multi word'

# Ranges
(1..5).to_a       # [1, 2, 3, 4, 5] (inclusive)
(1...5).to_a      # [1, 2, 3, 4] (exclusive)

# RBS — type signature files (Ruby 3.0+)
# sig/app.rbs:
# class User
#   attr_reader name: String
#   def initialize: (String name) -> void
# end
```

