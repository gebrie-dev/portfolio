const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const auth = require("../middleware/auth");
const Post = require("../models/Post");
const slugify = require("slugify");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Helper function to calculate read time
const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
};

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single post
router.get("/:slug", async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create post (protected)
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const { title, content, excerpt, category, tags } = req.body;

    // Generate slug from title
    const slug = slugify(title, { lower: true, strict: true });

    // Calculate read time
    const readTime = calculateReadTime(content);

    const newPost = new Post({
      title,
      content,
      excerpt,
      category,
      tags: tags ? JSON.parse(tags) : [],
      image: req.file ? `/uploads/${req.file.filename}` : null,
      author: req.user.id,
      slug,
      readTime,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    console.error("Post creation error:", err);
    res.status(400).json({ message: err.message });
  }
});

// Update post (protected)
router.put("/:slug", auth, upload.single("image"), async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const { title, content, excerpt, category, tags } = req.body;

    // Update fields
    post.title = title || post.title;
    post.content = content || post.content;
    post.excerpt = excerpt || post.excerpt;
    post.category = category || post.category;
    post.tags = tags ? JSON.parse(tags) : post.tags;
    if (req.file) post.image = `/uploads/${req.file.filename}`;

    // Update slug if title changed
    if (title && title !== post.title) {
      post.slug = slugify(title, { lower: true, strict: true });
    }

    // Update read time if content changed
    if (content && content !== post.content) {
      post.readTime = calculateReadTime(content);
    }

    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete post (protected)
router.delete("/:slug", auth, async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await post.remove();
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
