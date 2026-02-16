---
title: Concurrency
order: 17
---

**Task-based async/await** with the Task Parallel Library (TPL). First-class async support throughout the framework.

```csharp
// async/await — non-blocking I/O
async Task<string> FetchDataAsync(string url)
{
    using var client = new HttpClient();
    return await client.GetStringAsync(url);
}

// Concurrent tasks
var tasks = new[]
{
    FetchDataAsync("/api/a"),
    FetchDataAsync("/api/b"),
};
string[] results = await Task.WhenAll(tasks);

// Cancellation
var cts = new CancellationTokenSource(TimeSpan.FromSeconds(5));
await DoWorkAsync(cts.Token);
```

```csharp
// Parallel — CPU parallelism
Parallel.ForEach(items, item =>
{
    Process(item);
});

// PLINQ — parallel LINQ
var results = data
    .AsParallel()
    .Where(x => x > 0)
    .Select(x => x * 2)
    .ToList();

// Channels — producer/consumer
var channel = Channel.CreateBounded<int>(100);
// Producer
await channel.Writer.WriteAsync(42);
// Consumer
var item = await channel.Reader.ReadAsync();

// Lock / SemaphoreSlim
private readonly SemaphoreSlim _semaphore = new(1, 1);
await _semaphore.WaitAsync();
try { /* critical section */ }
finally { _semaphore.Release(); }
```

