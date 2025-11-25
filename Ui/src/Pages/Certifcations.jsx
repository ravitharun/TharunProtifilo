import React, { useState } from 'react'
import LeftNavbar from '../Components/LeftNavbar'
import MainNavbar from '../Components/MainNavbar'
import certifcations from"../Data/Certifcations.json"

function Certifcations() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    console.log('certifcations',certifcations)
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
                </div>
            </div>

        </>
    )
}

export default Certifcations
