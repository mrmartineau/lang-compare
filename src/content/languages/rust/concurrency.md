---
title: Concurrency
order: 17
---

**Fearless concurrency** — the borrow checker prevents data races at compile time. Supports threads, async/await, and message passing.

```rust
// Threads
use std::thread;

let handle = thread::spawn(|| {
    println!("Hello from thread!");
});
handle.join().unwrap();

// Channels (mpsc — multiple producer, single consumer)
use std::sync::mpsc;

let (tx, rx) = mpsc::channel();
thread::spawn(move || {
    tx.send("hello").unwrap();
});
println!("{}", rx.recv().unwrap());

// Shared state with Mutex + Arc
use std::sync::{Arc, Mutex};

let counter = Arc::new(Mutex::new(0));
let mut handles = vec![];
for _ in 0..10 {
    let counter = Arc::clone(&counter);
    handles.push(thread::spawn(move || {
        *counter.lock().unwrap() += 1;
    }));
}
for h in handles { h.join().unwrap(); }
```

```rust
// async/await (with Tokio runtime)
use tokio;

#[tokio::main]
async fn main() {
    let (a, b) = tokio::join!(
        fetch_data("url_a"),
        fetch_data("url_b"),
    );

    // Spawn concurrent tasks
    tokio::spawn(async { do_work().await });
}

// Rayon — data parallelism
use rayon::prelude::*;
let sum: i32 = (0..1000).into_par_iter().sum();
```

