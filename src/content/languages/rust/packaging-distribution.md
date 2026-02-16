---
title: Packaging & Distribution
order: 23
---

Publish libraries to **crates.io**. Distribute binaries via `cargo install`, GitHub releases, or package managers.

```bash
# Publish a crate to crates.io
cargo login <token>
cargo publish

# Cargo.toml metadata
[package]
name = "my-crate"
version = "1.0.0"
edition = "2021"
description = "My awesome library"
license = "MIT"
repository = "https://github.com/user/my-crate"

# Install a binary crate
cargo install ripgrep

# Build for release
cargo build --release
# Output: target/release/myapp
```

```bash
# Cross-compilation
rustup target add x86_64-unknown-linux-musl
cargo build --release --target x86_64-unknown-linux-musl
# Produces fully static binary

# cargo-dist — automated release pipeline
cargo install cargo-dist
cargo dist init
cargo dist build
# Creates GitHub releases with binaries for all platforms

# cargo-binstall — binary installation
cargo binstall ripgrep  # Downloads pre-built binary

# Docker (tiny images)
FROM rust:1.78 AS builder
WORKDIR /app
COPY . .
RUN cargo build --release

FROM debian:bookworm-slim
COPY --from=builder /app/target/release/myapp /usr/local/bin/
CMD ["myapp"]

# WASM distribution
wasm-pack build --target web
# Publish to npm: wasm-pack publish
```

