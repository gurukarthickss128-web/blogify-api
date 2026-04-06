const express = require('express');
const router = express.Router();

const { createUser, getAllUsers } = require('../controllers/users.controller');

// POST /users
router.post('/', createUser);

// GET /users
router.get('/', getAllUsers);

module.exports = router;