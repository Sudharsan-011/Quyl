// src/routes/students.js

import express from "express";
import prisma from "../utils/prismaClient.js"; // Add .js extension for local files

const router = express.Router();

// Fetch all students
router.get("/", async (req, res) => {
  try {
    const students = await prisma.students.findMany();
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Failed to fetch students" });
  }
});

// Add a new student
router.post("/", async (req, res) => {
  const { studentName, cohort, courses, dateJoined, lastLogin, status } =
    req.body;

  try {
    // Ensure date fields are parsed to Date objects
    const newStudent = await prisma.student.create({
      data: {
        studentName,
        cohort,
        courses, // Assuming courses is an array of strings or objects
        dateJoined: new Date(dateJoined), // Convert string to Date
        lastLogin: new Date(lastLogin), // Convert string to Date
        status,
      },
    });
    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Failed to create student" });
  }
});

export default router;
