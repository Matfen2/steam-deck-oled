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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "quickynick", letterSpacing: "2px" }}>
          Jouez plus longtemps, téléchargez plus vite
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-semibold max-w-5xl mx-auto" style={{ fontFamily: "Qaranta" }}>
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
            className="flex flex-col items-center justify-center text-center max-w-xs sm:max-w-lg p-4"
          >
            <Image
              src={positif.pict}
              alt={positif.points}
              width={170}
              height={100}
              className="mb-4"
            />
            <h3 className="text-lg sm:text-2xl font-bold mb-2" style={{ fontFamily: "quickynick", letterSpacing: "2px" }}>
              {positif.points}
            </h3>
            <p className="text-sm sm:text-base" style={{ fontFamily: "Qaranta" }}>{positif.describe}</p>
          </div>
        ))}
      </div>

      {/* Section de la fiche technique */}
      <div className="p-4 md:p-8 max-w-6xl mx-auto">
        <h2 className="text-2xl text-center md:text-3xl font-bold mb-8" style={{ fontFamily: "quickynick", letterSpacing: "4px" }}>
          Voir les autres améliorations de Steam Deck OLED
        </h2>

        {/* Liste des améliorations avec un affichage conditionnel */}
        <div
          className={`transition-all duration-300 ${
            showFullList ? "max-h-full" : "max-h-40 overflow-hidden"
          }`}
        >
          {/* Catégorie Général */}
          <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "quickynickstraight", letterSpacing: "4px" }}>Général</h3>
          <ul className="list-disc list-inside mb-4 ml-6 space-y-2 text-sm md:text-base">
            <li style={{ fontFamily: "Qaranta" }}>
              Mise à jour de l&apos;APU à 6 nm pour plus d&apos;efficacité.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Mise à jour de la mémoire à 6 400 MT/S afin d&apos;améliorer la
              gestion de la latence et de l&apos;autonomie.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Augmentation de l&apos;épaisseur du module thermique et de ses
              performances.
            </li>
          </ul>

          {/* Catégorie Écran */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Écran</h3>
          <ul className="list-disc list-inside mb-4 ml-6 space-y-2 text-sm md:text-base">
            <li style={{ fontFamily: "Qaranta" }}>La zone active a été étendue (7,4 au lieu de 7).</li>
            <li style={{ fontFamily: "Qaranta" }}>
             La fréquence de rafraichissement a été mise à jour et passe de 60 Hz à 90 Hz.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>La luminosité maximale a été modifiée et passe à 1 000 cd/m².</li>
            <li style={{ fontFamily: "Qaranta" }}>Le taux d&apos;interrogation de l&apos;écran tactile a été mis à jour et passe à 180 Hz, la latence et la précision s&apos;en sont trouvées améliorées.</li>
          </ul>

          {/* Catégorie Wifi */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Wifi et Bluetooth</h3>
          <ul className="list-disc list-inside mb-4 ml-6 space-y-2 text-sm md:text-base">
            <li style={{ fontFamily: "Qaranta" }}>
              Mise à jour des modules wifi et Bluetooth.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Ajout de la compatibilité avec le wifi 6E.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>Ajout de la compatibilité avec Bluetooth 5.3 pour la prise en charge des nouveaux codecs tels que aptX HD et aptX low-latency.</li>
            <li style={{ fontFamily: "Qaranta" }}>Ajout d&apos;une troisième antenne dans la partie supérieure de l&apos;appareil pour améliorer les performances du Bluetooth, même quand il est posé sur la station d&apos;accueil.</li>
            <li style={{ fontFamily: "Qaranta" }}>Les contrôleurs Bluetooth peuvent maintenant sortir Steam Deck de l&apos;état de veille.</li>
          </ul>

          {/* Catégorie Audio */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Audio</h3>
          <ul className="list-disc list-inside mb-4 ml-6 space-y-2 text-sm md:text-base">
            <li style={{ fontFamily: "Qaranta" }}>
              La réponse aux sons graves a été améliorée pour plus d&apos;équilibre tonal.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Le réseau de microphones intégrés peut désormais être utilisé en même temps que la prise casque de 3,5 mm.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              La sensibilité des gestes sur le trackpad a été considérablement
              améliorée.
            </li>
          </ul>

          {/* Catégorie Commandes */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Commandes</h3>
          <ul className="list-disc list-inside mb-4 ml-6 space-y-2 text-sm md:text-base">
            <li style={{ fontFamily: "Qaranta" }}>
              Ajustement de la forme et du matériel en haut des sticks analogiques pour une saisie plus ferme et une meilleure résistance à la poussière.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Le matériel du manche du stick analogique a été ajusté afin d&apos;améliorer les sensations avec le devant de l&apos;étui et réduire l&apos;usure.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              La fiabilité de la détection tactile du stick analogique a été améliorée.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              La réactivité et la sensibilité des gâchettes hautes ont été améliorées pour les basculements.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Le taux de changement et les interactions diagonales de la croix directionnelle ont été ajustés.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Les trackpads ont été repensés pour améliorer la fidélité et la détection des contours.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              La sensation et la précision des retours haptiques du trackpad ont été considérablement améliorées.
            </li>
          </ul>

          {/* Catégorie Alimentation */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Alimentation</h3>
          <ul className="list-disc list-inside mb-4 ml-6 space-y-2 text-sm md:text-base">
            <li style={{ fontFamily: "Qaranta" }}>
              La capacité de la batterie est passée de 40 Wh à 50 Wh.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              La composition chimique de la batterie a été améliorée pour un chargement plus rapide, de 20 % à 80 % en seulement 45 minutes.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              La LED de chargement a été remplacée par une LED WRGB.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Il est maintenant possible d&apos;allumer l&apos;appareil dès sa sortie de l&apos;emballage en appuyant longuement sur le bouton Marche/arrêt sans le brancher préalablement au secteur.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Le cordon d&apos;alimentation est maintenant plus long (1,5 m → 2,5 m).
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Ajout du logo au bloc d&apos;alimentation.
            </li>
          </ul>

          {/* Catégorie Coque */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Coque</h3>
          <ul className="list-disc list-inside mb-4 ml-6 space-y-2 text-sm md:text-base">
            <li style={{ fontFamily: "Qaranta" }}>
              Le poids total de l&apos;appareil a été réduit à environ 640 grammes, soit à peu près 5 % de moins que Steam Deck.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Les vis du capot arrière s&apos;insèrent maintenant dans des filetages métalliques.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Les vis du capot arrière ont désormais des têtes Torx™. Leur composition ainsi que certains aspects géométriques ont été modifiés pour réduire le risque de les endommager.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Réduction du nombre de types de vis dans l&apos;ensemble du système.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Réduction du nombre d&apos;étapes requises pour les réparations courantes.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              L&apos;interrupteur des gâchettes hautes résiste mieux aux chutes.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              L&apos;interrupteur des gâchettes hautes a été transféré sur la carte des joysticks pour faciliter sa réparation.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              La réparation ou le remplacement de l&apos;écran ne nécessite plus d&apos;enlever le capot arrière.
            </li>
          </ul>

          {/* Catégorie Logiciel */}
          <h3 className="text-lg md:text-xl font-bold mb-2">Logiciel</h3>
          <ul className="list-disc list-inside mb-4 ml-6 space-y-2 text-sm md:text-base">
            <li style={{ fontFamily: "Qaranta" }}>
              Le microprogramme qui gère l&apos;alimentation de la mémoire a été grandement amélioré.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Ajout d&apos;une prise en charge préliminaire de microprogrammes à code source ouvert pour le BIOS et le contrôleur embarqué.
            </li>
            <li style={{ fontFamily: "Qaranta" }}>
              Temps de reprise amélioré d&apos;environ 30%.
            </li>
          </ul>
        </div>

        
        {/* Bouton pour afficher/masquer la liste complète */}
        <div className="flex justify-center md:justify-end mt-4">
          <button
            className="rounded-lg px-4 py-2 bg-red-500 text-white font-bold transition-all duration-100 hover:scale-105 hover:rounded-full hover:bg-red-600" style={{ fontFamily: "Qaranta" }}
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
