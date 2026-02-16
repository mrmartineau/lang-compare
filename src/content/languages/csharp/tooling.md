---
title: Tooling & Formatter/Linter
order: 15
---

C# uses `.editorconfig` for style rules and Roslyn analyzers for linting. `dotnet format` is the built-in formatter.

```bash
# dotnet format — built-in formatter
dotnet format                 # Format entire solution
dotnet format --verify-no-changes  # CI check

# Roslyn analyzers (NuGet packages)
dotnet add package Microsoft.CodeAnalysis.NetAnalyzers
dotnet add package StyleCop.Analyzers

# CSharpier — Prettier-inspired opinionated formatter
dotnet tool install csharpier -g
dotnet csharpier .
```

```ini
# .editorconfig
[*.cs]
indent_style = space
indent_size = 4
dotnet_sort_system_directives_first = true
csharp_new_line_before_open_brace = all
csharp_prefer_braces = true
dotnet_diagnostic.CA1062.severity = warning
```

```xml
<!-- Directory.Build.props — enable analyzers project-wide -->
<Project>
  <PropertyGroup>
    <AnalysisLevel>latest-recommended</AnalysisLevel>
    <EnforceCodeStyleInBuild>true</EnforceCodeStyleInBuild>
    <TreatWarningsAsErrors>true</TreatWarningsAsErrors>
  </PropertyGroup>
</Project>
```

