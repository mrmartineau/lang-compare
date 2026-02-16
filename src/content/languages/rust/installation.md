---
title: Installation & Getting Started
order: 12
---

Install via `rustup`, the official Rust toolchain installer. It manages Rust versions, components, and targets.

```bash
# Install Rust via rustup (recommended)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# macOS (Homebrew — not recommended, use rustup)
brew install rust

# Verify installation
rustc --version
cargo --version

# Update Rust
rustup update

# Install a specific toolchain
rustup install nightly
rustup default stable
```

```bash
# No built-in REPL — but evcxr is a popular Rust REPL
cargo install evcxr_repl
evcxr

# Rust Playground — try in the browser
# https://play.rust-lang.org/

# Run a file directly
rustc hello.rs && ./hello

# Run via Cargo (preferred)
cargo run

# Quick script with cargo-script
cargo install cargo-script
cargo script hello.rs
```

