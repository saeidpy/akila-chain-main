/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
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
