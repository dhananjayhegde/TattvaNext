/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_HOST, 'ik.imagekit.io']
  },
}

module.exports = nextConfig
