---
title: Concurrency
order: 17
---

**OS threads** with `std::thread`, atomics, and mutexes. C++20 adds coroutines. No built-in async runtime.

```cpp
#include <thread>
#include <mutex>
#include <future>

// Threads
std::thread t([] {
    std::cout << "Hello from thread\n";
});
t.join();

// Mutex — protect shared state
std::mutex mtx;
{
    std::lock_guard<std::mutex> lock(mtx);
    shared_data++;
}

// async/future — launch async tasks
auto future = std::async(std::launch::async, [] {
    return compute_result();
});
auto result = future.get();  // Blocks until ready
```

```cpp
// Atomics — lock-free concurrency
#include <atomic>
std::atomic<int> counter{0};
counter.fetch_add(1);

// Condition variables
std::condition_variable cv;
std::unique_lock<std::mutex> lock(mtx);
cv.wait(lock, [] { return ready; });

// C++20 coroutines (low-level)
#include <coroutine>
// Requires a custom promise_type / awaitable
// Libraries: cppcoro, folly::coro

// Parallel algorithms (C++17)
#include <algorithm>
#include <execution>
std::sort(std::execution::par, v.begin(), v.end());
```

