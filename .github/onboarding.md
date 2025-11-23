# Quick Onboarding Guide

Get started contributing to Luxa CSS in 5 minutes.

## Step 1: Clone the Repository

```bash
git clone https://github.com/luxonauta/luxacss.git
cd luxacss
```

## Step 2: Install Dependencies

```bash
npm run install:all
```

This installs dependencies for both the framework (from root `package.json`) and documentation site (from `docs/package.json`).

## Step 3: Build the Framework

```bash
npm run build
```

This runs `node scripts/build.js`, which:
- Lints the code
- Compiles CSS files from `/css` to `/dist`
- Builds the documentation site

## Step 4: Start Development Mode

```bash
npm run dev
```

This runs `node scripts/dev.js`, which:
- Starts framework watch mode (rebuilds CSS on changes)
- Starts the documentation dev server with hot reload

Visit `http://localhost:3000` to see the framework in action.

## You're Ready!

Now you can:

- **Edit CSS files** in the `/css` directory
- **See changes automatically** - the framework rebuilds and the docs site hot-reloads

## Next Steps

- Read the [Contributing Guide](contributing.md) for detailed guidelines
- Check the [Development Guide](development.md) for advanced setup
- Review the [Project Structure](structure.md) to understand the codebase

## Common Commands

All commands are run from the repository root. Scripts are defined in `package.json`:

```bash
# Build framework and docs (runs: node scripts/build.js)
npm run build

# Start development mode (runs: node scripts/dev.js)
# - Watches CSS files and rebuilds on changes
# - Starts docs dev server at http://localhost:3000
npm run dev

# Format and lint code (runs: node scripts/lint.js)
npm run lint

# Start production docs server (runs: cd docs && npm start)
npm run start
```

## Need Help?

- Check [existing issues](https://github.com/luxonauta/luxacss/issues)
- Ask in [discussions](https://github.com/luxonauta/luxacss/discussions)
- Read the [documentation](https://luxacss.com)
