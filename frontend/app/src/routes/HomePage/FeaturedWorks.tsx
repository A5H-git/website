import React from "react";

import { Project } from "@/types/project";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { MEDIA_ROOT } from "../../utils/constants";

export type FeaturedWorksProps = {
  projects: Project[];
};

function FeaturedWorks({ projects }: FeaturedWorksProps) {
  
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
      <div className="flex justify-center pb-12">
        <h1 className="sm:text-6xl font-bold block">
          Featured Works
        </h1>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 px-4 items-stretch">
        {projects
          .slice()
          .reverse()
          .map((project: Project) => {
            return (
              <div key={project.id} className="h-full">
                <ProjectCard
                  title={project.title}
                  summary={project.summary}   
                  slug={`/projects/${project.slug}`}  
                  previewImage={
                    project.previewImage
                      ? `${MEDIA_ROOT}${project.previewImage}`
                      : ""
                  }
                  tags={project.tags || []} 
                />
              </div>
            )}
          )
        }
      </div>
    </section>
  );
}

export default FeaturedWorks;
