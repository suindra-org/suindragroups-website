import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Enable Static Export
  output: 'export',

  // 2. Disable Image Optimization
  // GitHub Pages is a static host and doesn't support the Next.js 
  // dynamic image optimization server.
  images: {
    unoptimized: true,
  },

  // 3. Optional: If your images or CSS aren't loading, 
  // and you are NOT using a custom domain, you might need 'basePath'.
  // But since you HAVE suindragroups.com.np, keep these as they are.
};

export default nextConfig;