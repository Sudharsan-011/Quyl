// import React, { useState, useEffect } from 'react';
// import Modal from './Modal.jsx'; // Import Modal component

// const Dropdown = () => {
//   // State for Dropdown
//   const [selectedYear, setSelectedYear] = useState('AY2024-2025');
//   const [selectedNum, setSelectedNum] = useState('CBSE1');
//   const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

//   // State for Table
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch students on component mount
//   useEffect(() => {
//     const fetchStudents = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/students');
//         if (!response.ok) {
//           throw new Error('Failed to fetch students');
//         }
//         const data = await response.json();
//         setStudents(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStudents();
//   }, []);

//   // Handlers for Dropdown
//   const handleYearChange = (e) => setSelectedYear(e.target.value);
//   const handleNumChange = (e) => setSelectedNum(e.target.value);
//   const handleAddStudentClick = () => setIsModalOpen(true); // Open modal

//   return (
//     <div className="p-4">
//       {/* Dropdown Section */}
//       <div className="dashboard-container flex justify-between items-center mb-4">
//         {/* Left side: Dropdowns */}
//         <div className="flex items-center gap-4">
//           <select
//             value={selectedYear}
//             onChange={handleYearChange}
//             className="p-2 border border-gray-300 rounded"
//           >
//             <option value="AY2024-2025">AY2024-2025</option>
//             <option value="AY2023-2024">AY2023-2024</option>
//             <option value="AY2022-2023">AY2022-2023</option>
//           </select>

//           <select
//             value={selectedNum}
//             onChange={handleNumChange}
//             className="p-2 border border-gray-300 rounded"
//           >
//             {Array.from({ length: 9 }, (_, index) => (
//               <option key={`CBSE${index + 1}`} value={`CBSE${index + 1}`}>
//                 CBSE{index + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Right side: Add Student Button */}
//         <div>
//           <button
//             onClick={handleAddStudentClick}
//             className="px-6 py-2 text-grey bg-gray-200 hover:bg-gray-700 rounded-md shadow-md transition duration-300"
//           >
//             + Add new Student
//           </button>
//         </div>

//         {/* Modal */}
//         {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} />}
//       </div>

//       {/* Table Section */}
//       <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 p-4">
//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">Error: {error}</p>
//         ) : (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="p-2 border-b">Student Name</th>
//                 <th className="p-2 border-b">Cohort</th>
//                 <th className="p-2 border-b">Courses</th>
//                 <th className="p-2 border-b">Date Joined</th>
//                 <th className="p-2 border-b">Last Login</th>
//                 <th className="p-2 border-b">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="p-4 text-center text-gray-500">
//                     No students found.
//                   </td>
//                 </tr>
//               ) : (
//                 students.map((student) => (
//                   <tr key={student.id} className="border-b hover:bg-gray-50">
//                     <td className="p-2">{student.studentName}</td>
//                     <td className="p-2">{student.cohort}</td>
//                     <td className="p-2">
//                       {Array.isArray(student.courses)
//                         ? student.courses.join(', ')
//                         : 'No courses available'}
//                     </td>
//                     <td className="p-2">
//                       {new Date(student.dateJoined).toLocaleDateString()}
//                     </td>
//                     <td className="p-2">
//                       {new Date(student.lastLogin).toLocaleDateString()}
//                     </td>
//                     <td className="p-2">
//                       <div
//                         className={`w-4 h-4 rounded-full ${
//                           student.status && student.status.trim().toLowerCase() === 'active'
//                             ? 'bg-green-500'
//                             : 'bg-red-500'
//                         }`}
//                       />
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dropdown;
//down is the latest
import { useState,useEffect } from "react";
import Modal from "./Modal"

// const Dashboard = ({ onAddStudent }) => {
//   const [selectedYear, setSelectedYear] = useState('AY2024-2025');
//   const [selectedNum, setSelectedNum] = useState('CBSE1');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [shouldReload, setShouldReload] = useState(false);

//   //Component render after submitting the form 

//   // Fetch data when `shouldReload` changes







//   //
//   const fetchStudents = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('http://localhost:5000/students');
//       if (!response.ok) {
//         throw new Error('Failed to fetch students');
//       }
//       const data = await response.json();
//       setStudents(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };




//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const handleYearChange = (e) => setSelectedYear(e.target.value);
//   const handleNumChange = (e) => setSelectedNum(e.target.value);
//   const handleAddStudentClick = () => setIsModalOpen(true);

//   // Add the onAddStudentOptimistic function to handle optimistic update
//   const onAddStudentOptimistic = (studentDetails) => {
//     // Optimistically add the student to the list
//     setStudents((prevStudents) => [studentDetails, ...prevStudents]);
//   };

