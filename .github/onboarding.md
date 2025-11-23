# Quick Onboarding Guide

Get started contributing to Luxa CSS in 5 minutes.

## Step 1: Clone the Repository

```bash
git clone https://github.com/luxonauta/luxacss.git
cd luxacss
```

## Step 2: Install Dependencies

```bash
npm install
```

This installs all dependencies for the workspace (framework and documentation site) using npm workspaces. Dependencies are shared where possible to avoid duplication.

## Step 3: Build the Framework

```bash
npm run build
```

This runs `tsx scripts/build.ts`, which:

- Lints the codebase
- Compiles CSS files from `/css` to `/dist`
- Builds the documentation site

## Step 4: Start Development Mode

```bash
npm run dev
```

This runs `tsx scripts/dev.ts`, which:

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
# Build framework and docs (runs: tsx scripts/build.ts)
npm run build

# Start development mode (runs: tsx scripts/dev.ts)
# - Watches CSS files and rebuilds on changes
# - Starts docs dev server at http://localhost:3000
npm run dev

# Format and lint code (runs: tsx scripts/lint.ts)
npm run lint

# Start production docs server (runs: npm start --workspace=docs)
npm run start
```

## Need Help?

- Check [existing issues](https://github.com/luxonauta/luxacss/issues)
- Ask in [discussions](https://github.com/luxonauta/luxacss/discussions)
- Read the [documentation](https://luxacss.com)
