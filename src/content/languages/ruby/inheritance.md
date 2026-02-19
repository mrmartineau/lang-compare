---
title: Inheritance & Composition
order: 6
---

Single inheritance with modules (mixins) for composition. Ruby strongly favors composition over inheritance.

```ruby
# Class inheritance
class Animal
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def speak
    "#{name} makes a sound"
  end
end

class Dog < Animal
  def speak
    "#{name} barks"
  end
end

# Super
class Puppy < Dog
  def initialize(name)
    super(name)
    @young = true
  end
end

# Modules (mixins) — composition
module Serializable
  def to_json
    JSON.generate(to_h)
  end
end

module Loggable
  def log
    puts "#{self.class}: #{inspect}"
  end
end

class User < Animal
  include Serializable  # Instance methods
  include Loggable
  extend ClassMethods   # Class methods

  def to_h
    { name: name }
  end
end

# Abstract-like pattern (no built-in abstract)
module Abstract
  def self.included(klass)
    klass.instance_method(:perform)
  rescue NameError
    raise NotImplementedError, "#{klass} must implement #perform"
  end
end

# Open classes — extend existing classes
class String
  def shout
    upcase + '!!!'
  end
end
'hello'.shout  # "HELLO!!!"
```

