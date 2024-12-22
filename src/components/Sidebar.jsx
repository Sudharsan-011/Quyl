// import React from "react";
// import {
//   MdDashboard,
//   MdSchool,
//   MdOutlineMenuBook,
//   MdHelpOutline,
//   MdBarChart,
//   MdSettings,
// } from "react-icons/md";
// import vector from "../assets/vector.png"
// const Sidebar = () => {
//   return (
//     <div className="h-screen w-64 bg-white-800 text-black flex flex-col">
//   {/* Logo Section */}
//   <div className="flex items-center py-4 ">
//     <img src={vector} alt="Quyl Logo" className="h-11 w-15 ml-4" />
//   </div>

//   {/* Remaining Sidebar Content */}

//       {/* Navigation Items */}
//       <nav className="flex-1 mt-4 ">
//         <ul >
//           <li className="flex items-center px-4 py-3 mt-1 hover:bg-gray-300 cursor-pointer">
//             <MdDashboard className="mr-3 text-xl" />
//             <span>Dashboard</span>
//           </li>

//           <li className="flex items-center px-4 py-3  mt-1 hover:bg-gray-300 cursor-pointer">
//             <MdSchool className="mr-3 text-xl" />
//             <span>Students</span>
//           </li>

//           <li className="flex items-center px-4 py-3  mt-1 hover:bg-gray-300 cursor-pointer">
//             <MdOutlineMenuBook className="mr-3 text-xl" />
//             <span>Chapter</span>
//           </li>

//           <li className="flex items-center px-4 py-3  mt-1 hover:bg-gray-300 cursor-pointer">
//             <MdHelpOutline className="mr-3 text-xl" />
//             <span>Help</span>
//           </li>

//           <li className="flex items-center px-4 py-3  mt-1 hover:bg-gray-300 cursor-pointer">
//             <MdBarChart className="mr-3 text-xl" />
//             <span>Reports</span>
//           </li>

//           <li className="flex items-center px-4 py-3  mt-1 hover:bg-gray-300 cursor-pointer">
//             <MdSettings className="mr-3 text-xl" />
//             <span>Settings</span>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import {
  MdDashboard,
  MdSchool,
  MdOutlineMenuBook,
  MdHelpOutline,
  MdBarChart,
  MdSettings,
  MdMenu,
  MdClose,
} from "react-icons/md";
import vector from "../assets/vector.png";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`relative`}>
      {/* Sidebar for Mobile and Desktop */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } sm:block fixed inset-0 z-50 bg-white-800 text-black flex flex-col w-64 h-screen shadow-lg sm:relative sm:h-auto sm:shadow-none`}
      >
        {/* Close Button for Mobile */}
        <div className="sm:hidden flex justify-between items-center px-4 py-3">
          <MdClose
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        </div>

        {/* Logo Section */}
        <div className="flex items-center py-4">
          <img src={vector} alt="Quyl Logo" className="h-11 w-15 ml-4" />
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 mt-4">
          <ul>
            <li className="flex items-center px-4 py-3 mt-1 hover:bg-gray-300 cursor-pointer">
              <MdDashboard className="mr-3 text-xl" />
              <span>Dashboard</span>
            </li>

            <li className="flex items-center px-4 py-3 mt-1 hover:bg-gray-300 cursor-pointer">
              <MdSchool className="mr-3 text-xl" />
              <span>Students</span>
            </li>

            <li className="flex items-center px-4 py-3 mt-1 hover:bg-gray-300 cursor-pointer">
              <MdOutlineMenuBook className="mr-3 text-xl" />
              <span>Chapter</span>
            </li>

            <li className="flex items-center px-4 py-3 mt-1 hover:bg-gray-300 cursor-pointer">
              <MdHelpOutline className="mr-3 text-xl" />
              <span>Help</span>
            </li>

            <li className="flex items-center px-4 py-3 mt-1 hover:bg-gray-300 cursor-pointer">
              <MdBarChart className="mr-3 text-xl" />
              <span>Reports</span>
            </li>

            <li className="flex items-center px-4 py-3 mt-1 hover:bg-gray-300 cursor-pointer">
              <MdSettings className="mr-3 text-xl" />
              <span>Settings</span>
            </li>
          </ul>
        </nav>
      </div>

      {/* Hamburger Button for Mobile */}
      <div className="sm:hidden flex justify-between items-center px-4 py-3">
        <MdMenu
          className="text-2xl cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default Sidebar;

