---
title: Debugging
order: 24
---

**Xdebug** is the primary debugger. Laravel has Telescope and Debugbar for web debugging.

```php
// Basic debugging
var_dump($variable);       // Type + value
print_r($array);           // Human-readable array
echo gettype($variable);   // Type name
debug_print_backtrace();   // Stack trace

// Error reporting
error_reporting(E_ALL);
ini_set('display_errors', '1');

// Logging
error_log('Something happened');
error_log(print_r($data, true));  // Log complex data
```

```bash
# Xdebug — install and configure
pecl install xdebug

# php.ini configuration
zend_extension=xdebug
xdebug.mode=debug
xdebug.start_with_request=yes
xdebug.client_port=9003

# VS Code — install "PHP Debug" extension
# launch.json:
{
  "type": "php",
  "request": "launch",
  "name": "Listen for Xdebug",
  "port": 9003
}

# Laravel Telescope — request/job/query inspector
composer require laravel/telescope
php artisan telescope:install

# Laravel Debugbar
composer require barryvdh/laravel-debugbar --dev
# Automatically shows debug info in browser
```

