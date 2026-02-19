---
title: Performance Profiling
order: 21
---

Xdebug and Blackfire are the primary profiling tools. SPX is a lightweight alternative.

```php
// Manual timing
$start = microtime(true);
doExpensiveWork();
$elapsed = microtime(true) - $start;
echo "Took {$elapsed}s";

// Memory profiling
$before = memory_get_usage();
$data = processLargeDataset();
$used = memory_get_usage() - $before;
echo "Used " . ($used / 1024 / 1024) . " MB";
```

```bash
# Xdebug profiling (generates cachegrind files)
# php.ini: xdebug.mode=profile
# php.ini: xdebug.output_dir=/tmp/xdebug
php script.php
# Open cachegrind file with KCacheGrind / QCacheGrind / Webgrind

# Blackfire.io — production-safe profiler
blackfire run php script.php
# Or profile via browser extension

# SPX — lightweight profiler (built-in web UI)
# php.ini: extension=spx.so
# Access /?SPX_KEY=dev&SPX_UI_URI=/ in browser

# Tideways — production monitoring + profiling
# XHProf — Facebook's hierarchical profiler
pecl install xhprof
```

```bash
# Laravel-specific
php artisan route:list        # Check registered routes
php artisan optimize          # Cache config, routes, views
composer dump-autoload -o     # Optimized autoloader

# Benchmark with Apache Bench
ab -n 1000 -c 10 http://localhost:8000/
```

