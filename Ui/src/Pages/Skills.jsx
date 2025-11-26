"use client";
import { useState } from "react";
import LeftNavbar from "../Components/LeftNavbar";
import MainNavbar from "../Components/MainNavbar";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiSqlite, SiPowerbi, SiExcel } from "react-icons/si";

function Skills() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Skills categorized
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
    "Database / Data Tools": [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
      { name: "SQL", icon: <SiSqlite className="text-blue-500 text-3xl" /> },
      { name: "Excel", icon: <SiExcel className="text-green-400 text-3xl" /> },
      { name: "Power BI", icon: <SiPowerbi className="text-yellow-400 text-3xl" /> },
      { name: "Python", icon: <FaPython className="text-blue-300 text-3xl" /> },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white overflow-hidden">

      {/* LEFT NAVBAR */}
      <LeftNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 min-w-0 ml-0">

        {/* MAIN NAVBAR */}
        <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
          <MainNavbar setIsMobileOpen={setIsMobileOpen} />
        </div>

        {/* SKILLS SECTION */}
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-10 space-y-16">

          <h2 className="text-4xl md:text-5xl font-extrabold 
            bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            My Skills
          </h2>

          <p className="text-neutral-400 mb-12 max-w-2xl">
            These are the technologies, tools, and platforms I work with. Organized into Frontend/UI, Backend/Server, and Data Tools for clarity.
          </p>

          {/* Render Frontend / UI */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-purple-300">Frontend / UI</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills["Frontend / UI"].map((skill, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                  {skill.icon}
                  <span className="mt-4 text-lg font-semibold text-neutral-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Render Backend / Server */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-purple-300">Backend / Server</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills["Backend / Server"].map((skill, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                  {skill.icon}
                  <span className="mt-4 text-lg font-semibold text-neutral-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Render Database / Data Tools */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-purple-300">Database / Data Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {skills["Database / Data Tools"].map((skill, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
                  {skill.icon}
                  <span className="mt-4 text-lg font-semibold text-neutral-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
