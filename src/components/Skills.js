// src/components/Skills.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeIcon } from "@heroicons/react/solid";

const Skills = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "frontend",
      category: "Frontend Development",
      skills: [
        { name: "React", level: 90, color: "from-blue-500 to-blue-600" },
        {
          name: "JavaScript",
          level: 85,
          color: "from-yellow-400 to-yellow-500",
        },
        { name: "HTML/CSS", level: 95, color: "from-orange-500 to-orange-600" },
        { name: "Tailwind CSS", level: 88, color: "from-cyan-400 to-cyan-500" },
        { name: "TypeScript", level: 80, color: "from-blue-400 to-blue-500" },
        { name: "Next.js", level: 85, color: "from-gray-500 to-gray-600" },
      ],
    },
    {
      id: "backend",
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
        { name: "Express", level: 80, color: "from-gray-500 to-gray-600" },
        { name: "MongoDB", level: 75, color: "from-green-400 to-green-500" },
        {
          name: "REST APIs",
          level: 85,
          color: "from-purple-500 to-purple-600",
        },
        { name: "GraphQL", level: 70, color: "from-pink-500 to-pink-600" },
        { name: "PostgreSQL", level: 75, color: "from-blue-400 to-blue-500" },
      ],
    },
    {
      id: "tools",
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85, color: "from-red-500 to-red-600" },
        { name: "Docker", level: 70, color: "from-blue-400 to-blue-500" },
        { name: "AWS", level: 65, color: "from-yellow-500 to-yellow-600" },
        { name: "CI/CD", level: 75, color: "from-indigo-500 to-indigo-600" },
        { name: "Jest", level: 80, color: "from-green-400 to-green-500" },
        { name: "Webpack", level: 75, color: "from-blue-400 to-blue-500" },
      ],
    },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section
      id="skills"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <CodeIcon
            className={`mx-auto inline-block w-10 mb-4 ${
              isDarkMode ? "text-blue-400" : "text-blue-600"
            }`}
          />
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto mb-8`}
          >
            Here's a comprehensive overview of my technical expertise and
            proficiency levels across various technologies and tools.
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              All Skills
            </motion.button>
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.category}
              </motion.button>
            ))}
        </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`p-6 rounded-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <h2
                  className={`text-xl font-semibold mb-6 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-sm font-medium ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span
                          className={`text-sm font-medium ${
                            isDarkMode ? "text-blue-400" : "text-blue-600"
                          }`}
                        >
                          {skill.level}%
                </span>
              </div>
                      <div
                        className={`h-2 rounded-full overflow-hidden ${
                          isDarkMode ? "bg-gray-700" : "bg-gray-200"
                        }`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
            </div>
          ))}
        </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
