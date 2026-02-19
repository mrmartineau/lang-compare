---
title: Concurrency
order: 17
---

**PHP is traditionally single-threaded and request-scoped.** Concurrency is achieved through process-level parallelism, async libraries, or Fibers (PHP 8.1+).

```php
// Fibers (PHP 8.1+) — cooperative multitasking
$fiber = new Fiber(function (): void {
    $value = Fiber::suspend('paused');
    echo "Resumed with: $value";
});

$result = $fiber->start();    // 'paused'
$fiber->resume('hello');      // 'Resumed with: hello'

// curl_multi — concurrent HTTP requests
$handles = [];
$mh = curl_multi_init();

foreach ($urls as $url) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_multi_add_handle($mh, $ch);
    $handles[] = $ch;
}

do {
    curl_multi_exec($mh, $running);
    curl_multi_select($mh);
} while ($running > 0);
```

```php
// ReactPHP — event-driven async I/O
$loop = React\EventLoop\Loop::get();
$browser = new React\Http\Browser();

$browser->get('https://api.example.com/data')
    ->then(function ($response) {
        echo $response->getBody();
    });

// Parallel execution with promises
React\Async\parallel([
    fn() => $browser->get('/api/users'),
    fn() => $browser->get('/api/posts'),
])->then(function ($responses) { });

// AMPHP — alternative async framework
// Swoole / OpenSwoole — coroutine-based server
// Laravel Octane — high-performance app server (Swoole/RoadRunner)
```

