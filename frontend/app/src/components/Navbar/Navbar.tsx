import React from "react";

import { Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon } from "../../assets/icons";
import { GITHUB_URL, LINKEDIN_URL } from "../../utils/constants";
import { ButtonIcon } from "../ButtonIcon";

function Navbar() {
  return (
    <div className="flex gap-6 justify-between items-center my-4 px-2 py-4 h-16">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-6">
        <img 
          src="/favicon.png" 
          alt="logo" 
          className="h-32 w-32 object-contain"  
        />
        <span className="font-semibold hidden sm:inline">
          Alvin Hendricks
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex flex-3  justify-end items-center">
        <div className="flex gap-6">
          <Link to="/projects" className="hover:text-accent">
            Projects
          </Link>
          <Link to="/resume" className="hover:text-accent">
            Resume
          </Link>
          <Link to="/life" className="hover:text-accent">
            Life
          </Link>
        </div>

        <div className="flex px-3">
          <ButtonIcon link={GITHUB_URL} ariaLabel="GitHub Profile">
            <GitHubIcon />
          </ButtonIcon>
          <ButtonIcon link={LINKEDIN_URL} ariaLabel="LinkedIn Profile">
            <LinkedInIcon />
          </ButtonIcon>
        </div>
      </nav>

      {/* Socials */}
    </div>
  );
}

export default Navbar;
