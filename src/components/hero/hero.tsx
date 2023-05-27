import React from "react";
import TypingText from "./typingText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div id="home" className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl font-semibold text-[var(--lightest-slate)]">
          Gowtham Ravindrathas
        </h1>
        <h2 className="text-[var(--lightest-slate)]">
          Software Engineer at HIVED
        </h2>
        <TypingText className="text-base" />
      </div>
    </div>
  );
}
