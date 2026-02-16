---
title: Project Scaffolding
order: 11
---

Initialize a module with `go mod init`. No external scaffolding tools needed.

```bash
# Create a new project
mkdir my-project && cd my-project
go mod init github.com/user/my-project

# Create main file
cat > main.go << 'EOF'
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
EOF

# Run the project
go run .

# Build a binary
go build -o my-app .
```

