---
title: Loops
order: 4
---

Ruby favors iterators and blocks over traditional loops. `each`, `map`, `select` are idiomatic.

```ruby
# each — the Ruby way
[1, 2, 3].each { |x| puts x }

# each with index
['a', 'b', 'c'].each_with_index do |item, i|
  puts "#{i}: #{item}"
end

# times
5.times { |i| puts i }

# upto / downto
1.upto(5) { |i| puts i }
5.downto(1) { |i| puts i }

# Ranges
(1..5).each { |i| puts i }

# while / until
n = 0
while n < 3
  n += 1
end

until n == 0
  n -= 1
end

# loop (infinite)
loop do
  break if some_condition
end

# Iterators (functional-style)
[1, 2, 3].map { |x| x * 2 }       # [2, 4, 6]
[1, 2, 3, 4].select { |x| x.even? } # [2, 4]
[1, 2, 3].reduce(0) { |sum, x| sum + x }  # 6
[1, 2, 3].reduce(:+)                # 6 (shorthand)
```

