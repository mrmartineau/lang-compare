---
title: Debugging
order: 24
---

Use **LLDB** or **GDB** for debugging. The compiler provides excellent error messages. `dbg!()` macro for quick inspection.

```rust
// dbg! macro — print expression + value + file:line
let x = 42;
dbg!(x);        // [src/main.rs:3] x = 42
dbg!(x * 2);    // [src/main.rs:4] x * 2 = 84

// println! for basic output
println!("value: {:?}", my_struct);   // Debug format
println!("value: {:#?}", my_struct);  // Pretty-print

// eprintln! — print to stderr
eprintln!("error: {}", msg);

// tracing — structured logging
use tracing::{info, warn, error, debug, instrument};

#[instrument]
fn process(id: u32) {
    info!(id, "processing");
    debug!(?some_value, "details");
    error!(%err, "failed");
}
```

```bash
# LLDB (default on macOS, works on Linux)
lldb target/debug/myapp
# b main.rs:42    (breakpoint)
# r                (run)
# n                (next)
# s                (step into)
# p variable       (print)
# bt               (backtrace)

# GDB
gdb target/debug/myapp
# Same commands but GDB syntax

# VS Code — CodeLLDB extension (recommended)
# launch.json:
{
  "type": "lldb",
  "request": "launch",
  "program": "${workspaceFolder}/target/debug/myapp",
  "args": [],
  "cwd": "${workspaceFolder}"
}
# Set breakpoints, inspect variables, view call stack

# Compiler errors are the first line of debugging
# Rust's error messages include:
# - Exact location, suggested fixes
# - Borrow checker explanations
# cargo clippy for additional warnings
```

