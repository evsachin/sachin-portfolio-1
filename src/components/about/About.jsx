// File: src/components/About/About.jsx
import React from "react";
import { motion } from "framer-motion";
import Resume from "../Resume";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden px-3 md:px-8 py-20 bg-gradient-to-br from-indigo-500 to-green-600">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/90 backdrop-blur-lg shadow-xl rounded-3xl p-12 text-center overflow-hidden border border-white/20">
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-28 h-28 bg-blue-500 rounded-full opacity-10"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500 rounded-full opacity-10"></div>

          <motion.h2
            className="text-5xl font-bold text-gray-800 mb-8 relative"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Me
            </span>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <motion.div className="relative" whileHover={{ scale: 1.05 }}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white p-1 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-2/3 text-left space-y-6">
              <motion.p
                className="text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                I'm a passionate full-stack developer with 5+ years of
                experience building modern web and mobile applications. I
                specialize in creating performant, accessible, and visually
                appealing digital experiences.
              </motion.p>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <h3 className="font-semibold text-blue-700 mb-2">Frontend</h3>
                  <p className="text-gray-600">
                    <span className="font-medium text-blue-500">React.js</span>,
                    Next.js, TypeScript, Tailwind CSS, GraphQL
                  </p>
                </div>

                <div className="bg-purple-50/50 p-4 rounded-xl border border-purple-100">
                  <h3 className="font-semibold text-purple-700 mb-2">
                    Backend
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-medium text-green-600">Node.js</span>,{" "}
                    <span className="font-medium text-purple-600">Java</span>,
                    Python, REST APIs, Microservices
                  </p>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-gray-600 mt-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical articles, or exploring new
                technologies. I believe in continuous learning and sharing
                knowledge with the community.
              </motion.p>

              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <button className="px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  
                  <Resume/>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
