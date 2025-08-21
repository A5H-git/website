import { Project } from "@/types/project";
import { apiFetch } from "./client";
import buildQuery from "./util";

/**
 * Fetch projects from the backend API.
 * @param args - Query parameter.
 * @returns List of projects given the query.
 */
export async function getProjects(args: {}): Promise<Project[]> {
  const query = buildQuery(args);
  const url = query ? `/projects/?${query}` : "/projects/";
  return apiFetch<Project[]>(url);
}


/**
 * Fetch a specific project from the backend API.
 * @param slug - String with the specific project
 * @returns The project object.
 */
export async function getProject(slug: string): Promise<Project> {
  return apiFetch<Project>(`/projects/${slug}/`);
}
