---
title: Data Structures
order: 18
---

PHP arrays are versatile ordered maps. The SPL library provides additional data structures.

```php
// Arrays — ordered map (used as list, map, set, stack, queue)
$list = [1, 2, 3];
$map = ['name' => 'Alice', 'age' => 30];

// Array operations
$list[] = 4;                    // Append
array_push($list, 5);
array_pop($list);               // Remove last
array_shift($list);             // Remove first
array_unshift($list, 0);        // Prepend
in_array(2, $list);             // Search
array_key_exists('name', $map); // Key exists
count($list);                   // Length

// Array manipulation
array_merge($a, $b);            // Merge arrays
array_slice($list, 1, 2);       // Slice
array_unique($list);            // Remove duplicates
array_reverse($list);           // Reverse
sort($list);                    // Sort in-place
usort($list, fn($a, $b) => $a <=> $b);  // Custom sort

// Spread operator
$merged = [...$list1, ...$list2];

// SPL Data Structures
$stack = new SplStack();
$stack->push('a');
$stack->pop();

$queue = new SplQueue();
$queue->enqueue('a');
$queue->dequeue();

$heap = new SplMinHeap();
$set = new SplObjectStorage();  // Object set
```

