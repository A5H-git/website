import React from "react";

import { GitHubIcon, LinkedInIcon } from "@/assets/icons";
import { ButtonIcon } from "@/components/ButtonIcon";
import { Button } from "@/components/ui/button";
import { GITHUB_URL, LINKEDIN_URL } from "@/utils/constants";


const Hero = () => {
  return (
    <section className="bg-primary text-secondary min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* Hidden Top: Photo */}
          <div className="lg:hidden lg:col-span-5">
            <div className="mx-auto w-64 sm:w-75 lg:w-80">
              <p>Temporary Photo Spot</p>
            </div>
          </div>

          {/* About */}
          <div className="lg:col-span-7 max-w-2xl">
            <h1 className="text-5xl sm:text-6xl leading-tight tracking-tight">
              Hey, it&apos;s <span className="font-extrabold block">Alvin Hendricks</span>
            </h1>

            <p className="mt-6 text-2xl font-medium opacity-90">
              Software Tools Engineer & ML-curious
            </p>

            <p className="mt-4 text-lg/relaxed opacity-80 text-balance">
              I build practical software, automate workflows, and craft tools that
              help Science & Engineering teams move faster.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/projects">
                <Button
                  className="py-6 rounded-xl bg-card text-foreground hover:bg-popover/80"
                >
                  My Projects
                </Button>
              </a>
              <a href="#contact">
                <Button 
                  className="py-6 rounded-xl bg-card text-foreground hover:bg-popover/80"
                >
                  Get In Touch
                </Button>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <ButtonIcon link={GITHUB_URL} ariaLabel="GitHub Profile" variant="ghost">
                <GitHubIcon />
              </ButtonIcon>
              <ButtonIcon link={LINKEDIN_URL} ariaLabel="LinkedIn Profile" variant="ghost">
                <LinkedInIcon />
              </ButtonIcon>
            </div>
          </div>

          {/* RIGHT: Photo */}
          <div className="hidden lg:inline lg:col-span-5">
            <div className="mx-auto w-64 sm:w-75 lg:w-80">
              <p>Temporary Photo Spot</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Hero;
