---
title: Testing
order: 13
---

Rust has built-in testing support — no external framework needed. Tests live alongside code or in a `tests/` directory.

```rust
// Unit tests — in the same file as the code
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add() {
        assert_eq!(add(1, 2), 3);
    }

    #[test]
    fn test_add_negative() {
        assert_eq!(add(-1, 1), 0);
    }

    #[test]
    #[should_panic(expected = "overflow")]
    fn test_overflow() {
        let _: u8 = 255u8 + 1; // panics in debug mode
    }
}
```

```rust
// Integration tests — in tests/ directory
// tests/integration_test.rs
use my_crate::add;

#[test]
fn it_adds() {
    assert_eq!(add(2, 3), 5);
}
```

```bash
# Run tests
cargo test              # All tests
cargo test test_add     # Specific test
cargo test -- --nocapture  # Show println! output
cargo test --doc        # Doc tests only
cargo bench             # Benchmarks (nightly)
```

