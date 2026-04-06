// Mock service for Module 2 (no DB yet)

const users = []; // in-memory array

const createUser = (userData) => {
  const id = users.length + 1;
  const newUser = { id, ...userData };
  users.push(newUser);
  return newUser;
};

const getAllUsers = () => {
  return users;
};

module.exports = {
  createUser,
  getAllUsers
};