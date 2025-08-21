import React from "react";


import { Link, useLoaderData, useSearchParams } from "react-router-dom";

import { Project } from "@/types/project";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import { MEDIA_ROOT } from "../utils/constants";

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const PAGE_SIZE = 4;

function clampPage(page: number, maxPage: number) {
  return Math.min(Math.max(page, 1), maxPage)
}


const ProjectsPage = () => {
  const projects = useLoaderData<Project[]>();
  
  // Used to extract search params from the link
  // example: page=2 in ./projects?page=2
  const [searchParams, setSearchParams] = useSearchParams();


  const nProjects = projects.length;
  const nPages = Math.max(1, Math.ceil(nProjects / PAGE_SIZE))

  const pageNumber = parseInt(searchParams.get("page") ?? "1", 10);
  const currPage = clampPage(pageNumber, nPages);

  // TODO: Add sorted by most recent
  // Selecting projects that appear on this page
  const start = PAGE_SIZE * (currPage - 1);
  const end = start + PAGE_SIZE;
  const pageProjects = projects.slice(start, end);

  const changePage = (page: number) => {
    const nextPage = clampPage(page, nPages);
    const params = new URLSearchParams(searchParams);
    params.set("page", String(nextPage));
    setSearchParams(params);
  }


  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-12">
        <h1 className="text-2xl font-bold text-center">Projects</h1>
      </header>

      {/* Grid */}
      <main className="space-y-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pageProjects.map((project : Project) => (
            <li key={project.id}>
              <ProjectCard
                title={project.title}
                summary={project.summary}
                slug={project.slug}
                previewImage={
                  project.previewImage
                    ? `${MEDIA_ROOT}${project.previewImage}`
                    : ""
                }
              />
            </li>
          ))}
        </ul>
        
        {/* Pagination Part */}
        <nav aria-label="Pagination">
          <Pagination>
            <PaginationContent>
            {
              Array.from({length : nPages}, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <Link to={`?page=${page}`}>
                    <PaginationLink isActive={page === currPage}>
                      {page}
                    </PaginationLink>
                  </Link>
                </PaginationItem>
              ))
            }
            </PaginationContent>
          </Pagination>
        </nav>
      </main>
    </div>
  );
}

export default ProjectsPage;
