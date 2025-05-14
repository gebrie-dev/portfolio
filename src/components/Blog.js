import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchIcon, TagIcon } from "@heroicons/react/solid";

const Blog = ({ isDarkMode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample blog posts data - replace with your actual blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with React",
      excerpt:
        "Learn how to build scalable web applications using React and modern best practices...",
      category: "Web Development",
      date: "2024-03-15",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["React", "JavaScript", "Web Development"],
    },
    {
      id: 2,
      title: "Mastering TypeScript for Better Code Quality",
      excerpt:
        "Discover how TypeScript can improve your code quality and developer experience...",
      category: "TypeScript",
      date: "2024-03-10",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      tags: ["TypeScript", "JavaScript", "Programming"],
    },
    // Add more blog posts here
  ];

  const categories = [
    "all",
    ...new Set(blogPosts.map((post) => post.category.toLowerCase())),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      post.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="blog"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Technical Blog
          </h2>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Insights, tutorials, and thoughts on software development
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-4 py-2 pl-10 rounded-lg focus:outline-none transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-white placeholder-gray-400"
                  : "bg-white text-gray-900 placeholder-gray-500"
              }`}
            />
            <SearchIcon
              className={`w-5 h-5 absolute left-3 top-2.5 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? isDarkMode
                      ? "bg-blue-600 text-white"
                      : "bg-blue-600 text-white"
                    : isDarkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                }`}
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${
                      isDarkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-600 text-white"
                    }`}
                  >
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm mb-4">
                    <span
                      className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                    >
                      {post.date}
                    </span>
                    <span
                      className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                    >
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {post.title}
                  </h3>

                  <p
                    className={`mb-4 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <TagIcon className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className={`mt-4 w-full py-2 rounded-lg font-medium transition-colors duration-300 ${
                      isDarkMode
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    Read More
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                isDarkMode ? "bg-blue-600 text-white" : "bg-blue-600 text-white"
              }`}
            >
              1
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              2
            </button>
            <button
              className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Blog;
