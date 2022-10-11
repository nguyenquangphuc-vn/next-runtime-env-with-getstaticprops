/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  serverRuntimeConfig: {
    SERVER_AHIHI: process.env.AHIHI
  },
  publicRuntimeConfig: {
    PUBLIC_AHIHI: process.env.AHIHI
  }
}

module.exports = nextConfig
