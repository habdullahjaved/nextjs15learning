import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-4 py-3 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="flex-1 text-xl font-bold">LOGO</div>

        {/* Center: Search Bar */}
        <div className="flex-1 hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right: Buttons */}
        <div className="flex flex-1 justify-end gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign In
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            Register
          </button>
        </div>
      </div>
      <div className="hidden md:flex">
        <div className="max-w-xl mx-auto px-4 py-2 flex justify-between gap-[2px] w-full">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About Us
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
