/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  webpack: (config) => {
    // Disable webpack filesystem caching in dev to avoid occasional ENOENT build cache errors
    config.cache = false;
    return config;
  },
};

export default nextConfig;
