// src/components/Skills.js

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CodeIcon,
  ChipIcon,
  ServerIcon,
  TerminalIcon,
  LightBulbIcon,
} from "@heroicons/react/solid";

// Import skill icons
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiFirebase,
  SiGit,
  SiDocker,
  SiJenkins,
  SiJest,
  SiWebpack,
} from "react-icons/si";
const Skills = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "frontend",
      category: "Frontend Development",
      icon: <LightBulbIcon className="w-6 h-6" />,
      skills: [
        {
          name: "React",
          icon: <SiReact className="w-full h-full" />,
          color: "text-blue-500",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-full h-full" />,
          color: "text-yellow-400",
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="w-full h-full" />,
          color: "text-orange-500",
        },
        {
          name: "CSS",
          icon: <SiCss3 className="w-full h-full" />,
          color: "text-blue-500",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-full h-full" />,
          color: "text-cyan-500",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-full h-full" />,
          color: "text-blue-600",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-full h-full" />,
          color: "text-gray-800 dark:text-gray-200",
        },
        {
          name: "Redux",
          icon: <SiRedux className="w-full h-full" />,
          color: "text-purple-500",
        },
      ],
    },
    {
      id: "backend",
      category: "Backend Development",
      icon: <ServerIcon className="w-6 h-6" />,
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="w-full h-full" />,
          color: "text-green-600",
        },
        {
          name: "Express",
          icon: <SiExpress className="w-full h-full" />,
          color: "text-gray-800 dark:text-gray-200",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-full h-full" />,
          color: "text-green-500",
        },
        {
          name: "REST APIs",
          icon: <SiPostman className="w-full h-full" />,
          color: "text-orange-600",
        },
        {
          name: "Firebase",
          icon: <SiFirebase className="w-full h-full" />,
          color: "text-yellow-500",
        },
      ],
    },
    {
      id: "tools",
      category: "Tools & DevOps",
      icon: <TerminalIcon className="w-6 h-6" />,
      skills: [
        {
          name: "Git",
          icon: <SiGit className="w-full h-full" />,
          color: "text-orange-600",
        },
        {
          name: "Docker",
          icon: <SiDocker className="w-full h-full" />,
          color: "text-blue-500",
        },
        {
          name: "CI/CD",
          icon: <SiJenkins className="w-full h-full" />,
          color: "text-red-600",
        },
        {
          name: "Jest",
          icon: <SiJest className="w-full h-full" />,
          color: "text-red-800",
        },
        {
          name: "Webpack",
          icon: <SiWebpack className="w-full h-full" />,
          color: "text-blue-400",
        },
      ],
    },
  ];

  const allSkills = skillCategories.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      category: category.category,
      categoryId: category.id,
    }))
  );

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.categoryId === activeCategory);

  return (
    <section
      id="skills"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100"
          : "bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg mb-6">
            <CodeIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Technical Expertise
          </h1>
          <p
            className={`text-lg md:text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } max-w-3xl mx-auto mb-10`}
          >
            A comprehensive overview of my technical proficiency across various
            domains
          </p>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory("all")}
              className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                  : isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <ChipIcon className="w-4 h-4 mr-2" />
              All Skills
            </motion.button>
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30"
                    : isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {React.cloneElement(category.icon, {
                  className: "w-4 h-4 mr-2",
                })}
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
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className={`flex flex-col items-center p-5 rounded-xl ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                    : "bg-white border border-gray-100"
                } shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <div
                  className={`w-16 h-16 mb-4 rounded-lg flex items-center justify-center p-3 ${skill.color}`}
                >
                  {skill.icon}
                </div>
                <h3
                  className={`text-center font-medium ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {skill.name}
                </h3>
                <span
                  className={`text-xs mt-1 px-2 py-1 rounded-full ${
                    isDarkMode
                      ? "bg-gray-700 text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {skill.category}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
