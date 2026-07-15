const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    overallCGPA: {
      type: Number,
      required: true,
    },

    totalHours: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Student", studentSchema);