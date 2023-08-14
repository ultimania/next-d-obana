/** @type {import('next').NextConfig} */

const branchName = '/main';

const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  assetPrefix: branchName,
  basePath: branchName,
};

module.exports = nextConfig;
