import store from "@/app/store/store";
import React from "react";
import { useSelector } from "react-redux";

const DoorDetails = () => {
  const frames = useSelector((state) => state.data.individualFronts);
  const additionalFillTreatment = useSelector(
    (state) => state.data.additionalFillTreatment
  );
  //   console.log(frames);
  console.log(store.getState());
  return (
    <div className="grid grid-cols-2 gap-2 border border-black">
      {frames.map((frame, index) => (
        <div key={index} className="h-40 border border-slate-500">
          <h2 className="text-xl font-semibold uppercase">
            Front {index + 1} - {frame.orientation}, komada{" "}
            {frame.dimensions.numberOfPieces}
          </h2>
          <div>
            <span>{additionalFillTreatment?.name}</span>
          </div>
          <div>
            {frame.hinges?.hinge?.id ? (
              <span>Šarke: {frame.hinges?.hinge?.name}</span>
            ) : null}
          </div>
          <div>
            {frame.handles?.handleProfile?.id ? (
              <span>Profil ručice: {frame.handles?.handleProfile?.name}</span>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoorDetails;
