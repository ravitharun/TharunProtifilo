import React from 'react'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function MinNavbar({ Page }) {
    console.log("Page formt eh min anvb", Page)
    return (
        <>

            <div className="bg-gray-900 shadow-md ">
                <nav className="max-w-6xl mx-auto px-4 ">
                    <ul className="flex flex-wrap md:flex-nowrap gap-6 py-4 items-center justify-center md:justify-start ">
                        <li>
                            <Link
                                to="/resume"
                                className={`flex items-center gap-2 font-semibold transition-colors duration-200 
            ${Page === "Education" ? "text-blue-400" : "text-white"} hover:text-blue-400 `}
                            >
                                <FaGraduationCap className="text-xl" />
                                <span>Education</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/WorkExp"
                                className={`flex items-center gap-2 font-semibold transition-colors duration-200 
            ${Page === "Work Exp" ? "text-blue-400" : "text-white"} hover:text-blue-400`}
                            >
                                <FaBriefcase className="text-xl" />
                                <span>Work Exp</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>)
}

export default MinNavbar