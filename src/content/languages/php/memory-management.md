---
title: Memory Management
order: 20
---

**Garbage collected with reference counting.** PHP uses a reference-counting GC with a cycle collector. Memory is freed at the end of each request in traditional PHP-FPM setups.

```php
// Memory is automatically managed
$data = range(1, 10000);  // Allocated
unset($data);               // Freed immediately (refcount → 0)

// Check memory usage
echo memory_get_usage();       // Current usage (bytes)
echo memory_get_peak_usage();  // Peak usage (bytes)
echo memory_get_usage(true);   // Real allocated memory

// Memory limit
ini_set('memory_limit', '256M');

// Generators — memory-efficient iteration
function bigRange(int $start, int $end): Generator {
    for ($i = $start; $i <= $end; $i++) {
        yield $i;
    }
}
// Yields one value at a time — O(1) memory
foreach (bigRange(1, 1000000) as $num) { }

// WeakMap (PHP 8.0+) — keys are weakly referenced
$cache = new WeakMap();
$obj = new stdClass();
$cache[$obj] = 'metadata';
// When $obj is unset, entry is automatically removed
```

**PHP memory model:**
- **Request-scoped**: In PHP-FPM, all memory is freed at the end of each request
- **Reference counting**: Objects freed when refcount hits 0
- **Cycle collector**: Detects and frees circular references
- **Long-running processes** (Swoole, RoadRunner): Must be careful about memory leaks since memory persists between requests

