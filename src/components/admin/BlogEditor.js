import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const BlogEditor = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "development",
    tags: "",
    image: null,
    published: false,
  });

  const categories = [
    { id: "development", label: "Development" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        try {
          setLoading(true);
          const response = await axios.get(
            `http://localhost:5000/api/blog/${slug}`
          );
          const post = response.data;

          // Set form data
          setFormData({
            title: post.title || "",
            excerpt: post.excerpt || "",
            content: post.content || "",
            category: post.category || "development",
            tags: post.tags?.join(", ") || "",
            published: post.published || false,
          });

          // Set image preview with full URL
          if (post.image) {
            const imageUrl = post.image.startsWith("http")
              ? post.image
              : `http://localhost:5000/${post.image}`;
            setImagePreview(imageUrl);
          }
        } catch (err) {
          console.error("Error fetching post:", err);
          setError(
            err.response?.data?.message ||
              "Failed to fetch post. Please try again."
          );
        } finally {
          setLoading(false);
        }
      }
    };
    fetchPost();
  }, [slug]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file" && files[0]) {
      const file = files[0];
      setFormData((prev) => ({ ...prev, image: file }));

      // Create image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) => {
        if (key === "tags") {
          formDataToSend.append(
            key,
            JSON.stringify(formData[key].split(",").map((tag) => tag.trim()))
          );
        } else if (key === "image" && formData[key]) {
          formDataToSend.append(key, formData[key]);
        } else if (key !== "image") {
          formDataToSend.append(key, formData[key]);
        }
      });

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Authentication required");
      }

      let response;
      if (slug) {
        response = await axios.put(
          `http://localhost:5000/api/blog/${slug}`,
          formDataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        response = await axios.post(
          "http://localhost:5000/api/blog",
          formDataToSend,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }

      // Handle successful response
      const newSlug = response.data.slug;
      navigate(`/blog/${newSlug}`);
    } catch (err) {
      console.error("Error saving post:", err);
      setError(
        err.response?.data?.message || "An error occurred while saving the post"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading && slug) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`max-w-4xl mx-auto p-6 ${
        isDarkMode ? "text-gray-100" : "text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-8">
        {slug ? "Edit Post" : "Create New Post"}
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 rounded-lg border ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-gray-100"
                : "bg-white border-gray-300 text-gray-900"
            }`}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Excerpt</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows="3"
            className={`w-full px-4 py-2 rounded-lg border ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-gray-100"
                : "bg-white border-gray-300 text-gray-900"
            }`}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="15"
            className={`w-full px-4 py-2 rounded-lg border ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-gray-100"
                : "bg-white border-gray-300 text-gray-900"
            }`}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-gray-100"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
              required
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-gray-100"
                  : "bg-white border-gray-300 text-gray-900"
              }`}
              placeholder="React, JavaScript, Web Development"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Featured Image
          </label>
          <input
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            className={`w-full ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
            required={!slug}
          />
          {imagePreview && (
            <div className="mt-4">
              <img
                src={imagePreview}
                alt="Preview"
                className="h-48 w-full object-cover rounded-lg"
                onError={(e) => {
                  console.error("Image failed to load:", imagePreview);
                  e.target.style.display = "none";
                }}
              />
            </div>
          )}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="published"
            checked={formData.published}
            onChange={handleChange}
            className={`h-4 w-4 ${
              isDarkMode
                ? "text-blue-500 focus:ring-blue-400 border-gray-600"
                : "text-blue-600 focus:ring-blue-500 border-gray-300"
            } rounded`}
          />
          <label
            className={`ml-2 block text-sm ${
              isDarkMode ? "text-gray-300" : "text-gray-900"
            }`}
          >
            Publish immediately
          </label>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate("/blog")}
            className={`px-6 py-2 rounded-lg ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 ${
              loading ? "cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Saving..." : slug ? "Update Post" : "Publish Post"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default BlogEditor;
