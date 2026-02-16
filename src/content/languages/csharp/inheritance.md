---
title: Inheritance & Composition
order: 6
---

Single class inheritance with interfaces for multiple behavior contracts. Abstract classes, sealed classes, and extension methods.

```csharp
// Class inheritance
class Animal {
    public string Name { get; }
    public Animal(string name) => Name = name;
    public virtual string Speak() => $"{Name} makes a sound";
}

class Dog : Animal {
    public Dog(string name) : base(name) {}
    public override string Speak() => $"{Name} barks";
}

// Abstract classes
abstract class Shape {
    public abstract double Area();
    public string Describe() => $"Area: {Area()}";
}

// Interfaces (multiple)
interface ISerializable { string ToJson(); }
interface IPrintable { void Print(); }

class Report : ISerializable, IPrintable {
    public string ToJson() => "{}";
    public void Print() => Console.WriteLine(ToJson());
}

// Sealed (prevent further inheritance)
sealed class Singleton : Animal {
    public Singleton() : base("single") {}
}

// Extension methods (add behavior without inheritance)
static class StringExt {
    public static string Shout(this string s) => s.ToUpper() + "!";
}
// "hello".Shout() => "HELLO!"
```

