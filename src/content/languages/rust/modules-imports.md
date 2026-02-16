---
title: Modules & Imports
order: 8
---

Rust uses a module tree rooted at `lib.rs` or `main.rs`. Modules can be inline or in separate files. Crates are the unit of compilation and distribution.

```rust
// Declare a module (looks for math.rs or math/mod.rs)
mod math;

// Use items from a module
use crate::math::add;
use crate::math::{add, subtract};

// Use with alias
use std::collections::HashMap as Map;

// Glob import (discouraged)
use std::io::prelude::*;

// Re-export
pub use crate::math::add;

// Nested paths
use std::{
    fs::File,
    io::{self, Read, Write},
};

// External crate (from Cargo.toml)
use serde::{Serialize, Deserialize};
use tokio::runtime::Runtime;

// Inline module
mod inner {
    pub fn helper() -> i32 { 42 }
}

// Visibility modifiers
pub fn public() {}           // public
pub(crate) fn crate_only() {} // crate-visible
fn private() {}               // module-private
pub(super) fn parent_only() {} // parent module
```

