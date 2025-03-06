
// const express = require("express");
// const {
//   registerUser,
//   loginUser,
//   logoutUser,
// } = require("../controllers/authController");

// const router = express.Router();

// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/logout", logoutUser);

// module.exports = router;


const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser, // Added getCurrentUser function
} = require("../controllers/authController");

// const authMiddleware = require("../middlewares/authMiddleware"); 
const authMiddleware = require("../middleware/authMidlware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", authMiddleware, getCurrentUser); 

module.exports = router;
