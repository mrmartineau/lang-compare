---
title: Conditionals
order: 5
---

Ruby has `if/elsif/else`, `unless`, `case/when`, and pattern matching (Ruby 3.0+).

```ruby
# If / elsif / else
if x > 0
  puts 'positive'
elsif x == 0
  puts 'zero'
else
  puts 'negative'
end

# Inline if / unless
puts 'positive' if x > 0
puts 'not zero' unless x.zero?

# Ternary
label = x > 0 ? 'positive' : 'non-positive'

# Case / when
case color
when 'red'
  puts '#f00'
when 'blue', 'navy'
  puts '#00f'
else
  puts 'unknown'
end

# Pattern matching (Ruby 3.0+)
case [1, 2, 3]
in [Integer => a, Integer => b, *rest]
  puts "a=#{a}, b=#{b}"
end

case { name: 'Alice', age: 30 }
in { name: String => name, age: (18..) => age }
  puts "#{name} is #{age}"
end

# Guard clauses (idiomatic Ruby)
def process(data)
  return if data.nil?
  return unless data.valid?
  # ... process data
end
```

