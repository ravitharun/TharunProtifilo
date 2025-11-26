import React, { useState } from 'react'
import LeftNavbar from '../Components/LeftNavbar';
import MainNavbar from '../Components/MainNavbar';
import { TimelineDemo } from '../Components/TimelineDemo';
import Skills from './Skills';

function Resume() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            <div className="flex min-h-screen bg-gray-900 text-white overflow-hidden">


                <LeftNavbar
                    isMobileOpen={isMobileOpen}
                    setIsMobileOpen={setIsMobileOpen}
                />

                {/* MAIN CONTENT AREA */}
                <div className="flex-1 min-w-0 ml-0">

                    <div className="fixed top-0 left-0 right-0 z-[9999] bg-gray-900 border-b border-gray-800">

                        <MainNavbar setIsMobileOpen={setIsMobileOpen}  isMobileOpen={isMobileOpen}/>
                    </div>
                    <TimelineDemo></TimelineDemo>
                    <Skills></Skills>
                </div>
            </div>
        </>
    )
}

export default Resume
