import React from "react";
import { useLoaderData } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Project } from "@/types/project";


const ProjectDetailPage = () => {
  const project = useLoaderData<Project>();

  return (
    <div className="px-12">
      <header>
        <img 
          src={project.previewImage}
        />
        <h1>{project.title}</h1>
      </header>

      <body className="prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {project.body}
        </ReactMarkdown>
      </body>
    </div>
  );
};

export default ProjectDetailPage;
