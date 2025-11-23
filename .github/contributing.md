# Contributing to Luxa CSS

Thank you for your interest in contributing to Luxa CSS! This guide will help you get started quickly.

## Quick Start

1. **Fork and clone** the repository
2. **Install dependencies**: `npm install`
3. **Make your changes** in the `/css` directory
4. **Build the framework**: `npm run build`
5. **Submit a pull request**

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm, pnpm, or bun

### Installation

```bash
# Install all dependencies (workspace setup)
npm install
```

This uses npm workspaces to install dependencies for both the framework and documentation site. Shared dependencies (like Next.js and React) are installed once at the root to avoid duplication.

### Project Structure

```
luxacss/
├── css/              # Source CSS files (edit these)
│   ├── colors.css
│   ├── tokens.css
│   ├── typography.css
│   ├── spacing.css
│   ├── reset.css
│   ├── grid.css
│   ├── utilities.css
│   └── luxa.css      # Main entry point
│
├── dist/             # Compiled output (auto-generated)
│   ├── compressed/   # Minified versions
│   ├── expanded/     # Expanded versions
│   └── individual/   # Individual module files
│
├── docs/             # Documentation website (Next.js)
├── scripts/          # Build and utility scripts (TypeScript)
│   ├── build.ts          # Build script (framework + docs)
│   ├── build-framework.ts # Framework build script
│   ├── dev.ts            # Development mode (watch + dev server)
│   └── lint.ts           # Linting and formatting
├── postcss.config.js  # PostCSS configuration
└── package.json
```

## Making Changes

### 1. Edit Source Files

**Always edit files in `/css`, never `/dist`.**

The `/dist` directory is auto-generated from source files. When you make changes:

1. Edit the appropriate file in `/css`
2. Run `npm run build` to compile
3. The build script will update `/dist` automatically

### 2. Build the Framework

```bash
# Build once (framework + docs)
npm run build
```

The build process:

- Resolves `@import` statements
- Adds vendor prefixes
- Generates minified and expanded versions
- Creates individual module files

### 3. Test Your Changes

```bash
# Start development mode (watches CSS files and starts docs dev server)
npm run dev
```

This automatically:

- Watches CSS files and rebuilds on changes
- Starts the documentation dev server with hot reload
- Visit `http://localhost:3000` to see your changes in the documentation site

## Code Style

### CSS Guidelines

- Use standard CSS only (no PostCSS-specific syntax)
- Use CSS custom properties for values
- Follow the existing naming conventions
- Use kebab-case for class names
- Keep files focused and modular
- Use British English spelling where applicable (e.g., 'colour' in variable names)

### File Organization

- **Colors**: `css/colors.css`
- **Design tokens**: `css/tokens.css`
- **Typography**: `css/typography.css`
- **Spacing**: `css/spacing.css`
- **Reset styles**: `css/reset.css`
- **Grid system**: `css/grid.css`
- **Utilities**: `css/utilities.css`

### Formatting

```bash
# Format and lint code
npm run lint
```

## Pull Requests

### Before Submitting

1. **Ask first**: For significant features, open a discussion first
2. **Target branch**: Submit PRs to `main` (or `dev` if it exists)
3. **Build**: Run `npm run build` and commit the `/dist` changes
4. **Test**: Verify your changes work (use `npm run dev` for development)
5. **Lint**: Run `npm run lint`

### PR Checklist

- [ ] Changes made in `/css` directory
- [ ] Build completed successfully (`npm run build`)
- [ ] Code formatted (`npm run lint`)
- [ ] Documentation updated (if needed)
- [ ] Changes tested locally

### PR Title Format

Use clear, descriptive titles:

- `fix: correct grid column calculation`
- `feat: add new utility class`
- `docs: update installation guide`

## Bug Reports

Use the [issue tracker](https://github.com/luxonauta/luxacss/issues) for:

- Bug reports and non-critical issues
- Documentation improvements

**Not for:**

- Personal support requests (use [discussions](https://github.com/luxonauta/luxacss/discussions))
- Feature requests (use [discussions](https://github.com/luxonauta/luxacss/discussions))

### Bug Report Template

When reporting bugs, include:

- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information
- Screenshots (if applicable)

## Feature Requests

1. Check existing [discussions](https://github.com/luxonauta/luxacss/discussions) to avoid duplicates
2. Open a new discussion in the "Ideas" category
3. Describe the feature and use case
4. Wait for feedback before implementing

## Documentation

The documentation site is in `/docs`. To contribute:

```bash
# Start development mode (watches CSS + docs dev server)
npm run dev

# Build for production (framework + docs)
npm run build
```

Documentation files are in `/docs/content` (MDX format).

## Getting Help

1. Check the [documentation](https://luxacss.com)
2. Search [existing issues](https://github.com/luxonauta/luxacss/issues)
3. Ask in [discussions](https://github.com/luxonauta/luxacss/discussions)

## Common Tasks

### Add a new utility class

1. Edit `css/utilities.css`
2. Add your utility class
3. Use `npm run dev` to see changes automatically

### Modify colors

1. Edit `css/colors.css`
2. Update OKLCH values
3. Use `npm run dev` to see changes automatically

### Update grid system

1. Edit `css/grid.css`
2. Make your changes
3. Use `npm run dev` to see changes automatically

## Questions?

If you have questions about contributing:

- Open a [discussion](https://github.com/luxonauta/luxacss/discussions)
- Check existing issues and PRs
- Review the codebase structure

Thank you for contributing to Luxa CSS!
