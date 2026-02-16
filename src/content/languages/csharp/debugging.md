---
title: Debugging
order: 24
---

**Visual Studio** and **Rider** have best-in-class debuggers. VS Code with C# extension also works well.

```csharp
// Debug output
Console.WriteLine($"Value: {value}");
System.Diagnostics.Debug.WriteLine("debug only");

// Debugger.Break() — programmatic breakpoint
if (suspiciousCondition)
    System.Diagnostics.Debugger.Break();

// Logging (Microsoft.Extensions.Logging)
ILogger<MyService> _logger;
_logger.LogInformation("Processing {Id}", item.Id);
_logger.LogError(ex, "Failed to process {Id}", item.Id);
_logger.LogDebug("Details: {@Item}", item); // Structured
```

```bash
# Visual Studio debugging
# F5: Start debugging
# F9: Toggle breakpoint
# F10: Step over, F11: Step into
# Features: conditional breakpoints, hit counts,
# data breakpoints, IntelliTrace, hot reload

# VS Code
# Install C# extension (ms-dotnettools.csharp)
# launch.json auto-generated for .NET projects
# F5 to start debugging

# Rider (JetBrains)
# Built-in debugger with decompilation

# dotnet-dump — analyze crash dumps
dotnet dump collect --process-id <pid>
dotnet dump analyze <dump-file>
# dumpheap, dumpobj, gcroot commands

# dotnet-sos — SOS debugging extension
dotnet tool install -g dotnet-sos
dotnet sos install

# Remote debugging
# Visual Studio: Debug > Attach to Process > SSH
```

