const mongoose = require("mongoose");

const InstitutionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    enum: ["University", "College", "School"],
    required: true,
  },
  location: { type: String, required: true },
  status: { type: String, enum: ["Active", "Inactive"], default: "Active" },
  numberOfStudents: { type: Number, default: 0 },
  joinDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Institution", InstitutionSchema);
