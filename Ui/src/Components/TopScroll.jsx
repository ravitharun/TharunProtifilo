// Top.jsx
import React, { useEffect, useState } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

export default function TopScroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  // console.log(window.)
  return (
    <button
      onClick={goTop}
      aria-label="Scroll to top"
      className={
        "fixed right-6 bottom-8 z-50 p-3 rounded-full shadow-lg transform transition-all duration-300 " +
        (visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none") +
        " bg-gray-800 text-white text-2xl hover:bg-gray-700 hover:scale-105"
      }
    >
      <FaRegArrowAltCircleUp />
    </button>
  );
}
