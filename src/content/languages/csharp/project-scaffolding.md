---
title: Project Scaffolding
order: 11
---

The `dotnet` CLI creates projects from built-in templates.

```bash
# Console app
dotnet new console -n MyApp
cd MyApp

# Web API
dotnet new webapi -n MyApi

# Class library
dotnet new classlib -n MyLib

# List available templates
dotnet new list

# Run the project
dotnet run

# Build for release
dotnet build -c Release

# Publish self-contained
dotnet publish -c Release --self-contained
```

