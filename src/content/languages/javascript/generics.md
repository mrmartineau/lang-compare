---
title: Generics & Type System
order: 19
---

**JavaScript has no type system at runtime.** Types are dynamic — any variable can hold any value. Use TypeScript for static types.

```js
// No generics — functions work with any type naturally
function identity(x) { return x }
identity(42)       // number
identity('hello')  // string

// Duck typing — if it has the right shape, it works
function getLength(thing) {
  return thing.length  // Works for strings, arrays, etc.
}

// typeof — runtime type checking
typeof 42          // 'number'
typeof 'hello'     // 'string'
typeof true        // 'boolean'
typeof undefined   // 'undefined'
typeof null        // 'object' (historical bug)
typeof {}          // 'object'
typeof []          // 'object'

// instanceof — check prototype chain
[] instanceof Array     // true
new Date() instanceof Date  // true

// Array.isArray — reliable array check
Array.isArray([1, 2])  // true
```

JavaScript is dynamically typed — generics are a TypeScript concept. See the TypeScript column for full generics support.

