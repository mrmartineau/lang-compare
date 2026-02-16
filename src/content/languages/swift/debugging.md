---
title: Debugging
order: 24
---

**Xcode debugger** (LLDB-based) is the primary tool. Swift also supports command-line LLDB and VS Code debugging.

```swift
// Print debugging
print("value:", value)
print("struct:", myStruct)  // Uses CustomStringConvertible
debugPrint(myStruct)        // Uses CustomDebugStringConvertible
dump(myStruct)              // Deep recursive print

// Assertions and preconditions
assert(index >= 0, "Index must be non-negative")
precondition(array.count > 0, "Array must not be empty")
// assert: removed in release builds
// precondition: kept in release builds

// fatalError — always crashes (useful for unimplemented)
fatalError("Not implemented")

// Logging (os.Logger — Apple Unified Logging)
import os
let logger = Logger(subsystem: "com.app", category: "network")
logger.info("Request started")
logger.error("Failed: \(error.localizedDescription)")
logger.debug("Response: \(data, privacy: .private)")
```

```bash
# Xcode debugging
# Cmd+R: Run, Cmd+Y: Toggle breakpoints
# Click gutter for breakpoints
# Conditional breakpoints, symbolic breakpoints
# Debug navigator: CPU, memory, disk, network
# View debugger: 3D UI hierarchy
# Memory graph debugger: find retain cycles

# LLDB commands in Xcode console
(lldb) po myVariable       # Print object
(lldb) p myInt              # Print value
(lldb) expr myVar = 42     # Modify at runtime
(lldb) bt                   # Backtrace

# Command-line debugging
lldb .build/debug/MyApp
# b main.swift:42, r, n, s, po variable

# VS Code — Swift extension (on Linux/macOS)
```

