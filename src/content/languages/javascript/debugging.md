---
title: Debugging
order: 24
---

**Chrome DevTools** for browser, **Node.js inspector** for server. `console` methods and `debugger` statement.

```js
// console methods
console.log('basic log')
console.error('error message')
console.warn('warning')
console.table([{ name: 'Alice', age: 30 }])
console.dir(obj, { depth: null })
console.time('op'); doWork(); console.timeEnd('op')
console.trace('call stack')
console.group('section'); /* ... */ console.groupEnd()

// debugger statement — triggers breakpoint
function processData(data) {
  debugger  // Pauses here if DevTools is open
  return data.map(transform)
}
```

```bash
# Node.js debugging
node --inspect app.js          # Start with inspector
node --inspect-brk app.js     # Break on first line
# Open chrome://inspect in Chrome

# VS Code — built-in debugger
# launch.json:
{
  "type": "node",
  "request": "launch",
  "program": "${workspaceFolder}/src/index.js",
  "console": "integratedTerminal"
}
# Set breakpoints by clicking gutter
# F5 to start, F10 step over, F11 step into

# Chrome DevTools
# Sources tab: breakpoints, watch, call stack
# Network tab: request/response inspection
# Console tab: live REPL in page context
# Elements tab: DOM inspection

# ndb — improved Node.js debugging
npx ndb node app.js
```

