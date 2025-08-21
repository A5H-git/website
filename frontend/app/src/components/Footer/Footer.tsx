import React from "react";

import { EmailIcon, GitHubIcon, LinkedInIcon, LocationPinIcon } from "@/assets/icons";
import { GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";
import { Link } from "react-router-dom";
import { ExternalAnchor } from "../ExternalAnchor";

function Footer() {
  return (
    <footer className="px-[3em] py-8 bg-gray-100">
      {/* CC */}
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-y-1">
          <p>© Alvin Hendricks, EIT</p>
          <div className="flex items-center gap-2">
            <LocationPinIcon className="w-4 h-4 text-red-500"/>
            <span>Vancouver, BC</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/life">Life</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-2">Contact Me</h4>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center gap-3">
                <LinkedInIcon className="w-4 h-4" href=""/>
                <ExternalAnchor link={LINKEDIN_URL} ariaLabel="LinkedIn Profile">
                  <span className="hover:underline">LinkedIn</span>
                </ExternalAnchor>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <GitHubIcon className="w-4 h-4" href=""/>
                <ExternalAnchor link={GITHUB_URL} ariaLabel="GitHub Profile">
                  <span className="hover:underline">GitHub</span>
                </ExternalAnchor>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-3">
                <EmailIcon className="w-4 h-4"/>
                <ExternalAnchor link={"/contact-me"} ariaLabel="Email">
                  <span className="hover:underline">Email</span>
                </ExternalAnchor>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
