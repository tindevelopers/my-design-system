/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@tindeveloper/design-system'],
  experimental: {
    externalDir: true,
  },
}

module.exports = nextConfig
