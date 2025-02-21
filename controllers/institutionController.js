const Institution = require("../models/institutionModel");

// Create Institution
exports.createInstitution = async (req, res) => {
  try {
    const { name, type, location, status, numberOfStudents, joinDate } =
      req.body;

    const newInstitution = new Institution({
      name,
      type,
      location,
      status,
      numberOfStudents,
      joinDate,
    });

    await newInstitution.save();
    res
      .status(201)
      .json({
        message: "Institution created successfully",
        institution: newInstitution,
      });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get All Institutions
exports.getAllInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find();
    res.status(200).json(institutions);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
