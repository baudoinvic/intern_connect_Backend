const express = require("express");
const router = express.Router();
const {
  createInternship,
  getAllInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
} = require("../controllers/internshipController");

// Create internship
router.post("/internships", createInternship);

// Get all internships
router.get("/internships", getAllInternships);

// Get internship by ID
router.get("/internships/:id", getInternshipById);

// Update internship by ID
router.put("/internships/:id", updateInternship);

// Delete internship by ID
router.delete("/internships/:id", deleteInternship);

module.exports = router;
