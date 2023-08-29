"use client";
import React from "react";

const PersonsInCharge = () => {
  return (
    <div className="mb-10 flex w-full flex-col justify-between gap-4 py-2 sm:flex-row">
      <div className="flex gap-4 sm:flex-col">
        <span className="font-semibold">Nalog izdao:</span>
        <span>Nikola Manage IT</span>
      </div>
      <div className="flex gap-4 sm:flex-col">
        <span className="font-semibold">Nalog izradio:</span>
        <span>Marko Markovic</span>
      </div>
      <div className=" flex gap-4 sm:flex-col">
        <span className="font-semibold">Nalog kontrolisao:</span>
        <span>Marko Markovic</span>
      </div>
    </div>
  );
};

export default PersonsInCharge;
