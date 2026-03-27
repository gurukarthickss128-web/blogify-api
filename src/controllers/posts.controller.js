// src/controllers/posts.controller.js

const getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      message: "All posts fetched successfully"
    }
  });
};

const getPostById = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    success: true,
    data: {
      postId: id
    }
  });
};

module.exports = {
  getAllPosts,
  getPostById
};