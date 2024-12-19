"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi"; 
import { IoClose } from "react-icons/io5"; 
import SteamDeckOledLogo from "../../public/picts/steamDeckLogo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src={SteamDeckOledLogo} alt="Steam Deck Logo" width={30} height={30} />
        </Link>

        {/* Navigation pour bureau */}
        <nav className="hidden md:flex space-x-4 items-center">
          <Link
            href="#section-technic"
            className="hover:text-red-500 transition text-sm"
            style={{ fontFamily: "Qaranta" }}
          >
            Fiche technique
          </Link>
          <Link
            href="#section-compatibilities"
            className="hover:text-red-500 transition text-sm"
            style={{ fontFamily: "Qaranta" }}
          >
            Jeux compatibles
          </Link>
          <Link
            href="#section-versions"
            className="hover:text-red-500 transition text-sm"
            style={{ fontFamily: "Qaranta" }}
          >
            Différentes versions
          </Link>
          <button
            type="button"
            className="rounded-md text-sm py-2 px-4 transition-all duration-150 hover:scale-110 hover:rounded-full border border-red-500 text-red-500"
            style={{ fontFamily: "Qaranta" }}
          >
            Passer commande
          </button>
        </nav>

        {/* Bouton hamburger pour mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Open navigation menu"
        >
          {isMenuOpen ? (
            <IoClose className="h-6 w-6 text-black" />
          ) : (
            <FiMenu className="h-6 w-6 text-black" />
          )}
        </button>
      </div>

      {/* Menu déroulant pour mobile */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } md:hidden bg-white overflow-hidden transition-all duration-300 absolute top-16 right-0 w-full shadow-md`}
        style={{ borderRadius: "0px 0px 10px 10px" }}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              href="#section-technic"
              className="block text-center text-gray-700 hover:text-red-500 transition" style={{ fontFamily: "Qaranta" }}
              onClick={toggleMenu}
            >
              Fiche technique
            </Link>
          </li>
          <li>
            <Link
              href="#section-compatibilities"
              className="block text-center text-gray-700 hover:text-red-500 transition" style={{ fontFamily: "Qaranta" }}
              onClick={toggleMenu}
            >
              Jeux compatibles
            </Link>
          </li>
          <li>
            <Link
              href="#section-versions"
              className="block text-center text-gray-700 hover:text-red-500 transition" style={{ fontFamily: "Qaranta" }}
              onClick={toggleMenu}
            >
              Différentes versions
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="w-62 mx-auto block text-center rounded-md py-2 px-3 transition-all duration-100 hover:scale-110 hover:rounded-full text-red-500 border border-red-500" style={{ fontFamily: "Qaranta" }}
              onClick={toggleMenu}
            >
              Passer commande
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
