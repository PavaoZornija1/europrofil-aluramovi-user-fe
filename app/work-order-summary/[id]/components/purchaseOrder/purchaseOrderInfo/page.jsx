"use client";
import React from "react";

const PurchaseOrderInfo = () => {
  const getTimeOfOrder = () => {
    let time = new Date();
    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className="flex flex-col justify-between px-1 py-4 sm:flex-row">
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold">ISO 9001 broj dokumenta:</span>
        <span>EP-P12- 06 Izdanje:2</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold">Broj radnog naloga:</span>
        <span>12</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold">Broj porudžbenice:</span>
        <span>39</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="font-bold">Datum:</span>
        <span>{getTimeOfOrder()}</span>
      </div>
    </div>
  );
};

export default PurchaseOrderInfo;
