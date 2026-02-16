---
title: Data Structures
order: 18
---

Built-in: Arrays, Objects, Map, Set, WeakMap, WeakSet. No built-in linked list, queue, or stack types.

```js
// Arrays — ordered, mixed types
const arr = [1, 'two', true]
arr.push(4)
arr.pop()
arr.includes(1)           // true
arr.find(x => x === 'two')
arr.slice(0, 2)           // [1, 'two']

// Objects — key-value (string keys)
const obj = { name: 'Alice', age: 30 }
obj.email = 'a@b.com'
delete obj.age
Object.keys(obj)          // ['name', 'email']
Object.entries(obj)       // [['name','Alice'], ...]

// Map — key-value (any key type, ordered)
const map = new Map()
map.set('key', 'value')
map.set(42, 'number key')
map.get('key')            // 'value'
map.has(42)               // true
map.size                  // 2

// Set — unique values
const set = new Set([1, 2, 3, 3])
set.add(4)
set.has(2)                // true
set.size                  // 4

// WeakMap / WeakSet — garbage-collectable keys
const wm = new WeakMap()
wm.set(someObj, 'metadata')

// Typed arrays (for binary data)
const buf = new ArrayBuffer(16)
const view = new Int32Array(buf)
```

