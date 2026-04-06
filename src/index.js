// src/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Import main router
const mainRouter = require('./routes'); // <-- central index router

// Global Middleware
app.use(cors());
app.use(express.json());

// Mount main router with versioned prefix
app.use('/api/v1', mainRouter);

// Optional root route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: { message: 'Welcome to Blogify API!' }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});