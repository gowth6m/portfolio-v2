import React from "react";
import Me from "../misc/me";

export default function About() {
  return (
    <div id="aboutme" className="container flex flex-col min-h-fit">
      <p>
        Back in 2018, I decided to create a 2D top-down zombie game for the web
        and tumbled head first into the rabbit hole of coding and web
        development.
        <br />
        <br />
        Fast forward today, I&#39;m a software engineer based in{" "}
        <a
          href="https://www.google.com/maps/place/London"
          target="_blank"
          className="text-[var(--green-bright)] hover:text-[var(--lightest-slate)"
        >
          London, UK
        </a>
        . My current role involves building robust and innovative software
        solutions for{" "}
        <a
          href="https://hived.space"
          target="_blank"
          className="text-[var(--green-bright)] hover:text-[var(--lightest-slate)"
        >
          HIVED
        </a>{" "}
        , from intuitive tracking pages to sophisticated internal dashboards.
        <br />
        <br />
        When I&#39;m not at the computer, I&#39;m usually training at the gym,
        hiking with friends and indulging my culinary curiosity by exploring new
        and exciting eateries.
      </p>
    </div>
  );
}

