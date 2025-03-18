"use client";

import React, { useEffect, useState } from "react";

export default function TypingText({ className }: any) {
  const typingDelay: number = 100;
  const deletingDelay: number = 60;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(typingDelay);
  const [, setIndex] = useState(1);
  const period = 2000;

  const toRotate = [
    "Probably vibe coding right now",
    "Scroll down to see more!",
    "Eat, Sleep, Code, Repeat",
    "Check out my startup",
  ];

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(deletingDelay);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(typingDelay);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className={className}>
      <span className="typed-text"> </span>
      <span>{text}</span>
      <span className="typed-text-cursor">|</span>
    </div>
  );
}
