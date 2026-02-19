---
title: Package Management
order: 10
---

**Composer** is the standard dependency manager for PHP. Packages are hosted on Packagist.

```bash
# Install Composer
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# Install a package
composer require guzzlehttp/guzzle

# Install as dev dependency
composer require --dev phpunit/phpunit

# Install all dependencies
composer install

# Update dependencies
composer update

# Autoload classes
composer dump-autoload
```

```json
// composer.json
{
  "require": {
    "php": "^8.2",
    "guzzlehttp/guzzle": "^7.0",
    "laravel/framework": "^11.0"
  },
  "require-dev": {
    "phpunit/phpunit": "^11.0"
  },
  "autoload": {
    "psr-4": {
      "App\\": "src/"
    }
  }
}
```

