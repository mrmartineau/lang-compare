---
title: Generics & Type System
order: 19
---

**Structural type system** with powerful generics, conditional types, mapped types, and template literal types.

```ts
// Generic functions
function identity<T>(value: T): T { return value }
identity<number>(42)
identity('hello')  // T inferred as string

// Generic constraints
function getLength<T extends { length: number }>(x: T): number {
  return x.length
}

// Generic interfaces and classes
interface Repository<T> {
  findById(id: string): Promise<T>
  save(item: T): Promise<void>
}

class Box<T> {
  constructor(public value: T) {}
  map<U>(fn: (val: T) => U): Box<U> {
    return new Box(fn(this.value))
  }
}
```

```ts
// Conditional types
type IsString<T> = T extends string ? true : false
type A = IsString<'hello'>  // true
type B = IsString<42>       // false

// Mapped types
type Readonly<T> = { readonly [K in keyof T]: T[K] }
type Partial<T> = { [K in keyof T]?: T[K] }
type Pick<T, K extends keyof T> = { [P in K]: T[P] }

// Template literal types
type EventName = `on${Capitalize<'click' | 'focus'>}`
// 'onClick' | 'onFocus'

// infer — extract types
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never
type Awaited<T> = T extends Promise<infer U> ? Awaited<U> : T

// Variance annotations (4.7+)
interface Producer<out T> { get(): T }
interface Consumer<in T> { accept(value: T): void }
```

