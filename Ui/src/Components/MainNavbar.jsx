import React from "react";
import { FaBars } from "react-icons/fa";

function MainNavbar({ setIsMobileOpen }) {
  return (
    <nav className="w-full bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold">Protifilo</div>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileOpen(true)}
      >
        <FaBars size={24} />
      </button>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-gray-300 cursor-pointer">Home</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Projects</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default MainNavbar;
