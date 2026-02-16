---
title: Interop
order: 22
---

**cgo** enables calling C code from Go. Go can also be compiled as a C-shared library. Plugin system for dynamic loading.

```go
// cgo — call C from Go
/*
#include <math.h>
*/
import "C"
import "fmt"

func main() {
    result := C.sqrt(16.0)
    fmt.Println(result) // 4
}

// Pass strings between Go and C
/*
#include <stdlib.h>
#include <string.h>
*/
import "C"
import "unsafe"

cs := C.CString("hello")
defer C.free(unsafe.Pointer(cs))
length := C.strlen(cs)
```

```go
// Build Go as a C shared library
// export Add
func Add(a, b C.int) C.int {
    return a + b
}
// Build: go build -buildmode=c-shared -o libmylib.so

// os/exec — call system commands
import "os/exec"
out, err := exec.Command("ls", "-la").Output()

// Plugin system (Linux/macOS only)
import "plugin"
p, _ := plugin.Open("myplugin.so")
sym, _ := p.Lookup("Hello")
sym.(func())()

// WASM — compile Go to WebAssembly
// GOOS=js GOARCH=wasm go build -o main.wasm

// gRPC — cross-language RPC
// Go is a primary language for gRPC
// protoc --go_out=. --go-grpc_out=. service.proto
```

