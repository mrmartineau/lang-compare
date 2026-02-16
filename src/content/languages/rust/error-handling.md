---
title: Error Handling
order: 9
---

No exceptions. Uses `Result<T, E>` and `Option<T>` types with the `?` operator.

```rust
// Result type
fn read_file(path: &str) -> Result<String, io::Error> {
    let content = fs::read_to_string(path)?; // ? propagates error
    Ok(content)
}

// Handling Results
match result {
    Ok(value) => println!("Got: {}", value),
    Err(e) => eprintln!("Error: {}", e),
}

// unwrap (panics on error — use sparingly)
let value = result.unwrap();
let value = result.unwrap_or(default);
let value = result.unwrap_or_else(|e| handle(e));

// Custom error types
#[derive(Debug)]
enum AppError {
    NotFound(String),
    ParseError(std::num::ParseIntError),
}

impl From<std::num::ParseIntError> for AppError {
    fn from(e: std::num::ParseIntError) -> Self {
        AppError::ParseError(e)
    }
}
```

