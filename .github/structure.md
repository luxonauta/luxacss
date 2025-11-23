# Repository Structure

## Overview

Luxa CSS is organized for simplicity and flexibility. You can use the framework **without any build tools**—just use the compiled files.

## Directory Structure

```
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
├── scripts/              # Build and utility scripts
│   ├── build.js          # Build script (framework + docs)
│   ├── build-framework.js # Framework build script (with watch mode)
│   ├── dev.js            # Development mode (watch + dev server)
│   └── lint.js           # Linting and formatting
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

The build scripts (`scripts/build-framework.js` and `scripts/build.js`) use PostCSS to:

1. Resolve `@import` statements
2. Add vendor prefixes (autoprefixer)
3. Minify output (cssnano)

**PostCSS is only required for building**, not for using the framework.

## File Organization

- **`/css`**: Source files (edit these)
- **`/dist`**: Compiled output (use these, don't edit)
- **`/docs`**: Documentation website
- **`/scripts`**: Build and utility scripts

## Available Commands

```bash
# Build framework and docs
npm run build

# Start development mode (watch + dev server)
npm run dev

# Format and lint code
npm run lint

# Start production docs server
npm run start
```
