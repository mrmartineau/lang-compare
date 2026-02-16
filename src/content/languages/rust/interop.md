---
title: Interop
order: 22
---

Excellent **C FFI** (zero overhead). Rust can call C and be called from C. **wasm-bindgen** for JavaScript interop.

```rust
// Call C from Rust
extern "C" {
    fn sqrt(x: f64) -> f64;
    fn printf(fmt: *const i8, ...) -> i32;
}

fn main() {
    unsafe {
        let result = sqrt(16.0);
        println!("{}", result); // 4.0
    }
}

// Expose Rust to C
#[no_mangle]
pub extern "C" fn add(a: i32, b: i32) -> i32 {
    a + b
}
// Build: cargo build --release (produces .so/.dylib/.dll)

// bindgen — auto-generate Rust bindings from C headers
// build.rs:
// bindgen::Builder::default()
//     .header("wrapper.h")
//     .generate()
```

```rust
// wasm-bindgen — Rust ↔ JavaScript
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// Called from JS:
// import { greet } from './pkg/mylib.js'
// greet("World")

// PyO3 — Rust ↔ Python
use pyo3::prelude::*;

#[pyfunction]
fn sum_as_string(a: usize, b: usize) -> String {
    (a + b).to_string()
}

// Neon — Rust ↔ Node.js
// uniffi — cross-language bindings (Kotlin, Swift, Python)
```

