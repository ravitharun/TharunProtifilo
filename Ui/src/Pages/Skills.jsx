"use client";
import { useState } from "react";
import LeftNavbar from "../Components/LeftNavbar";
import MainNavbar from "../Components/MainNavbar";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaFileExcel, FaJava
} from "react-icons/fa";
import {
  SiTailwindcss, SiJavascript, SiMongodb, SiSqlite,
} from "react-icons/si";

function Skills() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const skills = {
    "Frontend / UI": [
      { name: "React.js", icon: <FaReact className="text-blue-400 text-3xl" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    ],
    "Backend / Server": [
      { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-3xl" /> },
      { name: "Express.js", icon: <FaNodeJs className="text-green-300 text-3xl" /> },
    ],
    "Database": [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
      { name: "SQL", icon: <SiSqlite className="text-blue-500 text-3xl" /> },
    ],
    "Data Tools": [
      { name: "Excel", icon: <FaFileExcel className="text-green-400 text-3xl" /> },
      { name: "Power BI", icon: "" },
    ],
    "Others": [
      { name: "Java", icon: <FaJava className="text-red-500 text-3xl" /> },
      { name: "Python", icon: <FaPython className="text-blue-300 text-3xl" /> },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      


      {/* MAIN CONTENT */}
      <div className="flex-1 p-10">


        <div className="max-w-7xl mx-auto py-10">

          <h2 className="text-4xl md:text-5xl font-extrabold 
            bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-8">
            My Skills
          </h2>

          <p className="text-neutral-400 mb-10 max-w-2xl">
            These are the technologies, tools, and platforms I work with, organized by categories.
          </p>

          {/* Categories in separate boxes */}
          <div className="flex flex-wrap gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="flex-1 min-w-[250px] bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl" title={category}>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">{category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {items.map((skill, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-4 
                      bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow hover:scale-105 transition-transform duration-300" title={skill.name}>
                      {skill.icon}
                      <span className="mt-2 text-sm md:text-base font-semibold text-neutral-200">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
