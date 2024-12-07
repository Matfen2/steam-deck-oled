"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black py-6 text-white">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        {/* Copyright */}
        <p
          className="text-sm sm:text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "Qaranta", letterSpacing: "1px" }}
        >
          © {new Date().getFullYear()} Valve Corporation. Tous droits réservés.
          Steam, Steam Deck et le logo Steam Deck sont des marques déposées de Valve Corporation aux
          États-Unis et dans d&apos;autres pays.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

