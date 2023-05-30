"use client";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { projects, ProjectModel } from "@/components/projects/projects.data";
import Link from "next/link";

const Projects: React.FC = () => {
  return (
    <motion.div
      className="container mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-24 lg:px-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Link className="text-lg text-[var(--green-bright)] group" href={"/"}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="inline h-[16px] hover:text-[var(--green-bright)] duration-150 pr-1 group-hover:translate-x-[-4px]"
        ></FontAwesomeIcon>{" "}
        Gowthaman Ravindrathas
      </Link>
      <h1 className="text-3xl font-bold text-[var(--lightest-slate)] md:text-5xl mb-16 mt-4">
        All Projects{" "}
      </h1>
      <div className="flex flex-col">
        {/* Projects Table */}
        {orderProjects(projects).map((project: ProjectModel, index: number) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;

interface ProjectItemProps {
  project: ProjectModel;
  index: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, index }) => {
  return (
    <motion.div variants={itemVariants} custom={index}>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-9 my-2 gap-x-2 overflow-x-hidden">
        {/* Year */}
        <div className="lg:col-span-1">{project.year}</div>

        {/* Project Name */}
        <div className="lg:col-span-2 text-[var(--lightest-slate)]">
          {project.title}
        </div>

        {/* Tech Stack */}
        <div className="lg:col-span-4 flex-wrap gap-2 p-2 hidden lg:flex">
          {project.stack.map((tech: string, index: number) => (
            <span
              key={index}
              className="text-[var(--green-bright)] text-xs bg-[var(--green-tint)] px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link !== undefined ? (
          <Link
            href={project.link}
            className="lg:col-span-1 group hover:text-[var(--green-bright)]"
          >
            View
            <FontAwesomeIcon
              icon={faArrowRight}
              className="inline px-1 h-[12px] text-[var(--slate)] group-hover:text-[var(--green-bright)] duration-150 -rotate-45 group-hover:translate-x-[4px] group-hover:translate-y-[-4px]"
            />
          </Link>
        ) : (
          <div className="lg:col-span-1"></div>
        )}

        {/* GitHub */}
        {project.github !== undefined ? (
          <Link
            href={project.github}
            className="lg:col-span-1 group hover:text-[var(--green-bright)]"
          >
            GitHub
            <FontAwesomeIcon
              icon={faArrowRight}
              className="inline px-1 h-[12px]  text-[var(--slate)] group-hover:text-[var(--green-bright)] duration-150 -rotate-45 group-hover:translate-x-[4px] group-hover:translate-y-[-4px]"
            />
          </Link>
        ) : (
          <div className="lg:col-span-1"></div>
        )}
      </div>
      <div className="w-full border-b-[0.5px] border-[var(--lightest-navy)]"></div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 2,
      delay: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: (custom: any) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.08,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
};

// Sort projects by year
const orderProjects = (projects: ProjectModel[]) => {
  return projects.sort((a, b) => {
    return b.year - a.year;
  });
};
