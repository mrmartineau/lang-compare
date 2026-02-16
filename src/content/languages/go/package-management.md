---
title: Package Management
order: 10
---

Go modules (`go mod`) is the built-in dependency management system.

```bash
# Add a dependency
go get github.com/gin-gonic/gin

# Add a specific version
go get github.com/gin-gonic/gin@v1.9.1

# Tidy up (remove unused, add missing)
go mod tidy

# List dependencies
go list -m all

# Update all dependencies
go get -u ./...

# Vendor dependencies
go mod vendor
```

