import React, { useState } from 'react';

const Modal = ({ closeModal, onFormSubmit }) => {
  const [studentName, setStudentName] = useState('');
  const [cohort, setCohort] = useState('');
  const [courses, setCourses] = useState('');
  const [dateJoined, setDateJoined] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    // Validate form
    if (!studentName || !cohort || !courses || !dateJoined) {
      setError('Please fill in all fields');
      return;
    }

    const studentDetails = {
      studentName,
      cohort,
      courses: courses.split(','), // Assuming courses are entered as a comma-separated string
      dateJoined,
    };

    try {
      const response = await fetch('https://quyl2.onrender.com/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to submit student details');
      }

      // After successful submission, close the modal
      onFormSubmit();
      closeModal();
    
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4">
      <div className="modal-content bg-white p-4 rounded-lg shadow-lg w-full max-w-sm sm:w-96">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Add New Student</h2>

        {/* Display error message if any */}
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <div className="mb-3">
          <label className="block text-gray-600 mb-2 text-sm">Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500 text-sm"
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-600 mb-2 text-sm">Cohort</label>
          <input
            type="text"
            value={cohort}
            onChange={(e) => setCohort(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500 text-sm"
          />
        </div>

        <div className="mb-3">
          <label className="block text-gray-600 mb-2 text-sm">Courses</label>
          <input
            type="text"
            value={courses}
            onChange={(e) => setCourses(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500 text-sm"
          />
          <small className="text-gray-500 text-xs">Enter courses separated by commas (e.g., Math, Science)</small>
        </div>

        <div className="mb-3">
          <label className="block text-gray-600 mb-2 text-sm">Date Joined</label>
          <input
            type="date"
            value={dateJoined}
            onChange={(e) => setDateJoined(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500 text-sm"
          />
        </div>

        <div className="flex flex-col gap-3 mt-4 sm:flex-row sm:gap-4">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300 w-full sm:w-auto text-sm"
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300 w-full sm:w-auto text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
