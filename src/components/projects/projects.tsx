import React from "react";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Projects() {
  return (
    <section id="projects" className="container flex flex-col min-h-[100vh]">
     
    </section>
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
