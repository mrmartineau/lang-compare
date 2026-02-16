---
title: Build & Compile Model
order: 16
---

**Compiled to IL (Intermediate Language), then JIT or AOT compiled.** C# targets the .NET runtime (CLR).

```bash
# Build (compiles to IL in .dll)
dotnet build
dotnet build -c Release

# Run (JIT compiles IL to native at runtime)
dotnet run

# Publish — framework-dependent (needs .NET installed)
dotnet publish -c Release

# Publish — self-contained (includes runtime)
dotnet publish -c Release --self-contained -r linux-x64

# Native AOT (ahead-of-time, .NET 8+)
dotnet publish -c Release -r linux-x64 /p:PublishAot=true
# Output: single native binary, no .NET runtime needed
```

**Execution model:**
- Source → Roslyn compiler → IL (.dll) → JIT (RyuJIT) → Machine code
- JIT compilation happens at runtime, method by method
- Native AOT eliminates JIT — compiles directly to native binary
- Tiered compilation: quick JIT first, re-optimize hot paths
- ReadyToRun (R2R) pre-compiles IL for faster startup

