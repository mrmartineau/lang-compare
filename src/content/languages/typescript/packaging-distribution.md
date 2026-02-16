---
title: Packaging & Distribution
order: 23
---

Same npm distribution as JavaScript. Ship `.js` + `.d.ts` (type declarations). Use `tsup` or `unbuild` for library builds.

```bash
# Build a library with tsup (zero-config)
npx tsup src/index.ts --format cjs,esm --dts
# Output: dist/index.js, dist/index.mjs, dist/index.d.ts

# package.json for a TypeScript library
{
  "name": "@myorg/lib",
  "version": "1.0.0",
  "exports": {
    ".": {
      "import": { "types": "./dist/index.d.mts", "default": "./dist/index.mjs" },
      "require": { "types": "./dist/index.d.ts", "default": "./dist/index.js" }
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "prepublishOnly": "npm run build"
  }
}

# Publish
npm publish --access public
```

```bash
# JSR — TypeScript-native registry (Deno/Node.js)
# Publish TypeScript source directly (no build step)
npx jsr publish

# Monorepo publishing
# Turborepo, Nx, or changesets
npx changeset         # Create a changeset
npx changeset version # Bump versions
npx changeset publish # Publish to npm
```

