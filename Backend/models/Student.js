const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    semesterSGPA: {
      type: Number,
      required: true,
    },

    overallCGPA: {
      type: Number,
      required: true,
    },

    semesterHours: {
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