import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Spotlight from "../Components/spotlight-new";


function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex flex-col justify-center items-center px-6 md:px-20 overflow-hidden">

      {/* Animated Spotlight Background */}
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55% 31%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.05) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.03) 80%, transparent 100%)"
        width={560}
        height={1200}
        smallWidth={240}
        xOffset={150}
        translateY={-250}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl text-center space-y-6">

        {/* Greeting */}
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I’m <span className="text-blue-500">Ravi Tharun</span>
        </h1>

        {/* Type Animation for Roles */}
        <p className="text-xl md:text-2xl font-semibold text-gray-300">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "MERN Stack Developer",
              1000,
              "Data Analytics Enthusiast",
              1000,
              "UI/UX Designer",
              1000,
              "React Developer",
              1000,
              "Full-Stack Developer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>

        {/* Short Description */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          I build modern, scalable, and visually appealing web applications with
          a strong focus on performance, clean UI/UX, and meaningful user experiences.
          Passionate about full-stack development, analytics, and innovative tech.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
          <Link to="/about">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg font-medium text-white">
              Explore
            </button>
          </Link>

          <Link to="/projects">
            <button className="px-6 py-3 border border-gray-500 hover:bg-gray-800 transition-colors rounded-lg font-medium text-white">
              View Projects
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Home;
