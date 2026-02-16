---
title: Tooling & Formatter/Linter
order: 15
---

Go has strong built-in tooling. Formatting is enforced by convention — all Go code looks the same.

```bash
# gofmt — built-in formatter (canonical style)
gofmt -w .

# goimports — gofmt + auto-manage imports
go install golang.org/x/tools/cmd/goimports@latest
goimports -w .

# go vet — built-in static analysis
go vet ./...

# golangci-lint — meta-linter (runs many linters)
# Install: https://golangci-lint.run/usage/install/
golangci-lint run

# staticcheck — advanced static analysis
go install honnef.co/go/tools/cmd/staticcheck@latest
staticcheck ./...
```

```yaml
# .golangci.yml
linters:
  enable:
    - errcheck
    - govet
    - staticcheck
    - unused
    - gosimple
    - ineffassign
    - misspell
    - revive
```

```bash
# Editor: gopls (Go language server) provides
# formatting, linting, and refactoring in all editors
```

