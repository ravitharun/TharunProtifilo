

import { FaEnvelope, FaEnvelopeOpenText, FaHome, FaMapMarkerAlt, FaPhoneAlt, FaProjectDiagram, FaUser, FaGithub, FaLinkedin } from "react-icons/fa";
function LeftNavbar({ isMobileOpen, setIsMobileOpen }) {
  console.log({ isMobileOpen, setIsMobileOpen })
  const menuItems = [
    { title: "Home", icon: <FaHome /> },
    { title: "About", icon: <FaUser /> },
    { title: "Projects", icon: <FaProjectDiagram /> },
    { title: "Contact", icon: <FaEnvelopeOpenText /> },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-200 md:hidden ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileOpen(false)}
      />
      {/* Sidebar */}
      <aside
        className={`
          bg-gray-900 text-white z-50
          fixed top-0 left-0 h-full w-64 transform
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          transition-transform duration-200
          md:translate-x-0 md:relative md:w-64 md:h-screen
          flex flex-col
        `}
        style={{ minWidth: "16rem" }}
      >
        {/* Profile */}
        <div className="flex flex-col items-center py-6 border-b border-gray-800">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="rounded-full w-20 h-20 mb-3 border-2 border-gray-600 object-cover"
          />
          <h2 className="text-lg font-bold">Tharun Ravi</h2>
          <p className="text-xs text-gray-400">Frontend Developer & UI/UX Designer</p>
        </div>

        {/* Contact Info */}
       {/* Contact Info */}
<ul className="flex flex-col justify-start space-y-5 px-8 py-6 mb-8 text-sm text-gray-300 border-b border-gray-800">
  <li className="flex items-center gap-4 hover:text-white transition-colors">
    <FaPhoneAlt className="text-gray-400 w-5 h-5 flex-shrink-0" />
    <span className="font-medium truncate">+91 7396994383</span>
  </li>
  <li className="flex items-center gap-4 hover:text-white transition-colors">
    <FaEnvelope className="text-gray-400 w-5 h-5 flex-shrink-0" />
    <span className="font-medium truncate">tharunravi672@gmail.com</span>
  </li>
  <li className="flex items-center gap-4 hover:text-white transition-colors">
    <FaMapMarkerAlt className="text-gray-400 w-5 h-5 flex-shrink-0" />
    <span className="font-medium truncate">Bangalore, India</span>
  </li>
</ul>




        {/* Navigation menu */}
        {isMobileOpen && (
          <ul className="flex flex-col space-y-2 px-6 mt-6">
            {menuItems.map((item) => (
              <li key={item.title} className="flex items-center p-3 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all cursor-pointer" onClick={() => setIsMobileOpen(false)}>
                <span className="text-lg">{item.icon}</span>
                <span className="ml-4 font-medium">{item.title}</span>
              </li>
            ))}
          </ul>
        )}


        {/* Social Icons */}
        <div className="flex justify-center mt-auto space-x-4 mb-6">
          <a
            href="https://github.com/ravitharun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </aside>
    </>
  );
}

export default LeftNavbar;
