# Scripts

This directory contains utility scripts for the Luxa CSS project.

## Available Scripts

### `build.js`

Builds both the framework and documentation.

**Usage:**

```bash
npm run build
```

**What it does:**

- Builds the CSS framework (compiles from `/css` to `/dist`)
- Builds the documentation site

### `build-framework.js`

Core framework build script. Compiles CSS files from source to distribution.

**What it does:**

- Resolves `@import` statements
- Adds vendor prefixes
- Generates minified and expanded versions
- Creates individual module files

### `dev.js`

Starts development mode with watch and hot reload.

**Usage:**

```bash
npm run dev
```

**What it does:**

- Watches CSS files and rebuilds automatically when changes are detected
- Starts the Next.js documentation dev server with hot reload
- Both processes run simultaneously

### `lint.js`

Runs code formatting and linting checks.

**Usage:**

```bash
npm run lint
```

**What it does:**

- Formats code with Prettier
- Ensures consistent code style across the project
