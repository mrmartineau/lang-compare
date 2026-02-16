---
title: Installation & Getting Started
order: 12
---

Download from the official site or use a package manager. Go is a single binary with everything included.

```bash
# macOS (Homebrew)
brew install go

# Linux
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz
export PATH=$PATH:/usr/local/go/bin

# Windows — download installer from https://go.dev/dl/

# Verify installation
go version
```

```bash
# No REPL built-in — but alternatives exist:
# gore — a Go REPL
go install github.com/x-motemen/gore/cmd/gore@latest
gore

# Go Playground — try Go in the browser
# https://go.dev/play/

# Run a file directly (no build step needed)
go run main.go

# Quick one-liner (via go run)
echo 'package main; import "fmt"; func main() { fmt.Println("Hello!") }' > /tmp/hello.go && go run /tmp/hello.go
```

