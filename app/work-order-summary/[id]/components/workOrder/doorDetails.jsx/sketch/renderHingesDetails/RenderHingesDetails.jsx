import React from "react";

const RenderHingesDetails = ({ frame }) => {
  let position;
  if (frame.orientation === "Leva vrata") {
    position = `left-0 h-full w-5`;
  } else if (frame.orientation === "Desna vrata") {
    position = `right-0 h-full w-5`;
  } else if (frame.orientation === "Kip vrata") {
    position = `top-0 w-full h-5 flex`;
  }
  return (
    <div className={`absolute ${position}`}>
      {frame.hinges?.centerDistanceOfHoles?.map((hole, index) => (
        <>
          <div
            key={index}
            className={`border rounded-full w-4 h-4 bg-white absolute`}
            style={{
              [frame.orientation === "Leva vrata" ||
              frame.orientation === "Desna vrata"
                ? "bottom"
                : "left"]: `${hole / 10 - 2.5}%`,
            }}
          ></div>
          <div
            className="text-sm absolute"
            style={{
              [frame.orientation === "Leva vrata" ||
              frame.orientation === "Desna vrata"
                ? "bottom"
                : "left"]: `${hole / 10 - 2.5}%`,
            }}
          >
            {hole}
          </div>
        </>
      ))}
    </div>
  );
};

export default RenderHingesDetails;
