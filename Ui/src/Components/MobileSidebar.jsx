import React, { useState } from "react";
import {
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

function MobileSidebar({ isOpen, setIsOpen }) {
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    { title: "Home", icon: <FaHome /> },
    { title: "About", icon: <FaUser /> },
    { title: "Projects", icon: <FaProjectDiagram /> },
    { title: "Contact", icon: <FaEnvelope /> },
  ];

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 z-40
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-300 ease-in-out
          flex flex-col
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button onClick={() => setIsOpen(false)}>
            <FaTimes size={24} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="rounded-full w-24 h-24 mb-3"
          />
          <h2 className="text-xl font-bold">Tharun Ravi</h2>
        </div>

        {/* Menu */}
        <ul className="flex flex-col space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => toggleMenu(index)}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </li>
          ))}
        </ul>

        {/* Social */}
        <div className="flex justify-center mt-auto space-x-4">
          <a
            href="https://github.com/ravitharun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileSidebar;
