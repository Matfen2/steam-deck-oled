import React from 'react';
import steamDeckOledBackground from '../../public/picts/steamDeckOled.png';

const Present = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col justify-center text-center"
      style={{
        backgroundImage: `url(${steamDeckOledBackground.src})`,
        height: '75vh', 
      }}
    >
      {/* Overlay semi-transparent pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Texte principal */}
      <div className="absolute top-14 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 px-4">
        <p className="text-white text-3xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg leading-relaxed" style={{ fontFamily: "quickynick", letterSpacing: "2px" }}>
          Vos jeux, partout <br /> avec vous
        </p>
      </div>
    </div>
  );
};

export default Present;
