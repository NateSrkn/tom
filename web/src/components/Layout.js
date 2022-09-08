import Head from "next/head";
import React from "react";
import Header from "./Header";

export const Layout = ({ children, meta }) => {
  return (
    <React.Fragment>
      <Head>
        <title>
          {meta?.title ? meta.title + ` — TomB Design` : "TomB Design"}
        </title>
        <meta name="description" content={meta?.description || ""} />
      </Head>
      <div className="max-w-screen-xl mx-auto px-6">
        <Header />
        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};
