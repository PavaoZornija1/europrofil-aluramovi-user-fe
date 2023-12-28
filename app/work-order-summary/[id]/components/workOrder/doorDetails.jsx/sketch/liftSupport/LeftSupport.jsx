import React from "react";

const LeftSupport = ({ frame }) => {
  return (
    <>
      {((frame.orientation === "Kip vrata" &&
        frame.liftingSystem?.activePositionOption === 0) ||
        frame.liftingSystem?.activePositionOption === 2) && (
        <div className="[writing-mode:vertical-lr] bg-blue-300 text-center uppercase tracking-wider text-black">
          {frame.liftingSystem?.liftSupport?.name}
        </div>
      )}
    </>
  );
};

export default LeftSupport;
