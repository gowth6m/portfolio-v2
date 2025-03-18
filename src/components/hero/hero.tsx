"use client";

import {
    faCodepen,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import TypingText from "./typingText";
import { motion } from "framer-motion";
import React, { RefObject, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Socials = React.memo(() => {
    return (
        <motion.div
            className="flex flex-row gap-x-6 my-6 md:mb-0 md:mt-auto"
            variants={containerVariantsDelayed}
            initial="hidden"
            animate="visible"
        >
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
        </motion.div>
    );
});
Socials.displayName = "Socials";

interface HeroProps {
    refAbout: RefObject<HTMLDivElement | null>;
    refExperience: RefObject<HTMLDivElement | null>;
    refProjects: RefObject<HTMLDivElement | null>;
    refContact: RefObject<HTMLDivElement | null>;
}

export default function Hero({
    refAbout,
    refExperience,
    refProjects,
    refContact,
}: HeroProps) {
    const [activeSection, setActiveSection] = useState("about");

    const isAboutVisible = useIntersectionObserver(refAbout, { threshold: 0 });
    const isExperienceVisible = useIntersectionObserver(refExperience, {
        threshold: 0.5,
    });
    const isProjectsVisible = useIntersectionObserver(refProjects, {
        threshold: 0.1,
    });
    const isContactVisible = useIntersectionObserver(refContact, {
        threshold: 0.1,
    });

    useEffect(() => {
        if (isAboutVisible) setActiveSection("about");
        if (isExperienceVisible) setActiveSection("experience");
        if (isProjectsVisible) setActiveSection("projects");
        if (isContactVisible) setActiveSection("contact");
    }, [
        isAboutVisible,
        isExperienceVisible,
        isProjectsVisible,
        isContactVisible,
    ]);

    return (
        <motion.section
            id="home"
            className="flex flex-col md:justify-between mb-16 md:mb-0 h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-col md:gap-y-16">
                {/* Name */}
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-4xl font-semibold text-[var(--lightest-slate)]">
                        Gowthaman Ravindrathas
                    </h1>
                    <h2 className="text-[var(--lightest-slate)]">
                        Senior Frontend Engineer at Pollen Technologies
                    </h2>
                    <TypingText className="text-base" />
                </div>

                {/* Nav */}
                <div className="md:flex flex-col gap-y-6 text-sm header-nav hidden">
                    {navItems.map((item, index: number) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            className={`hover:text-[var(--lightest-slate)] tracking-wider mr-auto ${
                                activeSection === item.name
                                    ? "text-[var(--lightest-slate)] header-nav-current"
                                    : "text-[var(--dark-slate)]"
                            }`}
                            custom={index}
                            variants={itemVariants}
                        >
                            {item.name}
                        </motion.a>
                    ))}
                </div>
            </div>

            {/* Socials */}
            <Socials />
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
        name: "X",
        icon: faXTwitter,
        href: "https://x.com/gowth6m",
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
        href: "#about",
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

const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 2,
            delay: 0,
        },
    },
};

const containerVariantsDelayed = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 2,
            delay: 0.2,
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
