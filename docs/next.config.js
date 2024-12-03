/** @type {import('next').NextConfig} */

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
  experimental: {
    outputFileTracingRoot: path.join(__dirname),
    outputFileTracingIncludes: {
      "/api/**/*": ["src/components/recipes/**/*"]
    }
  }
};

module.exports = nextConfig;
