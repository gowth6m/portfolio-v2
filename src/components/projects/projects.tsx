"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { ProjectModel, projects } from "./projects.data";
import Link from "next/link";

export default function Projects() {
  const smallProjectsGroup = projects.filter(
    (project: ProjectModel) => project.display === true
  );

  return (
    <motion.section
      id="projects"
      className="container flex flex-col min-h-[100vh]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-xl font-semibold text-[var(--lightest-slate)] md:hidden py-2 md:py-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Portfolio
      </motion.h1>
      <motion.div
        className="flex flex-col gap-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {smallProjectsGroup.map((project: ProjectModel, index: number) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row gap-x-4"
            custom={index}
            variants={itemVariants}
          >
            <div className="flex-initial w-4/6 md:w-32 order-2 md:order-1 my-4 md:my-0">
              <div className="pr-2 mt-1">
                <img
                  src={project.image}
                  alt={"projectsImage"}
                  className="rounded-lg overflow-hidden w-full object-cover aspect-video"
                ></img>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 flex-1 order-1 md:order-2">
              <h2 className="text-[var(--lightest-slate)] text-lg font-bold group">
                <div className="text-[var(--lightest-slate)] group-hover:text-[var(--green-bright)] duration-150">
                  <a
                    href={project.link ? project.link : project.github}
                    target="_blank"
                  >
                    {project.title}
                  </a>
                  {project.link !== undefined && (
                    <a
                      href={project.link}
                      target="_blank"
                      aria-label="open working live project"
                    >
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="inline h-[16px] hover:text-[var(--green-bright)] pl-4 pr-2 duration-150"
                        size="xs"
                      ></FontAwesomeIcon>
                    </a>
                  )}
                  {project.github !== undefined && (
                    <a
                      href={project.github}
                      target="_blank"
                      aria-label="open project on GitHub"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="inline h-[16px] hover:text-[var(--green-bright)] px-2 duration-150"
                        size="xs"
                      ></FontAwesomeIcon>
                    </a>
                  )}
                </div>
              </h2>

              <p className="text-sm mb-2">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((technology, index: number) => (
                  <span
                    key={index}
                    className="text-[var(--green-bright)] text-xs bg-[var(--green-tint)] px-2 py-1 rounded-md"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <Link
        className="mt-12 group cursor-pointer text-bold text-[var(--lightest-slate)] hover:underline underline-offset-4 duration-150 text-right"
        href={"projects"}
      >
        View All Projects{" "}
        <FontAwesomeIcon
          icon={faArrowRight}
          className="inline h-[16px] hover:text-[var(--green-bright)] px-1 duration-150 group-hover:translate-x-2"
        />
      </Link>
    </motion.section>
  );
}

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 2,
      delay: 0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (custom: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
};
