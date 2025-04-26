import React from "react";
import { motion } from "framer-motion";
import yourPhoto from "../../../public/images/logo.png"; // Import your photo
import ParticlesBackground from "../Background.jsx";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <motion.section
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen py-20 px-5 md:px-40 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-300 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-blue-300 rounded-full filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text content */}
        <div className="text-center md:text-left max-w-2xl">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Sachin Kolhe <span className="wave">👋</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-white/90 mb-8"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full-Stack Developer | MERN & Java Enthusiast | Indie Hacker
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="projects" // linking to the projects section
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                View My Work
              </button>
            </Link>

            <Link
              to="contact" // optionally also link the Contact Me button
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              <button className="px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Contact Me
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Profile photo - Using regular img tag for React */}
        <motion.div
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl mt-10 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img
            src={yourPhoto}
            alt="Sachin Kolhe"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>

      {/* Animation styles */}
      <style>{`
        .wave {
          animation-name: wave-animation;
          animation-duration: 2.5s;
          animation-iteration-count: infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        @keyframes wave-animation {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </motion.section>
  );
};

export default Hero;
