---
title: Package Management
order: 10
---

Cargo is Rust's built-in package manager and build tool. Packages are called "crates".

```bash
# Add a dependency
cargo add serde

# Add with features
cargo add serde --features derive

# Add a dev dependency
cargo add --dev tokio-test

# Remove a dependency
cargo remove serde

# Update dependencies
cargo update

# Search for crates
cargo search json
```

