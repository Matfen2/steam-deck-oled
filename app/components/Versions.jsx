"use client";

import React, { useState } from "react";
import versions from "../../public/data/versions.json";
import steamController from "../../public/picts/steamDeckOledConsole.png";
import Image from "next/image";

const Versions = () => {
  const [selectedVersion, setSelectedVersion] = useState(versions[0].id);

  const handleSelectVersion = (versionId) => {
    setSelectedVersion(versionId);
  };

  const renderVersionDetails = (version) => (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-40 mt-8 max-w-6xl mx-auto border p-6 rounded-lg shadow-lg bg-white">
      {/* Image et prix */}
      <div className="flex flex-col items-center">
        <Image src={steamController} alt="Steam Deck Console" width={400} height={300} />
        <div className="flex flex-row justify-center mt-4 space-x-4">
          <p className="text-xl font-bold">{version.price}</p>
          <p className="text-md text-gray-500">{version.ssd} {version.type}</p>
        </div>
        <button
          type="button"
          className="mt-4 px-4 py-2 bg-red-500 text-white font-bold rounded-lg transition-all duration-100 hover:scale-110 hover:rounded-full hover:bg-red-600"
        >
          ACHETER
        </button>
      </div>

      {/* Détails du produit */}
      <div className="text-gray-800">
        <ul className="list-disc space-y-2">
          <li>{version.disk}</li>
          <li>{version.screen}</li>
          <li>Taille de l&apos;écran : {version.sizeScreen}</li>
          <li>Fréquence de rafraîchissement : {version.refreshRate}</li>
          <li>APU : {version.apu}</li>
          <li>Wifi : {version.wifi}</li>
          <li>
            Batterie : {version.battery}, entre {version.firstHour} et{" "}
            {version.secondHour} d&apos;autonomie
          </li>
          <li>Alimentation : {version.power} avec un câble de {version.sizeCable}</li>
          <li>{version.transport}</li>
          <li>{version.bundle}</li>
          {version.video && <li>{version.video}</li>}
          {version.theme && <li>{version.theme}</li>}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 p-8" id="section-versions">
      <h2 className="text-2xl font-bold text-center mb-6">Comparaison des modèles</h2>

      {/* Boutons de sélection */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {versions.map((version) => (
          <button
            key={version.id}
            type="button"
            className={`px-4 py-2 border rounded-lg font-medium ${
              selectedVersion === version.id
                ? "border-red-500 text-red-500"
                : "border-gray-300 text-gray-700"
            }`}
            onClick={() => handleSelectVersion(version.id)}
          >
            Steam Deck {version.type} {version.ssd}
          </button>
        ))}
      </div>

      {/* Affichage des détails */}
      {selectedVersion &&
        renderVersionDetails(versions.find((v) => v.id === selectedVersion))}
    </div>
  );
};

export default Versions;
