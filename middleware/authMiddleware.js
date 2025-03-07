const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, res, next) => {
//   const token = req.header("Authorization");
 const token = req.header("Authorization")?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Access denied" });

  try {
    const decoded = jwt.verify(token, "your_jwt_secret"); // Verify token
    // req.user = await User.findById(decoded.userId).select("username role"); 
    const user = await User.findById(decoded.userId).select("username role");
    if (!user) return res.status(404).json({ message: "User not found" });
    req.user = user;

    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
