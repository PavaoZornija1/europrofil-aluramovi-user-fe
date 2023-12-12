import React from "react";

const RenderHingesDetails = ({ frame }) => {
  let orientation;
  if (frame.orientation === "Leva vrata") {
    orientation = `left-0 h-full w-5`;
  } else if (frame.orientation === "Desna vrata") {
    orientation = `right-0 h-full w-5`;
  } else if (frame.orientation === "Kip vrata") {
    orientation = `top-0 w-full h-5 flex`;
  }
  return (
    <div className={`absolute ${orientation}`}>
      {frame.hinges?.centerDistanceOfHoles?.map((hole, index) => (
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
      ))}
    </div>
  );
};

export default RenderHingesDetails;
