const express = require('express');
const router = express.Router();

// Import resource routers
const usersRouter = require('./users.routes');
const postsRouter = require('./posts.routes');

// Mount resource routers
router.use('/users', usersRouter);
router.use('/posts', postsRouter);

module.exports = router;