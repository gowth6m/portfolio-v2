"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const SCREEN_SIZE_LIMIT = 768;
const SPEED_MAX = 0.6;
const SPEED_MIN = 0.05;
const SIZE = 3;

export default function BackgroundAnimation({
  color,
}: BackgroundAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boxColor = useMemo(() => color ?? "white", [color]);

  const [windowSize, setWindowSize] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });

  // Function to handle window resize
  const handleResize = useCallback(() => {
    setWindowSize({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const c = canvasRef.current.getContext("2d");
    if (!c) return;

    // Generate boxes based on screen size (mobile or desktop)
    const boxes = makeBoxes(
      windowSize.innerWidth > SCREEN_SIZE_LIMIT ? 100 : 20,
      windowSize
    );

    // Draw boxes
    const draw = () => {
      c.clearRect(0, 0, windowSize.innerWidth, windowSize.innerHeight);

      for (const box of boxes) {
        c.fillStyle = boxColor;
        c.fillRect(box.x, box.y, box.size, box.size);

        box.y += box.vy;

        if (box.y < 0) {
          box.y = windowSize.innerHeight;
          box.vy = -(Math.random() * SPEED_MAX + SPEED_MIN);
          box.size = Math.random() * SIZE;
        }
      }

      // Loop
      animationFrameId = requestAnimationFrame(draw);
    };

    let animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [boxColor, windowSize, handleResize]);

  return (
    <canvas
      id="homeCanvas"
      className="w-full h-full fixed top-0 left-0 z-[-1]"
      ref={canvasRef}
      width={windowSize.innerWidth}
      height={windowSize.innerHeight}
    ></canvas>
  );
}

// Function to generate boxes
const makeBoxes = (count: number, windowSize: WindowSize) => {
  const boxes = [];
  for (let i = 0; i < count; i++) {
    const box = {
      x: Math.random() * windowSize.innerWidth,
      y: Math.random() * windowSize.innerHeight,
      vy: -(Math.random() * SPEED_MAX + SPEED_MIN),
      size: Math.random() * SIZE,
    };
    boxes.push(box);
  }
  return boxes;
};

interface BackgroundAnimationProps {
  color?: string | null;
}

interface WindowSize {
  innerWidth: number;
  innerHeight: number;
}
