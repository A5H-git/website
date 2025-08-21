import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/HomePage/HomePage";
import LifePage from "./routes/LifePage";
import ProjectDetailPage from "./routes/ProjectDetailPage";
import ProjectsPage from "./routes/ProjectsPage";
import Root from "./routes/Root";

import React from "react";
import { getProjects } from "./api/projects";
import { API_ROOT } from "./utils/constants";

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
          const response = await fetch(`${API_ROOT}/projects/`);
          return response.json();
        },
      },
      {
        // Render ProjectDetail when URL matches
        path: "projects/:projectSlug",
        element: <ProjectDetailPage />,
        loader: async ({ request, params }) => {
          const response = await fetch(
            `${API_ROOT}/projects/${params.projectSlug}/`,
            { signal: request.signal }
          );
          return response.json();
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

