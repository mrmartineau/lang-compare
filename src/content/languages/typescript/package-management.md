---
title: Package Management
order: 10
---

Uses the same package managers as JavaScript. Type definitions are installed separately for untyped packages.

```bash
# Install a package
npm install zod

# Install type definitions
npm install --save-dev @types/node

# Most modern packages include types
npm install axios  # types included

# Using pnpm
pnpm add zod

# Using bun (has built-in TS support)
bun add zod
```

