import "../styles/main.scss";
import Head from "next/head";
import React from "react";
import Typography from "typography";
import { Layout } from "../components/common/Layout";
const typography = new Typography({
  baseFontSize: "16px",
  headerFontFamily: ["acumin-pro"],
  bodyFontFamily: ["acumin-pro"],
  overrideStyles: ({ rhythm }, options, styles) => ({
    h2: {
      fontSize: "48px",
      paddingBottom: rhythm(4 / 10),
    },
    "h2, h4": {
      marginBottom: rhythm(1 / 6),
    },
    p: {
      marginBottom: rhythm(1 / 3),
    },
    img: {
      marginBottom: 0,
    },
  }),
});

typography.injectStyles();
export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
