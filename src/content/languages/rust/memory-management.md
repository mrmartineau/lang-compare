---
title: Memory Management
order: 20
---

**Ownership and borrowing** — no GC. Memory is freed deterministically when the owner goes out of scope. The borrow checker enforces safety at compile time.

```rust
// Ownership — each value has exactly one owner
let s1 = String::from("hello");
let s2 = s1;        // s1 is MOVED to s2
// println!("{}", s1); // ERROR: s1 is no longer valid

// Clone — explicit deep copy
let s3 = s2.clone();

// Borrowing — references without ownership
fn print_len(s: &String) {  // Immutable borrow
    println!("{}", s.len());
}

fn append(s: &mut String) {  // Mutable borrow
    s.push_str(" world");
}

// Rules:
// 1. Many immutable borrows OR one mutable borrow
// 2. References must always be valid (no dangling)
```

```rust
// Drop trait — deterministic cleanup (like RAII)
struct FileHandle { fd: i32 }

impl Drop for FileHandle {
    fn drop(&mut self) {
        close_fd(self.fd);  // Runs when value goes out of scope
    }
}

{
    let f = FileHandle { fd: 42 };
    // ... use f ...
} // f.drop() called here automatically

// Smart pointers
use std::rc::Rc;        // Reference counted (single-thread)
use std::sync::Arc;     // Atomic reference counted (multi-thread)
use std::cell::RefCell; // Interior mutability

let shared = Rc::new(vec![1, 2, 3]);
let clone = Rc::clone(&shared); // Cheap (increments count)

// Box — heap allocation
let boxed: Box<dyn Trait> = Box::new(MyStruct {});

// No GC pauses, no runtime overhead
// Memory bugs caught at compile time, not runtime
```

