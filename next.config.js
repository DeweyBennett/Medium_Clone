/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: [
      'cdn.sanity.io',
      'links.papareact.com',
      'accountabilitylab.org',
    ]
  }
}

module.exports = nextConfig
