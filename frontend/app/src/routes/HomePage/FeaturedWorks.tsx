import React from "react";

import { Project } from "@/types/project";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { MEDIA_ROOT } from "../../utils/constants";

export type FeaturedWorksProps = {
  projects: Project[];
};

function FeaturedWorks({ projects }: FeaturedWorksProps) {
  
  return (
    <section className="featured-works flex flex-col items-center justify-center">
      <h2 className="mt-6">Featured Works</h2>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 px-4">
        {projects
          .slice()
          .reverse()
          .map((project: Project) => {
            return (
              <div key={project.id} className="w-full h-full max-w-[32rem]">
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
