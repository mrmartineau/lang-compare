---
title: Build & Compile Model
order: 16
---

**Interpreted / JIT-compiled.** JavaScript is parsed and JIT-compiled at runtime by the engine (V8, SpiderMonkey, JavaScriptCore).

```bash
# No compile step — run directly
node app.js
deno run app.js
bun run app.js

# Bundling for browsers (not compilation, but required)
npx vite build         # Vite (esbuild + Rollup)
npx esbuild app.js --bundle --outfile=out.js
npx webpack            # webpack

# Output: .js bundles, source maps
# No binary output — always JavaScript
```

**Execution model:**
- Source → Parse → AST → Bytecode → JIT machine code
- V8 uses TurboFan (optimizing compiler) and Sparkplug (baseline)
- No ahead-of-time compilation (except experimental with Hermes, QuickJS)
- Tree-shaking and dead-code elimination happen at bundle time, not compile time

