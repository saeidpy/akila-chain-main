import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

const Seo = ({ seo }) => {
  const { default_seo, site_name } = useContext(GlobalContext) ?? {};
  const seoWithDefaults = {
    ...default_seo,
    ...seo,
  };
  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    seoWithDefaults,
    meta_title: `${
      seoWithDefaults?.meta_title ? seoWithDefaults?.meta_title + "|" : ""
    }  ${site_name ?? ""}`,
  };

  return (
    <Head>
      {fullSeo?.meta_title && (
        <>
          <title>{fullSeo?.meta_title}</title>
          <meta property="og:title" content={fullSeo?.meta_title} />
          <meta name="twitter:title" content={fullSeo?.meta_title} />
        </>
      )}
      {fullSeo?.meta_description && (
        <>
          <meta name="description" content={fullSeo?.meta_description} />
          <meta property="og:description" content={fullSeo?.meta_description} />
          <meta
            name="twitter:description"
            content={fullSeo?.meta_description}
          />
        </>
      )}

      {fullSeo?.canonical && <link rel="canonical" href={fullSeo?.canonical} />}
      {fullSeo?.og_title && (
        <meta property="og:title" content={fullSeo?.og_title} />
      )}
      {fullSeo?.og_type && (
        <meta property="og:type" content={fullSeo?.og_type} />
      )}
      {fullSeo?.og_site_name && (
        <meta property="og:site_name" content={fullSeo?.og_site_name} />
      )}
      {fullSeo?.og_url && <meta property="og:url" content={fullSeo?.og_url} />}
      {fullSeo?.apple_touch_icon && (
        <link rel="apple-touch-icon" href={fullSeo?.apple_touch_icon} />
      )}
    </Head>
  );
};

export default Seo;
