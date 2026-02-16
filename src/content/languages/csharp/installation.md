---
title: Installation & Getting Started
order: 12
---

Install the .NET SDK, which includes the C# compiler, runtime, and CLI tools.

```bash
# macOS (Homebrew)
brew install dotnet

# Linux (Ubuntu/Debian)
sudo apt install dotnet-sdk-8.0

# Windows — download from https://dotnet.microsoft.com/download

# Or use the install script
curl -sSL https://dot.net/v1/dotnet-install.sh | bash

# Verify installation
dotnet --version
```

```bash
# REPL — C# Interactive (csi)
dotnet tool install -g dotnet-script
dotnet script    # Interactive REPL

# Or use C# Interactive in Visual Studio
# Tools > C# Interactive

# .NET Fiddle — try in the browser
# https://dotnetfiddle.net/

# Run a project
dotnet run

# Run a single file script (.csx)
dotnet script hello.csx

# Quick one-liner
dotnet script eval "Console.WriteLine(\"Hello!\")"
```

