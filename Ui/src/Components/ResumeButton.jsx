import React from "react";

function ResumeButton() {
  return (
    <div className="flex justify-center">
      <a
        href="/path-to-your-resume.pdf" // replace with your resume file path
        download
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
        Download Resume
      </a>
    </div>
  );
}

export default ResumeButton;
