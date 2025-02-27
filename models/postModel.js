const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    company: { type: String, required: true },
    deadline: {
      month: { type: Number, required: true },
      day: { type: Number, required: true },
      year: { type: Number, required: true },
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
