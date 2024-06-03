"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const nav_items = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Features", href: "/features" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative flex items-center justify-between p-4 bg-white w-full">
      <div className="flex items-center text-2xl font-bold text-red-600">
        <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        <span>uifry</span>
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-black focus:outline-none">
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>
      <ul className="hidden sm:flex space-x-6 text-black font-bold">
        {nav_items.map((item) => (
          <li key={item.name} className="hover:text-red-600">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="hidden sm:block">
        <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          Download
        </button>
      </div>

      {/* Popup Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-10 p-4">
          <ul className="flex flex-col space-y-4 text-black font-bold">
            {nav_items.map((item) => (
              <li key={item.name} className="hover:text-red-600">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="w-full mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            onClick={() => setIsMenuOpen(false)}
          >
            Download
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
