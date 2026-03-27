// src/index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: JSON body parser
app.use(express.json());

// Import routes
const postsRouter = require('./routes/posts.routes');
app.use('/api/v1/posts', postsRouter);

// Test root route
app.get('/', (req, res) => {
  res.send('Welcome to Blogify API!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});