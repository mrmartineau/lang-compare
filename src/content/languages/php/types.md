---
title: Types
order: 2
---

PHP is dynamically typed but supports type declarations (PHP 7+). Scalar types: `string`, `int`, `float`, `bool`. Compound: `array`, `object`, `callable`.

```php
// Type declarations (PHP 7+)
function add(int $a, int $b): int {
    return $a + $b;
}

// Union types (PHP 8.0+)
function format(string|int $value): string {
    return (string) $value;
}

// Intersection types (PHP 8.1+)
function process(Countable&Iterator $items): void { }

// Nullable types
function find(?string $name): ?User {
    return $name ? User::find($name) : null;
}

// Type checking
gettype($var);          // 'string', 'integer', etc.
is_string($var);        // true/false
is_int($var);
is_array($var);
$var instanceof MyClass;

// Enums (PHP 8.1+)
enum Color: string {
    case Red = 'red';
    case Blue = 'blue';
    case Green = 'green';
}
$c = Color::Red;
$c->value;  // 'red'
```

