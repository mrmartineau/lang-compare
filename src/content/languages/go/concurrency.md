---
title: Concurrency
order: 17
---

**Goroutines and channels** — Go's concurrency model is built into the language. Lightweight green threads with CSP-style communication.

```go
// Goroutines — lightweight concurrent functions
go func() {
    fmt.Println("running concurrently")
}()

// Channels — communicate between goroutines
ch := make(chan string)
go func() {
    ch <- "hello"  // Send
}()
msg := <-ch  // Receive

// Buffered channels
ch := make(chan int, 10)

// Select — multiplex channels
select {
case msg := <-ch1:
    fmt.Println(msg)
case msg := <-ch2:
    fmt.Println(msg)
case <-time.After(1 * time.Second):
    fmt.Println("timeout")
}
```

```go
// sync.WaitGroup — wait for goroutines
var wg sync.WaitGroup
for _, url := range urls {
    wg.Add(1)
    go func(u string) {
        defer wg.Done()
        fetch(u)
    }(url)
}
wg.Wait()

// sync.Mutex — protect shared state
var mu sync.Mutex
mu.Lock()
counter++
mu.Unlock()

// errgroup — goroutines with error handling
g, ctx := errgroup.WithContext(ctx)
g.Go(func() error { return fetchA(ctx) })
g.Go(func() error { return fetchB(ctx) })
err := g.Wait()
```

