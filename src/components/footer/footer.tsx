/* eslint-disable @next/next/no-img-element */
"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuttleSpace, faClose } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Contact from "../contact/contact";

export default function Footer() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div id="footer" className="flex flex-row">
      <Contact />
      <button
        aria-label="Old versions of the website"
        onClick={togglePopup}
        className="cursor-pointer group hover:text-[var(--green-bright)]"
      >
        <FontAwesomeIcon
          icon={faShuttleSpace}
          className="inline h-[40px] hover:text-[var(--green-bright)] px-4 duration-150 -rotate-45 group-hover:translate-y-[-4px] group-hover:translate-x-[4px] group-hover:text-[var(--green-bright)]"
          size="lg"
        />
      </button>
      {isPopupVisible && <Popup closePopup={closePopup} />}
    </div>
  );
}

interface PopupProps {
  closePopup: () => void;
}

const Popup: React.FC<PopupProps> = ({ closePopup }) => {
  const url = window.location.href;
  const domain = new URL(url).hostname;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closePopup}
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center"
      style={{ backdropFilter: "blur(5px)" }}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-[var(--lightest-navy)] w-[30rem] h-auto rounded-lg shadow-lg p-6 flex flex-col"
      >
        <div className="flex flex-col">
          <div className="flex flex-row justify-end">
            <button
              onClick={closePopup}
              className="group"
              aria-label="Close popup"
            >
              <FontAwesomeIcon
                icon={faClose}
                className="inline h-[18px] duration-150 bg-[var(--lightest-navy)] group-hover:text-[var(--green-bright)] px-2"
                size="xs"
              />
            </button>
          </div>

          <div className="flex flex-col gap-y-6">
            {oldPages.map((page) => (
              <a
                key={page.title}
                href={`https://${page.version}.${domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--light-slate)] hover:text-[var(--green)] transition-colors duration-200 gap-y-2 flex flex-col"
              >
                <span className="">{page.title}</span>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={page.image}
                    alt="oldSiteImage"
                    className="hover:scale-110 duration-150 cover w-full"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const oldPages = [
  {
    title: "Version 0 (2019)",
    version: "v0",
    image: "./images/v0.webp",
  },
  {
    title: "Version 1 (2022)",
    version: "v1",
    image: "./images/v1.webp",
  },
];
