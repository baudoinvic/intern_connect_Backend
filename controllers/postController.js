
// const Post = require("../models/PostModel");
// // Create a new internship post
// exports.createPost = async (req, res) => {
//   try {
//     const { title, description, requirements,  location, duration, deadline,company } =
//       req.body;

//     const newPost = new Post({
//       title,
//       description,
//       requirements,
//       location,
//       duration,
//       deadline,
//       company,
//     });

//     await newPost.save();
//     res
//       .status(201)
//       .json({ message: "Internship post created successfully", post: newPost });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Get all internship posts
// exports.getAllPosts = async (req, res) => {
//   try {
//     const posts = await Post.find();
//     res.status(200).json(posts);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


const Post = require("../models/PostModel");

// Create a new internship post
exports.createPost = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      location,
      duration,
      deadline,
      company,
      institutionName,
      fieldOfStudy,
    } = req.body;

    const newPost = new Post({
      title,
      description,
      requirements,
      location,
      duration,
      deadline,
      company,
      institutionName,
      fieldOfStudy,
    });

    await newPost.save();
    res
      .status(201)
      .json({ message: "Internship post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all internship posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
