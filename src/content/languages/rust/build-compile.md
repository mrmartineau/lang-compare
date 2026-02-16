---
title: Build & Compile Model
order: 16
---

**Ahead-of-time compiled to native binary via LLVM.** Rust produces highly optimized machine code with zero-cost abstractions.

```bash
# Debug build (fast compile, slow runtime)
cargo build
./target/debug/myapp

# Release build (slow compile, fast runtime)
cargo build --release
./target/release/myapp

# Compile + run
cargo run
cargo run --release

# Cross-compilation
rustup target add x86_64-unknown-linux-musl
cargo build --target x86_64-unknown-linux-musl --release

# Check without building (fastest feedback)
cargo check

# Output: native binary, or .rlib/.so/.a for libraries
```

**Execution model:**
- Source → HIR → MIR (borrow checking) → LLVM IR → Machine code
- No runtime, no GC — zero-cost abstractions
- Compile times are slower than Go/C due to deep optimization + borrow checker
- Incremental compilation and `sccache` help with rebuild speed
- Can target WASM: `cargo build --target wasm32-unknown-unknown`

