---
title: Packaging & Distribution
order: 23
---

Publish libraries to **Packagist** (Composer registry). Deploy apps via Docker, PHP-FPM, or platform services.

```bash
# Publish a library to Packagist
# 1. Create a GitHub repo with composer.json
# 2. Register at https://packagist.org
# 3. Submit the repo URL — auto-updates via webhook

# composer.json for a library
{
  "name": "vendor/my-library",
  "type": "library",
  "autoload": {
    "psr-4": { "Vendor\\MyLib\\": "src/" }
  },
  "require": { "php": "^8.2" }
}

# Tag a release
git tag v1.0.0
git push --tags
```

```bash
# Docker deployment
FROM php:8.3-fpm-alpine
RUN docker-php-ext-install pdo_mysql opcache
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader
COPY . .
CMD ["php-fpm"]

# Laravel Forge / Vapor — managed deployment
# Platform.sh, Render, Railway — PaaS deployment

# Phar archive — single-file distribution
php -d phar.readonly=0 create-phar.php
# Creates my-tool.phar — run with: php my-tool.phar

# Static binary (experimental)
# FrankenPHP can embed PHP app into a single Go binary
```

