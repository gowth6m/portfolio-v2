"use client";

import { motion } from "framer-motion";
import React from "react";

export default function About() {
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

  return (
    <motion.section
      id="aboutme"
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
        Back in 2018, I decided to create a 2D top-down zombie game for the web
        and tumbled head first into the rabbit hole of coding and web
        development.
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
        . My current role involves building robust and innovative software
        solutions for{" "}
        <a
          href="https://hived.space"
          target="_blank"
          className="text-[var(--green-bright)] hover:text-[var(--lightest-slate)"
        >
          HIVED
        </a>{" "}
        , from intuitive tracking pages to sophisticated internal dashboards.
        <br />
        <br />
        When I&#39;m not at the computer, I&#39;m usually training at the gym,
        hiking with friends and indulging my culinary curiosity by exploring new
        and exciting eateries.
      </motion.p>
    </motion.section>
  );
}
