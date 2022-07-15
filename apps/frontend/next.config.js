/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  assetPrefix: ".",
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "akila-chain.herokuapp.com"],
  },
};

module.exports = nextConfig;
