import { motion } from "framer-motion";
import yourPhoto from "../../assets/images/sachin.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <motion.section
      className="relative flex items-center justify-center min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD9iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Animated gradient circles */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 px-4 sm:px-6">
        {/* Text content */}
        <div className="text-center lg:text-left max-w-2xl order-2 lg:order-1 mt-12 lg:mt-0">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4 backdrop-blur-sm">
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              Sachin Kolhe
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-6 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Crafting exceptional digital experiences through modern web and
            mobile applications with clean, efficient code.
          </motion.p>

          <motion.p
            className="text-md sm:text-lg text-gray-400 mb-8 font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Specializing in{" "}
            <span className="text-blue-400 font-medium">Next.js</span>,{" "}
            <span className="text-blue-400 font-medium">React</span>,{" "}
            <span className="text-blue-400 font-medium">Node.js</span>,{" "}
            <span className="text-blue-400 font-medium">Flutter</span>, and{" "}
            <span className="text-blue-400 font-medium">React Native</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="cursor-pointer group"
            >
              <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5">
                <span className="flex items-center justify-center gap-2">
                  View My Work
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="cursor-pointer group"
            >
              <button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 border-2 border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:bg-blue-500/10 backdrop-blur-sm">
                <span className="flex items-center justify-center gap-2">
                  Get In Touch
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </motion.div>

          {/* Professional stats */}
          <motion.div
            className="flex flex-wrap gap-6 sm:gap-8 mt-12 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">2+</div>
              <div className="text-sm text-gray-400 font-medium tracking-wider">
                YEARS EXPERIENCE
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-sm text-gray-400 font-medium tracking-wider">
                PROJECTS COMPLETED
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-400 font-medium tracking-wider">
                CLIENT SATISFACTION
              </div>
            </div>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          className="relative group order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {/* Glowing border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 p-1 group-hover:scale-105 transition-transform duration-500">
            <div className="absolute inset-2 rounded-full bg-gradient-to-bl from-blue-600 to-indigo-600 opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>

          {/* Image container */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-gradient-to-tr from-blue-500 to-indigo-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
              <img
                src={yourPhoto}
                alt="Sachin Kolhe - Full Stack Developer"
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Tech badges - each uniquely animated */}
          {/* JavaScript */}
          <motion.div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-white font-bold text-sm">JS</span>
          </motion.div>

          {/* React */}
          <motion.div
            className="absolute top-12 -right-8 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg"
            animate={{
              x: [0, 10, -10, 0],
              y: [0, 5, -5, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <span className="text-white font-bold text-sm">React</span>
          </motion.div>

          {/* TypeScript */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center shadow-lg"
            animate={{ y: [0, 8, -8, 0], scale: [1, 1.05, 0.95, 1] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <span className="text-white font-bold text-sm">TS</span>
          </motion.div>

          {/* Tailwind */}
          <motion.div
            className="absolute top-12 -left-8 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg"
            animate={{
              x: [0, -10, 10, 0],
              y: [0, -5, 5, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          >
            <span className="text-white font-bold text-sm">TW</span>
          </motion.div>

          {/* Next.js */}
          <motion.div
            className="absolute top-1/2 -left-10 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
            animate={{ y: [0, -6, 6, 0], rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <span className="text-white font-bold text-xs">Next</span>
          </motion.div>

          {/* Node.js */}
          <motion.div
            className="absolute top-1/2 -right-10 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg"
            animate={{ y: [0, 6, -6, 0], rotate: [0, -10, 10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          >
            <span className="text-white font-bold text-xs">Node</span>
          </motion.div>
        </motion.div>
      </div>

     
    </motion.section>
  );
};

export default Hero;
