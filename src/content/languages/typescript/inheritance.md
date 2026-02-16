---
title: Inheritance & Composition
order: 6
---

Class inheritance with full type checking. Interfaces and intersection types enable powerful composition patterns.

```ts
// Class inheritance
class Animal {
  constructor(public name: string) {}
  speak(): string { return `${this.name} makes a sound` }
}

class Dog extends Animal {
  speak(): string { return `${this.name} barks` }
}

// Abstract classes
abstract class Shape {
  abstract area(): number
  describe(): string { return `Area: ${this.area()}` }
}

class Circle extends Shape {
  constructor(public radius: number) { super() }
  area(): number { return Math.PI * this.radius ** 2 }
}

// Interfaces (composition)
interface Serializable {
  toJSON(): string
}
interface Printable {
  print(): void
}
class Report implements Serializable, Printable {
  toJSON() { return '{}' }
  print() { console.log(this.toJSON()) }
}

// Intersection types (type-level composition)
type WithId = { id: string }
type WithTimestamp = { createdAt: Date }
type Entity = WithId & WithTimestamp
```

