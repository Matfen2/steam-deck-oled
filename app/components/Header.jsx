"use client";

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-500">
          Steam Deck
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#section-present" className="hover:text-red-500 transition">
            Accueil
          </Link>
          <Link href="#section-technic" className="hover:text-red-500 transition">
            Fiche technique
          </Link>
          <Link href="#section-compatibilities" className="hover:text-red-500 transition">
            Jeux compatibles
          </Link>
          <Link href="#section-versions" className="hover:text-red-500 transition">
            Différentes versions
          </Link>
          <Link href="#footer" className="hover:text-red-500 transition">
            Contact
          </Link>
        </nav>

        {/* Menu hamburger pour mobile */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
