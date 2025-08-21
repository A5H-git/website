import React from "react";

import ReactMarkdown from "react-markdown";
import { useLoaderData } from "react-router-dom";

const ProjectDetailPage = () => {
  const project = useLoaderData();

  return (
    <>
      <h1>{project.title}</h1>
      <image src={project.preview_image}></image>
      <ReactMarkdown>{project.body}</ReactMarkdown>
    </>
  );
};

export default ProjectDetailPage;
