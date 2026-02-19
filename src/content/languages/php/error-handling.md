---
title: Error Handling
order: 9
---

PHP uses `try/catch/finally` for exceptions. PHP 8 introduced union catch types and `match` for cleaner handling.

```php
// Try / catch / finally
try {
    $data = json_decode($input, true, 512, JSON_THROW_ON_ERROR);
} catch (\JsonException $e) {
    echo "JSON error: {$e->getMessage()}";
} finally {
    echo 'always runs';
}

// Catching multiple exception types
try {
    riskyOperation();
} catch (InvalidArgumentException | RuntimeException $e) {
    echo "Error: {$e->getMessage()}";
} catch (\Throwable $e) {
    echo "Unexpected: {$e->getMessage()}";
}

// Throwing exceptions
function divide(float $a, float $b): float {
    if ($b == 0) {
        throw new \DivisionByZeroError('Cannot divide by zero');
    }
    return $a / $b;
}

// Custom exceptions
class ValidationException extends \RuntimeException {
    public function __construct(
        public readonly array $errors,
        string $message = 'Validation failed',
    ) {
        parent::__construct($message);
    }
}

// Global error handler
set_exception_handler(function (\Throwable $e) {
    error_log($e->getMessage());
    http_response_code(500);
});
```

