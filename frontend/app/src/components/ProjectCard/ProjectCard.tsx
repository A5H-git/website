import React from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GitHubIcon } from "@/assets/icons";
import { GITHUB_URL } from "@/utils/constants";
import { ButtonIcon } from "../ButtonIcon";

type ProjectCardProps = {
  title: string;
  summary: string;
  slug: string;
  previewImage?: string;
  tags?: string[];
};

function ProjectCard({ title, summary, previewImage, tags, slug }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="flex justify-center items-center h-[400px]">
        {previewImage ? 
          (
            <img
              src={previewImage}
              className="h-full w-full object-contain p-2 rounded-t-lg pointer-events-none select-none"
              onError={() => console.error("Image failed:", previewImage)}
            />
          ) : (            
            <div>
              <span className="text-gray-500">Preview Unavailable</span>
            </div>
          )
        }
    </div>
  
      <CardHeader className="gap-y-2">
        <CardTitle>
          {title}
        </CardTitle>
        <CardDescription className="h-[12rem] overflow-hidden">
          {summary}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex flex-wrap gap-2 justify-end">
        {tags?.map((tag, tagIndex) =>(
          <Badge key={tagIndex} variant="primary" className="text-xs">
            {tag}
          </Badge>
          ))}
      </CardContent>
      
      <CardFooter className="justify-end">
        <div className="flex gap-2">
          <ButtonIcon link={GITHUB_URL} ariaLabel="GitHub Profile">
            <GitHubIcon />
          </ButtonIcon>
          <Link to={slug}>
            <Button>Learn More</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
