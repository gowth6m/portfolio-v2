import React from "react";
import VerticalTabs from "./verticalTabs";

export default function Experience() {
  return (
    <div id="experience" className="container flex flex-col">
      <div className="w-5/6 lg:w-4/6 mx-auto my-12 md:my-28">
        <div className="flex flex-col overflow-hidden text-sm md:text-base gap-y-4">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <h1 className="title text-left flex-1 overflow-hidden">
              <span className="text-[var(--green-bright)]">/ </span>experience
            </h1>
          </div>

          {/* Row 2 - experience */}
          <div className="w-full">
            <VerticalTabs />
          </div>
        </div>
      </div>
    </div>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
