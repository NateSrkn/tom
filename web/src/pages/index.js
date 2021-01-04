import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home | Tom Blankenship</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: 250 }}>
          <img src={"/logo.svg"} />
        </div>
        <div style={{ margin: "2rem" }}>
          <h2>Coming Soon</h2>
          <p>Workin' hard or hardly working?</p>
          <p>Full site coming early 2021</p>
          <a href={"https://www.instagram.com/tomb.design/"}>
            Instagram - @tomb.design
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
