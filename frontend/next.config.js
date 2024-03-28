/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    noHydration: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false };
    return config;
  },
};

module.exports = nextConfig;
