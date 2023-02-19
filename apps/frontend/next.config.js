/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["en", "fr", "nl"],
    defaultLocale: "en",
  },
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
  experimental: {
    swcPlugins: [
      [
        "@lingui/swc-plugin",
        {
          $schema: "https://json.schemastore.org/swcrc",
          jsc: {
            experimental: {
              plugins: [
                "@lingui/swc-plugin",
                {
                  // Optional
                  // Unlike the JS version this option must be passed as object only.
                  // Docs https://lingui.js.org/ref/conf.html#std-config-runtimeConfigModule
                  runtimeModules: {
                    i18n: ["@lingui/core", "i18n"],
                    trans: ["@lingui/react", "Trans"],
                  },
                },
              ],
            },
          },
        },
      ],
    ],
  },
  webpack: (config) => {
    console.log("🚀 ~ file: next.config.js:61 ~ config", config);

    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      "ts-node": false,
    };

    return config;
  },
};

module.exports = nextConfig;
