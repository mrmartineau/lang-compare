---
title: Modules & Imports
order: 8
---

C# uses namespaces to organize code and assemblies for distribution. `using` directives import namespaces. Projects produce DLLs or executables via MSBuild.

```csharp
// Import namespaces
using System;
using System.Collections.Generic;
using System.Linq;

// Import with alias
using Json = System.Text.Json.JsonSerializer;
using static System.Math; // import static members

// Global usings (C# 10, apply to entire project)
global using System.Collections.Generic;

// File-scoped namespace (C# 10)
namespace MyApp.Models;

public class User {
    public string Name { get; set; }
}

// Traditional namespace
namespace MyApp.Services {
    public class UserService {
        public User GetUser() => new();
    }
}

// Internal vs public (assembly-level visibility)
public class PublicApi {}    // visible to other assemblies
internal class InternalOnly {} // same assembly only

// Assemblies: each .csproj produces a DLL
// Reference other projects in .csproj:
// <ProjectReference Include="../MyLib/MyLib.csproj" />
```

