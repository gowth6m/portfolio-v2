"use client";

import React, { useRef } from "react";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";
import Projects from "@/components/projects/projects";
import Experience from "@/components/experience/experience";

const SectionContainer = (props: {
    id: string;
    children: React.ReactNode;
    reference: React.RefObject<HTMLDivElement | null>;
}) => {
    return (
        <div
            id={props.id}
            ref={props.reference}
            className={"anchor scroll-mt-24"}
        >
            {props.children}
        </div>
    );
};

const Home: React.FC = () => {
    const refAbout = useRef<HTMLDivElement | null>(null);
    const refExperience = useRef<HTMLDivElement | null>(null);
    const refProjects = useRef<HTMLDivElement | null>(null);
    const refContact = useRef<HTMLDivElement | null>(null);

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
                    <SectionContainer id="about" reference={refAbout}>
                        <About />
                    </SectionContainer>
                    <SectionContainer id="experience" reference={refExperience}>
                        <Experience />
                    </SectionContainer>
                    <SectionContainer id="projects" reference={refProjects}>
                        <Projects />
                    </SectionContainer>
                    <SectionContainer id={"footer"} reference={refContact}>
                        <Footer />
                    </SectionContainer>
                </div>
            </div>
        </main>
    );
};

export default Home;
