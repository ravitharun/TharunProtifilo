// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import LeftNavbar from "../Components/LeftNavbar";
// import MainNavbar from "../Components/MainNavbar";

// export default function About() {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <div className="flex min-h-screen bg-gray-900 text-white overflow-hidden">
//       {/* LEFT NAVBAR */}
//       <LeftNavbar
//         isMobileOpen={isMobileOpen}
//         setIsMobileOpen={setIsMobileOpen}
//       />

//       {/* MAIN CONTENT AREA */}
//       <div className="flex-1 min-w-0">
//         <MainNavbar setIsMobileOpen={setIsMobileOpen} />

//         <div className="px-6 md:px-16 py-12 space-y-14">

//           {/* ABOUT ME */}
//           <section
//             data-aos="fade-up"
//             className="bg-gray-800/40 border border-gray-700 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm"
//           >
//             <h1 className="text-4xl font-bold text-blue-400 mb-4">About Me</h1>

//             <p className="text-lg text-gray-300 leading-relaxed">
//               Hello! I’m <span className="text-white font-semibold">Ravi Tharun</span>, 
//               a Full Stack Developer from Bangalore. I build modern, scalable, and responsive 
//               web apps using <span className="text-white">React, Node.js, and MongoDB</span>.
//             </p>

//             <p className="text-lg text-gray-300 leading-relaxed mt-4">
//               Passionate about UI/UX, I craft clean and user-centric designs that enhance 
//               user experience.
//             </p>

//             <p className="text-lg text-gray-300 leading-relaxed mt-4">
//               Continuously learning new technologies like AI integration and performance 
//               optimization to deliver high-quality digital solutions.
//             </p>
//           </section>

//           {/* TIMELINE */}
//           <section
//             data-aos="fade-right"
//             className="bg-gray-800/40 border border-gray-700 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm"
//           >
//             <h2 className="text-3xl font-semibold text-blue-300 mb-6">
//               📜 My Journey Timeline
//             </h2>

//             <div className="space-y-6">
//               <div className="flex gap-4 items-start">
//                 <span className="text-3xl">🎓</span>
//                 <p className="text-gray-300 text-lg">2022: Started at Dayananda Sagar University.</p>
//               </div>

//               <div className="flex gap-4 items-start">
//                 <span className="text-3xl">💻</span>
//                 <p className="text-gray-300 text-lg">
//                   2022–2024: Built several MERN stack projects, exploring full-stack development.
//                 </p>
//               </div>

//               <div className="flex gap-4 items-start">
//                 <span className="text-3xl">🚀</span>
//                 <p className="text-gray-300 text-lg">
//                   Now: Delving into AI & Machine Learning for intelligent web apps.
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* PASSIONS & INTERESTS */}
//           <section
//             data-aos="fade-left"
//             className="bg-gray-800/40 border border-gray-700 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm"
//           >
//             <h2 className="text-3xl font-semibold text-blue-300 mb-6">
//               🌟 Passions & Interests
//             </h2>

//             <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-300">
//               <li>🎨 Designing clean and beautiful UIs</li>
//               <li>💡 Building creative and meaningful products</li>
//               <li>🧠 Exploring latest tech and innovations</li>
//               <li>🏏 Playing cricket and staying active</li>
//             </ul>
//           </section>

//           {/* SERVICES */}
//           <section
//             data-aos="fade-up"
//             className="bg-gray-800/40 border border-gray-700 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm"
//           >
//             <h2 className="text-3xl font-semibold text-blue-300 mb-6">My Services</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600">
//                 <h3 className="text-xl font-bold mb-2">Web Design</h3>
//                 <p className="text-gray-300">Modern and high-quality UI design.</p>
//               </div>

//               <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600">
//                 <h3 className="text-xl font-bold mb-2">Web Development</h3>
//                 <p className="text-gray-300">Responsive full-stack web development.</p>
//               </div>

//               <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600">
//                 <h3 className="text-xl font-bold mb-2">Mobile Design</h3>
//                 <p className="text-gray-300">Interactive mobile-friendly websites.</p>
//               </div>

//               <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600">
//                 <h3 className="text-xl font-bold mb-2">Learning AI & ML</h3>
//                 <p className="text-gray-300">Smart web apps with AI & ML.</p>
//               </div>
//             </div>
//           </section>

//           {/* GITHUB STATS */}
//           <section
//             data-aos="fade-up"
//             className="bg-gray-800/40 border border-gray-700 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm"
//           >
//             <h2 className="text-3xl font-semibold text-blue-300 mb-6">
//               📊 GitHub Stats & Contributions
//             </h2>

//             <p className="text-gray-300 text-lg">607 contributions in the last year</p>

//             <div className="mt-6">
//               <img
//                 src="https://github-readme-streak-stats.herokuapp.com?user=ravitharun"
//                 alt="GitHub streak"
//                 className="rounded-lg border border-gray-600"
//               />
//             </div>
//           </section>

//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import LeftNavbar from "../Components/LeftNavbar";
import MainNavbar from "../Components/MainNavbar";
import Loader from "../Loaders/Loader";

export default function About() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div className="flex min-h-screen bg-gray-900 text-white overflow-hidden">

      {/* LEFT NAVBAR */}
      <LeftNavbar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 min-w-0 ml-0">

       <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
    <MainNavbar setIsMobileOpen={setIsMobileOpen} />
</div>


        {/* PAGE CONTENT */}
        <div className="px-4 md:px-8 py-10 space-y-12">
          
          {/* ABOUT ME SECTION */}
          <section
            data-aos="fade-up"
            className="bg-gray-800/40 border border-gray-700 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm"
          >
            <h1 className="text-4xl font-bold text-blue-400 mb-4">About Me</h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I’m <span className="text-white font-semibold">Ravi Tharun</span>, 
              a Full Stack Developer from Bangalore. I build modern, scalable, and 
              responsive web apps using <span className="text-white">React, Node.js, and MongoDB</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Passionate about UI/UX, I craft clean and user-centric designs that 
              enhance user experience.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Continuously learning new technologies like AI integration and performance 
              optimization to deliver high-quality digital solutions.
            </p>
          </section>

          {/* TIMELINE */}
          <section
            data-aos="fade-right"
            className="bg-gray-800/40 border border-gray-700 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm"
          >
            <h2 className="text-3xl font-semibold text-blue-300 mb-6">
              📜 My Journey Timeline
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-3xl">🎓</span>
                <p className="text-gray-300 text-lg">
                  2022: Started at Dayananda Sagar University.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl">💻</span>
                <p className="text-gray-300 text-lg">
                  2022–2024: Built several MERN stack projects.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-3xl">🚀</span>
                <p className="text-gray-300 text-lg">
                  Now: Learning AI & ML for intelligent applications.
                </p>
              </div>
            </div>
          </section>

          {/* PASSIONS */}
          <section
            data-aos="fade-left"
            className="bg-gray-800/40 border border-gray-700 p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm"
          >
            <h2 className="text-3xl font-semibold text-blue-300 mb-6">
              🌟 Passions & Interests
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-300">
              <li>🎨 Designing clean and beautiful UIs</li>
              <li>💡 Building creative products</li>
              <li>🧠 Exploring latest tech</li>
              <li>🏏 Playing cricket</li>
            </ul>
          </section>

        </div>

      </div>
    </div>
 
    </>

  );
}

