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
  let setTextPosition;
  if (frame.orientation === "Leva vrata") {
    setTextPosition = `left-5`;
  } else if (frame.orientation === "Desna vrata") {
    setTextPosition = `right-6`;
  } else if (frame.orientation === "Kip vrata") {
    setTextPosition = `top-4`;
  }
  return frame.hinges?.hasHinge ? (
    <div className={`absolute ${position}`}>
      {frame.hinges?.centerDistanceOfHoles?.map((hole, index) => (
        <React.Fragment key={`hole-${index - hole}`}>
          <div
            key={index}
            className={`border-slate-500 border rounded-full w-4 h-4 bg-white absolute`}
            style={{
              [frame.orientation === "Leva vrata" ||
              frame.orientation === "Desna vrata"
                ? "bottom"
                : "left"]: `${hole / 10 - 2.5}%`,
            }}
          ></div>
          <div
            className={`${setTextPosition} text-sm absolute`}
            style={{
              [frame.orientation === "Leva vrata" ||
              frame.orientation === "Desna vrata"
                ? "bottom"
                : "left"]: `${hole / 10 - 2.5}%`,
            }}
          >
            {Number(hole).toFixed()}
          </div>
        </React.Fragment>
      ))}
    </div>
  ) : null;
};

export default RenderHingesDetails;
