---
title: Memory Management
order: 20
---

**Garbage collected.** CRuby uses a generational, incremental, compacting GC. Objects are allocated on the heap with automatic cleanup.

```ruby
# Memory is automatically managed
data = (1..10000).to_a  # Allocated
data = nil               # Eligible for GC

# Check memory usage
puts "RSS: #{`ps -o rss= -p #{Process.pid}`.strip.to_i / 1024} MB"

# ObjectSpace — inspect live objects
require 'objspace'
ObjectSpace.count_objects
# => { TOTAL: 30000, FREE: 5000, T_OBJECT: 1200, ... }

ObjectSpace.memsize_of_all  # Total memory of all objects

# GC control
GC.start          # Force garbage collection
GC.disable         # Disable GC (use carefully)
GC.enable
GC.stat            # GC statistics

# WeakRef
require 'weakref'
obj = Object.new
weak = WeakRef.new(obj)
weak.weakref_alive?  # true
```

**Ruby GC details:**
- **Generational**: Young objects collected more frequently than old ones
- **Incremental**: GC work is spread across multiple steps to reduce pauses
- **Compacting** (Ruby 2.7+): `GC.compact` reduces memory fragmentation
- **Variable Width Allocation** (Ruby 3.2+): Objects can be embedded in heap slots
- Tune via env vars: `RUBY_GC_HEAP_INIT_SLOTS`, `RUBY_GC_MALLOC_LIMIT`, etc.
- **Jemalloc**: Alternative allocator that reduces memory fragmentation (`LD_PRELOAD=libjemalloc.so`)

