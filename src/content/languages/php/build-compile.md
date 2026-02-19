---
title: Build & Compile Model
order: 16
---

**Interpreted with optional OPcache.** PHP scripts are compiled to bytecode at runtime. OPcache stores precompiled bytecode in shared memory.

```bash
# No compile step — run directly
php app.php

# Built-in web server (development)
php -S localhost:8000 -t public

# Production — typically served via PHP-FPM + Nginx/Apache
# PHP-FPM compiles and caches bytecode via OPcache

# Check OPcache status
php -r "var_dump(opcache_get_status());"
```

**Execution model:**
- Source → Lexer → Parser → AST → Opcodes → Zend VM execution
- **OPcache**: Stores compiled opcodes in shared memory (skip parse/compile on each request)
- **JIT compiler** (PHP 8.0+): Compiles hot opcodes to machine code via DynASM
- **Preloading** (PHP 7.4+): Load files into memory at server start
- No standalone binary output — always requires PHP runtime
- **RoadRunner** / **FrankenPHP**: Keep PHP workers alive between requests (no per-request boot)

