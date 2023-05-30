"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function Projects() {
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
        {projects.map((project, index) => (
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
                  {project.link && (
                    <a href={project.link} target="_blank" aria-label="open working live project">
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="inline h-[16px] hover:text-[var(--green-bright)] pl-4 pr-2 duration-150"
                        size="xs"
                      ></FontAwesomeIcon>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" aria-label="open project on GitHub">
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
                {project.stack.map((technology) => (
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

const projects = [
  {
    title: "University of Exeter App",
    description:
      "University wide app used by over 20,000 students. Built with Flutter frontend - consuming a Node.js backend microservices architecture. Has features such as timetable, maps, events, news, and more.",
    image: "./images/uoe.webp",
    link: "https://m.exeter.ac.uk",
    github: "",
    stack: [
      "Flutter",
      "Providers",
      "BLoC",
      "Chopper",
      "AWS Services",
      "Node.js",
      "TypeScript",
      "MongoDB",
    ],
  },
  {
    title: "Great Comcat Engineering",
    description:
      "E-commerce website for Great Comcat Engineering Ltd. Built with Next.js, Tailwind, Framer Motion and MongoDB. Has features such as Stripe and PayPal payments, and more.",
    image: "./images/gce.webp",
    link: "https://www.greatcomcatengineering.com/",
    github: "",
    stack: [
      "Next.js",
      "Tailwind",
      "Stripe",
      "Framer Motion",
      "PayPal",
      "MongoDB",
    ],
  },
  {
    title: "Reddit Viewer",
    description:
      "A small Flutter application to search and view details about Reddit posts as such 'r/topics'. Built with Flutter and consuming the Reddit API. Uses Providers and BLoC for state management and Chopper for API calls.",
    image: "./images/reddit.webp",
    link: "https://gowth6m.github.io/reddit-viewer/",
    github: "https://github.com/gowth6m/reddit-viewer",
    stack: ["Flutter", "Providers", "BLoC", "Chopper", "AWS Services"],
  },
  {
    title: "Zombie Maze",
    description:
      "A simple 2D top-down zombie shooting game created in Python using the PyGame library. The game uses a tilemap created in Tiled. The game has a main menu, game over screen, and a high score system.",
    image: "./images/zombie_maze.webp",
    link: "",
    github: "https://github.com/gowth6m/zombie-maze",
    stack: ["Python", "PyGame", "Tilemap", "Tiled"],
  },
  {
    title: "Stugether",
    description:
      "Web application built with Django to connect students together. Has features such as a chat system, events, and more. Deployed on Heroku.",
    image: "./images/stugether.webp",
    link: "https://stugether.herokuapp.com/",
    github: "https://github.com/gowth6m/stugether",
    stack: ["Django", "Bootstrap", "PostgreSQL", "Heroku", "Vue.js"],
  },
  {
    title: "Gravity Simulator",
    description:
      "Simulation of gravity between particles written in JavaScript. Uses HTML Canvas to render the particles. Has features such as changing the number of particles, and more.",
    image: "./images/gravitySim.webp",
    link: "https://gowth6m.github.io/gravity-simulator/",
    github: "https://github.com/gowth6m/gravity-simulator",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Lift Simulator",
    description:
      "A simulation of a lift system implemented in Java with GUI. Uses JavaFX for the GUI. Has features such as changing the number of floors, and more. Implemented using the MVC design pattern.",
    image: "./images/liftSim.webp",
    link: "",
    github: "https://github.com/gowth6m/lift-system",
    stack: ["Java", "JavaFX", "Maven"],
  },
  {
    title: "Human-Object Interaction Research",
    description:
      "Research project to investigate human-object interaction of various models to improve mAP scores. Built with Python and PyTorch. Uses YOLOv3, CNN, R-CNN, HICO, and COCO. Uses Jupyter Notebook for data analysis.",
    image: "./images/hoi.webp",
    link: "https://drive.google.com/file/d/1Al9_xuqENbQTCBpftxPDgjBnDaKR9nei/view?usp=sharing",
    github: "https://github.com/gowth6m/human-object-interaction",
    stack: [
      "Python",
      "PyTorch",
      "Jupyter",
      "YOLOv3",
      "CNN",
      "R-CNN",
      "HICO",
      "COCO",
    ],
  },
  {
    title: "Game of Life in Haskell",
    description:
      "Implementation of Conway's Game of Life in Haskell using an imperative approach. UI is created by printing to the terminal. Uses the HSpec testing framework.",
    image: "./images/gol.webp",
    link: "",
    github: "https://github.com/gowth6m/game-of-life-haskell",
    stack: ["Haskell"],
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
