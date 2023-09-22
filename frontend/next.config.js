/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  reactStrictMode: false,
  experimental: {
noHydration: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false };
    return config;
  },
};

