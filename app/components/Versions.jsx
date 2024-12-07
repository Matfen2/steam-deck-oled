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
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20 mt-8 max-w-5xl mx-auto border p-6 rounded-lg shadow-lg bg-white">
      {/* Image et prix */}
      <div className="flex flex-col items-center text-center lg:text-left">
        <Image
          src={steamController}
          alt="Steam Deck Console"
          width={320}
          height={200}
          className="mb-4"
        />
        <p
          className="text-2xl lg:text-3xl font-bold"
          style={{ fontFamily: "quickynick", letterSpacing: "2px" }}
        >
          {version.price}
        </p>
        <button
          type="button"
          className="mt-4 px-3 py-2 bg-red-500 text-white font-bold rounded-lg transition-all duration-100 hover:scale-105 hover:rounded-full hover:bg-red-600" style={{ fontFamily: "Qaranta" }}
        >
          ACHETER
        </button>
      </div>

      {/* Détails du produit */}
      <div className="text-gray-800 text-sm sm:text-base">
        <ul className="space-y-2 list-none">
          <li style={{ fontFamily: "Qaranta" }}>{version.disk}</li>
          <li style={{ fontFamily: "Qaranta" }}>{version.screen}</li>
          <li style={{ fontFamily: "Qaranta" }}>
            Taille de l&apos;écran : {version.sizeScreen}
          </li>
          <li style={{ fontFamily: "Qaranta" }}>
            Fréquence de rafraîchissement : {version.refreshRate}
          </li>
          <li style={{ fontFamily: "Qaranta" }}>APU : {version.apu}</li>
          <li style={{ fontFamily: "Qaranta" }}>Wifi : {version.wifi}</li>
          <li style={{ fontFamily: "Qaranta" }}>
            Batterie : {version.battery}, entre {version.firstHour} et{" "}
            {version.secondHour} d&apos;autonomie
          </li>
          <li style={{ fontFamily: "Qaranta" }}>
            Alimentation : {version.power} avec un câble de {version.sizeCable}
          </li>
          <li style={{ fontFamily: "Qaranta" }}>{version.transport}</li>
          <li style={{ fontFamily: "Qaranta" }}>{version.bundle}</li>
          {version.video && <li style={{ fontFamily: "Qaranta" }}>{version.video}</li>}
          {version.theme && <li style={{ fontFamily: "Qaranta" }}>{version.theme}</li>}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 p-4 sm:p-8" id="section-versions">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6" style={{ fontFamily: "quickynick", letterSpacing: "2px" }}>
        Comparaison des modèles
      </h2>

      {/* Boutons de sélection */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6">
        {versions.map((version) => (
          <button
            key={version.id}
            type="button"
            className={`px-3 sm:px-3 py-2 border rounded-lg font-medium text-sm sm:text-base  ${
              selectedVersion === version.id
                ? "border-red-500 text-red-500"
                : "border-gray-300 text-gray-700"
            }`} style={{ fontFamily: "quickynick", letterSpacing: "2px" }}
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
