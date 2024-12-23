

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { useState } from 'react';

function App() {
  const [students, setStudents] = useState([]); // State to manage table data
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Manage sidebar state

  const handleAddStudent = (newStudent) => {
    // Update students state
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Navbar and Content */}
      <div className="flex-1">
        <Navbar />
        <Dashboard students={students} onAddStudent={handleAddStudent} />
      </div>
    </div>
  );
}

export default App;

