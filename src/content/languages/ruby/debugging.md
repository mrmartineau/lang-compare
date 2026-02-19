---
title: Debugging
order: 24
---

**debug** gem (Ruby 3.1+ built-in) and **Pry** are the primary debugging tools.

```ruby
# Built-in debug gem (Ruby 3.1+)
require 'debug'

def process(data)
  binding.break  # Breakpoint — opens debugger
  data.map { |x| x * 2 }
end

# Pry — enhanced REPL debugger
require 'pry'

def process(data)
  binding.pry  # Breakpoint — opens Pry session
  data.map { |x| x * 2 }
end

# Basic debugging
puts variable.inspect
p variable              # Shorthand for puts .inspect
pp complex_object       # Pretty print
warn "debug message"    # Print to stderr
```

```bash
# debug gem commands (at breakpoint)
# n / next      — step over
# s / step      — step into
# c / continue  — continue execution
# bt            — backtrace
# info          — show local variables
# eval expr     — evaluate expression

# Start script in debug mode
ruby -r debug script.rb
rdbg script.rb

# VS Code — install "Ruby LSP" extension
# launch.json:
{
  "type": "ruby_lsp",
  "request": "launch",
  "program": "${workspaceFolder}/app.rb"
}

# Byebug (older, still used)
gem install byebug
# require 'byebug'; byebug  # in code
```

