---
title: Packaging & Distribution
order: 23
---

Publish libraries to **npm**. Distribute apps as Docker containers, serverless functions, or static sites.

```bash
# Publish a library to npm
npm login
npm publish               # Public package
npm publish --access public  # Scoped package (@org/pkg)

# package.json essentials
{
  "name": "my-lib",
  "version": "1.0.0",
  "main": "dist/index.cjs",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  },
  "files": ["dist"]
}

# Build before publishing
npm run build
npm pack --dry-run  # Preview what gets published
```

```bash
# CLI distribution
# Add "bin" field to package.json
# "bin": { "mycli": "./dist/cli.js" }
npm publish
# Users: npx mycli or npm install -g mycli

# Docker
FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY dist/ ./dist/
CMD ["node", "dist/index.js"]

# Static site deployment
# Vercel, Netlify, Cloudflare Pages — auto-deploy from Git
# npx vercel deploy
```

