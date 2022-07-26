import App from "next/app";
import Head from "next/head";
import React, { createContext } from "react";
import SnackbarProvider from "react-simple-snackbar";
import styled, { ThemeProvider } from "styled-components";
import Loading from "../components/Common/Loading";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { useLoading } from "../hooks";
import { fetchAPI } from "../lib/api";
import { getMedia } from "../lib/media";
import GlobalStyle from "../theme/globalStyle";
const theme = {
  primaryDark: "#0D0C1D",
  primaryLight: "#0055FF",
  primaryHover: "#343078",
  mobile: "576px",
};

// export async function getStaticProps({ params }) {
//   // Fetch global site settings from Strapi
//   const globalRes = await fetchAPI("/global", {
//     populate: "*",
//   });
//   // Pass the data to our page via props
//   return { pageProps: { global: globalRes?.data ?? {} } };
// }

// Store Global object in context
export const GlobalContext = createContext({});
export default function MyApp({ Component, pageProps }) {
  const loading = useLoading();
  const { global } = pageProps;
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <GlobalStyle />
        <Head>
          <link
            rel="shortcut icon"
            href={getMedia(global?.attributes?.favicon)}
          />
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            name="viewport"
          />
        </Head>
        <Root>
          <GlobalContext.Provider value={global?.attributes}>
            <HomeRoot>
              <TopBar {...pageProps} />
              <QapStyle>
                {loading ? <Loading /> : <Component {...pageProps} />}
              </QapStyle>
              <Footer {...pageProps} />
            </HomeRoot>
          </GlobalContext.Provider>
        </Root>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const globalRes = await fetchAPI("/global", {
    populate: "*",
  });
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global: globalRes?.data ?? {} } };
};

const Root = styled.div`
  position: relative;
  overflow: hidden;
`;

const HomeRoot = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 16px;
  margin: auto;
  width: 90%;
  max-width: 1154px;
  align-items: center;
`;
const QapStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
