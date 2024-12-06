"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi'; // Bouton Bar
import { IoClose } from 'react-icons/io5'; // Bouton Close
import steamDeckOledLogo from '../../public/picts/steamDeckLogo.png';

const Menu = ({ isMobile, onClose }) => {
  return (
    <div className={`${isMobile ? 'flex flex-col items-start space-y-4 p-6' : 'flex flex-row space-x-5'}`}>
      <ul className={`${isMobile ? 'flex flex-col items-start space-y-4' : 'flex flex-row items-center space-x-9 md:space-x-8' }` }>
        <li className="cursor-pointer text-left text-xl md:text-lg"><a href='#section-technic'>Fiche technique</a></li>
        <li className="cursor-pointer text-left text-xl md:text-lg">Jeux compatibles</li>
        <li className="cursor-pointer text-left text-xl md:text-lg">Différentes Versions</li>
      </ul>
      <button type="button" className="rounded-md py-2 px-4 transition-all duration-100 hover:scale-110 hover:rounded-full"
      style={{ border: '1px solid #F4A9AA' }} onClick={onClose}>
        Passer commande
      </button>
    </div>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => setShowMenu(false);

  return (
    <header className="flex flex-row items-center justify-between px-4 py-4 relative">
      <Link href="/">
        <Image src={steamDeckOledLogo} alt="Steam Deck Logo" width={40} height={30} />
      </Link>

      {/* Menu principal pour desktop */}
      <div className="hidden md:block">
        <Menu isMobile={false} />
      </div>

      {/* Bouton pour ouvrir le menu mobile */}
      <button
        className="block md:hidden text-3xl"
        onClick={toggleMenu}
        aria-label={showMenu ? 'Fermer le menu' : 'Ouvrir le menu'}
      >
        {showMenu ? <IoClose /> : <FiMenu />}
      </button>

      {/* Menu mobile */}
      {showMenu && (
        <div
          className="fixed top-0 right-0 w-50 h-62 bg-white z-50"
          style={{ border: '1px solid #F4A9AA', borderRadius: '0px 0px 0px 40px' }}
        >
          <div className="flex flex-row justify-between items-center p-4">
            {/* Bouton de fermeture */}
            <button
              className="text-3xl absolute top-4 right-3"
              onClick={closeMenu}
              aria-label="Fermer le menu"
            >
              <IoClose />
            </button>
          </div>
          {/* Menu placé en haut à gauche */}
          <Menu isMobile={true} onClose={closeMenu} />
        </div>
      )}
    </header>
  );
};

export default Header;
