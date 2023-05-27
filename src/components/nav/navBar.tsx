"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Logo from "../misc/logo";

export default function NavBar() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos || menuOpened) {
      setVisible(true);
    } else {
      window.pageYOffset > 100 && setVisible(false);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

 useEffect(() => {
  if (menuOpened) {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
  } else {
    document.body.style.overflow = 'unset';
    document.body.style.height = 'unset';
    document.documentElement.style.overflow = 'unset';
    document.documentElement.style.height = 'unset';
  }
}, [menuOpened]);

  const menuList = [
    { id: "01", name: "home", href: "#home" },
    { id: "02", name: "about me", href: "#aboutme" },
    { id: "03", name: "experience", href: "#experience" },
    { id: "04", name: "projects", href: "#projects" },
    { id: "05", name: "contact", href: "#contact" },
  ];

  return visible ? (
    <div className="fixed w-full origin-top">
      <nav className="mx-auto flex flex-row justify-between align-middle md:mt-8 md:px-10 mt-4 px-4">
        <a href="#home" className="text-sm z-40">
          <Logo
            color="var(--green-bright)"
            className="h-[40px] w-[40px] justify-start"
          />
        </a>

        <AnimatedButton menuOpened={menuOpened} setMenuOpened={setMenuOpened} />

        <ul className="md:flex hidden flex-row space-x-6 text-sm align-middle justify-end text-[var(--light-slate)] z-40">
          {menuList.map((item) => (
            <li
              key={item.id}
              className="hover:text-[var(--green-bright)] duration-300 hover:translate-y-[-2px]"
            >
              <a href={item.href}>
                <span className="py-4 text-[var(--green-bright)]">{item.id}. </span>{" "}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {menuOpened && (
        <motion.div
          className="md:hidden flex flex-col space-y-4 align-middle justify-end text-[var(--light-slate)] h-[100vh] w-[100vw] fixed top-0 left-0 bg-[var(--dark-navy)] px-4 py-8"
          variants={variantNav}
          initial="hidden"
          animate={menuOpened ? "visible" : "hidden"}
        >
          {menuList.map((item) => (
            <motion.a
              key={item.id}
              href={item.href}
              className="hover:text-[var(--green-bright)] text-5xl text-right"
              variants={variantNav}
              onClick={() => setMenuOpened(false)}
            >
              <span className="text-[var(--green-bright)]">{item.id}. </span>{" "}
              {item.name}
            </motion.a>
          ))}

          <div className="py-8"></div>
        </motion.div>
      )}
    </div>
  ) : (
    <></>
  );
}

const AnimatedButton = ({ menuOpened, setMenuOpened }: any) => {
  return (
    <button
      className={`hamburger hamburger--collapse ${menuOpened && "is-active"}`}
      type="button"
      onClick={() => setMenuOpened(!menuOpened)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

const variantNav = {
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};
