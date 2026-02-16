---
title: Inheritance & Composition
order: 6
---

Supports single and multiple inheritance, virtual functions for polymorphism, and CRTP for static polymorphism.

```cpp
// Class inheritance
class Animal {
public:
    std::string name;
    Animal(std::string n) : name(std::move(n)) {}
    virtual std::string speak() {
        return name + " makes a sound";
    }
    virtual ~Animal() = default; // virtual destructor
};

class Dog : public Animal {
public:
    using Animal::Animal;
    std::string speak() override {
        return name + " barks";
    }
};

// Abstract class (pure virtual)
class Shape {
public:
    virtual double area() = 0;
    virtual ~Shape() = default;
};

// Multiple inheritance
class Swimmer { public: void swim(); };
class Flyer   { public: void fly(); };
class Duck : public Animal, public Swimmer, public Flyer {
    using Animal::Animal;
};

// Composition (preferred)
class Engine { public: void start(); };
class Car {
    Engine engine; // composed, not inherited
public:
    void start() { engine.start(); }
};

// CRTP (static polymorphism)
template <typename Derived>
class Base {
    void doWork() { static_cast<Derived*>(this)->impl(); }
};
```

