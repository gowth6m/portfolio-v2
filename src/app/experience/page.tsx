"use client";

import { faArrowLeft, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ExperienceModel,
    experience,
} from "@/components/experience/experience.data";

const ExperiencePage: React.FC = () => {
    return (
        <motion.div
            className="container mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-24 lg:px-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Link
                className="text-lg text-[var(--green-bright)] group"
                href={"/"}
            >
                <FontAwesomeIcon
                    icon={faArrowLeft}
                    className="inline h-[16px] hover:text-[var(--green-bright)] duration-150 pr-1 group-hover:translate-x-[-4px]"
                ></FontAwesomeIcon>{" "}
                Gowthaman Ravindrathas
            </Link>
            <h1 className="text-3xl font-bold text-[var(--lightest-slate)] md:text-5xl mb-16 mt-4">
                Experience{" "}
            </h1>
            <div className="flex flex-col">
                {/* Projects Table */}
                {experience.map(
                    (experience: ExperienceModel, index: number) => (
                        <ExperienceItem
                            key={index}
                            experience={experience}
                            index={index}
                        />
                    )
                )}
            </div>
        </motion.div>
    );
};

export default ExperiencePage;

interface ExperienceItemProps {
    experience: ExperienceModel;
    index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    experience,
    index,
}) => {
    return (
        <motion.div
            variants={itemVariants}
            custom={index}
            className="overflow-hidden"
        >
            <div className="grid grid-cols-5 my-2 gap-x-2 overflow-x-hidden overflow-hidden">
                {/* Year */}
                <div className="md:col-span-1 hidden md:flex">
                    {experience.dates}
                </div>

                {/* Role Name */}
                <div className="text-[var(--lightest-slate)] mr-4 md:mx-0">
                    <Link
                        href={experience.link}
                        className="cursor-pointer font-bold text-[var(--green-bright)] hover:underline underline-offset-4 duration-150"
                    >
                        {experience.company}
                    </Link>
                    <br />
                    {experience.role}
                </div>

                <div className="text-[var(--lightest-slate)] mr-4 md:mx-0 col-span-2">
                    {experience.description}

                    {/* Projects */}
                    {experience.projects && (
                        <div className="flex flex-col gap-y-2 my-2">
                            {experience.projects.map((project) => (
                                <div key={project.title} className="group">
                                    <a
                                        className="text-[var(--lightest-slate)] text-sm group-hover:text-[var(--green-bright)] duration-150"
                                        href={project.link}
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faLink}
                                            className="inline h-[12px] px-2 group-hover:text-[var(--green-bright)] duration-150"
                                            size="xs"
                                        />
                                        {project.title}
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Tech Stack */}
                <div className="flex-wrap gap-2 p-2 hidden md:flex">
                    {experience.technologies.map(
                        (tech: string, index: number) => (
                            <span
                                key={index}
                                className="text-[var(--green-bright)] text-xs bg-[var(--green-tint)] px-2 py-1 rounded-md"
                            >
                                {tech}
                            </span>
                        )
                    )}
                </div>
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
