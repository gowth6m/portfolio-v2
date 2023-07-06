"use client";

import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.section
      id="about"
      className="container flex flex-col min-h-fit"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-xl font-semibold text-[var(--lightest-slate)] md:hidden my-2 md:my-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        About Me
      </motion.h1>
      <motion.p variants={containerVariants} initial="hidden" animate="visible">
        It all started when I first tried to edit a website by clicking on
        inspect element. Later led to me building my first website using HTML,
        CSS and JavaScript. I slowly fell into a rabbit hole of learning new web
        technologies and going into the depths of software engineering.
        <br />
        <br />
        Fast forward today, I&#39;m a software engineer based in{" "}
        <a
          href="https://www.google.com/maps/place/London"
          target="_blank"
          className="text-[var(--green-bright)] hover:text-[var(--lightest-slate)"
        >
          London, UK
        </a>
        . My current role involves leading frontend development, building robust
        and innovative software solutions for{" "}
        <a
          href="https://www.pollentechnologies.com/"
          target="_blank"
          className="text-[var(--green-bright)] hover:text-[var(--lightest-slate)"
        >
          Pollen Technologies
        </a>{" "}
        - from intuitive customer landing pages, sophisticated internal
        dashboards and other tools to help the business grow.
        <br />
        <br />
        When I&#39;m not at the computer, I&#39;m usually training at the gym,
        exploring new places with friends and indulging my culinary curiosity by
        going on a quest for food.
      </motion.p>
    </motion.section>
  );
}

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring", // adds a bouncing effect
      stiffness: 100, // controls the stiffness of the spring, increase for more energy
      damping: 10, // controls the friction, increase for less bounce
      duration: 2,
      delay: 0,
    },
  },
};
