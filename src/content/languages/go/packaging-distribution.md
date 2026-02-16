---
title: Packaging & Distribution
order: 23
---

Go produces **single static binaries** — no runtime needed. Publish modules to any Git host. Cross-compile trivially.

```bash
# Publish a Go module — just push to a Git repo
# Users: go get github.com/user/mylib@v1.0.0

# Semantic versioning via Git tags
git tag v1.0.0
git push origin v1.0.0

# Major version paths (v2+)
# module github.com/user/mylib/v2

# Build for multiple platforms
GOOS=linux   GOARCH=amd64 go build -o myapp-linux-amd64
GOOS=darwin  GOARCH=arm64 go build -o myapp-darwin-arm64
GOOS=windows GOARCH=amd64 go build -o myapp-windows.exe

# Strip debug info for smaller binaries
go build -ldflags="-s -w" -o myapp
```

```bash
# GoReleaser — automated release pipeline
# goreleaser.yaml config, then:
goreleaser release --clean
# Builds for all platforms, creates GitHub release,
# generates checksums, Homebrew formula, Docker images

# Install via go install
go install github.com/user/mycli@latest
# Binary placed in $GOPATH/bin

# Docker (tiny images with scratch)
FROM golang:1.22 AS builder
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 go build -o /app/myapp

FROM scratch
COPY --from=builder /app/myapp /myapp
ENTRYPOINT ["/myapp"]
# Final image: ~5-10MB
```

