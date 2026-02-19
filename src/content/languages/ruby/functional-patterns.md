---
title: Functional Patterns
order: 7
---

Ruby has strong functional programming support with blocks, procs, lambdas, and Enumerable methods.

```ruby
# Higher-order functions
def apply(fn, x)
  fn.call(x)
end
double = ->(x) { x * 2 }
apply(double, 5)  # 10

# Map, select, reduce
nums = [1, 2, 3, 4, 5]
squared = nums.map { |x| x ** 2 }
evens = nums.select(&:even?)
sum = nums.reduce(:+)

# Method reference with &
['hello', 'world'].map(&:upcase)  # ["HELLO", "WORLD"]

# Closures
def counter(start = 0)
  count = start
  -> { count += 1 }
end
inc = counter
inc.call  # 1
inc.call  # 2

# Currying
add = ->(a, b) { a + b }
add5 = add.curry.(5)
add5.(3)  # 8

# Chaining with Enumerable
result = (1..10)
  .select(&:odd?)
  .map { |x| x ** 2 }
  .reject { |x| x > 50 }
  .sum

# Lazy evaluation
(1..Float::INFINITY)
  .lazy
  .select(&:odd?)
  .map { |x| x ** 2 }
  .first(5)  # [1, 9, 25, 49, 81]

# Proc composition (Ruby 2.6+)
double = ->(x) { x * 2 }
add_one = ->(x) { x + 1 }
double_then_add = add_one << double  # compose
double_then_add.(5)  # 11
```

