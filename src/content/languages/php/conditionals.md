---
title: Conditionals
order: 5
---

Standard `if/else`, ternary, null coalescing, and `match` expression.

```php
// If / else
if ($x > 0) {
    echo 'positive';
} elseif ($x === 0) {
    echo 'zero';
} else {
    echo 'negative';
}

// Ternary
$label = $x > 0 ? 'positive' : 'non-positive';

// Elvis operator (short ternary)
$name = $input ?: 'default';

// Null coalescing
$value = $data['key'] ?? 'fallback';
$value ??= 'fallback';  // Null coalescing assignment

// Match expression (PHP 8.0+) — strict comparison, returns value
$result = match ($status) {
    'active' => 'User is active',
    'banned', 'suspended' => 'User is restricted',
    default => 'Unknown status',
};

// Switch
switch ($color) {
    case 'red':
        echo '#f00';
        break;
    case 'blue':
        echo '#00f';
        break;
    default:
        echo 'unknown';
}
```

