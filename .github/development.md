# Development Guide

This guide covers local development setup and common development tasks for Luxa CSS. Use this as a reference for day-to-day development work.

## Prerequisites

- Node.js 18 or higher
- npm, pnpm, or bun package manager

## Initial Setup

```bash
# Clone the repository
git clone https://github.com/luxonauta/luxacss.git
cd luxacss

# Install all dependencies
npm run install:all
```

This installs dependencies for both the main framework and the documentation site.

## Project Structure

```
luxacss/
├── css/                    # Source CSS files
│   ├── colors.css          # Color palette (OKLCH)
│   ├── tokens.css          # Design tokens (spacing, breakpoints, etc.)
│   ├── typography.css      # Typography styles
│   ├── spacing.css         # Spacing utilities
│   ├── reset.css           # CSS reset
│   ├── grid.css            # Grid system
│   ├── utilities.css       # Utility classes
│   └── luxa.css            # Main entry (imports all modules)
│
├── dist/                   # Compiled output (auto-generated)
│   ├── compressed/         # Minified CSS
│   │   └── luxa.min.css
│   ├── expanded/           # Expanded CSS with source maps
│   │   ├── luxa.css
│   │   └── luxa.css.map
│   └── individual/        # Individual module files
│       ├── compressed/
│       └── expanded/
│
├── docs/                   # Documentation website (Next.js)
│   ├── content/            # Documentation content (MDX)
│   ├── src/                # Next.js app source
│   └── public/            # Static assets
│
├── scripts/                # Build and utility scripts
│   ├── build.js            # Build script (framework + docs)
│   ├── build-framework.js  # Framework build script (with watch mode)
│   ├── dev.js              # Development mode (watch + dev server)
│   └── lint.js             # Linting and formatting
├── postcss.config.js       # PostCSS configuration
└── package.json
```

## Available Scripts

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

## Development Workflow

### 1. Making CSS Changes

1. Edit files in `/css` directory
2. Run `npm run build` to compile
3. Changes are reflected in `/dist`

**Important**: Never edit files in `/dist` directly. They are auto-generated.

### 2. Development Mode

For active development, use development mode:

```bash
npm run dev
```

This automatically:

- Watches CSS files and rebuilds on changes
- Starts the documentation dev server with hot reload
- Visit `http://localhost:3000` to preview your changes

## Build Process

The build script (`scripts/build-framework.js`) performs:

1. **Import Resolution**: Resolves `@import` statements using PostCSS
2. **Vendor Prefixing**: Adds browser prefixes via Autoprefixer
3. **Minification**: Compresses CSS using cssnano
4. **Source Maps**: Generates `.map` files for debugging

### Output Files

- **Expanded**: `dist/expanded/luxa.css` (readable, with source maps)
- **Compressed**: `dist/compressed/luxa.min.css` (minified)
- **Individual modules**: `dist/individual/expanded/` and `dist/individual/compressed/`

## CSS Architecture

### Module System

The framework is split into focused modules:

- **colors.css**: Color palette using OKLCH color space
- **tokens.css**: Design tokens (spacing, breakpoints, transitions)
- **typography.css**: Font families, sizes, line heights
- **spacing.css**: Margin and padding utilities
- **reset.css**: CSS reset and base styles
- **grid.css**: Responsive grid system
- **utilities.css**: Utility classes (display, flex, etc.)

### Import Chain

```
luxa.css
  ├── colors.css
  ├── tokens.css
  ├── typography.css
  ├── spacing.css
  ├── reset.css
  ├── grid.css
  └── utilities.css
```

## Code Style

### CSS Guidelines

- Use standard CSS (no PostCSS-specific syntax)
- CSS custom properties for values
- Kebab-case for class names
- Semantic naming
- One declaration per line
- Consistent spacing

### Example

```css
/* Good */
.container {
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

/* Avoid */
.container { width: 100%; max-width: 1024px; margin: 0 auto; padding: 24px; }
.container { background-color: #ffffff; color: #000000; }
.containerWrapper { /* Non-kebab-case */
  & .nested { /* PostCSS nesting syntax */
    background: white;
  }
}
```

## Common Development Tasks

### Add a New Utility Class

1. Open `css/utilities.css`
2. Add your utility class:

```css
.my-utility {
  /* styles */
}
```

3. Use `npm run dev` to see changes automatically

### Modify Colors

1. Open `css/colors.css`
2. Update OKLCH values:

```css
:root {
  --red: oklch(0.63 0.19 23);
}
```

3. Use `npm run dev` to see changes automatically

### Update Grid System

1. Open `css/grid.css`
2. Modify grid classes
3. Use `npm run dev` to see changes automatically

### Add Documentation

1. Create/edit file in `docs/content/`
2. Use MDX format
3. Use `npm run dev` to preview changes

## Troubleshooting

### Build Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run install:all
```

### Documentation Issues

```bash
# Clear Next.js cache
rm -rf docs/.next
cd docs
npm run dev
```

### Import Errors

Ensure you're using `@import` (not `@use` or `@forward`):

```css
/* Correct */
@import "./colors.css";

/* Incorrect */
@use "./colors.css";
```

## Testing

### Manual Testing

1. Build the framework
2. Start docs site
3. Test in multiple browsers
4. Check responsive behavior
5. Verify accessibility

### File Size Verification

```bash
# Check file sizes
ls -lh dist/expanded/luxa.css
ls -lh dist/compressed/luxa.min.css
```

## Release Process

1. Update version in `package.json`
2. Build: `npm run build`
3. Test thoroughly
4. Commit changes
5. Create git tag
6. Publish to npm

## Resources

- [Documentation](https://luxacss.com)
- [GitHub Repository](https://github.com/luxonauta/luxacss)
- [Contributing Guide](contributing.md) - How to contribute
- [Project Structure](structure.md) - Repository organization
