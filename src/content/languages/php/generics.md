---
title: Generics & Type System
order: 19
---

**PHP has no native generics.** Type safety is achieved through type declarations, interfaces, and static analysis tools (PHPStan/Psalm) that support generics via docblocks.

```php
// No native generics — use type declarations
function first(array $items): mixed {
    return $items[0] ?? null;
}

// PHPStan/Psalm generics via docblocks
/**
 * @template T
 * @param T[] $items
 * @return T|null
 */
function firstItem(array $items): mixed {
    return $items[0] ?? null;
}

/**
 * @template T
 * @implements Iterator<int, T>
 */
class TypedCollection implements Iterator {
    /** @var T[] */
    private array $items = [];

    /** @param T $item */
    public function add(mixed $item): void {
        $this->items[] = $item;
    }
}

// Union types (PHP 8.0+)
function process(string|int $value): string { return (string) $value; }

// Intersection types (PHP 8.1+)
function handle(Countable&Traversable $items): void { }

// DNF types (PHP 8.2+)
function parse((Stringable&Countable)|string $input): string { }
```

Static analysis tools (PHPStan level 9, Psalm) provide generics-like type safety through annotations.

