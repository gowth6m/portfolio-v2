"use client";

import React, { useRef } from "react";
import About from "@/components/about/about";
import Experience from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";

const Home: React.FC = () => {
  const { refAbout, refExperience, refProjects, refContact } = useRefHandlers();

  return (
    <main className="md:h-screen w-full z-10">
      <div className="container mx-auto flex flex-col md:flex-row gap-2 md:min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-24 lg:px-24">
        {/* Left */}
        <div className="text-xl md:sticky md:self-start md:top-24 md:bottom-24 md:w-1/2 md:h-[calc(100vh-12rem)]">
          <Hero
            refAbout={refAbout}
            refExperience={refExperience}
            refProjects={refProjects}
            refContact={refContact}
          />
        </div>

        {/* Right */}
        <div className="md:w-1/2 md:ml-auto flex flex-col gap-y-20 md:gap-y-28">
          <div id="About" ref={refAbout}>
            <About />
          </div>
          <div id="Experience" ref={refExperience}>
            <Experience />
          </div>
          <div id="Projects" ref={refProjects}>
            <Projects />
          </div>
          <div ref={refContact}>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

const useRefHandlers = () => {
  const refAbout = useRef<HTMLDivElement>(null);
  const refExperience = useRef<HTMLDivElement>(null);
  const refProjects = useRef<HTMLDivElement>(null);
  const refContact = useRef<HTMLDivElement>(null);

  return { refAbout, refExperience, refProjects, refContact };
};

export default Home;
