---
title: Testing
order: 13
---

Swift has a built-in testing framework: Swift Testing (new, from Swift 5.9+) and XCTest (traditional). Both integrate with Xcode and SPM.

```swift
// Swift Testing (modern, recommended)
import Testing

@Test func addition() {
    #expect(1 + 2 == 3)
}

@Test("Addition with negatives")
func negativeAddition() {
    #expect(-1 + 1 == 0)
}

// Parameterized tests
@Test(arguments: [
    (1, 2, 3),
    (0, 0, 0),
    (-1, 1, 0),
])
func add(a: Int, b: Int, expected: Int) {
    #expect(a + b == expected)
}
```

```swift
// XCTest (traditional)
import XCTest

class MathTests: XCTestCase {
    func testAdd() {
        XCTAssertEqual(1 + 2, 3)
    }

    func testPerformance() {
        measure {
            // Code to benchmark
        }
    }
}
```

```bash
# Run tests
swift test                    # SPM projects
swift test --filter MathTests # Specific test
# In Xcode: Cmd+U to run all tests
# In Xcode: Click diamond next to test to run individually
```

