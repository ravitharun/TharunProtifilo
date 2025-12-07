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
                    <div className="fixed top-16 left-0 right-0 flex justify-center z-30">
                        <div className="w-full max-w-4xl px-4">
                            <ProjectNavbr />
                        </div>
                    </div>

                    {/* CONTENT BELOW NAVBARS */}
                    <div className="pt-36">
                        {/* 3 PER ROW GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 w-full">
                            {Project.map((proj) => (
                                <div
                                    key={proj.id}
                                    className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 hover:border-gray-500 transition"
                                >
                                    <img
                                        src={proj.thumbnil}
                                        alt={proj.title}
                                        loading="lazy"
                                        className="rounded-lg mb-3"
                                    />
                                    <h2 className="text-xl font-bold mb-2">{proj.title}</h2>
                                    <p className="text-gray-300 mb-3 text-sm">{proj.description}</p>

                                    <a
                                        href={proj.link}
                                        target="_blank"
                                        className="text-blue-400 hover:underline"
                                    >
                                        View Project
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
