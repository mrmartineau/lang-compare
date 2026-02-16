---
title: Performance Profiling
order: 21
---

Built-in `cProfile` and `timeit`. Third-party tools: `py-spy`, `scalene`, `line_profiler`.

```python
# timeit — quick benchmarks
import timeit
timeit.timeit('sum(range(1000))', number=10000)

# cProfile — built-in profiler
import cProfile
cProfile.run('my_function()')

# Profile to file + visualize
python -m cProfile -o output.prof script.py
# Visualize with snakeviz:
pip install snakeviz
snakeviz output.prof
```

```bash
# py-spy — sampling profiler (no code changes)
pip install py-spy
py-spy top --pid 12345           # Live top-like view
py-spy record -o profile.svg -- python app.py  # Flame graph

# Scalene — CPU + memory + GPU profiler
pip install scalene
scalene script.py

# line_profiler — line-by-line timing
pip install line_profiler
# Decorate function with @profile, then:
kernprof -l -v script.py

# memory_profiler — line-by-line memory
pip install memory-profiler
python -m memory_profiler script.py

# tracemalloc — built-in memory tracing
import tracemalloc
tracemalloc.start()
# ... code ...
snapshot = tracemalloc.take_snapshot()
for stat in snapshot.statistics('lineno')[:10]:
    print(stat)
```

