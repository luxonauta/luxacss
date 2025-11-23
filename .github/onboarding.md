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

This installs dependencies for both the framework and documentation site.

## Step 3: Build the Framework

```bash
npm run build
```

This compiles the CSS files from `/css` to `/dist`.

## Step 4: Start Development Mode

```bash
npm run dev
```

This starts both the framework watch mode and the documentation dev server. Visit `http://localhost:3000` to see the framework in action.

## You're Ready!

Now you can:

- **Edit CSS files** in the `/css` directory
- **See changes automatically** - the framework rebuilds and the docs site hot-reloads

## Next Steps

- Read the [Contributing Guide](contributing.md) for detailed guidelines
- Check the [Development Guide](development.md) for advanced setup
- Review the [Project Structure](structure.md) to understand the codebase

## Common Commands

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

## Need Help?

- Check [existing issues](https://github.com/luxonauta/luxacss/issues)
- Ask in [discussions](https://github.com/luxonauta/luxacss/discussions)
- Read the [documentation](https://luxacss.com)
