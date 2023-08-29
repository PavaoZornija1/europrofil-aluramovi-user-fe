"use client";
import React from "react";

function Signature() {
  return (
    <div className="flex w-full border-t p-6">
      <div className="flex w-1/2 flex-col items-center gap-16">
        <h3 className="text-2x1 font-semibold">
          Potvrđujem da su podaci u porudžbenici tačni.
        </h3>
        <p className="w-1/2 border-t border-black text-center">POTPIS KUPCA</p>
      </div>
      <div className="flex w-1/2 flex-col items-center gap-16">
        <h3 className="text-2x1 font-semibold">Ponudu sastavio:</h3>
        <p className="w-1/2 border-t border-black text-center">
          POTPIS ZAPOSLENOG
        </p>
      </div>
    </div>
  );
}

export default Signature;
