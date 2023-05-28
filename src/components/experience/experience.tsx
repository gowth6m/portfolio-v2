import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  return (
    <section id="experience" className="flex flex-col gap-y-8">
      {experience.map((experience: ExperienceModel, index: number) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-x-4 justify-start align-top"
        >
          <div className="text-[var(--slate)] text-xs uppercase flex-initial w-32 leading-6">
            <p className="my-1">{experience.dates}</p>
          </div>
          <div className="flex flex-col border-slate flex-1 gap-y-2">
            <h2 className="text-[var(--lightest-slate)] text-lg font-bold group">
              <a
                className="text-[var(--lightest-slate)] group-hover:text-[var(--green-bright)] duration-150"
                href={experience.link}
                target="_blank"
              >
                {experience.role} · {experience.company}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="inline h-[12px] hover:text-[var(--green-bright)] px-2 rotate-[-45deg] duration-150 group-hover:translate-x-[4px] group-hover:translate-y-[-4px]"
                  size="xs"
                />
              </a>
            </h2>

            <p className="text-sm mb-2">{experience.description}</p>

            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-[var(--green-bright)] text-xs bg-[var(--green-tint)] px-2 py-1 rounded-md"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

type ExperienceModel = {
  role: string;
  company: string;
  link: string;
  dates: string;
  description: string;
  descriptions: string[];
  technologies: string[];
};

const experience: ExperienceModel[] = [
  {
    role: "Frontend Developer",
    company: "HIVED",
    link: "https://hived.space",
    dates: "Feb 2023 - Present",
    description:
      "Lead frontend development and create frontend solutions for a variety of microservices used by HIVED. Create applications used by around 20,000 customers daily and in-house apps used by our drivers and staff.",
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
    description:
      "Work on the University of Exeter app that is used by around 22,000 students, create chatbot API microservice used in various applications, create virtual tour app to help students navigate campus and work on online programes website.",
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
    description:
      "Design and develop website for Swmstudios and clients, develop and maintain internal tools. New website increased traffic by 200%. Developed internal tools to help manage clients and projects.",
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
    description:
      "Lead frontend development, develop e-commerce websites for clients such as Great Comcat Engineering Ltd, Di-tea and Sai Kung Cafe. Increased sales by 300% and increased traffic by 200% on average. Also created and setup Google business profiles for clients.",
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
