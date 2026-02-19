---
title: Interop
order: 22
---

PHP interops with C via **FFI** (PHP 7.4+), system commands, and various protocol integrations.

```php
// FFI — call C libraries directly (PHP 7.4+)
$ffi = FFI::cdef("
    double sqrt(double x);
    int abs(int x);
", "libm.so.6");  // Or "libm.dylib" on macOS

echo $ffi->sqrt(16.0);  // 4.0
echo $ffi->abs(-42);    // 42

// FFI with struct
$ffi = FFI::cdef("
    typedef struct { int x; int y; } Point;
");
$point = $ffi->new("Point");
$point->x = 10;
$point->y = 20;

// System commands
$output = shell_exec('ls -la');
$output = exec('whoami', $lines, $exitCode);
$handle = popen('tail -f /var/log/syslog', 'r');

// Process control
$process = proc_open(
    'python3 script.py',
    [['pipe', 'r'], ['pipe', 'w'], ['pipe', 'w']],
    $pipes
);
fwrite($pipes[0], "input data");
$result = stream_get_contents($pipes[1]);
proc_close($process);
```

```php
// Database interop
$pdo = new PDO('mysql:host=localhost;dbname=app', 'user', 'pass');
$pdo = new PDO('pgsql:host=localhost;dbname=app', 'user', 'pass');
$pdo = new PDO('sqlite:/path/to/db.sqlite');

// REST / SOAP / gRPC
$client = new SoapClient('https://example.com/api?wsdl');
// gRPC via grpc/grpc PHP extension

// Redis, Memcached — native extensions
$redis = new Redis();
$redis->connect('127.0.0.1');
```

