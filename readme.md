# Luxa CSS

The minimalist CSS library.

A clean and lightweight kit that prioritizes minimalism, speed, and ease of maintenance.

## Installation

Choose one of these methods to get started:

### Direct Download

[Download the latest version](https://github.com/luxonauta/luxacss/archive/main.zip/?ref=luxacss.com) and link the CSS in your HTML `<head>`.

> **Note**: The GitHub repository includes documentation, making it larger than the NPM package.

### CDN

Include Luxa CSS via CDN:

```html
<!-- Expanded (7.23KB) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/luxacss@latest/dist/expanded/luxa.css"
/>

<!-- Compressed (5.47KB) -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/luxacss@latest/dist/compressed/luxa.min.css"
/>
```

### Package Manager

Install using your preferred package manager:

```bash
npm i luxacss

pnpm i luxacss

bun i luxacss
```

Then import it:

```jsx
import "luxacss";
```

Or, import individual CSS modules in your CSS file:

```css
@import "luxacss/css/colors.css";
@import "luxacss/css/tokens.css";
@import "luxacss/css/grid.css";
```

## Resources

- [Documentation](https://luxacss.com)
- [GitHub Repository](https://github.com/luxonauta/luxacss)

## Support this project

If you find Luxa CSS helpful, consider supporting the project:

- [Ko-Fi](https://ko-fi.com/luxonauta)
- [GitHub Sponsors](https://github.com/sponsors/luxonauta)

## Development

Want to contribute or customise Luxa CSS? Get started quickly:

- **[Quick Onboarding](.github/onboarding.md)** - Get started in 5 minutes
- **[Contributing Guide](.github/contributing.md)** - How to contribute
- **[Development Guide](.github/development.md)** - Local development setup
- **[Project Structure](.github/structure.md)** - Repository organisation

### Quick Start

```bash
# Clone and install (workspace dependencies)
git clone https://github.com/luxonauta/luxacss.git
cd luxacss
npm install

# Build framework and docs
npm run build

# Or start development mode
npm run dev
```

## Contributing

Please read our [GitHub contributing guidelines](.github/contributing.md) to get started.

## License

Luxa CSS is released under the [MIT License](./license.md). Feel free to use and modify it for your projects.