//   return (
//     <div className="p-4">
//       <div className="dashboard-container flex justify-between items-center mb-4">
//         {/* Dropdowns */}
//         <div className="flex items-center gap-4">
//           <select value={selectedYear} onChange={handleYearChange} className="p-2 border border-gray-300 rounded">
//             <option value="AY2024-2025">AY2024-2025</option>
//             <option value="AY2023-2024">AY2023-2024</option>
//             <option value="AY2022-2023">AY2022-2023</option>
//           </select>

//           <select value={selectedNum} onChange={handleNumChange} className="p-2 border border-gray-300 rounded">
//             {Array.from({ length: 9 }, (_, index) => (
//               <option key={`CBSE${index + 1}`} value={`CBSE${index + 1}`}>
//                 CBSE{index + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Add Student Button */}
//         <button onClick={handleAddStudentClick} className="px-6 py-2 text-grey bg-gray-200 hover:bg-gray-700 rounded-md shadow-md transition duration-300">
//           + Add new Student
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && <Modal closeModal={() => setIsModalOpen(false)} onFormSubmit={handleFormSubmit} />}

//       {/* Table Section */}
//       <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 p-4">
//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">Error: {error}</p>
//         ) : (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="p-2 border-b">Student Name</th>
//                 <th className="p-2 border-b">Cohort</th>
//                 <th className="p-2 border-b">Courses</th>
//                 <th className="p-2 border-b">Date Joined</th>
//                 <th className="p-2 border-b">Last Login</th>
//                 <th className="p-2 border-b">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="p-4 text-center text-gray-500">
//                     No students found.
//                   </td>
//                 </tr>
//               ) : (
//                 students.map((student) => (
//                   <tr key={student.id} className="border-b hover:bg-gray-50">
//                     <td className="p-2">{student.studentName}</td>
//                     <td className="p-2">{student.cohort}</td>
//                     <td className="p-2">
//                       {Array.isArray(student.courses) ? student.courses.join(', ') : 'No courses available'}
//                     </td>
//                     <td className="p-2">{new Date(student.dateJoined).toLocaleDateString()}</td>
//                     <td className="p-2">{new Date(student.lastLogin).toLocaleDateString()}</td>
//                     <td className="p-2">
//                       <div
//                         className={`w-4 h-4 rounded-full ${student.status && student.status.trim().toLowerCase() === 'active' ? 'bg-green-500' : 'bg-red-500'}`}
//                       />
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };
// const Dashboard = ({ onAddStudent }) => {
//   const [selectedYear, setSelectedYear] = useState('AY2024-2025');
//   const [selectedNum, setSelectedNum] = useState('CBSE1');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch students from the API
//   const fetchStudents = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch('http://localhost:5000/students');
//       if (!response.ok) {
//         throw new Error('Failed to fetch students');
//       }
//       const data = await response.json();
//       setStudents(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const handleYearChange = (e) => setSelectedYear(e.target.value);
//   const handleNumChange = (e) => setSelectedNum(e.target.value);
//   const handleAddStudentClick = () => setIsModalOpen(true);

//   // Function to handle form submission in the modal
//   const handleFormSubmit = async(newStudent) => {
//     // setIsModalOpen(false); // Close modal
//     // setStudents((prevStudents) => [newStudent, ...prevStudents]); 
//     // // Optimistically update the list
//     const response = await fetch('http://localhost:5000/students');
//     const newStudents = await response.json();
//     setStudents(newStudents);
//   };

//   return (
//     <div className="p-4">
//       <div className="dashboard-container flex justify-between items-center mb-4">
//         {/* Dropdowns */}
//         <div className="flex items-center gap-4">
//           <select
//             value={selectedYear}
//             onChange={handleYearChange}
//             className="p-2 border border-gray-300 rounded"
//           >
//             <option value="AY2024-2025">AY2024-2025</option>
//             <option value="AY2023-2024">AY2023-2024</option>
//             <option value="AY2022-2023">AY2022-2023</option>
//           </select>

//           <select
//             value={selectedNum}
//             onChange={handleNumChange}
//             className="p-2 border border-gray-300 rounded"
//           >
//             {Array.from({ length: 9 }, (_, index) => (
//               <option key={`CBSE${index + 1}`} value={`CBSE${index + 1}`}>
//                 CBSE{index + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Add Student Button */}
//         <button
//           onClick={handleAddStudentClick}
//           className="px-6 py-2 text-grey bg-gray-200 hover:bg-gray-700 rounded-md shadow-md transition duration-300"
//         >
//           + Add new Student
//         </button>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <Modal
//           closeModal={() => setIsModalOpen(false)}
//           onFormSubmit={handleFormSubmit}
//         />
//       )}

