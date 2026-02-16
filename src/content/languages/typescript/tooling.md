---
title: Tooling & Formatter/Linter
order: 15
---

Same tools as JavaScript, with TypeScript-aware configurations. `tsc` itself is the primary type checker.

```bash
# Prettier — formats TS natively
npx prettier --write "**/*.ts"

# ESLint with TypeScript
npm install --save-dev eslint typescript-eslint
npx eslint .

# Biome — supports TypeScript out of the box
npx biome check --write .

# Type checking (not a linter, but essential)
npx tsc --noEmit
```

```js
// eslint.config.js (flat config with TypeScript)
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
)
```

```bash
# Editor support
# VS Code: ESLint + Prettier extensions
# Biome: Biome VS Code extension
# Type errors shown inline via TypeScript language server
```

