---
title: Inheritance & Composition
order: 6
---

Prototypal inheritance with `class` syntax sugar. Composition via mixins and object spread is often preferred.

```js
// Class inheritance
class Animal {
  constructor(name) { this.name = name }
  speak() { return `${this.name} makes a sound` }
}

class Dog extends Animal {
  speak() { return `${this.name} barks` }
}

// Super calls
class Puppy extends Dog {
  constructor(name) {
    super(name)
    this.young = true
  }
}

// Mixins (composition pattern)
const Serializable = (Base) => class extends Base {
  toJSON() { return JSON.stringify(this) }
}

class User extends Serializable(Animal) {}

// Object composition (preferred)
const canWalk = (state) => ({
  walk: () => `${state.name} walks`,
})
const canSwim = (state) => ({
  swim: () => `${state.name} swims`,
})
const createDuck = (name) => {
  const state = { name }
  return { ...canWalk(state), ...canSwim(state) }
}
```

