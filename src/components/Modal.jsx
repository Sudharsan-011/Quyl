// import { useState } from "react";

// const Modal = ({ closeModal, onAddStudent }) => {
//   const [studentName, setStudentName] = useState('');
//   const [cohort, setCohort] = useState('');
//   const [courses, setCourses] = useState([]);
//   const [dateJoined, setDateJoined] = useState('');
//   const [error, setError] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const resetForm = () => {
//     setStudentName('');
//     setCohort('');
//     setCourses('');
//     setDateJoined('');
//     setError('');
//   };

//   const handleSubmit = async () => {
//     if (isSubmitting) return; // Prevent multiple submissions
//     setIsSubmitting(true);

//     // Validate inputs
//     if (!studentName || !cohort || !courses || !dateJoined) {
//       setError("All fields are required.");
//       setIsSubmitting(false);
//       return;
//     }

//     const processedCourses = courses
//       .split(',')
//       .map(course => course.trim())
//       .filter(Boolean);

//     if (processedCourses.length === 0) {
//       setError("Please enter at least one valid course.");
//       setIsSubmitting(false);
//       return;
//     }

//     const studentDetails = {
//       studentName,
//       cohort,
//       courses: processedCourses.trim(),
//       dateJoined,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/students', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(studentDetails),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit student details.');
//       }

//       // Reset form and close modal
//       resetForm();
//       closeModal();

//       // Notify parent to update the student list
//       onAddStudent();
//     } catch (err) {
//       setError(err.message || 'Something went wrong. Please try again.');
//     } finally {
//       setIsSubmitting(false); // Reset submission state
//     }
//   };

//   return (
//     <div className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//       <div className="modal-content bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">Add New Student</h2>

//         {/* Error Message */}
//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Student Name</label>
//           <input
//             type="text"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//             placeholder="Enter student's name"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Cohort</label>
//           <input
//             type="text"
//             value={cohort}
//             onChange={(e) => setCohort(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//             placeholder="Enter cohort"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Courses</label>
//           <input
//             type="text"
//             value={courses}
//             onChange={(e) => setCourses(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//             placeholder="Enter courses separated by commas"
//           />
//           <small className="text-gray-500">E.g., Math, Science, English</small>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Date Joined</label>
//           <input
//             type="date"
//             value={dateJoined}
//             onChange={(e) => setDateJoined(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//           />
//         </div>

//         <div className="flex gap-4">
//           <button
//             onClick={handleSubmit}
//             disabled={isSubmitting}
//             className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//           </button>
//           <button
//             onClick={() => {
//               resetForm();
//               closeModal();
//             }}
//             className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;





// import React, { useState } from 'react';

// const Modal = ({ closeModal }) => {
//   const [studentName, setStudentName] = useState('');
//   const [cohort, setCohort] = useState('');
//   const [courses, setCourses] = useState('');
//   const [dateJoined, setDateJoined] = useState('');
//   const [error, setError] = useState('');

//   const resetForm = () => {
//     setStudentName('');
//     setCohort('');
//     setCourses('');
//     setDateJoined('');
//     setError('');
//   };

//   const handleSubmit = async () => {
//     // Validate form inputs
//     if (!studentName) return setError('Student Name is required.');
//     if (!cohort) return setError('Cohort is required.');
//     if (!courses) return setError('Courses are required.');
//     if (!dateJoined) return setError('Date Joined is required.');

//     const studentDetails = {
//       studentName,
//       cohort,
//       courses: courses.split(',').map((course) => course.trim()), // Trim whitespace
//       dateJoined,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/students', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(studentDetails),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to submit student details.');
//       }

//       // Reset form and close modal
//       resetForm();
//       closeModal();
//     } catch (err) {
//       setError(err.message || 'Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//       <div className="modal-content bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">Add New Student</h2>

//         {/* Error Message */}
//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Student Name</label>
//           <input
//             type="text"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//             placeholder="Enter student's name"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Cohort</label>
//           <input
//             type="text"
//             value={cohort}
//             onChange={(e) => setCohort(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//             placeholder="Enter cohort"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Courses</label>
//           <input
//             type="text"
//             value={courses}
//             onChange={(e) => setCourses(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//             placeholder="Enter courses separated by commas"
//           />
//           <small className="text-gray-500">E.g., Math, Science, English</small>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Date Joined</label>
//           <input
//             type="date"
//             value={dateJoined}
//             onChange={(e) => setDateJoined(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//           />
//         </div>

