const withTM = require("next-transpile-modules")(["ui"]);
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withTM({
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  images: {
    loader: "default",
    domains: ["localhost", "akila-chain.herokuapp.com"],
  },
});

module.exports = nextConfig;
