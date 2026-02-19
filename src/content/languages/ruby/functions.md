---
title: Functions
order: 3
---

Methods are defined with `def`. Ruby also supports blocks, procs, and lambdas.

```ruby
# Method definition
def greet(name)
  "Hello, #{name}!"  # Implicit return (last expression)
end

# Default parameters
def power(base, exp = 2)
  base ** exp
end

# Keyword arguments
def create_user(name:, age:, role: 'user')
  { name: name, age: age, role: role }
end
create_user(name: 'Alice', age: 30)

# Splat (rest) parameters
def sum(*nums)
  nums.reduce(0, :+)
end

# Double splat (keyword rest)
def config(**options)
  options
end

# Blocks
def with_logging
  puts 'Start'
  yield  # Execute the block
  puts 'End'
end
with_logging { puts 'Working...' }

# Procs and Lambdas
double = ->(x) { x * 2 }    # Lambda
double.call(5)                # 10
double.(5)                    # 10 (shorthand)

square = proc { |x| x ** 2 } # Proc
square.call(4)                # 16
```

