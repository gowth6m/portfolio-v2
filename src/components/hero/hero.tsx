"use client";

import React from "react";
import TypingText from "./typingText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1.5,
        delay: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (custom: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  return (
    <motion.section
      id="home"
      className="flex flex-col md:justify-between mb-16 md:mb-0 h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:gap-y-24">
        {/* Name */}
        <div className="flex flex-col gap-y-2">
          <h1 className="text-4xl font-semibold text-[var(--lightest-slate)]">
            Gowtham Ravindrathas
          </h1>
          <h2 className="text-[var(--lightest-slate)]">
            Software Engineer at HIVED
          </h2>
          <TypingText className="text-base" />
        </div>

        {/* Nav */}
        <div className="md:flex flex-col gap-y-6 text-sm header-nav duration-300 hidden">
          {navItems.map((item, index: number) => (
            <motion.a
              key={index}
              href={item.href}
              className={`text-[var(--slate)] hover:text-[var(--lightest-slate)] uppercase mr-auto`}
              custom={index}
              variants={itemVariants}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Socials */}
      <div className="flex flex-row gap-x-6 my-6 md:mb-0 md:mt-auto">
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            custom={index}
            variants={itemVariants}
          >
            <FontAwesomeIcon
              icon={social.icon}
              className="h-[25px] hover:text-[var(--green-bright)] duration-300 hover:translate-y-[-4px]"
            />
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}

const socials = [
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/gowth6m",
  },
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/gowth6m/",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/gowth6m/",
  },
  {
    name: "Twitter",
    icon: faTwitter,
    href: "https://twitter.com/gowth6m",
  },
  {
    name: "CodePen",
    icon: faCodepen,
    href: "https://codepen.io/Gowth6m",
  },
];

const navItems = [
  {
    name: "about",
    href: "#aboutme",
  },
  {
    name: "experience",
    href: "#experience",
  },
  {
    name: "projects",
    href: "#projects",
  },
  {
    name: "contact",
    href: "#contact",
  },
];
