---
title: Debugging
order: 24
---

Same tools as JavaScript. Source maps enable debugging TypeScript directly. VS Code has first-class TS debugging support.

```bash
# Source maps — map compiled JS back to TS
# tsconfig.json: "sourceMap": true

# VS Code debugging (recommended)
# launch.json:
{
  "type": "node",
  "request": "launch",
  "program": "${workspaceFolder}/src/index.ts",
  "runtimeExecutable": "tsx",
  "console": "integratedTerminal"
}

# Or with ts-node
{
  "type": "node",
  "request": "launch",
  "runtimeArgs": ["-r", "ts-node/register"],
  "args": ["${workspaceFolder}/src/index.ts"]
}

# Chrome DevTools — works with source maps
node --inspect -r tsx/cjs src/index.ts
```

```ts
// Type-narrowing aids debugging
function process(input: string | number) {
  if (typeof input === 'string') {
    // TypeScript knows input is string here
    console.log(input.toUpperCase())
  }
}

// satisfies — catch type errors without changing runtime
const config = {
  port: 3000,
  host: 'localhost',
} satisfies Record<string, string | number>

// // @ts-expect-error — document expected errors
// @ts-expect-error — testing invalid input
process(null)
```

