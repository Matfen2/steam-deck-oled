"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GoDash } from "react-icons/go"; // Bouton Moins
import { IoAddOutline } from "react-icons/io5"; // Bouton Plus
import positive from "../../public/data/positive.json";

const Technic = () => {
  const [showFullList, setShowFullList] = useState(false);

  return (
    <div className="p-8 bg-black text-white" id="section-technic">
      {/* Titre principal */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Jouez plus longtemps, téléchargez plus vite
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-semibold max-w-4xl mx-auto">
          Steam Deck OLED dispose de nouveaux composants internes, ce qui se
          traduit par une meilleure autonomie et des téléchargements plus
          rapides. En plus, Steam Deck OLED est plus léger et chauffe moins.
        </p>
      </div>

      {/* Section des points positifs */}
      <div className="flex flex-wrap justify-center gap-8 my-6">
        {positive.map((positif) => (
          <div
            key={positif.id}
            className="flex flex-col items-center justify-center text-center max-w-xs sm:max-w-sm p-4"
          >
            <Image
              src={positif.pict}
              alt={positif.points}
              width={170}
              height={100}
              className="mb-4"
            />
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              {positif.points}
            </h3>
            <p className="text-sm sm:text-base">{positif.describe}</p>
          </div>
        ))}
      </div>

      {/* Section de la fiche technique */}
      <div className="p-4 md:p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Voir les autres améliorations de Steam Deck OLED
        </h2>

        {/* Liste des améliorations avec un affichage conditionnel */}
        <div
          className={`transition-all duration-300 ${
            showFullList ? "max-h-screen" : "max-h-40 overflow-hidden"
          }`}
        >
          {/* Catégorie Général */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Général</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>
              Mise à jour de l&apos;APU à 6 nm pour plus d&apos;efficacité.
            </li>
            <li>
              Mise à jour de la mémoire à 6 400 MT/S afin d&apos;améliorer la
              gestion de la latence et de l&apos;autonomie.
            </li>
            <li>
              Augmentation de l&apos;épaisseur du module thermique et de ses
              performances.
            </li>
          </ul>

          {/* Catégorie Écran */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Écran</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>La zone active a été étendue.</li>
            <li>
              La fréquence de rafraîchissement a été mise à jour et passe de 60
              Hz à 90 Hz.
            </li>
          </ul>

          {/* Catégorie Audio */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Audio</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>
              La réponse aux sons graves a été améliorée pour plus d&apos;équilibre
              tonal.
            </li>
            <li>
              Le réseau de microphones intégrés peut désormais être utilisé en
              même temps que la prise casque de 3,5 mm.
            </li>
          </ul>

          {/* Catégorie Commandes */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Commandes</h3>
          <ul className="list-disc list-inside mb-4 space-y-2 text-sm md:text-base">
            <li>
              Le matériel des sticks analogiques a été ajusté afin
              d&apos;améliorer les sensations.
            </li>
            <li>
              La fiabilité de la détection tactile du stick analogique a été
              améliorée.
            </li>
            <li>
              La sensibilité des gestes sur le trackpad a été considérablement
              améliorée.
            </li>
          </ul>
        </div>

        {/* Bouton pour afficher/masquer la liste complète */}
        <div className="flex justify-center md:justify-end mt-4">
          <button
            className="rounded-lg px-4 py-2 bg-red-500 text-white font-bold transition-all duration-100 hover:scale-105 hover:rounded-full hover:bg-red-600"
            onClick={() => setShowFullList(!showFullList)}
          >
            {showFullList ? "Masquer" : "En savoir plus"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Technic;
