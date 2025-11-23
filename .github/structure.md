# Repository Structure

## Overview

Luxa CSS is organised for simplicity and flexibility. You can use the framework **without any build tools**—just use the compiled files.

## Directory Structure

```text
luxacss/
├── css/              # Source CSS files (standard CSS, no PostCSS required)
│   ├── colors.css
│   ├── tokens.css
│   ├── typography.css
│   ├── spacing.css
│   ├── reset.css
│   ├── grid.css
│   ├── utilities.css
│   └── luxa.css      # Main entry point (imports all modules)
│
├── dist/             # Compiled output (ready to use, no build needed)
│   ├── compressed/   # Minified versions
│   │   └── luxa.min.css
│   ├── expanded/     # Expanded versions with source maps
│   │   ├── luxa.css
│   │   └── luxa.css.map
│   └── individual/   # Individual module files
│       ├── compressed/
│       └── expanded/
│
├── docs/             # Documentation website (Next.js)
│   ├── content/      # Documentation content (MDX)
│   ├── src/          # Next.js app source
│   └── public/       # Static assets
│
├── scripts/              # Build and utility scripts (TypeScript)
│   ├── build.ts          # Build script (framework + docs)
│   ├── build-framework.ts # Framework build script (with watch mode)
│   ├── dev.ts            # Development mode (watch + dev server)
│   └── lint.ts           # Linting and formatting
│
├── .github/          # GitHub templates and workflows
├── postcss.config.js  # PostCSS config (only needed for building)
└── package.json
```

## Using the Framework

### Without Build Tools (Recommended)

You can use the compiled files directly—no PostCSS or build step needed:

```html
<!-- CDN -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/luxacss@latest/dist/compressed/luxa.min.css"
/>

<!-- Or from node_modules -->
<link rel="stylesheet" href="node_modules/luxacss/dist/expanded/luxa.css" />
```

### With Source Files

Source files use standard CSS `@import` (native browser support):

```css
@import "luxacss/css/luxa.css";
```

Or import individual modules:

```css
@import "luxacss/css/colors.css";
@import "luxacss/css/grid.css";
```

### With PostCSS (Optional)

PostCSS is only needed if you want to:

- Customize with PostCSS plugins (mixins, nesting, etc.)
- Build from source with additional processing
- Extend the framework with advanced features

## Source Files

All source files in `/css` use **standard CSS only**:

- ✅ Native `@import` (browser support)
- ✅ CSS custom properties (variables)
- ✅ Standard CSS syntax
- ❌ No PostCSS-specific syntax (mixins, nesting, etc.)

## Build Process

The build scripts (`scripts/build-framework.ts` and `scripts/build.ts`) use PostCSS to:

1. Resolve `@import` statements
2. Add vendor prefixes (autoprefixer)
3. Minify output (cssnano)

**PostCSS is only required for building**, not for using the framework.

## File Organisation

- **`/css`**: Source files (edit these)
- **`/dist`**: Compiled output (use these, don't edit)
- **`/docs`**: Documentation website (workspace)
- **`/scripts`**: Build and utility scripts

## Workspace Structure

This repository uses npm workspaces:

- **Root**: Shared dependencies (Next.js, React, ESLint, Prettier, TypeScript, etc.)
- **`docs/`**: Documentation-specific dependencies (MDX plugins, etc.)

This setup avoids duplicate installations and simplifies dependency management.

## Available Commands

```shell
# Build framework and docs
npm run build

# Start development mode (watch + dev server)
npm run dev

# Format and lint code
npm run lint

# Start production docs server
npm run start
```
