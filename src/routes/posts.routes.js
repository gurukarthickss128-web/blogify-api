const express = require('express');
const router = express.Router();

const { getAllPosts, getPostById, testBody } = require('../controllers/posts.controller');

// GET all posts
router.get('/', getAllPosts);

// GET post by ID
router.get('/:id', getPostById);

// POST test route
router.post('/test-body', testBody);

module.exports = router;