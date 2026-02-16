---
title: Package Management
order: 10
---

NuGet is the package manager for .NET. Managed via the `dotnet` CLI or Visual Studio.

```bash
# Add a package
dotnet add package Newtonsoft.Json

# Add a specific version
dotnet add package Serilog --version 3.1.0

# Remove a package
dotnet remove package Newtonsoft.Json

# Restore packages
dotnet restore

# List installed packages
dotnet list package

# Update packages
dotnet outdated  # requires dotnet-outdated tool
```

