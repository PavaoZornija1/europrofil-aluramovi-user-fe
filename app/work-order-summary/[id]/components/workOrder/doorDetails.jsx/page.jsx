import store from "@/app/store/store";
import React from "react";
import { useSelector } from "react-redux";

const DoorDetails = ({ activeFrame }) => {
  const frames = useSelector((state) => state.data.individualFronts);
  const additionalFillTreatment = useSelector(
    (state) => state.data.additionalFillTreatment
  );
  // console.log(store.getState());
  console.log(frames);

  // Calculate fill width
  const calculateFillWidth = (front, frame) => {
    const surface =
      Number(front?.dimensions?.width) -
      Number(frame.fillingWidthReduction * 10 * 2);
    return surface;
  };

  // Calculate fill height
  const calculateFillHeight = (front, frame) => {
    const surface =
      Number(front?.dimensions?.width) -
      Number(frame.fillingHeightReduction * 10 * 2);
    return surface;
  };

  return (
    <div className="grid grid-cols-2 gap-2 border border-black">
      {frames.map((frame, index) => (
        <div key={index} className="h-40 border border-slate-500">
          <h2 className="text-xl font-semibold uppercase">
            Front {index + 1} - {frame.orientation}, komada{" "}
            {frame.dimensions.numberOfPieces}
          </h2>
          <div className="flex justify-between">
            <span>{additionalFillTreatment?.name}</span>
            <span className="px-2">
              {calculateFillWidth(frame, activeFrame)} x{" "}
              {calculateFillHeight(frame, activeFrame)} mm
            </span>
          </div>
          <div className="flex justify-between">
            {frame.hinges?.hinge?.id ? (
              <span>Šarke: {frame.hinges?.hinge?.name}</span>
            ) : null}
            <span className="px-2">{frame?.hinges?.numberOfHinges} kom</span>
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
