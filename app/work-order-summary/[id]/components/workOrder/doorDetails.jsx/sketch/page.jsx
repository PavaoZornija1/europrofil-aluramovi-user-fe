import React from "react";

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
          {(frame.orientation === "Kip vrata" &&
            frame.liftingSystem?.activePositionOption === 0) ||
            (frame.liftingSystem?.activePositionOption === 2 && (
              <div className="[writing-mode:vertical-lr] bg-blue-300 text-center uppercase tracking-wider text-white">
                {frame.liftingSystem?.liftSupport?.name}
              </div>
            ))}
          {frame.orientation === "Desna vrata" && (
            <div className="[writing-mode:vertical-lr] ">
              {Number(frame.dimensions.height).toFixed(2)}
            </div>
          )}
        </div>
        <div className="h-56 w-52 border-slate-400 border-2 bg-green-400">
          {frame.orientation}
        </div>
        <div className="[writing-mode:vertical-lr] text-center">
          {frame.orientation === "Desna vrata" && (
            <div className="[writing-mode:vertical-lr] bg-gray-300 text-center uppercase tracking-wider text-white">
              Strana sa šarkama
            </div>
          )}
          {(frame.orientation === "Kip vrata" &&
            frame.liftingSystem?.activePositionOption === 1) ||
            (frame.liftingSystem?.activePositionOption === 2 && (
              <div className="[writing-mode:vertical-lr] bg-blue-300 text-center uppercase tracking-wider text-white">
                {frame.liftingSystem?.liftSupport?.name}
              </div>
            ))}
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
