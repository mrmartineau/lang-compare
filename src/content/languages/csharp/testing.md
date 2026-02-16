---
title: Testing
order: 13
---

Popular frameworks: xUnit (most popular), NUnit, and MSTest. FluentAssertions improves readability. Built-in `dotnet test` runner.

```csharp
// xUnit (recommended)
using Xunit;

public class MathTests
{
    [Fact]
    public void Add_ReturnsCorrectSum()
    {
        Assert.Equal(3, 1 + 2);
    }

    [Theory]
    [InlineData(1, 2, 3)]
    [InlineData(0, 0, 0)]
    [InlineData(-1, 1, 0)]
    public void Add_WithVariousInputs(int a, int b, int expected)
    {
        Assert.Equal(expected, a + b);
    }
}
```

```csharp
// FluentAssertions — readable assertions
using FluentAssertions;

[Fact]
public void List_Should_Contain_Item()
{
    var list = new[] { 1, 2, 3 };
    list.Should().Contain(2);
    list.Should().HaveCount(3);
}
```

```bash
# Run tests
dotnet test                    # All tests
dotnet test --filter "Add"     # Specific tests
dotnet test --collect:"XPlat Code Coverage"  # With coverage
dotnet test --logger "console;verbosity=detailed"
```

