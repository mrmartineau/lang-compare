---
title: Data Structures
order: 18
---

Arrays, Hashes, Sets, Structs, and Data (Ruby 3.2+) are the core data structures.

```ruby
# Arrays — ordered, mixed types
arr = [1, 'two', :three]
arr.push(4)          # or arr << 4
arr.pop              # Remove last
arr.shift            # Remove first
arr.unshift(0)       # Prepend
arr.include?(1)      # true
arr.flatten          # Flatten nested arrays
arr.compact          # Remove nils
arr.uniq             # Remove duplicates

# Hashes — key-value pairs
hash = { name: 'Alice', age: 30 }
hash[:email] = 'a@b.com'
hash.delete(:age)
hash.keys            # [:name, :email]
hash.values
hash.fetch(:name, 'default')
hash.merge(other_hash)

# Set
require 'set'
set = Set.new([1, 2, 3, 3])  # {1, 2, 3}
set.add(4)
set.include?(2)      # true
set & other_set       # Intersection
set | other_set       # Union

# Struct — lightweight data class
User = Struct.new(:name, :age, keyword_init: true)
user = User.new(name: 'Alice', age: 30)

# Data (Ruby 3.2+) — immutable value object
Point = Data.define(:x, :y)
p = Point.new(x: 1, y: 2)
# p.x = 3  # => NoMethodError (immutable)

# OpenStruct — dynamic attributes
require 'ostruct'
obj = OpenStruct.new(name: 'Alice')
obj.age = 30
```

