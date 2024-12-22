-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "studentName" TEXT NOT NULL,
    "cohort" TEXT NOT NULL,
    "courses" TEXT[],
    "dateJoined" TIMESTAMP(3) NOT NULL,
    "lastLogin" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);
