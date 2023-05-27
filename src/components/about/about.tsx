import React from "react";
import Me from "../misc/me";

export default function About() {
  const summary =
    "I'm a software engineer and artist based in London, UK. I have an interest in full stack development, machine learning, human-computer interactions and the vast realm of everything in between.";

  return (
    <div id="aboutme" className="container flex flex-col min-h-fit">
      <p>
        I&#39;m a software engineer and artist based in London, UK. I have an
        interest in full stack development, machine learning, human-computer
        interactions and the vast realm of everything in between.
        <br />
        <br />
        Currently I&#39;m working as a Frontend Software Engineer at
        <a
          href="https://hived.space"
          target="_blank"
          className="text-[var(--green-bright)] hover:text-[var(--lightest-slate)"
        >
          {" "}
          HIVED
        </a>
        .
      </p>
    </div>
  );
}

const AboutText = ({ className }: { className?: string }) => {
  return (
    <div className={`md:text-justify + ${className}`}>
      I am currently a Software Engineer at{" "}
      <a
        href="https://hived.space"
        target="_blank"
        className="text-[var(--green-bright)] hover:text-[var(--lightest-slate)"
      >
        HIVED
      </a>
      , taking lead on front-end development. I am also a freelance developer
      and designer.
      <br />
      <br />
      Here are a few technologies I&apos;ve been working with recently:
      <br />
      <br />
      <ul className="list-disc list-inside columns-2 about-tech-stack space-y-2">
        <li>JavaScript ES6+</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Flutter</li>
        <li>AWS Services</li>
        <li>Python</li>
        <li>Typescript</li>
        <li>Golang</li>
        <li>HTML &amp; CSS</li>
      </ul>
      <br />
      <br />
      Outside of programming, I enjoy playing going to the gym, playing video
      games, hiking and painting. I also love to travel and explore new places.
    </div>
  );
};
