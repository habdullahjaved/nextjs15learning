import React from "react";

const Dropdown = () => {
  return (
    <div className="relative group inline-block">
      {/* <!-- Trigger (Products) --> */}
      <button className="px-4 py-2 bg-white hover:text-green-600 font-semibold">
        Products
      </button>

      {/* <!-- Dropdown (hidden until hovered) --> */}
      <div className="absolute left-0 w-40 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Computer
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Mobile
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Laptop
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Watches
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
