import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaScroll,
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaPalette,
  FaLightbulb,
  FaBrain,
} from "react-icons/fa";

import { GiCricketBat } from "react-icons/gi";

import LeftNavbar from "../Components/LeftNavbar";
import MainNavbar from "../Components/MainNavbar";
import Loader from "../Loaders/Loader";

export default function About() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="flex min-h-screen bg-gray-900 text-white overflow-hidden">

        {/* LEFT NAVBAR */}
        <div className="z-[50]">
          <LeftNavbar
            isMobileOpen={isMobileOpen}
            setIsMobileOpen={setIsMobileOpen}
          />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 min-w-0 ml-0">

          {/* MAIN NAVBAR */}
          <div className="fixed top-0 left-0 right-0 z-[40] bg-gray-900 border-b border-gray-800">
            <MainNavbar
              setIsMobileOpen={setIsMobileOpen}
              isMobileOpen={isMobileOpen}
            />
          </div>

          <br />
          <br />

          {/* PAGE CONTENT */}
          <div className="px-4 md:px-6 py-8 space-y-10">

            {/* ABOUT ME */}
            <section
              data-aos="fade-up"
              className="bg-gray-800/40 border border-gray-700 p-6 md:p-8 rounded-xl shadow-xl backdrop-blur-sm"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-blue-400 mb-3">
                About Me
              </h1>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Hello! I’m <span className="text-white font-semibold">Ravi Tharun</span>,
                a Full Stack Developer from Bangalore. I build modern, scalable apps
                using <span className="text-white">React, Node.js, and MongoDB</span>.
              </p>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-3">
                I love UI/UX and enjoy crafting clean, user-friendly interfaces.
              </p>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-3">
                Currently learning AI & ML to build smarter applications.
              </p>
            </section>

            {/* TIMELINE */}
            <section
              data-aos="fade-right"
              className="bg-gray-800/40 border border-gray-700 p-6 md:p-8 rounded-xl shadow-xl backdrop-blur-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mb-5 flex items-center gap-2">
                <FaScroll className="text-blue-400 text-lg md:text-xl" />
                My Journey Timeline
              </h2>

              <div className="space-y-5">
                <div className="flex gap-3 items-start">
                  <FaGraduationCap className="text-xl text-blue-400" />
                  <p className="text-gray-300 text-sm md:text-base">
                    2022: Started at Dayananda Sagar University.
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <FaLaptopCode className="text-xl text-blue-400" />
                  <p className="text-gray-300 text-sm md:text-base">
                    2022–2024: Built multiple MERN projects.
                  </p>
                </div>

                <div className="flex gap-3 items-start">
                  <FaRocket className="text-xl text-blue-400" />
                  <p className="text-gray-300 text-sm md:text-base">
                    Now: Learning AI & ML for advanced applications.
                  </p>
                </div>
              </div>
            </section>

            {/* PASSIONS */}
            <section
              data-aos="fade-left"
              className="bg-gray-800/40 border border-gray-700 p-6 md:p-8 rounded-xl shadow-xl backdrop-blur-sm"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mb-5 flex items-center gap-2">
                <FaLightbulb className="text-blue-400 text-lg md:text-xl" />
                Passions & Interests
              </h2>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-gray-300">
                <li className="flex items-center gap-3">
                  <FaPalette className="text-xl text-blue-400" />
                  Designing clean & modern UIs
                </li>

                <li className="flex items-center gap-3">
                  <FaLightbulb className="text-xl text-yellow-400" />
                  Building creative products
                </li>

                <li className="flex items-center gap-3">
                  <FaBrain className="text-xl text-purple-400" />
                  Exploring latest technologies
                </li>

                <li className="flex items-center gap-3">
                  <GiCricketBat className="text-xl text-green-400" />
                  Playing cricket
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
