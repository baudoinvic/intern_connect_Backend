const express = require("express");
const { getCurrentUser } = require("../controllers/meController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// GET /api/me
router.get("/", authMiddleware, getCurrentUser);

module.exports = router;
