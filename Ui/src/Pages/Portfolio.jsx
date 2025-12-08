import React, { useState } from 'react'
import MainNavbar from '../Components/MainNavbar'
import LeftNavbar from '../Components/LeftNavbar'
import TopScroll from '../Components/TopScroll';
import Project from '../Data/Projects.json'
import ProjectNavbr from '../Components/ProjectNavbr';

function Portfolio() {

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            <div className="flex min-h-screen bg-gray-900 text-white overflow-hidden">

                {/* LEFT NAVBAR */}
                <div className="z-[50]">
                    <LeftNavbar
                        isMobileOpen={isMobileOpen}
                        setIsMobileOpen={setIsMobileOpen}
                    />
                </div>

                {/* MAIN CONTENT */}
                <div className="flex-1 min-w-0 ml-0">

                    {/* FIXED TOP NAVBAR */}
                    <div className="fixed top-0 left-0 right-0 z-[40] bg-gray-900 border-b border-gray-800">
                        <MainNavbar
                            isMobileOpen={isMobileOpen}
                            setIsMobileOpen={setIsMobileOpen}
                        />
                    </div>

                    {/* FIXED PROJECT NAVBAR */}
                    <div className="mt-16 w-full flex justify-center">
                        <div className="w-full max-w-4xl px-4">
                            <ProjectNavbr />
                        </div>
                    </div>


                    {/* CONTENT BELOW NAVBARS */}
                    <div className="pt-36">
                        {/* 3 PER ROW GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-full">
                            {Project.map((proj) => (
                                <div
                                    key={proj.id}
                                    className="
                    bg-[#0e1013] p-5 rounded-2xl border border-white/10 
                    shadow-lg shadow-black/40 
                    hover:shadow-blue-500/20 hover:border-blue-500/40
                    transition-all duration-300 group
                "
                                >
                                    {/* IMAGE WRAPPER */}
                                    <div className="relative overflow-hidden rounded-xl mb-4">
                                        <img
                                            src={proj.thumbnil}
                                            alt={proj.title}
                                            loading="lazy"
                                            className="rounded-xl w-full h-48 object-cover 
                                transition-all duration-500 group-hover:scale-110"
                                        />

                                        {/* IMAGE OVERLAY HOVER EFFECT */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                                    </div>

                                    {/* TITLE */}
                                    <h2 className="text-lg font-semibold mb-2 text-white">
                                        {proj.title}
                                    </h2>

                                    {/* DESCRIPTION */}
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                        {proj.description}
                                    </p>

                                    {/* VIEW LINK */}
                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        className="
                        inline-block mt-1 text-blue-400 font-medium 
                        hover:text-blue-300 transition
                    "
                                    >
                                        View Project →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>


                    <TopScroll />
                </div>
            </div>
        </>
    )
}

export default Portfolio;
