import React from "react";
import { motion } from "framer-motion";

export default function About({ isDarkMode }) {
  return (
    <section
      id="about"
      className={`relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
          </div>

      <div className="container mx-auto px-6 py-20 relative">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Hi, I'm Gebrie.
                </span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                  I love to build amazing apps with React.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`text-lg leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                As a dedicated software engineer, I enjoy tackling challenges
                and building robust, scalable applications. My passion for
                coding goes beyond just writing functions—it's about crafting
                clean, efficient, and impactful solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
            <a
              href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Work With Me
            </a>
            <a
              href="#projects"
                  className={`inline-flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white hover:shadow-lg hover:shadow-gray-800/20"
                      : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-lg hover:shadow-gray-200/20"
                  }`}
            >
              <svg
                    className="w-5 h-5 mr-2 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                viewBox="0 0 24 24"
                  >
                    <path
                strokeLinecap="round"
                strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
              </svg>
                  View Projects
            </a>
              </motion.div>
            </div>
        </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-2xl transform rotate-3 ${
                  isDarkMode ? "bg-blue-600" : "bg-blue-500"
                } opacity-20`}
              ></div>
              <img
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            alt="Developer working on MERN stack"
            src="./mern_stack.svg"
          />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
