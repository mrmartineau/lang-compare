---
title: Concurrency
order: 17
---

**GIL (GVL) limits true parallelism in CRuby.** Ractors (Ruby 3.0+) provide actor-based parallelism. Fibers enable cooperative concurrency.

```ruby
# Threads — concurrent but GVL-limited for CPU
threads = 5.times.map do |i|
  Thread.new { puts "Thread #{i}" }
end
threads.each(&:join)

# Mutex — thread safety
mutex = Mutex.new
counter = 0
10.times.map do
  Thread.new { mutex.synchronize { counter += 1 } }
end.each(&:join)

# Fibers — cooperative concurrency
fiber = Fiber.new do
  Fiber.yield 'first'
  Fiber.yield 'second'
  'third'
end
fiber.resume  # 'first'
fiber.resume  # 'second'
fiber.resume  # 'third'
```

```ruby
# Ractors (Ruby 3.0+) — true parallelism
ractors = 4.times.map do |i|
  Ractor.new(i) do |n|
    (1..10000).sum * n
  end
end
results = ractors.map(&:take)

# Fiber Scheduler (Ruby 3.0+) — async I/O
# Used by async gem for non-blocking I/O
require 'async'

Async do |task|
  task.async { fetch_url('https://example.com/a') }
  task.async { fetch_url('https://example.com/b') }
end

# Sidekiq — background job processing
class HardWorker
  include Sidekiq::Job
  def perform(name, count)
    # Runs in a separate process
  end
end
HardWorker.perform_async('Bob', 5)
```

