# Scripts

This directory contains utility scripts for the Luxa CSS project. All scripts are written in TypeScript and executed using `tsx`.

## Available Scripts

### `build.ts`

Builds both the framework and documentation.

**Usage:**

```bash
npm run build
```

**What it does:**

- Lints the codebase
- Builds the CSS framework (compiles from `/css` to `/dist`)
- Builds the documentation site

### `build-framework.ts`

Core framework build script. Compiles CSS files from source to distribution.

**What it does:**

- Resolves `@import` statements
- Adds vendor prefixes
- Generates minified and expanded versions
- Creates individual module files
- Supports watch mode for development

### `dev.ts`

Starts development mode with watch and hot reload.

**Usage:**

```bash
npm run dev
```

**What it does:**

- Watches CSS files and rebuilds automatically when changes are detected
- Starts the Next.js documentation dev server with hot reload
- Both processes run simultaneously

### `lint.ts`

Runs code formatting and linting checks.

**Usage:**

```bash
npm run lint
```

**What it does:**

- Runs ESLint to check and fix code issues
- Formats code with Prettier
- Ensures consistent code style across the project
