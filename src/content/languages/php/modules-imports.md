---
title: Modules & Imports
order: 8
---

PHP uses namespaces and autoloading (PSR-4) via Composer. Files are included with `require`/`include`.

```php
// Defining a namespace
namespace App\Models;

class User {
    public string $name;
}

// Importing classes
use App\Models\User;
use App\Services\{AuthService, MailService};  // Group use

// Aliasing
use App\Models\User as AppUser;

// Functions and constants
use function App\Helpers\formatDate;
use const App\Config\MAX_RETRIES;
```

```php
// File inclusion (legacy, rarely needed with autoloading)
require 'config.php';        // Fatal error if missing
require_once 'config.php';   // Include only once
include 'optional.php';      // Warning if missing
include_once 'optional.php';

// PSR-4 autoloading via Composer (composer.json)
// "autoload": { "psr-4": { "App\\": "src/" } }
// Then: composer dump-autoload

// Using autoloaded classes — just use/import them
use App\Models\User;
$user = new User();
```

