import React from "react";

import { Link } from "react-router-dom";
import { GitHubIcon, LinkedInIcon } from "../../assets/icons";
import { GITHUB_URL, LINKEDIN_URL } from "../../utils/constants";
import { ButtonIcon } from "../ButtonIcon";

function Navbar() {
  return (
    <div className="flex gap-4 justify-between items-center px-4 py-3 h-16">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-6">
        <img src="/favicon.png" alt="logo" className="h-16 w-24 object-contain"  />
        <span className="font-semibold">Alvin Hendricks</span>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-4">
        <Link to="/resume" className="hover:text-accent">
          Resume
        </Link>
        <Link to="/projects" className="hover:text-accent">
          Projects
        </Link>
        <Link to="/life" className="hover:text-accent">
          Life
        </Link>
      </nav>

      {/* Socials */}
      <div className="flex flex-1 items-center justify-end gap-2">
        <ButtonIcon link={GITHUB_URL} ariaLabel="GitHub Profile">
          <GitHubIcon />
        </ButtonIcon>
        <ButtonIcon link={LINKEDIN_URL} ariaLabel="LinkedIn Profile">
          <LinkedInIcon />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default Navbar;
