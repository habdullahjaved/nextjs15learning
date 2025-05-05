import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-8 w-auto" src="/logo.svg" alt="Bus Rental" />
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-4 hidden md:flex">
            <input
              type="text"
              placeholder="Search destination or bus type..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <select className="border border-gray-300 px-2 py-1 rounded-md">
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>

            {/* Login/Signup */}
            <a
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Login
            </a>

            {/* Menu Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-blue-600">
                Menu ▾
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2 p-2 right-0 z-10">
                <a href="/about" className="block px-4 py-2 hover:bg-gray-100">
                  About
                </a>
                <a
                  href="/services"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
