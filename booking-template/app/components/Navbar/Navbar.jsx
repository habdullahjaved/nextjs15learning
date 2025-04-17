// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import { Menu, X, User, ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

// Example category data from API
const categories = [
  {
    id: 1,
    title: "Electronics",
    children: [
      { id: 11, title: "Phones" },
      { id: 12, title: "Laptops" },
      { id: 13, title: "Accessories" },
    ],
  },
  {
    id: 2,
    title: "Fashion",
    children: [
      { id: 21, title: "Men" },
      { id: 22, title: "Women" },
      { id: 23, title: "Kids" },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="w-full shadow-lg text-sm">
      {/* Topbar */}
      <div className="bg-gray-100 hidden md:flex justify-between px-6 py-2">
        <div className="space-x-4">
          <Link href="#">+971000000000</Link>
          <Link href="#">email@email.com</Link>
        </div>
        <div className="space-x-4">
          <Link href="#">Facebook</Link>
          <Link href="#">Instagram</Link>
          {/* <span>🇺🇸</span> */}
        </div>
      </div>

      {/* Middle Bar */}
      <div className="flex justify-between items-center px-4 py-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="w-10" />
          <span className="text-2xl font-bold text-green-600">Green</span>
          <span className="text-2xl font-bold">Cart</span>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search for items..."
            className="w-full px-4 py-2 rounded bg-gray-100"
          />
        </div>

        {/* Icons */}
        <div className="flex gap-4 items-center relative">
          <button>
            <ShoppingCart />
          </button>
          <button>
            <Heart />
          </button>
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)}>
              <User />
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md z-50">
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Login
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Sign Up
                </Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Become a Member
                </Link>
              </div>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-center gap-8 shadow-sm py-3 relative">
        <Link href="#" className="hover:text-green-600">
          Home
        </Link>
        <Link href="#" className="hover:text-green-600">
          Product
        </Link>

        {/* Mega Menu */}
        {/* <div className="relative group inline-block">
          <button className="bg-white hover:text-green-600 font-semibold cursor-pointer">
            Mega Menu
          </button>

          <div className="absolute left-0 mt-1 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50 w-[600px] p-4 grid grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.id}>
                <h4 className="font-semibold text-gray-700 mb-2">
                  {cat.title}
                </h4>
                <ul className="space-y-1">
                  {cat.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-green-600 block"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}
        <div className="relative group inline-block">
          <button className="bg-white hover:text-green-600 font-semibold cursor-pointer">
            Mega Menu
          </button>

          {/* Invisible hover bridge to keep hover state alive */}
          <div className="absolute left-0 top-full h-4 w-full z-40"></div>

          {/* Actual dropdown */}
          {/* <div className="absolute left-0 mt-4 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50 w-[600px] p-4 grid grid-cols-2 gap-6"> */}
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-white shadow-lg border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50 w-[600px] p-4 grid grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div key={cat.id}>
                <h4 className="font-semibold text-gray-700 mb-2">
                  {cat.title}
                </h4>
                <ul className="space-y-1">
                  {cat.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-green-600 block"
                      >
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Link href="#" className="hover:text-green-600">
          Pages
        </Link>
        <Link href="#" className="hover:text-green-600">
          Contact Us
        </Link>
      </nav>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 bg-white px-4",
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0"
        )}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 bg-gray-100 rounded mb-4"
        />
        <div className="space-y-2">
          <Link href="#" className="block">
            Home
          </Link>
          <Link href="#" className="block">
            Product
          </Link>
          <details className=" group">
            <summary className="cursor-pointer">Mega Menu</summary>
            <div className="pl-4 mt-2">
              {categories.map((cat) => (
                <div key={cat.id}>
                  <h4 className="font-semibold mt-2">{cat.title}</h4>
                  <ul className="pl-2">
                    {cat.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href="#"
                          className="block py-1 text-sm text-gray-700"
                        >
                          {child.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
          <Link href="#" className="block">
            Pages
          </Link>
          <Link href="#" className="block">
            Contact Us
          </Link>
          <div className="pt-4 border-t">
            <Link href="#" className="block py-1">
              Login
            </Link>
            <Link href="#" className="block py-1">
              Sign Up
            </Link>
            <Link href="#" className="block py-1">
              Become a Member
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
