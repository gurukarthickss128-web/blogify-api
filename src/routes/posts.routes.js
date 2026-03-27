const express = require('express');
const router = express.Router();

const { getAllPosts, getPostById } = require('../controllers/posts.controller');

// GET all posts
router.get('/', getAllPosts);

// GET post by ID
router.get('/:id', getPostById);

// POST test route (you can keep this)
router.post('/test-body', (req, res) => {
  console.log('Received body:', req.body);
  res.status(200).json({
    status: 'success',
    received: req.body
  });
});

module.exports = router;