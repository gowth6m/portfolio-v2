"use client";

import React, { useEffect, useRef } from "react";

const THROTTLE_INTERVAL = 20; // throttle every 20ms

const BackgroundHover: React.FC = () => {
  const hoverLight = useRef<HTMLDivElement | null>(null);
  const lastCalled = useRef<number>(0);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const now = performance.now();
      if (now - lastCalled.current < THROTTLE_INTERVAL) return;

      lastCalled.current = now;
      const { pageX, pageY } = event;

      if (hoverLight.current) {
        hoverLight.current.style.left = `${pageX}px`;
        hoverLight.current.style.top = `${pageY}px`;
        hoverLight.current.style.position = "fixed";
        hoverLight.current.style.transition = "left 0s, top 0s"; // add CSS transition
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      {/* HOVER LIGHT */}
      <div className="hidden md:block" ref={hoverLight} id="hoverLight"></div>
      <div className="absolute h-full w-full backDropper"></div>
    </>
  );
};

export default BackgroundHover;
