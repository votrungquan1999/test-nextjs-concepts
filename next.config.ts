import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // this app is use for testing only, no need to worry about effect not handled correctly
  reactStrictMode: false,
  experimental: {
    authInterrupts: true,
  },
}

export default nextConfig
