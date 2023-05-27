"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SliderProps = {
  images: string[];
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex =
      currentImageIndex >= images.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex =
      currentImageIndex <= 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const selectSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      <div className="relative w-full h-64">
        <button
          className="absolute top-1/2 transform -translate-y-1/2 text-3xl text-white bg-transparent border-none focus:outline-none"
          style={{ left: "10px" }}
          onClick={prevSlide}
        >
          &#8592;
        </button>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt=""
            className="w-full h-full rounded-xl object-cover"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ x: -100 }}
            transition={{ duration: 0.5, ease: [0.445, 0.05, 0.55, 0.95] }} // "easeOutBack" equivalent
          />
        </AnimatePresence>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 text-3xl text-white bg-transparent border-none focus:outline-none"
          style={{ right: "10px" }}
          onClick={nextSlide}
        >
          &#8594;
        </button>
      </div>
      <div className="w-full flex justify-center mt-4">
        {images.map((img, index) => (
          <button
            key={index}
            className={`border-t-2 mx-1 ${
              index === currentImageIndex ? "border-yellow-500" : "border-white"
            }`}
            onClick={() => selectSlide(index)}
            style={{ width: "40px" }} // Adjust width as per your needs
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
