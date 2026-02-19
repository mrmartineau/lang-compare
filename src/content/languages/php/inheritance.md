---
title: Inheritance & Composition
order: 6
---

Single inheritance with interfaces and traits for composition. PHP supports abstract classes and final methods.

```php
// Class inheritance
class Animal {
    public function __construct(
        protected string $name
    ) {}

    public function speak(): string {
        return "{$this->name} makes a sound";
    }
}

class Dog extends Animal {
    public function speak(): string {
        return "{$this->name} barks";
    }
}

// Abstract classes
abstract class Shape {
    abstract public function area(): float;
}

// Interfaces
interface Serializable {
    public function serialize(): string;
}

interface Loggable {
    public function log(): void;
}

// Implementing multiple interfaces
class User extends Animal implements Serializable, Loggable {
    public function serialize(): string { return json_encode($this); }
    public function log(): void { error_log($this->name); }
}

// Traits — horizontal code reuse
trait HasTimestamps {
    public \DateTime $createdAt;
    public \DateTime $updatedAt;

    public function touch(): void {
        $this->updatedAt = new \DateTime();
    }
}

class Post {
    use HasTimestamps;
}

// Readonly classes (PHP 8.2+)
readonly class Point {
    public function __construct(
        public float $x,
        public float $y,
    ) {}
}
```

