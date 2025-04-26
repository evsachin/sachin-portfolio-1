import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-xl font-bold">Sachin Kolhe</h3>
          <p className="text-gray-400 mt-1">
            Full-Stack Developer | MERN & Java Enthusiast
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/evsachin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/sachinkolhe1999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/evsachin123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://leetcode.com/u/et52nNoxt2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            aria-label="LeetCode"
          >
            <SiLeetcode className="w-6 h-6" />
          </a>
          <a
            href="mailto:sachin.kolhe.evisiontech@gmail.com"
            className="text-gray-300 hover:text-red-400 transition-colors duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Sachin Kolhe. All rights reserved.</p>
        <p className="mt-1">Built with React and Tailwind CSS</p>
      </div>
    </footer>
  );
}
