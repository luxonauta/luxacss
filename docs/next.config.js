/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started",
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
  }
};

module.exports = nextConfig;
