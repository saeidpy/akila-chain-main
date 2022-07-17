/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["localhost", "akila-chain.herokuapp.com", "154.91.170.48"],
  },
};

module.exports = nextConfig;
