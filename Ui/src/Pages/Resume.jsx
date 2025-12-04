import React, { useState } from "react";
import LeftNavbar from "../Components/LeftNavbar";
import MainNavbar from "../Components/MainNavbar";
import { TimelineDemo } from "../Components/TimelineDemo";
import Skills from "./Skills";
import { Link } from "react-router-dom";
import { FaBriefcase, FaGraduationCap, FaSuitcase } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import MinNavbar from "../Components/MinNavbar";

export default function Resume() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const Page = "Education"
    // Work Exp
    console.log(Page)
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

                {/* MAIN CONTENT AREA */}
                <div className="flex-1 min-w-0 ml-0">

                    {/* FIXED TOP NAVBAR */}
                    <div className="fixed top-0 left-0 right-0 z-[40] bg-gray-900 border-b border-gray-800">
                        <MainNavbar
                            setIsMobileOpen={setIsMobileOpen}
                            isMobileOpen={isMobileOpen}
                        />
                    </div>

                    {/* SPACING BELOW NAVBAR */}
                    <div className="h-20"></div>

                    {/* PAGE CONTENT */}
                    <div className="px-4 md:px-6 py-6 space-y-10">

                        {/* TIMELINE SECTION */}
                        <section className="bg-gray-800/40 border border-gray-700 p-6 md:p-8 rounded-xl shadow-xl backdrop-blur-sm">
                            <h1 className="text-xl md:text-3xl font-bold text-blue-400 mb-5 text-center">
                                My Journey Timeline
                            </h1>
                            <MinNavbar Page={Page}></MinNavbar>
                            <br />

                            <TimelineDemo />
                        </section>

                        {/* SKILLS SECTION */}
                        <section className="bg-gray-800/40 border border-gray-700 p-6 md:p-8 rounded-xl shadow-xl backdrop-blur-sm">
                            <h2 className="text-xl md:text-2xl font-semibold text-blue-300 mb-5">
                                Skills & Technologies
                            </h2>

                            <Skills />
                        </section>

                    </div>
                </div>
            </div>
        </>
    );
}
