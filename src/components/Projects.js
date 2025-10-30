import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = ({ isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Ethio Language Learning Platform",
      description:
        "A web platform for learning Ethiopian languages interactively. Features lessons, quizzes, and progress tracking.",
      image: "/images/ethio-language-learning-platform.png",
      technologies: ["React", "Vite"],
      github: "https://github.com/gebrie-dev/Ethio_language_Learning",
      live: "https://ethiolanguage.netlify.app",
      category: "frontend",
      featured: true,
    },
    {
      id: 2,
      title: "Abraham translation service ",
      description:"dynamic translation service for my clients that enable customers send thier document for translatio ",
      image: "/images/culer-hub.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/gebrie-dev/",
      live: "https://abrahamtranslation.netlify.app/",
      category: "fullstack",
      featured: true,
    },
    {
      id: 3,
      title: "channelx",
      description:
        "",
      image: "/images/channelx.png",
      technologies: ["React", "API Integration"],
      github: "https://github.com/gebrie-dev/channelx.git",
      live: "https://channelx-4lh2.vercel.app/",
      category: "frontend",
      featured: true,
    },
    {
      id: 4,
      title: "EthioMarket",
      description:
        "A frontend e-commerce platform for Ethiopian products. Features inventory management, secure payments, and user accounts.",
      image: "/images/EthioMarket.png",
      technologies: ["Next js",  "TypeScript", "Tailwind CSS", ],
      github: "https://github.com/gebrie-dev/Ethiomarket",
      live: "https://ethiomarket.netlify.app/",
      category: "frontend",
      featured: true,
    },
    {
      id: 5,
      title: "gebre books",
      description:
        "Gebre-Books Collection is a RESTful API designed to simplify the management of book collections. With robust features like user authentication, CRUD operations, and random book recommendations, it provides a seamless experience for managing personal or shared libraries.",
      image: "/images/books.png",
      technologies: [ "Node.js", "MongoDB", "Express","Swagger UI"],
      github: "https://gebre-books.onrender.com/api-docs/",
      live: "https://ethiomarket-demo.netlify.app/",
      category: "backend",
      featured: true,
    },
    {
      id: 6,
      title: "Local Sustainability & Recycling Exchange",
      description:
        "",
      image: "/images/localsus.png",
      technologies: ["Next js",  "TypeScript", "Tailwind CSS", ],
      github: "https://github.com/yabibal-Hu/-Local-Sustainability-Recycling-Exchange/tree/backend",
      live: "https://local-sustainability-recycling-exchange.vercel.app/",
      category: "fullstack",
      featured: true,
    },
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
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
            Featured Projects
          </h1>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto mb-8`}
          >
            Here are some of my recent projects that showcase my skills and
            experience. Each project is carefully crafted with attention to
            detail and best practices.
          </p>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-xl overflow-hidden ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 line-clamp-3 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center ${
                        isDarkMode
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-600 hover:text-gray-900"
                      } transition-colors duration-300`}
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="w-5 h-5 mr-2"
                      />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isDarkMode
                          ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                          : "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                      }`}
                    >
                      Live Demo
                      <ExternalLinkIcon className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
