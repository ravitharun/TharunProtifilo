import React from "react";
import { motion } from "framer-motion";

const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(59,130,246,0.25) 0%, rgba(147,197,253,0.05) 50%, rgba(59,130,246,0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, rgba(147,197,253,0.15) 0%, rgba(147,197,253,0.03) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, rgba(147,197,253,0.1) 0%, rgba(59,130,246,0.02) 80%, transparent 100%)",
  translateY = -300,
  width = 600,
  height = 1400,
  smallWidth = 300,
  duration = 8,
  xOffset = 120
}) => {
  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full z-0">
      {/* Left Motion */}
      <motion.div
        animate={{ x: [0, xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div
          style={{ transform: `translateY(${translateY}px) rotate(-45deg)`, background: gradientFirst, width: `${width}px`, height: `${height}px`, filter: "blur(150px)" }}
          className="absolute"
        />
        <div
          style={{ transform: "rotate(-45deg) translate(5%, -50%)", background: gradientSecond, width: `${smallWidth}px`, height: `${height}px`, filter: "blur(120px)" }}
          className="absolute"
        />
        <div
          style={{ transform: "rotate(-45deg) translate(-180%, -70%)", background: gradientThird, width: `${smallWidth}px`, height: `${height}px`, filter: "blur(100px)" }}
          className="absolute"
        />
      </motion.div>

      {/* Right Motion */}
      <motion.div
        animate={{ x: [0, -xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-0 right-0 w-full h-full"
      >
        <div
          style={{ transform: `translateY(${translateY}px) rotate(45deg)`, background: gradientFirst, width: `${width}px`, height: `${height}px`, filter: "blur(150px)" }}
          className="absolute"
        />
        <div
          style={{ transform: "rotate(45deg) translate(-5%, -50%)", background: gradientSecond, width: `${smallWidth}px`, height: `${height}px`, filter: "blur(120px)" }}
          className="absolute"
        />
        <div
          style={{ transform: "rotate(45deg) translate(180%, -70%)", background: gradientThird, width: `${smallWidth}px`, height: `${height}px`, filter: "blur(100px)" }}
          className="absolute"
        />
      </motion.div>
    </div>
  );
};

export default Spotlight;
