"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black p-6 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Valve Corporation. Tous droits réservés.
          Steam, Steam Deck et le logo Steam Deck sont des marques déposées de Valve Corporation aux
          États-Unis et dans d&apos;autres pays.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
