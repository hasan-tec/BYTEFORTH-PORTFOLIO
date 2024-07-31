/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  // Other settings can be added here
  reactStrictMode: true, // Optional, enables React Strict Mode
  async rewrites() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
      },
    ];
  },
};

module.exports = nextConfig;
