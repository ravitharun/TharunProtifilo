import React, { useState } from "react";

import LeftNavbar from"../Components/LeftNavbar"
import MainNavbar from"../Components/MainNavbar"
export default function About() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <LeftNavbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
      <div className="flex-1 min-w-0">
        <MainNavbar setIsMobileOpen={setIsMobileOpen} />
        {/* ...rest of your main content */}
      </div>
    </div>
  );
}
