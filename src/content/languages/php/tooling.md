---
title: Tooling & Formatter/Linter
order: 15
---

PHP has mature code quality tools for formatting, linting, and static analysis.

```bash
# PHP CS Fixer — code formatter
composer require --dev friendsofphp/php-cs-fixer
./vendor/bin/php-cs-fixer fix src/

# PHP_CodeSniffer — linter & fixer
composer require --dev squizlabs/php_codesniffer
./vendor/bin/phpcs src/         # Lint
./vendor/bin/phpcbf src/        # Auto-fix

# PHPStan — static analysis
composer require --dev phpstan/phpstan
./vendor/bin/phpstan analyse src/ --level=max

# Psalm — static analysis (alternative)
composer require --dev vimeo/psalm
./vendor/bin/psalm

# Rector — automated refactoring
composer require --dev rector/rector
./vendor/bin/rector process src/
```

```php
// .php-cs-fixer.dist.php
<?php
return (new PhpCsFixer\Config())
    ->setRules([
        '@PSR12' => true,
        'array_syntax' => ['syntax' => 'short'],
        'no_unused_imports' => true,
        'ordered_imports' => true,
    ])
    ->setFinder(
        PhpCsFixer\Finder::create()->in(__DIR__ . '/src')
    );
```

