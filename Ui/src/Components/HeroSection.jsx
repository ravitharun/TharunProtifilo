import React from "react";
import { Typewriter } from "react-simple-typewriter";


function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Tharun Ravi</h1>
      <h2 className="text-xl md:text-2xl text-gray-300">
        <Typewriter
          words={["Frontend Developer", "UI/UX Designer", "React Enthusiast"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
    </div>
  );
}

export default HeroSection;
