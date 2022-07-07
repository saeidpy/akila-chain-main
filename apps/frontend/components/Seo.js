import Head from "next/head";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import { getMedia } from "../lib/media";

const Seo = ({ seo }) => {
  const { defaultSeo, site_name } = useContext(GlobalContext) ?? {};
  const seoWithDefaults = {
    ...defaultSeo,
    ...seo,
  };
  const fullSeo = {
    ...seoWithDefaults,
    // Add title suffix
    metaTitle: `${
      seoWithDefaults?.metaTitle ? seoWithDefaults?.metaTitle + "|" : ""
    }  ${site_name ?? ""}`,
    // Get full image URL
    shareImage: getMedia(seoWithDefaults.shareImage),
  };

  return (
    <Head>
      {fullSeo?.metaTitle && (
        <>
          <title>{fullSeo?.metaTitle}</title>
          <meta property="og:title" content={fullSeo?.metaTitle} />
          <meta name="twitter:title" content={fullSeo?.metaTitle} />
        </>
      )}
      {fullSeo?.metaDescription && (
        <>
          <meta name="description" content={fullSeo?.metaDescription} />
          <meta property="og:description" content={fullSeo?.metaDescription} />
          <meta name="twitter:description" content={fullSeo?.metaDescription} />
        </>
      )}
      {fullSeo?.shareImage && (
        <>
          <meta property="og:image" content={fullSeo?.shareImage} />
          <meta name="twitter:image" content={fullSeo?.shareImage} />
          <meta name="image" content={fullSeo?.shareImage} />
        </>
      )}
      <meta name="twitter:card" content="summary_large_image" />

      {fullSeo?.canonical && <link rel="canonical" href={fullSeo?.canonical} />}
      {fullSeo?.ogTitle && (
        <meta property="og:title" content={fullSeo?.ogTitle} />
      )}
      {fullSeo?.ogType && <meta property="og:type" content={fullSeo?.ogType} />}
      {fullSeo?.ogSite_name && (
        <meta property="og:site_name" content={fullSeo?.ogSite_name} />
      )}
      {fullSeo?.ogUrl && <meta property="og:url" content={fullSeo?.ogUrl} />}
      {fullSeo?.apple_touch_icon && (
        <link rel="apple-touch-icon" href={fullSeo?.apple_touch_icon} />
      )}
    </Head>
  );
};

export default Seo;
