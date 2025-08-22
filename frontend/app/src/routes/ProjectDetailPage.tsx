import React from "react";
import { useLoaderData } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Project } from "@/types/project";
import { MEDIA_ROOT } from "@/utils/constants";


const ProjectDetailPage = () => {
  const project = useLoaderData<Project>();
  const previewImage = (
    project.previewImage
      ? `${MEDIA_ROOT}${project.previewImage}`
      : ""
  );

  return (
    <div className="flex flex-col px-12 gap-y-4">
      <header className="flex flex-col items-center text-center gap-y-12">
        <img src={previewImage}/>
        <h1 className="text-4xl font-black">{project.title}</h1>
        <hr className="w-1/2"/>
      </header>
      <div className="prose dark:prose-invert max-w-none pt-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {project.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
