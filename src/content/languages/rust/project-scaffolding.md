---
title: Project Scaffolding
order: 11
---

Cargo creates the full project structure with one command.

```bash
# Create a new binary project
cargo new my-project
cd my-project

# Create a library project
cargo new my-lib --lib

# Project structure created:
# my-project/
#   Cargo.toml
#   src/
#     main.rs  (or lib.rs)

# Run the project
cargo run

# Build for release
cargo build --release

# Run tests
cargo test
```

