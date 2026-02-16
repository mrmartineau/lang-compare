---
title: Build & Compile Model
order: 16
---

**Ahead-of-time compiled to native binary.** Go compiles directly to machine code. No VM, no runtime dependency.

```bash
# Compile and run
go run main.go           # Compile + run in one step
go build -o myapp .      # Compile to binary
./myapp                  # Run the binary

# Release build
go build -ldflags="-s -w" -o myapp .  # Strip debug info

# Cross-compilation (built-in!)
GOOS=linux GOARCH=amd64 go build -o myapp-linux .
GOOS=darwin GOARCH=arm64 go build -o myapp-mac .
GOOS=windows GOARCH=amd64 go build -o myapp.exe .

# Output: single static binary (no dependencies)
```

**Execution model:**
- Source → AST → SSA IR → Machine code (single binary)
- Compilation is extremely fast (seconds for large projects)
- Statically linked by default — one binary, zero dependencies
- Includes a small runtime (goroutine scheduler, GC) in the binary
- No JIT — all optimization happens at compile time

