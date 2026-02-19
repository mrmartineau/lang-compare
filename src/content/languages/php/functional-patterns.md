---
title: Functional Patterns
order: 7
---

PHP supports closures, higher-order functions, and functional array operations.

```php
// Higher-order functions
function apply(callable $fn, int $x): int {
    return $fn($x);
}
$double = fn(int $x) => $x * 2;
apply($double, 5);  // 10

// Array functional operations
$nums = [1, 2, 3, 4, 5];
$squared = array_map(fn($x) => $x ** 2, $nums);
$evens = array_filter($nums, fn($x) => $x % 2 === 0);
$sum = array_reduce($nums, fn($carry, $x) => $carry + $x, 0);

// Closures with captured variables
function counter(int $start = 0): Closure {
    $count = $start;
    return function () use (&$count): int {
        return ++$count;
    };
}
$inc = counter();
$inc();  // 1
$inc();  // 2

// Currying
$add = fn(int $a) => fn(int $b) => $a + $b;
$add5 = $add(5);
$add5(3);  // 8

// Pipe / compose (manual)
function pipe(mixed $value, callable ...$fns): mixed {
    foreach ($fns as $fn) {
        $value = $fn($value);
    }
    return $value;
}

$result = pipe(
    5,
    fn($x) => $x * 2,
    fn($x) => $x + 1,
    fn($x) => "Result: $x",
);
// "Result: 11"

// First-class callable syntax (PHP 8.1+)
$lengths = array_map(strlen(...), ['hello', 'world']);
```

