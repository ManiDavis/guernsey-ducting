import type { NextConfig } from 'next'
import path from 'path'

const nextConfig: NextConfig = {
  // Prevent Next.js from picking up lockfiles in parent directories
  outputFileTracingRoot: path.join(__dirname),
}

export default nextConfig
