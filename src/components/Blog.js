import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarIcon, ClockIcon, TagIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import axios from "axios";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/solid";

const Blog = ({ isDarkMode }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const filters = [
    { id: "all", label: "All Posts" },
    { id: "development", label: "Development" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5000/api/blog");
        setPosts(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch blog posts. Please try again later.");
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((post) => post.category === activeFilter);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-xl font-semibold">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section
      id="blog"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Latest Articles
          </h1>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            } max-w-2xl mx-auto`}
          >
            Insights, tutorials, and thoughts on web development, programming,
            and technology.
          </p>
          <div className="mt-8">
            {isLoggedIn && (
              <Link
                to="/blog/new"
                className={`inline-flex items-center px-6 py-3 rounded-lg ${
                  isDarkMode
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white transition-colors`}
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                New Post
              </Link>
            )}
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter.id
                  ? "bg-blue-500 text-white"
                  : isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.article
                key={post._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-xl overflow-hidden ${
                  isDarkMode ? "bg-gray-800" : "bg-white"
                } shadow-lg hover:shadow-xl transition-shadow`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span
                      className={`flex items-center text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {formatDate(post.createdAt)}
                    </span>
                    <span
                      className={`flex items-center text-sm ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      <ClockIcon className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2
                    className={`text-xl font-bold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {post.title}
                  </h2>
                  <p
                    className={`mb-4 line-clamp-3 ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
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

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {post.readTime} read
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className={`text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors`}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              No posts found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
