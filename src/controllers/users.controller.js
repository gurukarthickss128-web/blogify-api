const userService = require('../services/userService');

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        error: "All fields are required"
      });
    }

    const newUser = await userService.createUser({
      name,
      email,
      password
    });

    res.status(201).json({
      message: "User created successfully",
      user: newUser
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error"
    });
  }
};

module.exports = { createUser };