---
title: Inheritance & Composition
order: 6
---

Go has no classes or inheritance. Uses struct embedding for composition and interfaces for polymorphism. "Composition over inheritance" is idiomatic.

```go
// Struct embedding (composition)
type Animal struct {
    Name string
}
func (a Animal) Speak() string {
    return a.Name + " makes a sound"
}

type Dog struct {
    Animal // embedded — Dog "inherits" Speak()
    Breed string
}

// Override by defining same method
func (d Dog) Speak() string {
    return d.Name + " barks"
}

// Interfaces (implicit satisfaction)
type Speaker interface {
    Speak() string
}

type Writer interface {
    Write(data []byte) (int, error)
}

// Compose interfaces
type ReadWriter interface {
    Reader
    Writer
}

// Any type with Speak() satisfies Speaker
func announce(s Speaker) {
    fmt.Println(s.Speak())
}

// Embedding interfaces in structs
type Logger struct {
    Writer // embed interface
}

// Empty interface (any type)
func process(v any) { /* ... */ }
```

