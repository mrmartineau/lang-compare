---
title: Performance Profiling
order: 21
---

**Instruments** (Xcode) is the primary profiling tool. Swift also supports `XCTest` performance tests and `swift-benchmark`.

```swift
// XCTest performance measurement
import XCTest

class PerformanceTests: XCTestCase {
    func testSortPerformance() {
        let data = (0..<10000).shuffled()
        measure {
            _ = data.sorted()
        }
    }

    // Clock-based measurement (Xcode 14+)
    func testWithClock() {
        measure(metrics: [XCTClockMetric()]) {
            doExpensiveWork()
        }
    }
}
```

```bash
# Instruments (Xcode)
# Product > Profile (Cmd+I) in Xcode
# Templates:
# - Time Profiler: CPU flame chart
# - Allocations: heap memory
# - Leaks: memory leak detection
# - Network: HTTP request profiling
# - Core Animation: UI rendering

# Command-line Instruments
xcrun xctrace record --template 'Time Profiler' \
  --launch ./MyApp

# swift-benchmark (for library/CLI benchmarking)
# Package: google/swift-benchmark
import Benchmark

benchmark("sort") {
    var array = (0..<1000).shuffled()
    array.sort()
}
Benchmark.main()

# os_signpost — custom performance markers
import os
let log = OSLog(subsystem: "com.app", category: "perf")
os_signpost(.begin, log: log, name: "fetch")
// ... work ...
os_signpost(.end, log: log, name: "fetch")
# Visible in Instruments > os_signpost
```

