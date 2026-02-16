---
title: Installation & Getting Started
order: 12
---

TypeScript requires a JavaScript runtime plus the TypeScript compiler. Some runtimes (Deno, Bun) support TypeScript natively.

```bash
# Install Node.js (see JavaScript) then add TypeScript
npm install -g typescript
tsc --version

# Or install locally per-project
npm install --save-dev typescript
npx tsc --version

# Deno — runs TypeScript natively, no setup
deno --version
deno run script.ts

# Bun — native TypeScript support
bun run script.ts

# tsx — run TS files directly in Node.js
npm install -g tsx
tsx script.ts
```

```bash
# REPL — no official TS REPL, but use tsx or ts-node
npx tsx          # Interactive TypeScript REPL
npx ts-node      # Alternative REPL
deno             # Deno REPL supports TypeScript

# Compile and run
npx tsc script.ts && node script.js

# Type-check without emitting
npx tsc --noEmit
```

