const Post = require("../models/PostModel"); 
cont receive = require("../models/receiveModel");
const User = require("../models/UserModel"); 

// Controller function for overview stats
exports.getOverview = async (req, res) => {
  try {
    const activeInternships = await Post.countDocuments({ status: "active" });

    const totalApplicants = await Application.countDocuments();
    const currentInterns = await Application.countDocuments({
      status: "Accepted",
    });

    res.status(200).json({
      activeInternships,
      totalApplicants,
      currentInterns,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching dashboard summary" });
  }
};



