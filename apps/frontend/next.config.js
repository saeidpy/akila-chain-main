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
  serverRuntimeConfig: {
    // Will only be available on the server side
    NEXT_PUBLIC_API_URL:'http://localhost:1337'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    NEXT_PUBLIC_API_URL:'http://154.91.170.48:1337'
  },
};

module.exports = nextConfig;
