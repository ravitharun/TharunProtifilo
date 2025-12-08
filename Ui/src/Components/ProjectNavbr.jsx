import React, { useState } from 'react';
import Project from '../Data/Projects.json';

function ProjectNavbr() {
    const [active, setActive] = useState("All");

    const PType = ["All", "Web", "Ai & Ml", "Data Analystics", "Design"];
    const Data = Project.filter((proj) => {
        if (active === "All") {
            return true;
        }
        return proj.ProjectType === active;
    }
    );

    return (
        <>
            <div className="mt-16 bg-[#0d0f12]/80 backdrop-blur-xl border-b border-white/10 py-4">

                {/* FIXED RESPONSIVE SCROLL NAV */}
                <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar 
                                justify-start sm:justify-center whitespace-nowrap">

                    {PType.map((type, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActive(type)}
                            className={`
                                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                border shadow-sm
                                ${active === type
                                    ? "bg-gradient-to-r from-blue-600 to-blue-400 text-white border-blue-500 shadow-blue-500/50 shadow-md"
                                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}
                            `}
                        >
                            {type}
                        </button>
                    ))}

                </div>
            </div>
        </>
    );
}

export default ProjectNavbr;
