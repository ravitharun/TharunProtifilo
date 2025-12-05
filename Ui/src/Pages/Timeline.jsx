"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";


import {
  FaBriefcase,
  FaRegCalendarAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaBook,
  FaUniversity,
  FaStar,
  FaSchool,
  FaMedal,
} from "react-icons/fa";

import { useLocation } from "react-router-dom";

export const Timeline = ({ data, Work }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const location = useLocation("");

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full min-h-screen 
      bg-gradient-to-br from-[#0a0a12] via-[#121824] to-[#1b2432]
      text-neutral-200 font-sans md:px-10 relative overflow-hidden"
      ref={containerRef}
    >
      {/* Decorative lights */}
      <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-purple-400/25 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-400/25 blur-[120px]" />

      {/* Header */}
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8">
        <h2
          className="text-4xl md:text-5xl mb-4 
          bg-gradient-to-r from-purple-400 to-blue-400 
          bg-clip-text text-transparent font-extrabold text-center"
        >
          {location.pathname === "/WorkExp"
            ? "Defining Moments in My Career Journey"
            : "Tracing My Educational Growth"}
        </h2>

        <p className="text-neutral-300 text-sm md:text-base max-w-md mx-auto text-center">
          {location.pathname === "/WorkExp"
            ? "A timeline highlighting the defining milestones of my professional journey, showcasing career growth, achievements, and lessons learned across diverse roles."
            : "A timeline showcasing the key milestones in my academic journey and personal growth."}
        </p>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {location.pathname === "/WorkExp" ? (
          <>
            {Work.map((item, index) => (
              <div
                key={index}
                className="flex justify-start pt-14 md:pt-32 md:gap-10 relative"
              >
                {/* LEFT LABEL */}
                <div className="sticky z-40 top-36 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div
                    className="h-10 w-10 absolute left-3 rounded-full 
        bg-gradient-to-br from-yellow-400/30 to-yellow-300/10
        backdrop-blur-xl border border-yellow-300/40 
        shadow-lg flex items-center justify-center animate-pulse"
                  >
                    <FaRegCalendarAlt className="text-yellow-400 text-lg" />
                  </div>

                  <h3
                    className="hidden md:block text-xl md:text-4xl font-extrabold 
        bg-gradient-to-r from-blue-300 to-purple-400 
        text-transparent bg-clip-text pl-20 drop-shadow-sm"
                  >
                    {item.CompanyName}
                  </h3>
                </div>

                {/* RIGHT CONTENT CARD */}
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  {/* Job heading */}
                  <h3
                    className="text-2xl md:text-3xl mb-4 font-bold
        bg-gradient-to-r from-purple-300 to-blue-400 
        text-transparent bg-clip-text tracking-wide"
                  >
                    {item.Role} <span className="text-neutral-300">@</span> {item.CompanyName}
                  </h3>

                  {/* CARD */}
                  <div
                    className="p-6 rounded-2xl
        bg-white/10 backdrop-blur-2xl 
        border border-white/20 
        shadow-[0_0_20px_rgba(0,0,0,0.3)]
        hover:border-purple-300/40 hover:shadow-purple-500/20
        transition-all duration-500
        text-neutral-200 leading-relaxed space-y-4
        group"
                  >
                    {/* ICON ROW */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex items-center gap-2 text-green-400">
                        <FaCheckCircle className="text-lg group-hover:scale-110 transition" />
                        <span className="text-sm">
                          Duration: {item.Duration}
                        </span>
                      </div>

                      {item.IsWorking && (
                        <div className="flex items-center gap-2 text-blue-400">
                          <FaBriefcase className="text-lg group-hover:scale-110 transition" />
                          <span className="text-sm">Currently Working</span>
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-pink-400">
                        <FaMapMarkerAlt className="text-lg group-hover:scale-110 transition" />
                        <span className="text-sm">{item.Location}</span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="pt-2 space-y-1">
                      <p className="text-pink-400">
                        <span className="text-white font-semibold">Job Type:</span>{" "}
                        {item.JoBType}
                      </p>
                      <p className="text-neutral-300 font-medium">
                        Experience: {item.Exp}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
           {data.map((item, index) => (
  <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
    
    {/* LEFT LABEL */}
    <div className="sticky z-40 top-40 self-start max-w-xs lg:max-w-sm md:w-full">
      <div
        className="h-10 absolute left-3 w-10 rounded-full 
        bg-white/20 backdrop-blur-xl border border-white/50 
        shadow-lg flex items-center justify-center"
      >
        <FaRegCalendarAlt className="text-yellow-400 text-lg" />
      </div>

      <h3
        className="hidden md:block text-xl md:text-4xl font-extrabold 
        bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text pl-20"
      >
        {item.title}
      </h3>
    </div>

    {/* RIGHT CONTENT */}
    <div className="relative pl-20 pr-4 md:pl-4 w-full">

      {/* Title with Icon */}
      <h3
        className="flex items-center gap-3 text-2xl mb-4 font-bold 
        bg-gradient-to-r from-purple-300 to-blue-400 
        text-transparent bg-clip-text"
      >
        <FaBook /> {item.title}
      </h3>

      <div
        className="p-6 rounded-2xl
        bg-white/10 backdrop-blur-xl 
        border border-purple-300/40
        shadow-lg hover:border-blue-400/70 hover:shadow-blue-400/20 
        transition-all duration-300
        text-neutral-200 leading-relaxed space-y-4"
      >
        
        {/* ICON ROW */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">

          {item.achievement && (
            <div className="flex items-center gap-2 text-green-400">
              <FaMedal className="text-lg" />
              <span className="text-sm">{item.achievement}</span>
            </div>
          )}

          {item.education && (
            <div className="flex items-center gap-2 text-purple-400">
              <FaGraduationCap className="text-lg" />
              <span className="text-sm">{item.education}</span>
            </div>
          )}

          {item.board && (
            <div className="flex items-center gap-2 text-blue-400">
              <FaSchool className="text-lg" />
              <span className="text-sm">{item.board}</span>
            </div>
          )}

          {item.location && (
            <div className="flex items-center gap-2 text-pink-400">
              <FaMapMarkerAlt className="text-lg" />
              <span className="text-sm">{item.location}</span>
            </div>
          )}

          {item.score && (
            <div className="flex items-center gap-2 text-yellow-400">
              <FaStar className="text-lg" />
              <span className="text-sm">{item.score}</span>
            </div>
          )}

          {item.department && (
            <div className="flex items-center gap-2 text-cyan-300">
              <FaUniversity className="text-lg" />
              <span className="text-sm">{item.department}</span>
            </div>
          )}

        </div>

        {/* CONTENT */}
        <p className="text-neutral-300 text-sm leading-relaxed">
          {item.content}
        </p>

      </div>
    </div>
  </div>
))}

          </>
        )}

        {/* Scroll Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden 
          bg-neutral-600/20 
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px]
            bg-gradient-to-t from-purple-300 via-blue-300 to-transparent"
          />
        </div>
      </div>
    </div>
  );
}