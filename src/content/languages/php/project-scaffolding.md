---
title: Project Scaffolding
order: 11
---

Use Composer to create projects from templates. Laravel and Symfony have dedicated installers.

```bash
# Basic project with Composer
mkdir my-project && cd my-project
composer init

# Laravel — full-stack web framework
composer create-project laravel/laravel my-app
cd my-app && php artisan serve

# Laravel via installer
composer global require laravel/installer
laravel new my-app

# Symfony
composer create-project symfony/skeleton my-app
cd my-app && symfony server:start

# Slim (micro-framework)
composer create-project slim/slim-skeleton my-app

# Run development server
php -S localhost:8000 -t public
```

