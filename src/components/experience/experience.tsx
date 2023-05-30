"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
    </motion.section>
  );
}

type ExperienceModel = {
  role: string;
  company: string;
  link: string;
  dates: string;
  description: string;
  descriptions: string[];
  technologies: string[];
  projects?: {
    title: string;
    link: string;
  }[];
};

const experience: ExperienceModel[] = [
  {
    role: "Frontend Developer",
    company: "HIVED",
    link: "https://hived.space",
    dates: "Feb 2023 - Present",
    description:
      "Lead frontend development and create frontend solutions for a variety of microservices used by HIVED. Create applications used by around 20,000 customers daily and in-house apps used by our drivers and staff.",
    descriptions: [
      "Lead frontend development at HIVED",
      "Create and implement solutions for a variety of microservices used by HIVED",
      "Create applications used by around 20,000 customers daily",
      "Create in-house apps used by our drivers and staff",
    ],
    technologies: [
      "Flutter",
      "React",
      "Node.js",
      "TypeScript",
      "Golang",
      "AWS Services",
    ],
    projects: [
      {
        title: "Tracking Page",
        link: "https://track.hived.space",
      },
    ],
  },
  {
    role: "Software Engineer",
    company: "University of Exeter",
    link: "https://www.exeter.ac.uk/",
    dates: "May 2022 - Feb 2023",
    description:
      "Work on the University of Exeter app that is used by around 22,000 students, create chatbot API microservice used in various applications, create virtual tour app to help students navigate campus and work on online programes website.",
    descriptions: [
      "Work on the University of Exeter app that is used by around 22,000 students",
      "Create chatbot API microservice used in various applications",
      "Create virtual tour app and mini games for freshers events",
    ],
    technologies: [
      "React",
      "Flutter",
      "Node.js",
      "TypeScript",
      "AWS Services",
      "DynamoDB",
      "Cognito",
      "CDK",
    ],
    projects: [
      {
        title: "Student App",
        link: "https:/m.exeter.ac.uk",
      },
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Swmstudios",
    link: "https://swmstudios.com/",
    dates: "Mar 2021 - Nov 2021",
    description:
      "Design and develop website for Swmstudios and clients, develop and maintain internal tools. New website increased traffic by 200%. Developed internal tools to help manage clients and projects.",
    descriptions: [
      "Design and develop websites for customers",
      "Develop and maintain internal tools",
    ],
    technologies: ["React", "Next", "Framer motion", "TypeScript"],
  },
  {
    role: "Frontend Developer",
    company: "Nocxa",
    link: "https://nocxa.com/",
    dates: "Sep 2019 - Sep 2021",
    description:
      "Lead frontend development, develop e-commerce websites for clients such as Great Comcat Engineering Ltd, Di-tea and Sai Kung Cafe. Increased sales by 300% and increased traffic by 200% on average. Also created and setup Google business profiles for clients.",
    descriptions: [
      "Design and develop websites and web apps for clients",
      "Develop apps for clients",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Flutter",
      "Next",
      "Express",
      "MongoDB",
    ],
    projects: [
      {
        title: "GCE",
        link: "https://greatcomcatengineering.com",
      },
    ],
  },
];

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
