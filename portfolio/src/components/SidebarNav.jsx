import React, { useState } from 'react';

const SidebarNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white w-64 h-screen p-6 lg:w-64 lg:h-screen lg:p-10 md:w-52 md:h-screen md:p-6 sm:w-42 sm:h-screen sm:p-6">
      <button
        className="lg:hidden md:hidden sm:block absolute top-4 left-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      <ul
        className={`lg:flex bg-red-800 lg:flex-col lg:space-y-4 lg:w-full lg:h-screen lg:p-6 md:flex md:flex-col md:space-y-8 md:w-full md:h-screen md:p-6 sm:w-full sm:h-screen sm:p-6 ${isOpen? 'block' : 'hidden'}`}
      >
        <li>
          <a href="#home" className="block text-2xl font-semibold">Home</a>
        </li>
        <li>
          <a href="#about" className="block text-2xl font-semibold">About Me</a>
        </li>
        <li>
          <a href="#hire" className="block text-2xl font-semibold">Hire Me</a>
        </li>
        <li>
          <a href="#experience" className="block text-2xl font-semibold">Experience</a>
        </li>
        <li>
          <a href="#projects" className="block text-2xl font-semibold">Projects</a>
        </li>
        <li>
          <a href="#skills" className="block text-2xl font-semibold">Skills</a>
        </li>
        <li>
          <a href="#contact" className="block text-2xl font-semibold">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarNav;