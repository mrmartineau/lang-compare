---
title: Project Scaffolding
order: 11
---

Initialize a `tsconfig.json` or use a framework CLI that includes TypeScript.

```bash
# Basic TypeScript project
mkdir my-project && cd my-project
npm init -y
npm install --save-dev typescript
npx tsc --init

# Using Vite with TypeScript
npm create vite@latest my-app -- --template vanilla-ts

# Using tsx for scripts (no build step)
npm install --save-dev tsx
npx tsx src/index.ts

# Run with ts-node
npx ts-node src/index.ts
```

