

// import { FaEnvelope, FaEnvelopeOpenText, FaHome, FaMapMarkerAlt, FaPhoneAlt, FaProjectDiagram, FaUser, FaGithub, FaLinkedin, FaCertificate, FaTools, FaCode } from "react-icons/fa";
// import ResumeButton from "./ResumeButton";
// import HeroSection from "./HeroSection";
// import { Link } from "react-router-dom";
// function LeftNavbar({ isMobileOpen, setIsMobileOpen }) {
//   console.log({ isMobileOpen, setIsMobileOpen })
//   const menuItems = [
//     { title: "Home", icon: <FaHome />, url: "/" },
//     { title: "About", icon: <FaUser />, url: "/about" },
//     { title: "Skills", icon: <FaCode />, url: "/Skills" },
//     { title: "Certifcations", icon: <FaCertificate />, url: "/Certifcations" },
//     { title: "Projects", icon: <FaProjectDiagram />, url: "/Projects" },
//     { title: "Contact", icon: <FaEnvelopeOpenText />, url: "/Contact" },
//   ];

//   return (
//     <>
//       {/* Overlay for mobile */}
//       <div
//         className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-200 md:hidden ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
//         onClick={() => setIsMobileOpen(false)}
//       />
//       {/* Sidebar */}
//       <aside
//         className={`
//           bg-gray-900 text-white z-50
//           fixed top-0 left-0 h-full w-64 transform
//           ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
//           transition-transform duration-200
//           md:translate-x-0 md:relative md:w-64 md:h-screen
//           flex flex-col
//         `}
//         style={{ minWidth: "16rem" }}
//       >
//         {/* Profile */}
//         <div className="flex flex-col items-center py-6 border-b border-gray-800">
//           <img
//             src="/images/profile.png"
//             alt="Profile"
//             className="rounded-full w-20 h-20 mb-3 border-2 border-gray-600 object-cover"
//           />
//           <h2 className="text-lg font-bold">Tharun Ravi</h2>
//           <p className="text-xs text-gray-400">Frontend Developer & UI/UX Designer</p>
//           <br />
//           <ResumeButton></ResumeButton>
//           <br />
//           <HeroSection></HeroSection>
//         </div>

//         {/* Contact Info */}
//         {/* Contact Info */}
//         <ul className="flex flex-col justify-start space-y-5 px-8 py-6 mb-8 text-sm text-gray-300 border-b border-gray-800">
//           <li className="flex items-center gap-4 hover:text-white transition-colors">
//             <FaPhoneAlt className="text-gray-400 w-5 h-5 flex-shrink-0" />
//             <span className="font-medium truncate">+91 7396994383</span>
//           </li>
//           <li className="flex items-center gap-4 hover:text-white transition-colors">
//             <FaEnvelope className="text-gray-400 w-5 h-5 flex-shrink-0" />
//             <span className="font-medium truncate">tharunravi672@gmail.com</span>
//           </li>
//           <li className="flex items-center gap-4 hover:text-white transition-colors">
//             <FaMapMarkerAlt className="text-gray-400 w-5 h-5 flex-shrink-0" />
//             <span className="font-medium truncate">Bangalore, India</span>
//           </li>
//         </ul>




//         {/* Navigation menu */}
//         {isMobileOpen && (
//           <ul className="flex flex-col space-y-2 px-6 mt-6">
//             {menuItems.map((item) => (
//               <li key={item.title} className="flex items-center p-3 rounded-lg hover:bg-gray-800 hover:scale-105 transition-all cursor-pointer" onClick={() => setIsMobileOpen(false)}>
//                 <Link to={item.url}>
//                   <span className="text-lg">{item.icon}</span>
//                   <span className="ml-4 font-medium">{item.title}</span>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}


//         {/* Social Icons */}
//         <div className="flex justify-center mt-auto space-x-4 mb-6">
//           <a
//             href="https://github.com/ravitharun"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-gray-300"
//           >
//             <FaGithub size={22} />
//           </a>
//           <a
//             href="https://linkedin.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-gray-300"
//           >
//             <FaLinkedin size={22} />
//           </a>
//         </div>
//       </aside>
//     </>
//   );
// }

// export default LeftNavbar;
import { 
  FaEnvelope, 
  FaEnvelopeOpenText, 
  FaHome, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaProjectDiagram, 
  FaUser, 
  FaGithub, 
  FaLinkedin, 
  FaCertificate, 
  FaCode 
} from "react-icons/fa";

import ResumeButton from "./ResumeButton";
import HeroSection from "./HeroSection";
import { Link } from "react-router-dom";
import Share from "./Share";

function LeftNavbar({ isMobileOpen, setIsMobileOpen }) {

  const menuItems = [
    // { title: "Home", icon: <FaHome />, url: "/" },
    { title: "About", icon: <FaUser />, url: "/about" },
    { title: "Resume", icon: <FaCode />, url: "/resume" },
    { title: "Portfolio", icon: <FaProjectDiagram />, url: "/portfolio" },
    { title: "Certifications", icon: <FaCertificate />, url: "/certifications" },
    { title: "Contact", icon: <FaEnvelopeOpenText />, url: "/contact" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 md:hidden transition-all duration-300 
        ${isMobileOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setIsMobileOpen(false)}
      />
<br />
<br />
<br />
<br />
<br />
      {/* Sidebar */}
      <aside
        className={`
          bg-gray-900 text-white z-50
          fixed top-0 left-0 h-full w-64 
          transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:w-64 md:h-screen
          flex flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800
        `}
      >

        {/* Profile */}
        <div className="flex flex-col items-center py-6 border-b border-gray-800">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="rounded-full w-20 h-20 mb-3 border-2 border-gray-600 object-cover"
          />
          <h2 className="text-lg font-bold">Tharun Ravi</h2>
          <br />
           <div className="mt-3 w-full px-4">
            <HeroSection />
          </div>

          <div className="mt-4">
            <ResumeButton />
          </div>

       
        </div>

        {/* Contact Info */}
        <ul className="px-8 py-6 mb-4 space-y-5 text-sm text-gray-300 border-b border-gray-800">
          <li className="flex items-center gap-4 hover:text-white transition">
            <FaPhoneAlt className="text-gray-400 w-5 h-5" />
            <span className="truncate"><a href="tel:+91 7396994383">+91 7396994383</a></span>
          </li>
          <li className="flex items-center gap-4 hover:text-white transition">
            <FaEnvelope className="text-gray-400 w-5 h-5" />
            <span className="truncate"><a href="mailto:tharunravi672@gmail.com">tharunravi672@gmail.com</a></span>
          </li>
          <li className="flex items-center gap-4 hover:text-white transition">
            <FaMapMarkerAlt className="text-gray-400 w-5 h-5" />
            <span className="truncate">Bangalore, India</span>
          </li>
        </ul>

        {/* Navigation menu */}
        {isMobileOpen && <ul className="flex flex-col space-y-1 px-5 mt-2">
          {menuItems.map((item) => (
            <li 
              key={item.title}
              onClick={() => setIsMobileOpen(false)}
              className="rounded-lg hover:bg-gray-800 transition-all cursor-pointer"
            >
              <Link 
                to={item.url} 
                className="flex items-center gap-4 p-3 text-sm font-medium"
              >
                <span className="text-lg">{item.icon}</span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>}

        {/* Social Icons */}
        <div className="flex justify-center mt-auto space-x-5 mb-6 pt-4 border-t border-gray-800">
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
          <Share></Share>
        </div>
      </aside>
    </>
  );
}

export default LeftNavbar;
