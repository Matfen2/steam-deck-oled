import React from 'react';
import steamDeckOledBackground from '../../public/picts/steamDeckOled.png';

const Present = () => {
  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat relative flex flex-col justify-center text-center"
      style={{
        backgroundImage: `url(${steamDeckOledBackground.src})`,
        height: '849px',
      }}
    >
      {/* Overlay semi-transparent pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Texte principal */}
      <div className="relative z-10 px-4">
        <p className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg leading-relaxed">
          Vos jeux, partout <br /> avec vous
        </p>
        <p className="text-white text-sm md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed drop-shadow-md">
          Un appareil de jeu PC portable et puissant conçu pour un maximum de confort et une
          expérience équivalente au jeu sur console.
        </p>
      </div>
    </div>
  );
};

export default Present;