//       {/* Table Section */}
//       <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 p-4">
//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">Error: {error}</p>
//         ) : (
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="p-2 border-b">Student Name</th>
//                 <th className="p-2 border-b">Cohort</th>
//                 <th className="p-2 border-b">Courses</th>
//                 <th className="p-2 border-b">Date Joined</th>
//                 <th className="p-2 border-b">Last Login</th>
//                 <th className="p-2 border-b">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="p-4 text-center text-gray-500">
//                     No students found.
//                   </td>
//                 </tr>
//               ) : (
//                 students.map((student) => (
//                   <tr key={student.id} className="border-b hover:bg-gray-50">
//                     <td className="p-2">{student.studentName}</td>
//                     <td className="p-2">{student.cohort}</td>
//                     <td className="p-2">
//                       {Array.isArray(student.courses)
//                         ? student.courses.join(', ')
//                         : 'No courses available'}
//                     </td>
//                     <td className="p-2">
//                       {new Date(student.dateJoined).toLocaleDateString()}
//                     </td>
//                     <td className="p-2">
//                       {new Date(student.lastLogin).toLocaleDateString()}
//                     </td>
//                     <td className="p-2">
//                       <div
//                         className={`w-4 h-4 rounded-full ${
//                           student.status &&
//                           student.status.trim().toLowerCase() === 'active'
//                             ? 'bg-green-500'
//                             : 'bg-red-500'
//                         }`}
//                       />
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };


//Mobile Version

const Dashboard = ({ onAddStudent }) => {
  const [selectedYear, setSelectedYear] = useState('AY2024-2025');
  const [selectedNum, setSelectedNum] = useState('CBSE1');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch students from the API
  const fetchStudents = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/students');
      if (!response.ok) {
        throw new Error('Failed to fetch students');
      }
      const data = await response.json();
      setStudents(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const handleNumChange = (e) => setSelectedNum(e.target.value);
  const handleAddStudentClick = () => setIsModalOpen(true);

  // Function to handle form submission in the modal
  const handleFormSubmit = async(newStudent) => {
    const response = await fetch('http://localhost:5000/students');
    const newStudents = await response.json();
    setStudents(newStudents);
  };

  return (
    <div className="p-4">
      <div className="dashboard-container flex flex-col sm:flex-row justify-between items-center mb-4">
        {/* Dropdowns */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4 sm:mb-0">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="p-2 border border-gray-300 rounded mb-2 sm:mb-0"
          >
            <option value="AY2024-2025">AY2024-2025</option>
            <option value="AY2023-2024">AY2023-2024</option>
            <option value="AY2022-2023">AY2022-2023</option>
          </select>

          <select
            value={selectedNum}
            onChange={handleNumChange}
            className="p-2 border border-gray-300 rounded"
          >
            {Array.from({ length: 9 }, (_, index) => (
              <option key={`CBSE${index + 1}`} value={`CBSE${index + 1}`}>
                CBSE{index + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Add Student Button */}
        <button
          onClick={handleAddStudentClick}
          className="px-6 py-2 text-grey bg-gray-200 hover:bg-gray-700 rounded-md shadow-md transition duration-300"
        >
          + Add new Student
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          onFormSubmit={handleFormSubmit}
        />
      )}

      {/* Table Section */}
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 p-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">Error: {error}</p>
        ) : (
          <table className="min-w-full bg-white text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border-b">Student Name</th>
                <th className="p-2 border-b">Cohort</th>
                <th className="p-2 border-b">Courses</th>
                <th className="p-2 border-b">Date Joined</th>
                <th className="p-2 border-b">Last Login</th>
                <th className="p-2 border-b">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-500">
                    No students found.
                  </td>
                </tr>
              ) : (
                students.map((student) => (
                  <tr key={student.id} className="border-b hover:bg-gray-50">
                    <td className="p-2">{student.studentName}</td>
                    <td className="p-2">{student.cohort}</td>
                    <td className="p-2">
                      {Array.isArray(student.courses)
                        ? student.courses.join(', ')
                        : 'No courses available'}
                    </td>
                    <td className="p-2">
                      {new Date(student.dateJoined).toLocaleDateString()}
                    </td>
                    <td className="p-2">
                      {new Date(student.lastLogin).toLocaleDateString()}
                    </td>
                    <td className="p-2">
                      <div
                        className={`w-4 h-4 rounded-full ${
                          student.status &&
                          student.status.trim().toLowerCase() === 'active'
                            ? 'bg-green-500'
                            : 'bg-red-500'
                        }`}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;