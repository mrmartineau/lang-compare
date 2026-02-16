---
title: Build & Compile Model
order: 16
---

**Transpiled to JavaScript, then interpreted/JIT.** TypeScript is compiled to JS by `tsc`, or stripped/transpiled by faster tools.

```bash
# tsc — official compiler (type-check + emit JS)
npx tsc                    # Compile project
npx tsc --noEmit           # Type-check only (no output)
npx tsc --watch            # Watch mode

# Faster alternatives (strip types, no type-checking)
npx esbuild src/index.ts --bundle --outfile=out.js
npx tsup src/index.ts      # Library bundler
npx tsx src/index.ts        # Run directly (no build)

# Output: .js + .d.ts (type declarations) + .js.map
```

**Execution model:**
- TypeScript → JavaScript (types erased) → Engine JIT
- `tsc` performs full type checking but is slow for large projects
- Most build tools (esbuild, SWC, Bun) only strip types — no type checking
- `--isolatedDeclarations` enables parallel .d.ts generation
- Node.js 22+ can run `.ts` files directly (type stripping)

