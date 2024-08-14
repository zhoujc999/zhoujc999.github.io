/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
