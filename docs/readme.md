# Documentation Site

This is the documentation website for Luxa CSS, built with [Next.js](https://nextjs.org/).

## Development

This workspace is part of the Luxa CSS monorepo. To work on the documentation:

```bash
# From the repository root, install all dependencies
npm install

# Start the development server
npm run dev

# Or work directly in this workspace
npm run dev --workspace=docs
```

The documentation site will be available at [http://localhost:3000](http://localhost:3000).

## Building

Build the documentation site for production:

```bash
# From the repository root
npm run build

# Or build this workspace directly
npm run build --workspace=docs
```

## Structure

- `content/` - Documentation content in MDX format
- `src/` - Next.js application source code
- `public/` - Static assets (fonts, images)
- `recipes/` - Component recipe examples
