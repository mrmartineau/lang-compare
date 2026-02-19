---
title: Loops
order: 4
---

Standard `for`, `foreach`, `while`, and `do-while` loops.

```php
// For loop
for ($i = 0; $i < 5; $i++) {
    echo $i;
}

// Foreach — arrays and iterables
foreach ([1, 2, 3] as $item) {
    echo $item;
}

// Foreach with key
foreach (['a' => 1, 'b' => 2] as $key => $value) {
    echo "$key: $value";
}

// While
$n = 0;
while ($n < 3) {
    $n++;
}

// Do-while
do {
    $n--;
} while ($n > 0);

// Array functions (functional-style)
$doubled = array_map(fn($x) => $x * 2, [1, 2, 3]);
$evens = array_filter([1, 2, 3, 4], fn($x) => $x % 2 === 0);
$sum = array_reduce([1, 2, 3], fn($carry, $x) => $carry + $x, 0);
```

