const userService = require('../services/userService');

// POST /users
const createUser = (req, res) => {
  const newUser = userService.createUser(req.body);
  res.status(201).json({
    success: true,
    data: newUser
  });
};

// GET /users
const getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.status(200).json({
    success: true,
    data: users
  });
};

module.exports = {
  createUser,
  getAllUsers
};