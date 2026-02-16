---
title: Modules & Imports
order: 8
---

Go uses packages and modules. Each directory is a package. A `go.mod` file defines a module. Imports use the full module path. No circular imports allowed.

```go
// Import standard library
import "fmt"
import "os"

// Multiple imports
import (
    "fmt"
    "strings"
    "net/http"
)

// Import third-party packages
import "github.com/gorilla/mux"

// Import with alias
import (
    f "fmt"
    _ "image/png" // side-effect import
)

// Package declaration (every file starts with this)
package main // or package mylib

// Exported vs unexported (capitalization)
func PublicFunc() {}  // exported (uppercase)
func privateFunc() {} // unexported (lowercase)

// Internal packages (restricted visibility)
// internal/helper.go — only parent module can import

// go.mod defines the module
// module github.com/user/myapp
// go 1.22
// require github.com/gorilla/mux v1.8.1
```

