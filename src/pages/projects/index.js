import React from "react";
import { Layout } from "../../components/Layout";
import Link from "../../components/Link";
import { createClient } from "../../prismic";

const Projects = ({ projects }) => {
  return (
    <Layout meta={{ title: "Projects" }}>
      <ul className="w-full flex flex-col justify-center items-center text-4xl space-y-4">
        {projects.data.slices.map(({ items }) =>
          items.map(({ project }) => (
            <li key={project.id}>
              <Link href={`projects/${project.uid}`}>{project.data.title}</Link>
            </li>
          ))
        )}
      </ul>
    </Layout>
  );
};
export default Projects;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const [projects] = await client.getAllByType("projects_page", {
    fetchLinks: "project.title",
  });
  return {
    props: { projects },
  };
}
