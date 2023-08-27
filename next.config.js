/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  skipTrailingSlashRedirect: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mcdn.wallpapersafari.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
