---
title: Error Handling
order: 9
---

Ruby uses `begin/rescue/ensure` for exception handling. `raise` throws exceptions.

```ruby
# begin / rescue / ensure
begin
  data = JSON.parse(input)
rescue JSON::ParserError => e
  puts "JSON error: #{e.message}"
rescue StandardError => e
  puts "Error: #{e.message}"
ensure
  puts 'always runs'
end

# Inline rescue (simple cases)
value = Integer(input) rescue 0

# Method-level rescue
def divide(a, b)
  a / b
rescue ZeroDivisionError
  puts 'Cannot divide by zero'
  nil
end

# Raising exceptions
def validate(age)
  raise ArgumentError, 'Age must be positive' if age < 0
  raise 'Something went wrong'  # RuntimeError
end

# Custom exceptions
class ValidationError < StandardError
  attr_reader :errors

  def initialize(errors, message = 'Validation failed')
    @errors = errors
    super(message)
  end
end

# Retry
attempts = 0
begin
  attempts += 1
  make_request
rescue Net::TimeoutError
  retry if attempts < 3
end
```

