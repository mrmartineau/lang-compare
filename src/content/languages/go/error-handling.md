---
title: Error Handling
order: 9
---

Errors are values returned from functions. No exceptions — check errors explicitly.

```go
// Return and check errors
result, err := strconv.Atoi("42")
if err != nil {
    log.Fatal(err)
}

// Custom errors
type AppError struct {
    Code    int
    Message string
}

func (e *AppError) Error() string {
    return fmt.Sprintf("%d: %s", e.Code, e.Message)
}

// Wrapping errors
if err != nil {
    return fmt.Errorf("failed to parse: %w", err)
}

// Checking wrapped errors
if errors.Is(err, os.ErrNotExist) {
    fmt.Println("file not found")
}

// Defer for cleanup
f, err := os.Open("file.txt")
if err != nil {
    return err
}
defer f.Close()
```

