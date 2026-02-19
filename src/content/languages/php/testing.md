---
title: Testing
order: 13
---

PHPUnit is the standard testing framework. Pest provides a more expressive syntax.

```php
// PHPUnit
use PHPUnit\Framework\TestCase;

class MathTest extends TestCase
{
    public function testAddition(): void
    {
        $this->assertEquals(3, 1 + 2);
        $this->assertTrue(true);
        $this->assertCount(3, [1, 2, 3]);
    }

    public function testException(): void
    {
        $this->expectException(\InvalidArgumentException::class);
        throw new \InvalidArgumentException('bad input');
    }
}
```

```php
// Pest — expressive testing framework
test('addition works', function () {
    expect(1 + 2)->toBe(3);
});

it('handles arrays', function () {
    expect([1, 2, 3])->toContain(2)->toHaveCount(3);
});
```

```bash
# Run tests
./vendor/bin/phpunit
./vendor/bin/pest

# With coverage
./vendor/bin/phpunit --coverage-text
XDEBUG_MODE=coverage ./vendor/bin/pest --coverage
```

