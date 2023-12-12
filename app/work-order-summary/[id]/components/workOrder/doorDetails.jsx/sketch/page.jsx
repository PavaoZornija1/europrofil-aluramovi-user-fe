import React from "react";
import RenderHandleProfileDetails from "./renderProfile/page";
import LeftSupport from "./liftSupport/LeftSupport";
import RightSupport from "./liftSupport/RightSupport";
import RenderHingesDetails from "./renderHingesDetails/RenderHingesDetails";

const SketchDetails = ({ frame }) => {
  console.log(frame);
  return (
    <div className="flex items-center my-4 flex-col font-mono">
      <div className="w-full flex justify-center">
        <div className="[writing-mode:vertical-lr] text-center">
          {frame.orientation === "Leva vrata" && (
            <div className="[writing-mode:vertical-lr] bg-gray-300 text-center uppercase tracking-wider text-white">
              Strana sa šarkama
            </div>
          )}
          <LeftSupport frame={frame} />
          {frame.orientation === "Desna vrata" && (
            <div className="[writing-mode:vertical-lr] ">
              {Number(frame.dimensions.height).toFixed(2)}
            </div>
          )}
        </div>
        {/* MAIN CONTAINER */}
        <div className="h-56 w-52 border-slate-400 border-2 bg-green-400 relative">
          <RenderHandleProfileDetails frame={frame} />
          <RenderHingesDetails frame={frame} />
        </div>
        {/* ******************** */}
        <div className="[writing-mode:vertical-lr] text-center">
          {frame.orientation === "Desna vrata" && (
            <div className="[writing-mode:vertical-lr] bg-gray-300 text-center uppercase tracking-wider text-white">
              Strana sa šarkama
            </div>
          )}
          <RightSupport frame={frame} />
          {frame.orientation === "Leva vrata" && (
            <div className="[writing-mode:vertical-lr] ">
              {Number(frame.dimensions.height).toFixed(2)}
            </div>
          )}
          {/* {frame.orientation === "Kip vrata" && (
            <div className="[writing-mode:vertical-lr] bg-gray-300 text-center uppercase tracking-wider text-white">
              Strana sa šarkama
            </div>
          )} */}
        </div>
      </div>
      <div>{Number(frame.dimensions.width).toFixed(2)}</div>
    </div>
  );
};

export default SketchDetails;
