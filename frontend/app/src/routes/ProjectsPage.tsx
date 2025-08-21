import React from "react";
import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/ProjectCard/ProjectCard";

import { MEDIA_ROOT } from "../utils/constants";

function ProjectsPage() {
  const projects = useLoaderData();

  return (
    <>
      <h1>Project Page Lives Here!</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.summary}
              slug={project.slug}
              previewImage={`${MEDIA_ROOT}/${project.preview_image}`}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProjectsPage;