//         <div className="flex gap-4">
//           <button
//             onClick={handleSubmit}
//             className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
//           >
//             Submit
//           </button>
//           <button
//             onClick={() => {
//               resetForm();
//               closeModal();
//             }}
//             className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;


// above is the original

// import React, { useState } from 'react';

// const Modal = ({ closeModal, onAddStudent }) => {
//   const [studentName, setStudentName] = useState('');
//   const [cohort, setCohort] = useState('');
//   const [courses, setCourses] = useState('');
//   const [dateJoined, setDateJoined] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async () => {
//     if (!studentName || !cohort || !courses || !dateJoined) {
//       setError('Please fill in all fields');
//       return;
//     }

//     const newStudent = {
//       studentName,
//       cohort,
//       courses: courses.split(','),
//       dateJoined,
//     };

//     try {
//       // Assuming you have an API to post the student data
//       const response = await fetch('http://localhost:5000/students', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newStudent),
//       });

//       if (!response.ok) throw new Error('Failed to submit student details');

//       // Pass the new student to the parent component
//       onAddStudent(newStudent);

//       // Close the modal after successful submission
//       closeModal();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//       <div className="modal-content bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">Add New Student</h2>

//         {/* Display error message if any */}
//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Student Name</label>
//           <input
//             type="text"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Cohort</label>
//           <input
//             type="text"
//             value={cohort}
//             onChange={(e) => setCohort(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Courses</label>
//           <input
//             type="text"
//             value={courses}
//             onChange={(e) => setCourses(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//           />
//           <small className="text-gray-500">Enter courses separated by commas (e.g., Math, Science)</small>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Date Joined</label>
//           <input
//             type="date"
//             value={dateJoined}
//             onChange={(e) => setDateJoined(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//           />
//         </div>

//         <div className="flex gap-4">
//           <button
//             onClick={handleSubmit}
//             className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
//           >
//             Submit
//           </button>
//           <button
//             onClick={closeModal}
//             className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Modal;

// import React, { useState } from 'react';

// const Modal = ({ closeModal,onFormSubmit }) => {
//   const [studentName, setStudentName] = useState('');
//   const [cohort, setCohort] = useState('');
//   const [courses, setCourses] = useState('');
//   const [dateJoined, setDateJoined] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async () => {
//     // Validate form
//     if (!studentName || !cohort || !courses || !dateJoined) {
//       setError('Please fill in all fields');
//       return;
//     }

//     const studentDetails = {
//       studentName,
//       cohort,
//       courses: courses.split(','), // Assuming courses are entered as a comma-separated string
//       dateJoined,
//     };

//     try {
//       const response = await fetch('http://localhost:5000/students', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(studentDetails),
//       }
    
//     );

//       if (!response.ok) {
//         throw new Error('Failed to submit student details');
//       }

//       // After successful submission, close the modal
//       onFormSubmit();
//       closeModal();
    
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="modal-overlay fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
//       <div className="modal-content bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-xl font-semibold text-gray-800 mb-6">Add New Student</h2>

//         {/* Display error message if any */}
//         {error && <p className="text-red-500 mb-4">{error}</p>}

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Student Name</label>
//           <input
//             type="text"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Cohort</label>
//           <input
//             type="text"
//             value={cohort}
//             onChange={(e) => setCohort(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Courses</label>
//           <input
//             type="text"
//             value={courses}
//             onChange={(e) => setCourses(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//           />
//           <small className="text-gray-500">Enter courses separated by commas (e.g., Math, Science)</small>
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-600 mb-2">Date Joined</label>
//           <input
//             type="date"
//             value={dateJoined}
//             onChange={(e) => setDateJoined(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-gray-500"
//           />
//         </div>

//         <div className="flex gap-4">
//           <button
//             onClick={handleSubmit}
//             className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300"
//           >
//             Submit
//           </button>
//           <button
//             onClick={closeModal}
//             className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-200 transition duration-300"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

//mobile Respone


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
      const response = await fetch('http://localhost:5000/students', {
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
