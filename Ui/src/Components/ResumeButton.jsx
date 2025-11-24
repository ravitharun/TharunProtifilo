import React from "react";

function ResumeButton() {
  return (
    <div className="flex justify-center">
      <a
        href="/path-to-your-resume.pdf" // replace with your resume file path
        download
        className="bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-md shadow-md 
                   hover:bg-blue-600 hover:scale-105 transition-all duration-300 
                   flex items-center gap-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0-8l-4 4m4-4l4 4M12 4v8"
          />
        </svg>
        Resume
      </a>
    </div>
  );
}

export default ResumeButton;
