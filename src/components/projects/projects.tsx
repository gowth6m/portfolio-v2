import React from "react";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  return (
    <div id="projects" className="container flex flex-col min-h-[100vh]">
      <div className="w-5/6 lg:w-4/6 mx-auto my-12 md:my-28">
        <div className="flex flex-col overflow-hidden text-sm md:text-base gap-y-4 w-full">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <h1 className="title text-left flex-1">
              <span className="text-[var(--green-bright)]">/ </span>my-creations
            </h1>
          </div>

          {/* Row 2 - experience */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div
                className="flex flex-col gap-4 rounded-lg bg-[var(--light-navy)]"
                key={index}
              >
                <div className="mx-4 mt-4 flex flex-row justify-between">
                  <FontAwesomeIcon icon={faFolder} className="h-[35px]" />
                  <div className="flex flex-row gap-4">
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="h-[20px]"
                    />
                    <FontAwesomeIcon icon={faGithub} className="h-[20px]" />
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-4">
                  <h1 className="text-[var(--white)] text-xl font-bold">
                    {project.title}
                  </h1>
                  <p className="text-[var(--slate)] text-sm tracking-wider">
                    {project.description}
                  </p>
                  <div className="flex flex-row flex-wrap gap-2 mt-2">
                    {project.stack.map((tech, index) => (
                      <div
                        className="text-[var(--slate)] text-sm bg-[var(--lightest-navy)] px-2 py-1 rounded-md"
                        key={index}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "University of Exeter App",
    description: "University wide app used by over 20,000 students",
    image: "",
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
    image: "",
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
    image: "",
    link: "",
    github: "",
    stack: ["Flutter", "Providers", "BLoC", "Chopper", "AWS Services"],
  },
  {
    title: "Zombie Maze",
    description:
      "A simple 2D top-down zombie shooting game created in Python using the PyGame library",
    image: "",
    link: "",
    github: "",
    stack: ["Python", "PyGame", "Tilemap", "Tiled"],
  },
  {
    title: "Stugether",
    description:
      "Web application built with Django to connect students together",
    image: "",
    link: "",
    github: "",
    stack: ["Django", "Bootstrap", "PostgreSQL", "Heroku", "Vue.js"],
  },
  {
    title: "Gravity Simulator",
    description:
      "Simulation of gravity between particles written in JavaScript",
    image: "",
    link: "",
    github: "",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Lift Simulator",
    description: "A simulation of a lift system implemented in Java with GUI",
    image: "",
    link: "",
    github: "",
    stack: ["Java", "JavaFX", "Maven"],
  },
  {
    title: "Human-Object Interaction Research",
    description:
      "Research project to investigate human-object interaction of various models to improve mAP scores",
    image: "",
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
    image: "",
    link: "",
    github: "",
    stack: ["Haskell"],
  },
];
