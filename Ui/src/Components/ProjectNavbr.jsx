import React, { useState } from 'react';
import Project from '../Data/Projects.json';

function ProjectNavbr() {
    const [active, setActive] = useState("All");
    let Dtaa = Project.filter((proj) => proj.ProjectType === active)
    console.log(Dtaa);
    const PType = ["All", "Web", "Ai & Ml", "Data Analystics", "Design"];
    return (
        <>
            {/* MINI RESPONSIVE NAV */}
            <div className="mt-16 bg-gray-900 border-b border-gray-700 py-3">

                {/* HORIZONTAL SCROLL FOR MOBILE */}
                <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar justify-center md:justify-center">

                    {PType.map((type, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActive(type)}
                            className={`
                                px-4 py-2 rounded-lg text-sm whitespace-nowrap 
                                transition-all duration-200
                                ${active === type
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"}
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
