---
title: Performance Profiling
order: 21
---

Use `perf` (Linux), Instruments (macOS), `gprof`, Valgrind, and Google Benchmark for micro-benchmarks.

```cpp
// Google Benchmark
#include <benchmark/benchmark.h>

static void BM_Sort(benchmark::State& state) {
    for (auto _ : state) {
        std::vector<int> v(1000);
        std::iota(v.begin(), v.end(), 0);
        std::ranges::reverse(v);
        std::ranges::sort(v);
    }
}
BENCHMARK(BM_Sort);
BENCHMARK_MAIN();
```

```bash
# perf (Linux) — sampling profiler
perf record -g ./myapp
perf report
perf stat ./myapp         # Quick summary

# Flame graphs
perf script | stackcollapse-perf.pl | flamegraph.pl > flame.svg

# gprof — GNU profiler
g++ -pg -o myapp main.cpp
./myapp
gprof myapp gmon.out > analysis.txt

# Valgrind — memory + cache profiling
valgrind --tool=callgrind ./myapp
kcachegrind callgrind.out.*

valgrind --tool=massif ./myapp    # Heap profiler
ms_print massif.out.*

# AddressSanitizer / MemorySanitizer
g++ -fsanitize=address -g -o myapp main.cpp
./myapp  # Reports memory errors

# Instruments (macOS)
xcrun xctrace record --template 'CPU Profiler' --launch ./myapp

# Quick timing
#include <chrono>
auto start = std::chrono::high_resolution_clock::now();
doWork();
auto end = std::chrono::high_resolution_clock::now();
auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start);
```

