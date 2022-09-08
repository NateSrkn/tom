import "../styles/main.scss";
import Head from "next/head";
import React from "react";

import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismic";
export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider linkResolver={linkResolver}>
      <PrismicPreview repositoryName={repositoryName}>
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  );
}
