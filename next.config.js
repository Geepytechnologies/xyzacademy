/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/register',
        destination: 'https://localhost:5000/api/registercongress',
      },
    ]
  },
}

module.exports = nextConfig
