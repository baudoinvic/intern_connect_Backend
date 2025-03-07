// controllers/meController.js
const User = require("../models/userModel");

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select(
      "username email role"
    );

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      username: user.username,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getCurrentUser };
