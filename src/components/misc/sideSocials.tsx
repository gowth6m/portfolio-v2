import {
  faCodepen,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function SideSocials() {
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

  return (
    <div className="side-socials">
      {socials.map((social, index) => (
        <Link key={index} href={social.href} target="_blank">
          <FontAwesomeIcon icon={social.icon} className="h-[20px]" />
        </Link>
      ))}
    </div>
  );
}
