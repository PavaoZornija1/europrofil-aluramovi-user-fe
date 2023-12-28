import React from "react";

const RightSupport = ({ frame }) => {
  return (
    <>
      {((frame.orientation === "Kip vrata" &&
        frame.liftingSystem?.activePositionOption === 1) ||
        frame.liftingSystem?.activePositionOption === 2) && (
        <div className="[writing-mode:vertical-lr] bg-blue-300 text-center uppercase tracking-wider text-black">
          {frame.liftingSystem?.liftSupport?.name}
        </div>
      )}
    </>
  );
};

export default RightSupport;
