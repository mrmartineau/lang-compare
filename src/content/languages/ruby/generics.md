---
title: Generics & Type System
order: 19
---

**Ruby has no native generics.** It relies on duck typing. Static type checking is available via RBS (built-in) and Sorbet (third-party).

```ruby
# Duck typing — no generics needed
def first(items)
  items.first
end
first([1, 2, 3])    # 1
first('hello')      # 'h'

# respond_to? — check capabilities
def process(obj)
  if obj.respond_to?(:each)
    obj.each { |x| puts x }
  else
    puts obj
  end
end

# Comparable / Enumerable — mixin-based polymorphism
class Temperature
  include Comparable

  attr_reader :degrees

  def initialize(degrees)
    @degrees = degrees
  end

  def <=>(other)
    degrees <=> other.degrees
  end
end

temps = [Temperature.new(30), Temperature.new(20)]
temps.sort  # Works via Comparable
temps.min   # Works via Comparable
```

```ruby
# RBS — type signatures (Ruby 3.0+)
# sig/app.rbs
# class Array[unchecked out Elem]
#   def first: () -> Elem?
#   def map: [U] () { (Elem) -> U } -> Array[U]
# end

# Sorbet — static type checker
# typed: strict
class Box
  extend T::Sig
  extend T::Generic

  Elem = type_member

  sig { params(value: Elem).void }
  def initialize(value)
    @value = T.let(value, Elem)
  end
end
```

