/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compress: true,
  compiler: {
    styledComponents: true,
  },
  headers: [
    {
      key: "Cache-Control",
      value: "public, s-maxage=31536000, stale-while-revalidate",
    },
  ],
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    // minimumCacheTTL: 10000,
  },
};

module.exports = nextConfig;
