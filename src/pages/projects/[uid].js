import React from "react";
import { createClient } from "../../prismic";
import { PrismicRichText } from "@prismicio/react";
import Link from "../../components/Link";
import Image from "next/image";
import { Layout } from "../../components/Layout";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
const ProjectPage = ({ project, nextProject, previousProject }) => {
  return (
    <Layout meta={{ title: project.data.title }}>
      <div className="w-full space-y-12">
        <div className="w-full flex flex-col space-y-4 md:space-y-12">
          <h1 className="text-2xl md:text-[clamp(16px,3vw,52px)]">
            {project.data.title}
          </h1>
          <div className="text-lg md:text-[clamp(14px,2.25vw,43px)] leading-tight">
            <PrismicRichText field={project.data.description} />
          </div>
        </div>
        <div>
          {project.data.slices.map(({ slice_type, items, id }) => {
            switch (slice_type) {
              case "gallery_grid": {
                return (
                  <div className="md:columns-2 md:space-y-4 gap-8" key={id}>
                    {items.map((i) => (
                      <div key={i.id} className="break-inside-avoid">
                        <Image
                          src={i.image.url}
                          key={i.image.url}
                          width={i.image.dimensions.width}
                          height={i.image.dimensions.height}
                          className="w-full"
                        />
                        <div className="text-lg my-2">
                          <PrismicRichText field={i.description} />
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }
              default:
                return null;
            }
          })}
        </div>
        <footer className="flex justify-between text-lg md:text-2xl py-12 md:py-24">
          <div>
            {previousProject && (
              <Link href={`/projects/${previousProject.uid}`}>
                <div className="flex justify-center items-center">
                  <BsChevronCompactLeft />
                  <span>{previousProject.data.title}</span>
                </div>
              </Link>
            )}
          </div>
          <div>
            {nextProject && (
              <Link href={`/projects/${nextProject.uid}`}>
                <div className="flex justify-center items-center">
                  <span>{nextProject.data.title}</span>
                  <BsChevronCompactRight />
                </div>
              </Link>
            )}
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const client = createClient();
  const [projects] = await client.getAllByType("projects_page");
  return {
    paths: projects.data.slices
      .map(({ items }) =>
        items.map(({ project }) => ({
          params: {
            uid: project.uid,
          },
        }))
      )
      .flat(),
    fallback: "blocking",
  };
}
export async function getStaticProps({ previewData, params }) {
  const client = createClient({ previewData });
  const [projects] = await client.getAllByType("projects_page", {
    fetchLinks: "project.title",
  });
  const project = await client.getByUID("project", params.uid);
  const validProjectList = projects.data.slices
    .map(({ items }) => items.map(({ project }) => project))
    .flat();
  const currentProjectIndex = validProjectList.findIndex(
    (i) => i.uid === project.uid
  );
  const nextProject = validProjectList[currentProjectIndex + 1] || null;
  const previousProject = validProjectList[currentProjectIndex - 1] || null;
  return {
    props: {
      project,
      nextProject,
      previousProject,
    },
  };
}

export default ProjectPage;
