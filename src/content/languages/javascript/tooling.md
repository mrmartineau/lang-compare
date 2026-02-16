---
title: Tooling & Formatter/Linter
order: 15
---

Rich ecosystem of formatters and linters. Most projects use a combination.

```bash
# Prettier — opinionated code formatter
npm install --save-dev prettier
npx prettier --write .

# ESLint — linting and code quality
npm install --save-dev eslint
npx eslint --init
npx eslint .

# Biome — fast all-in-one (format + lint)
npm install --save-dev @biomejs/biome
npx biome check --write .

# oxlint — extremely fast linter (Rust-based)
npx oxlint .
```

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

```js
// eslint.config.js (flat config)
import js from '@eslint/js'
export default [
  js.configs.recommended,
  { rules: { 'no-unused-vars': 'warn' } },
]
```

