import React from "react";
import TypingText from "./typingText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div id="home" className="flex flex-col justify-between botttom-align">
      <div className="flex flex-col gap-y-24">
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
        <div className="flex flex-col gap-y-6 text-sm header-nav duration-300">
          <a
            href="#aboutme"
            className="text-[var(--slate)] hover:text-[var(--lightest-slate)] uppercase"
          >
            about
          </a>
          <a
            href="experience"
            className="text-[var(--slate)] hover:text-[var(--lightest-slate)] uppercase"
          >
            experience
          </a>
          <a
            href="projects"
            className="text-[var(--slate)] hover:text-[var(--lightest-slate)] uppercase"
          >
            projects
          </a>
        </div>
      </div>

      {/* Socials */}
      <div className="flex flex-row gap-x-6">
        {socials.map((social, index) => (
          <Link key={index} href={social.href} target="_blank">
            <FontAwesomeIcon
              icon={social.icon}
              className="h-[25px] hover:text-[var(--green-bright)]"
            />
          </Link>
        ))}
      </div>
    </div>
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
