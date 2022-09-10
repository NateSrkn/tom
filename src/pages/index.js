import React from "react";
import { createClient } from "../prismic";
import { PrismicRichText } from "@prismicio/react";
import Socials from "../components/Socials";
import { Layout } from "../components/Layout";

export default function Home({ page }) {
  return (
    <Layout meta={{ title: "Home", description: page.data.description }}>
      <div className="flex flex-col justify-center relative space-y-4 md:space-y-12">
        <h3 className="text-2xl md:text-[3vw]">{page.data.headline}</h3>
        <div className="text-lg md:text-[2.25vw] leading-tight space-y-8">
          <PrismicRichText field={page.data.description} />
          <Socials />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByType("about");
  return {
    props: { page: page.results[0] },
  };
}
