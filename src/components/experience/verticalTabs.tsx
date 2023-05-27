"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

export default function VerticalTabs() {
  const [categories] = useState([
    "HIVED",
    "UNIVERSITY OF EXETER",
    "SWMSTUDIOS",
    "NOCXA",
  ]);

  const [selectedTab, setSelectedTab] = useState(categories[0]);

  return (
    <Tab.Group
      as="div"
      className="flex sm:flex-row flex-col md:gap-x-12 lg:gap-x-16"
    >
      <Tab.List
        as="nav"
        className="flex flex-col space-y-0 md:space-x-0 md:space-y-1 md:w-72 md:p-1 relative outline-none mb-10 md:mb-0"
      >
        {categories.map((category) => (
          <Tab
            key={category}
            as="button"
            className={({ selected }) =>
              `outline-none py-2 md:px-4 flex items-center justify-between text-left md:w-64 hover:bg-[var(--navy-trans)] ${
                selected ? "text-[var(--green-bright)]" : "text-[var(--slate)]"
              }`
            }
            onClick={() => setSelectedTab(category)}
          >
            {category}
          </Tab>
        ))}
        <motion.div
          className="absolute md:right-0 top-0 md:top-auto md:w-1 w-auto h-1 md:h-10 bg-[var(--green-bright)]"
          animate={{ y: categories.indexOf(selectedTab) * 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </Tab.List>
      {experience.map((experience: TabContent) => (
        <TabContent
          key={experience.company}
          role={experience.role}
          company={experience.company}
          link={experience.link}
          dates={experience.dates}
          descriptions={experience.descriptions}
          technologies={experience.technologies}
        />
      ))}
    </Tab.Group>
  );
}

function TabContent({
  role,
  company,
  link,
  dates,
  descriptions,
  technologies,
}: TabContent) {
  return (
    <Tab.Panel>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col space-y-2"
      >
        <h2 className="text-[var(--lightest-slate)] text-lg font-bold">
          {role}{" "}
          <a
            className="text-[var(--green-bright)] hover2"
            href={link}
            target="_blank"
          >
            @ {company}
          </a>
        </h2>
        <p className="text-[var(--slate)] text-sm">{dates}</p>
        <ul className="verticalTabsDesc py-4">
          {descriptions.map((des: string, index: number) => (
            <li
              key={index}
              className="text-[var(--slate)] text-sm my-1 leading-6"
            >
              {des}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="text-[var(--slate)] text-sm bg-[var(--lightest-navy)] px-2 py-1 rounded-md"
            >
              {technology}
            </span>
          ))}
        </div>
      </motion.div>
    </Tab.Panel>
  );
}

type TabContent = {
  role: string;
  company: string;
  link: string;
  dates: string;
  descriptions: string[];
  technologies: string[];
};

const variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const experience: TabContent[] = [
  {
    role: "Frontend Developer",
    company: "HIVED",
    link: "https://hived.space",
    dates: "Feb 2023 - Present",
    descriptions: [
      "Lead frontend development at HIVED",
      "Create and implement solutions for a variety of microservices used by HIVED",
      "Create applications used by around 20,000 customers daily",
      "Create in-house apps used by our drivers and staff",
    ],
    technologies: [
      "Flutter",
      "React",
      "Node.js",
      "TypeScript",
      "Golang",
      "AWS Services",
    ],
  },
  {
    role: "Software Engineer",
    company: "University of Exeter",
    link: "https://www.exeter.ac.uk/",
    dates: "May 2022 - Feb 2023",
    descriptions: [
      "Work on the University of Exeter app that is used by around 22,000 students",
      "Create chatbot API microservice used in various applications",
      "Create virtual tour app and mini games for freshers events",
    ],
    technologies: [
      "React",
      "Flutter",
      "Node.js",
      "TypeScript",
      "AWS Services",
      "DynamoDB",
      "Cognito",
      "CDK",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Swmstudios",
    link: "https://swmstudios.com/",
    dates: "Mar 2021 - Nov 2021",
    descriptions: [
      "Design and develop websites for customers",
      "Develop and maintain internal tools",
    ],
    technologies: ["React", "Next", "Framer motion", "TypeScript"],
  },
  {
    role: "Frontend Developer",
    company: "Nocxa",
    link: "https://nocxa.com/",
    dates: "Sep 2019 - Sep 2021",
    descriptions: [
      "Design and develop websites and web apps for clients",
      "Develop apps for clients",
    ],
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "Flutter",
      "Next",
      "Express",
      "MongoDB",
    ],
  },
];
