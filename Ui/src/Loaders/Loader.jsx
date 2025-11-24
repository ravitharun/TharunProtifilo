import React from "react";

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-4">
      
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer Glow Ring */}
        <div className="absolute w-24 h-24 rounded-full border-4 border-gray-700"></div>

        {/* Animated Gradient Ring */}
        <div className="w-24 h-24 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 animate-spin"></div>

        {/* Center Dot */}
        <div className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/60"></div>
      </div>

      {/* Animated Text */}
      <p className="text-lg md:text-xl font-medium tracking-wide animate-pulse text-gray-300">
               Crafting your Protifilo experience…

      </p>
    </div>
  );
}

export default Loader;
