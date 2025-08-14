const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    // Tắt persistent cache trong dev để tránh lỗi EPERM trên Windows
    if (dev) {
      config.cache = false
    }
    return config
  },
}

export default nextConfig
