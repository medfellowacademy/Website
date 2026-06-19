import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: '/programs', destination: '/courses', permanent: true },
      { source: '/programs/:slug*', destination: '/courses/:slug*', permanent: true },
    ];
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // Explicitly declare local image sizes so /_next/image can serve them
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 800],
    formats: ['image/webp'],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
