/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed static export and basePath so it works properly on Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
