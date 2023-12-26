import store from "@/app/store/store";
import React from "react";
import { useSelector } from "react-redux";
import SketchDetails from "./sketch/page";

const DoorDetails = ({ activeFrame }) => {
  const frames = useSelector((state) => state.data.individualFronts);
  const additionalFillTreatment = useSelector(
    (state) => state.data.additionalFillTreatment
  );

  // Calculate fill width
  const calculateFillWidth = (front, frame) => {
    const surface =
      Number(front?.dimensions?.width) -
      Number(frame.fillingWidthReduction * 10 * 2);
    // -
    // Number(front.handles?.handleProfile?.frameLengthReduction * 10);
    return surface;
  };

  // Calculate fill height
  const calculateFillHeight = (front, frame) => {
    const surface =
      Number(front?.dimensions?.height) -
      Number(frame.fillingHeightReduction * 10 * 2);
    // -
    // Number(front.handles?.handleProfile?.frameLengthReduction * 10);
    return surface;
  };

  return (
    <div className="grid md:grid-cols-2 gap-2 ">
      {frames.map((frame, index) => (
        <div key={index}>
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
          {frame.handles?.handleProfile?.id ? (
            <div className="flex justify-between">
              <span>Profil ručice: {frame.handles?.handleProfile?.name}</span>

              <span className="px-2">{frame.handles?.profileLength} mm</span>
            </div>
          ) : null}
          {/* SCHEME */}
          <SketchDetails frame={frame} />
        </div>
      ))}
    </div>
  );
};

export default DoorDetails;
