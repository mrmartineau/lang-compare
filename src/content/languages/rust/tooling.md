---
title: Tooling & Formatter/Linter
order: 15
---

Rust ships with `rustfmt` and `clippy` as official tools. The compiler itself is an excellent linter.

```bash
# rustfmt — official formatter
rustfmt src/main.rs
cargo fmt              # Format entire project
cargo fmt -- --check   # Check without modifying

# Clippy — official linter (hundreds of lints)
cargo clippy
cargo clippy -- -W clippy::pedantic  # Stricter lints
cargo clippy --fix     # Auto-fix suggestions

# cargo check — fast type/borrow checking (no codegen)
cargo check
```

```toml
# rustfmt.toml
max_width = 100
edition = "2021"
use_field_init_shorthand = true
```

```toml
# Clippy config in Cargo.toml
[lints.clippy]
pedantic = { level = "warn", priority = -1 }
needless_pass_by_value = "allow"
```

```bash
# rust-analyzer — language server for all editors
# Provides inline errors, completions, refactoring,
# hover docs, and inlay type hints
```

