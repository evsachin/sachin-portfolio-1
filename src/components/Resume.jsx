import React from "react";
import resume from '../../public/resume.pdf'
const Resume = () => {
  return (
    <div className="text-center">
      <a
        href={resume} // Path to the resume file in the public folder
        target="_blank" // Open in a new tab (optional)
        rel="noopener noreferrer"
        className="px-6 py-2 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
