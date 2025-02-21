const Internship = require("../models/internshipModel");

// Create a new internship
const createInternship = async (req, res) => {
  try {
    const { title, company, location, duration } = req.body;

    const newInternship = new Internship({
      title,
      company,
      location,
      duration,
    });

    const savedInternship = await newInternship.save();
    res.status(201).json(savedInternship);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all internships
const getAllInternships = async (req, res) => {
  try {
    const internships = await Internship.find();
    res.status(200).json(internships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get internship by ID
const getInternshipById = async (req, res) => {
  try {
    const internship = await Internship.findById(req.params.id);
    if (!internship) {
      return res.status(404).json({ message: "Internship not found" });
    }
    res.status(200).json(internship);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an internship by ID
const updateInternship = async (req, res) => {
  try {
    const { title, company, location, duration } = req.body;
    const internship = await Internship.findByIdAndUpdate(
      req.params.id,
      { title, company, location, duration },
      { new: true }
    );
    if (!internship) {
      return res.status(404).json({ message: "Internship not found" });
    }
    res.status(200).json(internship);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an internship by ID
const deleteInternship = async (req, res) => {
  try {
    const internship = await Internship.findByIdAndDelete(req.params.id);
    if (!internship) {
      return res.status(404).json({ message: "Internship not found" });
    }
    res.status(200).json({ message: "Internship deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createInternship,
  getAllInternships,
  getInternshipById,
  updateInternship,
  deleteInternship,
};
