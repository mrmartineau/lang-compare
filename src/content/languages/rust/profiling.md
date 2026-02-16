---
title: Performance Profiling
order: 21
---

Use `cargo bench` for benchmarks, `perf`/`flamegraph` for CPU profiling, and `DHAT`/`Valgrind` for memory.

```rust
// Criterion.rs — statistical benchmarking
// Cargo.toml: criterion = { version = "0.5", features = ["html_reports"] }
use criterion::{criterion_group, criterion_main, Criterion};

fn bench_sort(c: &mut Criterion) {
    c.bench_function("sort 1000", |b| {
        b.iter(|| {
            let mut v: Vec<i32> = (0..1000).rev().collect();
            v.sort();
        })
    });
}

criterion_group!(benches, bench_sort);
criterion_main!(benches);
```

```bash
# Built-in benchmarks (nightly only)
cargo bench

# Criterion benchmarks (stable Rust)
cargo bench  # with criterion in Cargo.toml

# Flame graphs
cargo install flamegraph
cargo flamegraph          # Generates flamegraph.svg

# perf (Linux)
perf record --call-graph dwarf ./target/release/myapp
perf report

# Valgrind / Cachegrind
valgrind --tool=callgrind ./target/release/myapp
# Visualize with kcachegrind

# DHAT — heap profiler
valgrind --tool=dhat ./target/release/myapp

# cargo-instruments (macOS)
cargo install cargo-instruments
cargo instruments -t "CPU Profiler"

# Compile time profiling
cargo build --timings    # HTML report of compile times
```

