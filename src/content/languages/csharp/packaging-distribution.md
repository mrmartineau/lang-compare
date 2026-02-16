---
title: Packaging & Distribution
order: 23
---

Publish libraries to **NuGet**. Distribute apps as self-contained executables, Docker containers, or native AOT binaries.

```bash
# Create a NuGet package
dotnet pack -c Release
# Output: bin/Release/MyLib.1.0.0.nupkg

# Publish to NuGet.org
dotnet nuget push MyLib.1.0.0.nupkg --api-key <key> \
  --source https://api.nuget.org/v3/index.json

# .csproj package metadata
# <PackageId>MyLib</PackageId>
# <Version>1.0.0</Version>
# <Authors>Me</Authors>
# <Description>My library</Description>
# <PackageLicenseExpression>MIT</PackageLicenseExpression>
```

```bash
# Self-contained deployment (includes .NET runtime)
dotnet publish -c Release --self-contained -r linux-x64
dotnet publish -c Release --self-contained -r osx-arm64
dotnet publish -c Release --self-contained -r win-x64

# Single file
dotnet publish -c Release -r linux-x64 \
  /p:PublishSingleFile=true /p:IncludeNativeLibrariesForSelfExtract=true

# Native AOT (no .NET runtime, fast startup)
dotnet publish -c Release -r linux-x64 /p:PublishAot=true

# .NET CLI tools
dotnet pack
dotnet tool install -g my-tool
# Users: dotnet tool install -g my-tool

# Docker
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app
COPY . .
RUN dotnet publish -c Release -o /out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
COPY --from=build /out .
ENTRYPOINT ["dotnet", "MyApp.dll"]
```

