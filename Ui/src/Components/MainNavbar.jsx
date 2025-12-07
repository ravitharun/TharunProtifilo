"use client";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import ThemeContext from "../Theme";
// import { FaCrosshairs } from "react-icons/fa";

import { FaXmark } from "react-icons/fa6";


function MainNavbar({ isMobileOpen, setIsMobileOpen }) {
  const location = useLocation(); // for active link
  const { theme, toggleTheme } = useContext(ThemeContext); // this should work now



  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="w-full bg-gray-900 dark:bg-gray-800 text-white flex justify-between items-center px-6 py-3 shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-cyan-400 tracking-wide cursor-pointer">
      <Link to="/">
          RaviTharun.dev
      </Link>
        </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 font-medium">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className={`hover:text-cyan-400 transition duration-200 ${location.pathname === item.path
                ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                : ""
                }`}
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* Theme Toggle */}
        <li>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 px-3 py-2 rounded-md hover:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            {theme === "dark" ? <FiMoon size={18} /> : <FiSun size={18} />}
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </button>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      {isMobileOpen ? <>
      
     <FaXmark></FaXmark   > </> : <button
        className="md:hidden focus:outline-none"
        aria-label="Open menu"
        onClick={() => setIsMobileOpen(true)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>}
    </nav>
  );
}

export default MainNavbar;