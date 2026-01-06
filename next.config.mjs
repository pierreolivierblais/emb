/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Disable webpack filesystem caching in dev to avoid occasional ENOENT build cache errors
    config.cache = false;
    return config;
  },
};

export default nextConfig;
