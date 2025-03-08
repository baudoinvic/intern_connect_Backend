// const Application = require("../models/receiveModel");

// // Create a new application
// exports.createApplication = async (req, res) => {
//   try {
//     const { studentName, internshipRole } = req.body;

//     const newApplication = new Application({
//       studentName,
//       internshipRole,
//     });

//     await newApplication.save();
//     res
//       .status(201)
//       .json({
//         message: "Application submitted successfully",
//         application: newApplication,
//       });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Get all applications
// exports.getAllApplications = async (req, res) => {
//   try {
//     const applications = await Application.find();
//     res.status(200).json(applications);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Get a single application by ID
// exports.getApplicationById = async (req, res) => {
//   try {
//     const application = await Application.findById(req.params.id);
//     if (!application)
//       return res.status(404).json({ message: "Application not found" });

//     res.status(200).json(application);
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Update application status (Accept or Reject)
// exports.updateApplicationStatus = async (req, res) => {
//   try {
//     const { status } = req.body;
//     if (!["Accepted", "Rejected"].includes(status)) {
//       return res
//         .status(400)
//         .json({ message: 'Invalid status. Use "Accepted" or "Rejected".' });
//     }

//     const application = await Application.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!application)
//       return res.status(404).json({ message: "Application not found" });

//     res
//       .status(200)
//       .json({
//         message: `Application ${status.toLowerCase()} successfully`,
//         application,
//       });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Delete an application
// exports.deleteApplication = async (req, res) => {
//   try {
//     const application = await Application.findByIdAndDelete(req.params.id);
//     if (!application)
//       return res.status(404).json({ message: "Application not found" });

//     res.status(200).json({ message: "Application deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


const Application = require("../models/receiveModel");

// Create a new application
exports.createApplication = async (req, res) => {
  try {
    const { studentName, internshipRole, fieldOfStudy, institutionName } =
      req.body;

    const newApplication = new Application({
      studentName,
      internshipRole,
      fieldOfStudy,
      institutionName,
    });

    await newApplication.save();
    res.status(201).json({
      message: "Application submitted successfully",
      application: newApplication,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all applications
exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a single application by ID
exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application)
      return res.status(404).json({ message: "Application not found" });

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update application status (Accept or Reject)
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    if (!["Accepted", "Rejected"].includes(status)) {
      return res
        .status(400)
        .json({ message: 'Invalid status. Use "Accepted" or "Rejected".' });
    }

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!application)
      return res.status(404).json({ message: "Application not found" });

    res.status(200).json({
      message: `Application ${status.toLowerCase()} successfully`,
      application,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete an application
exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application)
      return res.status(404).json({ message: "Application not found" });

    res.status(200).json({ message: "Application deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
