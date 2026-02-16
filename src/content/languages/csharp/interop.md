---
title: Interop
order: 22
---

**P/Invoke** for native C calls, **COM interop**, and strong **.NET interop** across languages (F#, VB.NET). NativeAOT enables C-compatible exports.

```csharp
// P/Invoke — call native C libraries
using System.Runtime.InteropServices;

[DllImport("libc", EntryPoint = "sqrt")]
static extern double Sqrt(double x);

double result = Sqrt(16.0); // 4.0

// Windows API
[DllImport("user32.dll")]
static extern int MessageBox(IntPtr hWnd, string text, string caption, uint type);

// LibraryImport (source-generated, .NET 7+)
[LibraryImport("libm")]
private static partial double sqrt(double x);
```

```csharp
// NativeAOT — export C-compatible functions
[UnmanagedCallersOnly(EntryPoint = "add")]
public static int Add(int a, int b) => a + b;
// Build: dotnet publish /p:PublishAot=true
// Produces .so/.dylib/.dll callable from C

// COM interop (Windows)
dynamic excel = Activator.CreateInstance(
    Type.GetTypeFromProgID("Excel.Application")!);
excel.Visible = true;

// Process — call system commands
using System.Diagnostics;
var output = Process.Start(new ProcessStartInfo("ls", "-la") {
    RedirectStandardOutput = true
})!.StandardOutput.ReadToEnd();

// .NET languages interop seamlessly
// C# can call F#, VB.NET, and vice versa
// All compile to the same IL
```

