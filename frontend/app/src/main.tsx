import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, LoaderFunctionArgs, RouterProvider } from "react-router-dom";

import HomePage from "./routes/HomePage/HomePage";
import LifePage from "./routes/LifePage";
import ProjectDetailPage from "./routes/ProjectDetailPage";
import ProjectsPage from "./routes/ProjectsPage";
import Root from "./routes/Root";

import React from "react";
import { getProject, getProjects } from "./api/projects";

// The page where all other elements will render under
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          return getProjects({ featured: true, nFeatured: 3 });
        },
      },
      {
        path: "projects/",
        element: <ProjectsPage />,
        loader: async () => {
          return getProjects({});
        },
      },
      {
        // Render ProjectDetail when URL matches
        path: "projects/:projectSlug",
        element: <ProjectDetailPage />,
        loader: async ({ params }: LoaderFunctionArgs) => {
          return getProject(params.projectSlug!);
        },
      },
      {
        path: "life/",
        element: <LifePage />,
      },
    ],
  },
]);

const container = document.getElementById("root")!;

createRoot(container).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

