---
title: Installation & Getting Started
order: 12
---

PHP is pre-installed on many systems. For local development, use a package manager or a bundled environment.

```bash
# macOS (Homebrew)
brew install php

# Ubuntu / Debian
sudo apt install php php-cli php-mbstring php-xml

# Windows — use XAMPP, Laragon, or Scoop
scoop install php

# Check version
php --version
```

```bash
# REPL — interactive mode
php -a

# Run a script
php script.php

# Quick one-liner
php -r "echo 'Hello, PHP!' . PHP_EOL;"

# Built-in development server
php -S localhost:8000

# Built-in server with router
php -S localhost:8000 router.php
```

