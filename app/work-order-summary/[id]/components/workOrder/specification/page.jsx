"use client";
import React from "react";

const Specifications = () => {
  return (
    <div className="flex flex-col border-t py-4">
      <h3 className="text-2xl font-semibold">Osnovna specifikacija</h3>
      <div className="flex flex-col gap-4 py-4 sm:flex-row sm:justify-evenly">
        <div className="flex gap-2">
          <span className="font-semibold">Tip rama:</span>
          <span>RAM 1003 N</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">Obrada:</span>
          <span>Antracit siva</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">Ispuna:</span>
          <span>Ogledalo obicno</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">Dodatna obrada:</span>
          <span>KP obrada ivica</span>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
