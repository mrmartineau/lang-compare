---
title: Error Handling
order: 9
---

Uses `try/catch/finally` with typed exceptions.

```csharp
// Try / catch
try {
    var result = int.Parse("not a number");
} catch (FormatException ex) {
    Console.WriteLine($"Parse error: {ex.Message}");
} catch (Exception ex) {
    Console.WriteLine($"Error: {ex.Message}");
} finally {
    Console.WriteLine("always runs");
}

// Throwing exceptions
void Divide(int a, int b) {
    if (b == 0)
        throw new DivideByZeroException();
    return a / b;
}

// Custom exceptions
class AppException : Exception {
    public int Code { get; }
    public AppException(string msg, int code)
        : base(msg) => Code = code;
}

// Exception filters
catch (Exception ex) when (ex.Message.Contains("timeout")) {
    // handle timeout specifically
}
```

