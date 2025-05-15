import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  ClockIcon,
  TagIcon,
  UserIcon,
} from "@heroicons/react/solid";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ isDarkMode }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/blog/${slug}`);
        setPost(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch blog post. Please try again later.');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

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
            onClick={() => navigate('/blog')}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            Post not found
          </p>
          <button 
            onClick={() => navigate('/blog')}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`min-h-screen py-20 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center">
                <UserIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  {post.author.name}
                </span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-gray-500" />
                <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                  {post.readTime}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <TagIcon className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div
            className={`prose prose-lg ${
              isDarkMode ? "prose-invert" : ""
            } max-w-none`}
          >
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4">Share this post</h3>
            <div className="flex gap-4">
              <button
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      post.title
                    )}&url=${encodeURIComponent(window.location.href)}`,
                    "_blank"
                  )
                }
                className="px-4 py-2 rounded-lg bg-[#1DA1F2] text-white hover:bg-opacity-90"
              >
                Twitter
              </button>
              <button
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      window.location.href
                    )}&title=${encodeURIComponent(post.title)}`,
                    "_blank"
                  )
                }
                className="px-4 py-2 rounded-lg bg-[#0077B5] text-white hover:bg-opacity-90"
              >
                LinkedIn
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPost;
