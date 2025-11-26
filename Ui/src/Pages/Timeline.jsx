"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import {
  FaCheckCircle,
  FaRegCalendarAlt,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

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
      <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-purple-400/25 blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-400/25 blur-[120px]"></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl mb-4 
        bg-gradient-to-r from-purple-400 to-blue-400 
        bg-clip-text text-transparent font-extrabold text-center">
          My Journey Timeline
        </h2>

        <p className="text-neutral-300 text-sm md:text-base max-w-md text-center">
          A small view of my growth and experience over time.
        </p>
      </div>

      {/* Timeline */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">

            {/* LEFT YEAR LABEL */}
            <div className="sticky z-40 top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 w-10 rounded-full 
              bg-white/20 backdrop-blur-xl border border-white/50 
              shadow-lg flex items-center justify-center">
                <FaRegCalendarAlt className="text-purple-300 text-lg" />
              </div>

              <h3 className="hidden md:block text-xl md:text-4xl font-extrabold 
              bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text pl-20">
                {item.title}
              </h3>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 font-bold 
              bg-gradient-to-r from-blue-300 to-purple-400 text-transparent bg-clip-text text-white">
                {item.title}
              </h3>

              <div className="p-6 rounded-2xl
              bg-white/10 backdrop-blur-xl 
              border border-purple-300/40
              shadow-lg hover:border-purple-400/70 hover:shadow-purple-400/20 
              transition-all duration-300
              text-neutral-200 leading-relaxed space-y-4">

                {/* ICON + DYNAMIC TEXT ROW */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-purple-300">

                  {item.achievement && (
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-lg" />
                      <span className="text-sm">{item.achievement}</span>
                    </div>
                  )}

                  {item.education && (
                    <div className="flex items-center gap-2">
                      <FaGraduationCap className="text-lg" />
                      <span className="text-sm">{item.education}</span>
                    </div>
                  )}

                  {item.location && (
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-lg" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                  )}

                </div>

                {/* CONTENT */}
                <p>{item.content}</p>
              </div>
            </div>

          </div>
        ))}

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
            bg-gradient-to-t from-purple-300 via-blue-200 to-transparent rounded-full"
          />
        </div>

      </div>
    </div>
  );
};
