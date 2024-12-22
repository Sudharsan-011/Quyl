import express from "express";
import prisma from "./src/utils/prismaClient.js"; // Import the pre-configured Prisma instance
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Check database connection on server startup
async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process if the database connection fails
  }
}

// Routes
app.get("/students", async (req, res) => {
  try {
    const students = await prisma.students.findMany();

    // Convert BigInt values to strings for JSON serialization
    const studentsWithoutBigInt = students.map((student) => {
      return JSON.parse(
        JSON.stringify(student, (key, value) =>
          typeof value === "bigint" ? value.toString() : value
        )
      );
    });

    res.json(studentsWithoutBigInt);
  } catch (error) {
    console.error("Error retrieving students:", error);
    res
      .status(500)
      .json({ error: "Error retrieving students", details: error.message });
  }
});

app.post("/students", async (req, res) => {
  const { studentName, cohort, courses, dateJoined, lastLogin, status } =
    req.body;

  // Check if courses is a string and split it, otherwise, use it as is
  const formattedCourses = Array.isArray(courses)
    ? courses
    : typeof courses === "string"
    ? courses.split(",")
    : [];

  // Add default values if not provided
  const currentDate = new Date();
  const studentData = {
    studentName,
    cohort,
    courses: formattedCourses, // Use formattedCourses
    dateJoined: new Date("2024-12-20"), // Convert the string to a Date object

    lastLogin: lastLogin || currentDate, // Default to current date if not provided
    status: status || "active", // Default to 'active' if not provided
  };
  console.log(studentData);
  try {
    const newStudent = await prisma.students.create({
      data: studentData,
    });
    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Error creating student:", error.message);
    res.status(500).json({ error: "Error creating student" });
  }
});

// Log DATABASE_URL to verify it's loaded correctly
console.log("DATABASE_URL:", process.env.DATABASE_URL);

// Start the server after verifying database connection
const PORT = process.env.PORT || 5000;
checkDatabaseConnection().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
