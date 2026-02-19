---
title: Variables
order: 1
---

Variables start with `$`. PHP is dynamically typed — no type declaration needed for variables.

```php
$name = 'Alice';
$age = 30;
$isActive = true;
$price = 19.99;

// Constants
const MAX_SIZE = 100;
define('APP_NAME', 'MyApp');

// Variable variables
$varName = 'hello';
$$varName = 'world';  // $hello = 'world'

// Null coalescing
$value = $input ?? 'default';

// Destructuring (list / array)
[$a, $b, $c] = [1, 2, 3];
['name' => $name, 'age' => $age] = ['name' => 'Bob', 'age' => 25];
```

