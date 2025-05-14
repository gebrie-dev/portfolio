import React from "react";
import { motion } from "framer-motion";
import { CalendarIcon, ClockIcon, TagIcon } from "@heroicons/react/solid";

const BlogPost = ({ post, isDarkMode }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`max-w-4xl mx-auto px-4 py-12 ${
        isDarkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      {/* Header */}
      <header className="mb-8">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {post.title}
        </motion.h1>

        <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
          <div className="flex items-center">
            <CalendarIcon
              className={`w-5 h-5 mr-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
              {post.date}
            </span>
          </div>
          <div className="flex items-center">
            <ClockIcon
              className={`w-5 h-5 mr-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}
            />
            <span className={isDarkMode ? "text-gray-400" : "text-gray-500"}>
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                isDarkMode
                  ? "bg-gray-800 text-gray-300"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <TagIcon className="w-4 h-4 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Featured Image */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 rounded-lg overflow-hidden"
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`prose prose-lg max-w-none ${
          isDarkMode ? "prose-invert" : ""
        }`}
      >
        {post.content}
      </motion.div>

      {/* Author Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={`mt-12 p-6 rounded-lg ${
          isDarkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="flex items-center">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3
              className={`text-xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {post.author.name}
            </h3>
            <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
              {post.author.bio}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Share Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            Share this article:
          </span>
          <div className="flex gap-2">
            {/* Add your social sharing buttons here */}
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default BlogPost;
