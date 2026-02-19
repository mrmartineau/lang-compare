# Lang Compare

Side-by-side programming language syntax comparison tool. Pick any combination of languages and compare how they handle variables, types, functions, concurrency, error handling, and more — all on one page.

## Languages

Covers 11 languages across four categories:

| Category | Languages |
| :--- | :--- |
| **Web** | JavaScript, TypeScript, PHP |
| **Systems** | Go, Rust, C++ |
| **App Development** | Swift, Kotlin, C# |
| **Scripting & Data** | Python, Ruby |

## Topics

Each language includes content for 24 topics, ordered in a learning-first flow:

- Installation & Project Scaffolding
- Package Management & Tooling
- Build & Compile
- Libraries & Frameworks
- Testing & Debugging
- Variables, Types & Data Structures
- Functions, Conditionals & Loops
- Generics & Inheritance
- Functional Patterns & Concurrency
- Modules & Imports
- Error Handling & Memory Management
- Profiling, Interop & Packaging/Distribution

## Features

- **Toggle languages** — show or hide any language column; your selection is persisted in `localStorage`
- **Section navigation** — sidebar nav for jumping between topics
- **Dark / light theme** — respects system preference with a manual toggle, also persisted
- **Syntax highlighting** — dual-theme Shiki (GitHub Light / GitHub Dark)

## Tech Stack

- [Astro](https://astro.build) v5 — static site generator
- [Tailwind CSS](https://tailwindcss.com) v4 — styling
- [Shiki](https://shiki.style) — syntax highlighting (via Astro's built-in markdown support)
- [Phosphor Icons](https://phosphoricons.com) — icon set

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18+)

### Install

```sh
npm install
```

### Development

```sh
npm run dev
```

Opens a local dev server at [localhost:4321](http://localhost:4321).

### Build

```sh
npm run build
```

Outputs a production-ready static site to `./dist/`.

### Preview

```sh
npm run preview
```

Serves the built site locally for a final check before deploying.

## Project Structure

```
src/
├── components/
│   ├── FeatureCard.astro      # Card displaying a single topic for a language
│   ├── IntroCard.astro        # Language intro/description card
│   ├── LangPicker.astro       # Language toggle bar (with persistence)
│   ├── LangPickerItem.astro   # Individual toggle checkbox
│   ├── SectionNav.astro       # Sidebar topic navigation
│   └── SectionNavLink.astro   # Individual nav link
├── content/
│   └── languages/
│       ├── javascript/        # One folder per language
│       │   ├── _meta.md       #   Language metadata (name, category, links)
│       │   ├── variables.md   #   Topic content as Markdown with code blocks
│       │   ├── types.md
│       │   └── ...
│       ├── typescript/
│       ├── python/
│       └── ...
├── layouts/
│   └── Layout.astro           # Base HTML layout with theme support
├── pages/
│   └── index.astro            # Main comparison page
├── scripts/
│   └── theme-toggle.ts        # Dark/light theme toggle web component
├── styles/
│   └── global.css             # CSS custom properties, Tailwind config, Shiki theming
└── content.config.ts          # Astro content collection schemas
```

## Adding a New Language

1. Create a new folder under `src/content/languages/` (e.g. `java/`)
2. Add a `_meta.md` file with frontmatter:

   ```yaml
   ---
   name: Java
   slug: java
   category: app          # web | systems | app | scripting
   order: 7
   description: A brief description of the language.
   links:
     - label: Official Docs
       url: https://docs.oracle.com/en/java/
   ---
   ```

3. Add topic files (e.g. `variables.md`, `types.md`, etc.) with frontmatter:

   ```yaml
   ---
   title: Variables
   order: 1
   ---
   ```

   Then write the content with code examples in fenced code blocks.

4. The new language will automatically appear in the comparison grid.

## Adding a New Topic

1. Add a new `.md` file to each language folder (e.g. `pattern-matching.md`)
2. Use the same frontmatter format with `title` and `order`
3. Add the topic key to the `learningFlowOrder` array in `src/pages/index.astro` to control its position in the navigation

## License

MIT
