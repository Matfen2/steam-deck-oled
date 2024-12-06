"use client";

import React from "react";
import Image from "next/image";
import steamDeck from "../../public/picts/games/steamDeckOledGames.png";
import games from "../../public/data/games.json";
import Marquee from "@/components/ui/marquee";

const Compatibilities = () => {
  // Divisez les jeux en deux rangées
  const firstRow = games.slice(0, Math.ceil(games.length / 2));
  const secondRow = games.slice(Math.ceil(games.length / 2));

  const GameCard = ({ img, href }) => {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
      className="relative w-32 h-32 sm:w-44 sm:h-44 md:w-82 md:h-56 lg:w-96 lg:h-64 rounded-md shadow-md transition-transform hover:scale-105">
        <div className="w-full h-full relative">
          <Image src={img} alt="Game thumbnail" layout="fill" objectFit="cover" className="rounded-md" />
        </div>
      </a>
    );
  };

  return (
    <div className="relative p-4 text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${steamDeck.src})` }} id="section-games">
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Contenu principal */}
      <div className="relative z-10  mx-auto">
        {/* Titre principal */}
        <h2 className="text-3xl md:text-4xl sm:text-2xl font-bold text-center mb-4">
          Transformez votre expérience de jeu avec Steam Deck
        </h2>
        <p className="text-center text-base sm:text-sm max-w-4xl mx-auto mb-6">
          Découvrez une bibliothèque de jeux adaptée à votre console portable,
          pour jouer partout avec une qualité inégalée.
        </p>

        {/* Section des jeux compatibles */}
        <div className="flex flex-col items-center md:items-stretch space-y-6">
          <div className="hidden md:flex flex-col space-y-6 w-full">
            <Marquee pauseOnHover className="[--duration:15s] space-x-4">
              {firstRow.map((game) => (
                <GameCard key={game.id} img={game.pict} href={game.href} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:15s] space-x-4">
              {secondRow.map((game) => (
                <GameCard key={game.id} img={game.pict} href={game.href} />
              ))}
            </Marquee>
          </div>

          {/* Affichage en grille pour mobile */}
          <div className="md:hidden grid grid-cols-2 gap-4 justify-center">
            {games.map((game) => (
              <GameCard key={game.id} img={game.pict} href={game.href} />
            ))}
          </div>
        </div>

        {/* Bouton pour explorer les jeux compatibles */}
        <div className="mt-8 flex justify-center md:justify-end">
          <button className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg transition-all duration-150 hover:scale-110 hover:rounded-full hover:bg-red-600">
            Voir les jeux compatibles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Compatibilities;
