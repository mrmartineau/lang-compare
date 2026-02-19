---
title: Performance Profiling
order: 21
---

`ruby-prof`, `stackprof`, and `benchmark` are the main profiling tools. `rack-mini-profiler` for web apps.

```ruby
# Benchmark (stdlib)
require 'benchmark'

Benchmark.bm do |x|
  x.report('sort') { (1..10000).to_a.shuffle.sort }
  x.report('sort!') { (1..10000).to_a.shuffle.sort! }
end

# Benchmark.measure
result = Benchmark.measure { expensive_operation }
puts result  # user, system, total, real time

# Benchmark/ips — iterations per second
require 'benchmark/ips'
Benchmark.ips do |x|
  x.report('map') { [1,2,3].map { |i| i * 2 } }
  x.report('each') { r = []; [1,2,3].each { |i| r << i * 2 }; r }
  x.compare!
end
```

```bash
# StackProf — sampling profiler
gem install stackprof
# In code: StackProf.run(mode: :cpu, out: 'tmp/stackprof.dump') { work }
stackprof tmp/stackprof.dump --text

# ruby-prof — deterministic profiler
gem install ruby-prof
ruby-prof script.rb

# rack-mini-profiler — web request profiling
gem 'rack-mini-profiler'
# Shows timing badge on every page

# memory_profiler — memory allocation tracking
gem install memory_profiler
# MemoryProfiler.report { work }.pretty_print

# derailed_benchmarks — Rails memory/speed benchmarks
gem install derailed_benchmarks
bundle exec derailed exec perf:mem
bundle exec derailed exec perf:ips
```

