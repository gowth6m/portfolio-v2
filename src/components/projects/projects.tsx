/* eslint-disable @next/next/no-img-element */
import React from "react";
import { faArrowRight, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  return (
    <section id="projects" className="container flex flex-col min-h-[100vh]">
      <h1 className="text-xl font-semibold text-[var(--lightest-slate)] md:hidden py-2 md:py-0">
        Portfolio
      </h1>
      <div className="flex flex-col gap-y-8">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-row gap-x-4">
            <div className="flex-initial w-32">
              <div className="pr-2 mt-1">
                <img
                  src={project.image}
                  alt={"projectsImage"}
                  className="rounded-lg overflow-hidden w-full object-cover aspect-video"
                ></img>
              </div>
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
              <h2 className="text-[var(--lightest-slate)] text-lg font-bold group">
                <a className="text-[var(--lightest-slate)] group-hover:text-[var(--green-bright)] duration-150">
                  {project.title}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="inline h-[12px] hover:text-[var(--green-bright)] px-2 rotate-[-45deg] duration-150 group-hover:translate-x-[4px] group-hover:translate-y-[-4px]"
                    size="xs"
                  />
                </a>
              </h2>

              <p className="text-sm mb-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "University of Exeter App",
    description: "University wide app used by over 20,000 students",
    image: "./images/uoe_app.jpg",
    link: "",
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
    description: "E-commerce website for Great Comcat Engineering Ltd.",
    image: "./images/gce_web.png",
    link: "",
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
      "A small Flutter application to search and view details about Reddit posts as such 'r/topics'",
    image: "./images/reddit_app.png",
    link: "",
    github: "",
    stack: ["Flutter", "Providers", "BLoC", "Chopper", "AWS Services"],
  },
  {
    title: "Zombie Maze",
    description:
      "A simple 2D top-down zombie shooting game created in Python using the PyGame library",
    image: "./images/zombie_maze.gif",
    link: "",
    github: "",
    stack: ["Python", "PyGame", "Tilemap", "Tiled"],
  },
  {
    title: "Stugether",
    description:
      "Web application built with Django to connect students together",
    image: "./images/stugether_app.png",
    link: "",
    github: "",
    stack: ["Django", "Bootstrap", "PostgreSQL", "Heroku", "Vue.js"],
  },
  {
    title: "Gravity Simulator",
    description:
      "Simulation of gravity between particles written in JavaScript",
    image: "./images/gravitySim_app.png",
    link: "",
    github: "",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Lift Simulator",
    description: "A simulation of a lift system implemented in Java with GUI",
    image: "./images/liftSim.gif",
    link: "",
    github: "",
    stack: ["Java", "JavaFX", "Maven"],
  },
  {
    title: "Human-Object Interaction Research",
    description:
      "Research project to investigate human-object interaction of various models to improve mAP scores",
    image: "./images/hoi.png",
    link: "",
    github: "",
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
      "Implementation of Conway's Game of Life in Haskell using an imperative approach",
    image: "./images/gol.gif",
    link: "",
    github: "",
    stack: ["Haskell"],
  },
];
