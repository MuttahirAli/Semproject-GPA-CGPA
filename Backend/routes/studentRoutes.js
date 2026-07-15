const express = require("express");

const router = express.Router();

const Student = require("../models/Student");

// Save Record
router.post("/", async (req, res) => {

  try {

    const student = new Student(req.body);

    await student.save();

    res.status(201).json({
      success: true,
      message: "Record Saved Successfully",
      data: student,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

// Get All Records
router.get("/", async (req, res) => {

  try {

    const students = await Student.find();

    res.status(200).json(students);

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

module.exports = router;