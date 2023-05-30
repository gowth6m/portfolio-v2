"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { ExperienceModel, experience } from "./experience.data";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-xl font-semibold text-[var(--lightest-slate)] md:hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        Experience
      </motion.h1>
      <motion.div
        className="flex flex-col gap-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experience.map((experience: ExperienceModel, index: number) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row gap-x-4 justify-start align-top item-hover"
            custom={index}
            variants={itemVariants}
          >
            <div className="text-[var(--slate)] text-xs uppercase flex-initial w-32 leading-6">
              <p className="my-1">{experience.dates}</p>
            </div>
            <div className="flex flex-col border-slate flex-1 gap-y-2">
              <h2 className="text-[var(--lightest-slate)] text-lg font-bold group">
                <a
                  className="text-[var(--lightest-slate)] group-hover:text-[var(--green-bright)] duration-150"
                  href={experience.link}
                  target="_blank"
                >
                  {experience.role} · {experience.company}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="inline h-[12px] hover:text-[var(--green-bright)] px-2 rotate-[-45deg] duration-150 group-hover:translate-x-[4px] group-hover:translate-y-[-4px]"
                    size="xs"
                  />
                </a>
              </h2>

              <p className="text-sm mb-0">{experience.description}</p>

              {experience.projects && (
                <div className="flex flex-col gap-y-2 mb-2">
                  {experience.projects.map((project) => (
                    <div key={project.title} className="group">
                      <a
                        className="text-[var(--lightest-slate)] text-sm group-hover:text-[var(--green-bright)] duration-150"
                        href={project.link}
                        target="_blank"
                      >
                        <FontAwesomeIcon
                          icon={faLink}
                          className="inline h-[12px] px-2 group-hover:text-[var(--green-bright)] duration-150"
                          size="xs"
                        />
                        {project.title}
                      </a>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
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

      {/* <a
        className="mt-12 group cursor-pointer text-bold text-[var(--lightest-slate)] hover:underline underline-offset-4 duration-150 text-right"
        href={"./"}
      >
        View Full Résumé{" "}
        <FontAwesomeIcon
          icon={faArrowRight}
          className="inline h-[16px] hover:text-[var(--green-bright)] px-1 duration-150 group-hover:translate-x-2"
        />
      </a> */}
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
      delay: 0.1,
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
