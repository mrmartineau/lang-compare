---
title: Generics & Type System
order: 19
---

**Protocol-oriented generics** with associated types, where clauses, and opaque types (`some`). Strong type inference.

```swift
// Generic function
func identity<T>(_ value: T) -> T { value }

// Protocol constraints
func largest<T: Comparable>(_ items: [T]) -> T? {
    items.max()
}

// Multiple constraints
func process<T: Hashable & CustomStringConvertible>(_ item: T) {
    print(item.description)
}

// Generic types
struct Stack<Element> {
    private var items: [Element] = []

    mutating func push(_ item: Element) { items.append(item) }
    mutating func pop() -> Element? { items.popLast() }
    var isEmpty: Bool { items.isEmpty }
}

var intStack = Stack<Int>()
intStack.push(42)
```

```swift
// Associated types (in protocols)
protocol Container {
    associatedtype Item
    mutating func append(_ item: Item)
    var count: Int { get }
    subscript(i: Int) -> Item { get }
}

// Where clauses
func allMatch<C: Container>(_ container: C, _ predicate: (C.Item) -> Bool) -> Bool
    where C.Item: Equatable
{
    container.allSatisfy(predicate)
}

// Opaque types — hide concrete type
func makeCollection() -> some Collection { [1, 2, 3] }

// Existential types (any)
func printAll(_ items: [any CustomStringConvertible]) {
    for item in items { print(item.description) }
}

// Primary associated types (Swift 5.7+)
func process(_ items: some Collection<Int>) { }
```

