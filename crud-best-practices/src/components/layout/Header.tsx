// app/components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">
          <Link href="/">MySite</Link>
        </h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-200 transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-200 transition-colors"
          >
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 sm:px-6 lg:px-8 pb-4 space-y-3">
          <Link href="/" className="block hover:text-blue-200">
            Home
          </Link>
          <Link href="/about" className="block hover:text-blue-200">
            About
          </Link>
          <Link href="/contact" className="block hover:text-blue-200">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
