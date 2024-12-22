// import React from "react";
// import { FaEnvelope, FaBell, FaLifeRing, FaUserCircle, FaSearch } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="shadow-md mt-3 ml-0.2">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
//         {/* Search Bar */}
//         <div className="flex-1 mx-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400" // Set text color to gray
//             />
//             {/* Search Icon */}
//             <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
//           </div>
//         </div>

//         {/* Icons Section */}
//         <div className="flex items-center space-x-6">
//           {/* Message Icon */}
//           <FaEnvelope className="text-gray-300 text-xl cursor-pointer hover:text-blue-500" />

//           {/* Support Icon */}
//           <FaLifeRing className="text-gray-300 text-xl cursor-pointer hover:text-blue-500" />
          
//           {/* Notification Icon */}
//           <FaBell className="text-gray-300 text-xl cursor-pointer hover:text-blue-500" />

//           {/* Placeholder Icon */}
//           <div className="text-gray-300 text-xl cursor-pointer hover:text-blue-500"></div>
//         </div>

//         {/* Profile Section */}
//         <div className="flex items-center space-x-3">
//           <FaUserCircle className="text-gray-300 text-3xl" />
//           <span className="text-gray-300 font-medium">John Doe</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FaEnvelope, FaBell, FaLifeRing, FaUserCircle, FaSearch } from "react-icons/fa";
 // Import Dropdown Component

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");  // State to manage the search term

  // Handle input change to update the search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <nav className="shadow-md mt-3 ml-0.2">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}  // Bind the input to the state
              onChange={handleSearchChange}  // Update the state on input change
              className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
            />
            {/* Search Icon */}
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Pass the search term to Dropdown */}
      

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Message Icon */}
          <FaEnvelope className="text-gray-300 text-xl cursor-pointer hover:text-blue-500" />
          {/* Support Icon */}
          <FaLifeRing className="text-gray-300 text-xl cursor-pointer hover:text-blue-500" />
          {/* Notification Icon */}
          <FaBell className="text-gray-300 text-xl mr-1  cursor-pointer hover:text-blue-500" />
        </div>

        {/* Profile Section */}
        <div className="flex items-center ml-1 space-x-3">
          <FaUserCircle className="text-gray-300 text-3xl" />
          <span className="text-gray-300 font-medium">John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
