const mongoose = require("mongoose");

const receiveSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true },
    internshipRole: { type: String, required: true },
    dateApplied: { type: Date, default: Date.now },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", receiveSchema);
