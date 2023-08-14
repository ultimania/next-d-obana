/** @type {import('next').NextConfig} */

const branchName = '';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
  experimental: {
    appDir: true,
  },
  output: 'export',
};

module.exports = nextConfig;
