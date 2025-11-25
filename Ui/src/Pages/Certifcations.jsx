import React, { useState } from 'react';
import LeftNavbar from '../Components/LeftNavbar';
import MainNavbar from '../Components/MainNavbar';
import certifcations from "../Data/Certifcations.json";
import { FaExternalLinkAlt } from "react-icons/fa";

function Certifcations() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-900 text-white overflow-hidden">

            {/* LEFT NAVBAR */}
            <LeftNavbar
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />

            {/* MAIN AREA */}
            <div className="flex-1 ml-0">

                <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
                    <MainNavbar setIsMobileOpen={setIsMobileOpen} />
                </div>

                <div className="p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-center">Certifications</h1>

                    {/* GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {certifcations.map((data, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 
                                           hover:shadow-2xl hover:scale-[1.03] transition-all duration-200"
                            >

                                {/* IMAGE SECTION */}
                                <div className="h-40 w-full overflow-hidden">
                                    <img
                                        src={data.image}
                                        alt={data.certificateTitle}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="p-5">
                                    <h2 className="text-xl font-bold text-blue-400">
                                        {data.certificateTitle}
                                    </h2>

                                    <p className="mt-1 text-gray-300 font-medium">
                                        {data.provider}
                                    </p>

                                    <p className="mt-2 text-sm text-gray-400">
                                        {data.description}
                                    </p>

                                    <div className="mt-3 flex justify-between text-sm text-gray-400">
                                        <span>Expiry: {data.expiry}</span>
                                        <span>{data.date}</span>
                                    </div>

                                    {/* LINK */}
                                    <a
                                        href={data.linkedinUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                    >
                                        View Certificate <FaExternalLinkAlt className="ml-2" size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Certifcations;
