// use nextjs config as single source of truth for defining locales
const nextConfig = require("./next.config");

/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: nextConfig.i18n.locales,
  sourceLocale: nextConfig.i18n.defaultLocale,
  // this is crucial to make `lingui extract` work in nextjs with swc compiler
  catalogs: [
    {
      path: "<rootDir>/locales/{locale}/messages",
      include: ["<rootDir>/"],
      exclude: ["**/node_modules/**", "**/.next/**", "**/.turbo/**"],
    },
  ],
  format: "po",
};
