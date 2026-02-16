---
title: Data Structures
order: 18
---

Built-in value types: `Array`, `Dictionary`, `Set`. All generic and copy-on-write. Swift Collections package adds more.

```swift
// Array — ordered, generic
var arr = [1, 2, 3]
arr.append(4)
arr.remove(at: 0)
arr.contains(2)          // true
arr.count                // 3
arr[0...1]               // ArraySlice [2, 3]
arr.first                // Optional(2)

// Dictionary — key-value
var dict: [String: Int] = ["alice": 95, "bob": 87]
dict["charlie"] = 72
dict["alice"]             // Optional(95)
dict.keys                 // Dictionary.Keys
dict.removeValue(forKey: "bob")

// Set — unique values
var set: Set<Int> = [1, 2, 3]
set.insert(4)
set.contains(2)           // true
let intersection = set.intersection([2, 3, 5])
let union = set.union([5, 6])

// Tuples
let point = (x: 10, y: 20)
let (x, y) = point
```

```swift
// Iteration
for (index, value) in arr.enumerated() { }
for (key, value) in dict { }

// Functional operations
let doubled = arr.map { $0 * 2 }
let evens = arr.filter { $0 % 2 == 0 }
let sum = arr.reduce(0, +)
let sorted = arr.sorted(by: >)

// Swift Collections package (extras)
// import Collections
// Deque, OrderedDictionary, OrderedSet, Heap
import Collections
var deque = Deque([1, 2, 3])
deque.prepend(0)
```

