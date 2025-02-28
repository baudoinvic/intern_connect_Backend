// const mongoose = require("mongoose");

// const internshipSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     company: {
//       type: String,
//       required: true,
//     },
//     location: {
//       type: String,
//       required: true,
//     },
//     duration: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("Internship", internshipSchema);


const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open", // Default status is "Open"
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Internship", internshipSchema);
