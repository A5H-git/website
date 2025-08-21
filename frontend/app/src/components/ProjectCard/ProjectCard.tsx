import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";


type ProjectCardProps = {
  title: string;
  summary: string;
  slug: string;
  previewImage?: string;
  tags?: string[];
};

function ProjectCard({ title, summary, previewImage, tags, slug }: ProjectCardProps) {
  return (
    <Card className="space-y-3">
      <div className="flex justify-center items-center h-[400px]">
        {previewImage ? 
          (
            <img
              src={previewImage}
              className="h-full w-full object-cover rounded-t-lg pointer-events-none select-none"
              onError={() => console.error("Image failed:", previewImage)}
            />
          ) : (            
            <div>
              <span className="text-gray-500">Preview Unavailable</span>
            </div>
          )
        }
      </div>

      <div className="py-[1rem] px-[1rem] space-y-3 h-full">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="h-[12rem] overflow-hidden">
          {summary}
        </CardDescription>

        <div className="flex justify-end">
          <Link to={slug}>
            <Button>Learn More</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
