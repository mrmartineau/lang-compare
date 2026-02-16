---
title: Data Structures
order: 18
---

Rich standard library: `Vec`, `HashMap`, `HashSet`, `BTreeMap`, `VecDeque`, `LinkedList`. All generic and ownership-aware.

```rust
// Vec — growable array (most common)
let mut v = vec![1, 2, 3];
v.push(4);
v.pop();                // Some(4)
v[0];                   // 1
v.len();                // 3
v.contains(&2);         // true
let slice = &v[1..3];   // &[2, 3]

// HashMap
use std::collections::HashMap;
let mut map = HashMap::new();
map.insert("alice", 95);
map.insert("bob", 87);
map.get("alice");       // Some(&95)
map.contains_key("bob");
map.entry("charlie").or_insert(0);

// HashSet
use std::collections::HashSet;
let mut set: HashSet<i32> = [1, 2, 3].into();
set.insert(4);
set.contains(&2);      // true
let intersection = &set & &other_set;

// Iterators (lazy, chainable)
let sum: i32 = v.iter().filter(|&&x| x > 1).sum();
let doubled: Vec<_> = v.iter().map(|x| x * 2).collect();
```

```rust
// Tuples
let pair: (String, i32) = ("age".into(), 30);
let (key, value) = pair;

// BTreeMap — sorted keys
use std::collections::BTreeMap;
let mut bt = BTreeMap::new();
bt.insert(3, "c");
bt.insert(1, "a");
// Iteration is in key order

// VecDeque — double-ended queue
use std::collections::VecDeque;
let mut dq = VecDeque::from([1, 2, 3]);
dq.push_front(0);
dq.push_back(4);
```

