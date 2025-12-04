import React, { useState } from 'react'
import MainNavbar from '../Components/MainNavbar'
import LeftNavbar from '../Components/LeftNavbar'

function Portfolio() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
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
                    </div>
                </div>
            </>
        </>
    )
}

export default Portfolio
