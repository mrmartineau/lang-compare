---
title: Debugging
order: 24
---

**Delve** is the standard Go debugger. Built-in `log` and `fmt` for print debugging. VS Code and GoLand have GUI support.

```go
// Print debugging
fmt.Println("debug:", value)
fmt.Printf("type: %T, value: %+v\n", obj, obj)

// log package — timestamped output
import "log"
log.Println("starting server")
log.Printf("request: %+v", req)
log.Fatal("cannot start")  // Logs then os.Exit(1)

// slog — structured logging (Go 1.21+)
import "log/slog"
slog.Info("request", "method", r.Method, "path", r.URL.Path)
slog.Error("failed", "err", err, "user_id", id)
```

```bash
# Delve — Go debugger
go install github.com/go-delve/delve/cmd/dlv@latest

# Start debugging
dlv debug                 # Debug current package
dlv debug ./cmd/myapp     # Debug specific package
dlv test                  # Debug tests
dlv attach <pid>          # Attach to running process

# Delve commands:
# break main.go:42  (set breakpoint)
# continue           (run to breakpoint)
# next               (step over)
# step               (step into)
# print expr         (evaluate expression)
# goroutines         (list goroutines)
# stack              (show call stack)

# VS Code — built-in Go debugging
# Install Go extension, F5 to debug
# Breakpoints, watch, goroutine inspection

# GoLand (JetBrains) — built-in debugger
# Click gutter, Shift+F9 to debug
```

