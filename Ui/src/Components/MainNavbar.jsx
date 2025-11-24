import React from "react";
import { FaBars } from "react-icons/fa";

function MainNavbar({ setIsMobileOpen }) {
  return (
    <nav className="w-full bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-white tracking-wide">
        <span className="text-blue-500">Tharun</span>Dev
      </div>


      {/* Hamburger (mobile) */}
      <button
        className="md:hidden focus:outline-none"
        aria-label="Open menu"
        onClick={() => setIsMobileOpen(true)}
      >
        <FaBars size={24} />
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-6 font-medium">
        <li className="hover:text-gray-300 transition-colors cursor-pointer">Home</li>
        <li className="hover:text-gray-300 transition-colors cursor-pointer">About</li>
        <li className="hover:text-gray-300 transition-colors cursor-pointer">Projects</li>
        <li className="hover:text-gray-300 transition-colors cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default MainNavbar;
