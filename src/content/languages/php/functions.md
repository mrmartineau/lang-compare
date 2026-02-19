---
title: Functions
order: 3
---

Functions support type hints, default parameters, named arguments, and closures.

```php
// Basic function
function greet(string $name): string {
    return "Hello, {$name}!";
}

// Default parameters
function power(int $base, int $exp = 2): int {
    return $base ** $exp;
}

// Named arguments (PHP 8.0+)
power(exp: 3, base: 2);  // 8

// Variadic parameters
function sum(int ...$nums): int {
    return array_sum($nums);
}

// Arrow functions (PHP 7.4+)
$double = fn(int $x): int => $x * 2;

// Closures
$multiplier = function (int $factor): Closure {
    return fn(int $x) => $x * $factor;
};
$triple = $multiplier(3);
$triple(5);  // 15

// First-class callable syntax (PHP 8.1+)
$fn = strlen(...);
$fn('hello');  // 5
```

