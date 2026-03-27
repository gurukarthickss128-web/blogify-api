const User = require('../models/user.model');

const createUser = async (userData) => {
  const newUser = await User.create(userData);
  return newUser;
};

module.exports = { createUser };