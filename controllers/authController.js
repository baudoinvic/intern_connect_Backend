const User = require("../models/userModel");
const bcrypt = require("bcryptjs"); // For password hashing
const jwt = require("jsonwebtoken"); // For creating tokens

// User registration
const registerUser = async (req, res) => {
  const { firstname, lastname, username, email, password, role } = req.body;

  try {
    const userExists = await User.findOne({ username });
    if (userExists)
      return res.status(400).json({ message: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      role,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// User login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, role: user.role }, // Include role in token
      "your_jwt_secret",
      { expiresIn: "1h" }
    );

    res.json({ token, role: user.role }); // Send role to frontend
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { registerUser, loginUser };
