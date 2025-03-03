/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {}, // ✅ Correct - use "rules" instead of "loaders"
    },
  },
};

module.exports = nextConfig;
