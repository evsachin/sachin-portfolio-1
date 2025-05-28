// File: src/components/About/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Resume from "../Resume";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden px-2 md:px-8 py-20 bg-gradient-to-br from-orange-400 via-pink-500 to-red-600">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-screen filter blur-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-screen filter blur-2xl animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-red-300 rounded-full mix-blend-screen filter blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-screen filter blur-2xl animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 right-32 w-16 h-16 border-2 border-white/30 rotate-45"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-12 h-12 bg-white/20 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-16 w-6 h-6 bg-yellow-300/40 transform rotate-45"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl p-6 md:p-16 text-center overflow-hidden border border-white/30 relative">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 opacity-20 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-400 to-orange-500 opacity-20 rounded-tl-full"></div>
          
          {/* Glowing accent line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-60"></div>

          <motion.h2
            className="text-6xl md:text-7xl font-extrabold text-gray-800 mb-12 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">
              Me
            </span>
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </motion.h2>

          <div className="flex flex-col xl:flex-row gap-16 items-center">
            <motion.div 
              className="xl:w-1/3"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.div 
                className="relative group cursor-pointer" 
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-500 to-red-500 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400 via-orange-400 to-pink-500 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl border-2 border-white overflow-hidden">
                  <div className="w-72 h-72 bg-gradient-to-br from-orange-50 via-pink-50 to-red-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-pink-100/50"></div>
                    <motion.div 
                      className="text-9xl relative z-10"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      👨‍💻
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="xl:w-2/3 text-left space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.p
                className="text-2xl text-gray-700 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                I'm a passionate full-stack developer with 2+ years of
                experience building modern Web Apps and Mobile Applications. I
                specialize in creating performant, accessible, and visually
                appealing digital experiences that make a difference.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl border-2 border-orange-100/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mr-3"></div>
                    <h3 className="font-bold text-orange-700 text-lg">Frontend</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-orange-600">React.js</span>,
                    Next.js, TypeScript, Tailwind CSS, GraphQL
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-2xl border-2 border-pink-100/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-pink-400 rounded-full mr-3"></div>
                    <h3 className="font-bold text-pink-700 text-lg">Backend</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-red-600">Node.js</span>,{" "}
                    <span className="font-semibold text-pink-600">Java</span>,
                    Python, REST APIs, Microservices
                  </p>
                </motion.div>
              </motion.div>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical articles, or exploring new
                technologies. I believe in continuous learning and sharing
                knowledge with the community.
              </motion.p>

              <motion.div
                className="flex justify-center xl:justify-start mt-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
              >
                <motion.button 
                  className="group relative px-10 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white font-semibold rounded-full shadow-2xl overflow-hidden transform transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(251, 113, 133, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center space-x-2">
                    <span>View Resume</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>
                  <Resume/>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;