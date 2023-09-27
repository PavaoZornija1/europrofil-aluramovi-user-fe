"use client";
import React from "react";
import { useSelector } from "react-redux";

const Specifications = () => {
  const frame = useSelector((state) => state.data.frameType);
  const treatment = useSelector((state) => state.data.treatment);
  const fill = useSelector((state) => state.data.fill);
  const additionalTreatment = useSelector(
    (state) => state.data.additionalFillTreatment
  );
  const ralCode = useSelector((state) => state.data.ralCode);
  const subfill = useSelector((state) => state.data.subFill);

  return (
    <div className="flex flex-col border-t py-4">
      <h3 className="text-2xl font-semibold">Osnovna specifikacija</h3>
      <div className="flex flex-col gap-4 py-4 sm:flex-row sm:justify-evenly">
        <div className="flex gap-2">
          <span className="font-semibold">Tip rama:</span>
          <span>{frame?.name}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">Obrada:</span>
          <span>
            {treatment?.name} {ralCode && `(RAL ${ralCode})`}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">Ispuna:</span>
          <span>{subfill?.name ? subfill?.name : fill?.name}</span>
        </div>
        <div className="flex gap-2">
          <span className="font-semibold">Dodatna obrada:</span>
          <span>{additionalTreatment}</span>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
