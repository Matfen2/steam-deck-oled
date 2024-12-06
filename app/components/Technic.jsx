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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Jouez plus longtemps, téléchargez plus vite
      </h2>
      <p className="text-center text-lg md:text-xl font-semibold max-w-5xl mx-auto">
        Steam Deck OLED dispose de nouveaux composants internes, ce qui se traduit par une meilleure
        autonomie et des téléchargements plus rapides. En plus, Steam Deck OLED est plus léger et
        chauffe moins.
      </p>
      </div>

      {/* Section des points positifs */}
      <div className="flex flex-wrap justify-center gap-8 mb-6 p-4">
        {positive.map((positif) => (
          <div
            key={positif.id}
            className="flex flex-col items-center text-center max-w-md p-6"
          >
            <Image
              src={positif.pict}
              alt={positif.points}
              width={210}
              height={120}
              className="mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{positif.points}</h3>
            <p className="text-sm">{positif.describe}</p>
          </div>
        ))}
      </div>

      {/* Section de la fiche technique */}
      <div className="p-8 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 -ml-16">
        Voir les autres améliorations de Steam Deck OLED
        </h2>

      {/* Liste des améliorations avec un affichage conditionnel */}
      <div className={`transition-all duration-300 mx-auto ${showFullList ? "max-h-screen" : "max-h-24 overflow-hidden"}`}>
        {/* Catégorie Général */}
        <h3 className="text-xl font-bold mb-2">Général</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Mise à jour de lAPU à 6 nm pour plus defficacité.</li>
          <li>Mise à jour de la mémoire à 6 400 MT/S afin daméliorer la gestion de la latence et de lautonomie.</li>
          <li>Augmentation de lépaisseur du module thermique et de ses performances.</li>
        </ul>

        {/* Catégorie Écran */}
        <h3 className="text-xl font-bold mb-2">Écran</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>La zone active a été étendue.</li>
          <li>La fréquence de rafraîchissement a été mise à jour et passe de 60 Hz à 90 Hz.</li>
        </ul>

        {/* Ajout d'autres catégories */}
        <h3 className="text-xl font-bold mb-2">Audio</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>La réponse aux sons graves a été améliorée pour plus déquilibre tonal.</li>
          <li>Le réseau de microphones intégrés peut désormais être utilisé en même temps que la prise casque de 3,5 mm.</li>
        </ul>

        <h3 className="text-xl font-bold mb-2">Commandes</h3>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Le matériel des sticks analogiques a été ajusté afin daméliorer les sensations.</li>
          <li>La fiabilité de la détection tactile du stick analogique a été améliorée.</li>
          <li>La sensibilité des gestes sur le trackpad a été considérablement améliorée.</li>
        </ul>
      </div>

      {/* Bouton pour afficher/masquer la liste complète */}
      <button
        className="relative right-0 top-1/2 transform translate-y-1/2 rounded-lg transition-all duration-100 hover:scale-110 hover:rounded-full bg-red-500 text-white px-6 py-2 hover:bg-red-600"
        onClick={() => setShowFullList(!showFullList)}
      >
        {showFullList ? "Masquer" : "En savoir plus"}
      </button>
      </div>
    </div>
  );
};

export default Technic;
