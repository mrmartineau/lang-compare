---
title: Interop
order: 22
---

Ruby interops with C via native extensions, FFI, and system commands. JRuby provides Java interop.

```ruby
# FFI — call C libraries
require 'ffi'

module LibM
  extend FFI::Library
  ffi_lib 'libm'  # Or FFI::Library::LIBC
  attach_function :sqrt, [:double], :double
  attach_function :ceil, [:double], :double
end

LibM.sqrt(16.0)  # 4.0
LibM.ceil(1.3)   # 2.0

# System commands
output = `ls -la`               # Backticks
output = %x(ls -la)             # %x syntax
system('echo', 'hello')         # Returns true/false
result = IO.popen('ls') { |io| io.read }

# Open3 — capture stdout, stderr, status
require 'open3'
stdout, stderr, status = Open3.capture3('git', 'status')
```

```ruby
# C extensions (native)
# extconf.rb:
require 'mkmf'
create_makefile('my_extension')

# JRuby — Java interop
# java_import java.util.ArrayList
# list = ArrayList.new
# list.add('hello')

# Inline C (rice gem for C++ / fiddle for C)
require 'fiddle'
libm = Fiddle.dlopen('libm.so.6')
sqrt = Fiddle::Function.new(
  libm['sqrt'],
  [Fiddle::TYPE_DOUBLE],
  Fiddle::TYPE_DOUBLE
)
sqrt.call(16.0)  # 4.0

# JSON / YAML / CSV — stdlib
require 'json'
require 'yaml'
require 'csv'
data = JSON.parse(File.read('data.json'))
```

