const Post = require("../models/PostModel"); 
// Controller function for overview stats
exports.getOverview = async (req, res) => {
  try {
    // Count active internships
    const activeInternships = await Post.countDocuments({ status: "active" });

    const currentInterns = 10; 

    res.status(200).json({
      activeInternships,
      currentInterns,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching dashboard summary" });
  }
};
