/** @type {import('next').NextConfig} */

import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/overview",
        permanent: true
      },
      {
        source: "/docs/getting-started",
        destination: "/docs/installation",
        permanent: true
      },
      {
        source: "/docs/colors",
        destination: "/docs/colours",
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com"
      }
    ]
  },
  outputFileTracingRoot: join(__dirname, ".."),
  outputFileTracingIncludes: {
    "/api/**/*": ["src/components/recipes/**/*"],
    "**/*": ["../dist/**/*", "../css/**/*"]
  }
};

export default nextConfig;
