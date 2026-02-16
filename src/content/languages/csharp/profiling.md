---
title: Performance Profiling
order: 21
---

**BenchmarkDotNet** for benchmarks, **dotnet-trace/dotnet-counters** for runtime profiling, Visual Studio Profiler for GUI.

```csharp
// BenchmarkDotNet — micro-benchmarking
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;

[MemoryDiagnoser]
public class SortBenchmark
{
    private int[] _data = Enumerable.Range(0, 1000).Reverse().ToArray();

    [Benchmark]
    public void ArraySort() => Array.Sort((int[])_data.Clone());

    [Benchmark]
    public void LinqOrderBy() => _data.OrderBy(x => x).ToArray();
}

// Run: BenchmarkRunner.Run<SortBenchmark>();
```

```bash
# dotnet-counters — real-time metrics
dotnet tool install -g dotnet-counters
dotnet counters monitor --process-id 12345

# dotnet-trace — collect traces
dotnet tool install -g dotnet-trace
dotnet trace collect --process-id 12345
# Open .nettrace file in Visual Studio or PerfView

# dotnet-dump — memory analysis
dotnet tool install -g dotnet-dump
dotnet dump collect --process-id 12345
dotnet dump analyze dump.dmp

# dotnet-gcdump — GC heap analysis
dotnet gcdump collect --process-id 12345

# Visual Studio: Debug > Performance Profiler
# - CPU Usage, Memory Usage, .NET Object Allocation
# - Async tool, Database, Events

# JetBrains dotTrace / dotMemory
# Rider: built-in profiling tools
```

