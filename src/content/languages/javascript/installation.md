---
title: Installation & Getting Started
order: 12
---

JavaScript runs in every browser. For server-side / local development, install a runtime like Node.js, Deno, or Bun.

```bash
# Node.js — install via nvm (recommended)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
nvm install --lts
node --version

# Or via Homebrew (macOS)
brew install node

# Deno — built-in TypeScript, no config needed
curl -fsSL https://deno.land/install.sh | sh
deno --version

# Bun — fast all-in-one runtime
curl -fsSL https://bun.sh/install | bash
bun --version
```

```bash
# REPL — start an interactive session
node           # Node.js REPL
deno           # Deno REPL
bun repl       # Bun REPL

# Run a script
node script.js
deno run script.js
bun run script.js

# Quick one-liner
node -e "console.log('Hello!')"
```

