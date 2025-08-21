import React from "react";

import { useLoaderData } from "react-router-dom";

import AboutMe from "./AboutMe";
import Contact from "./Contact";
import FeaturedWorks from "./FeaturedWorks";
import Hero from "./Hero";

import { Project } from "@/types/project";

const HomePage = () => {
  const featuredProjects = useLoaderData<Project[]>();

  return (
    <div className="landing-page">
      <Hero />
      <AboutMe />
      <FeaturedWorks projects={featuredProjects} />
      <Contact />
    </div>
  );
};

export default HomePage;
