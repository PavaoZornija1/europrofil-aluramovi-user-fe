import React from "react";

const RenderHandleProfileDetails = ({ frame }) => {
  let left = Number(frame.handles.profileLength / 10);
  let right = Number(frame.handles.profileLength / 10);
  let top = Number(frame.handles.profileLength / 10);
  let bottom = Number(frame.handles.profileLength / 10);
  return (
    <div className="h-56 w-52 border-slate-400 border-2 bg-green-400 relative">
      {/* IF LEVA VRATA */}
      {frame.orientation === "Leva vrata" ? (
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 0 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute right-0 h-2 bg-red-500"
            style={{ width: `${left}%` }}
          ></div>
        )
      ) : (
        <div className="absolute right-0 w-2 bg-red-500 h-full"></div>
      )}
      {frame.orientation === "Leva vrata" ? (
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 1 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className={`absolute bottom-0 right-0 h-2 bg-red-500 `}
            style={{ width: `${right}%` }}
          ></div>
        )
      ) : (
        <div className="absolute top-0 w-full bg-red-500 h-2"></div>
      )}
      {frame.orientation === "Leva vrata" ? (
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 2 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute right-0 bg-red-500 w-2"
            style={{ height: `${top}%` }}
          ></div>
        )
      ) : (
        <div className="absolute bottom-0 w-full h-2 bg-red-500"></div>
      )}
      {frame.orientation === "Leva vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 3 &&
        frame.handles.profileLengthOption === 1 && (
          <div className="h-full w-2 relative flex items-center ml-auto">
            <div
              className="absolute right-0 bg-red-500 w-2"
              style={{ height: `${top}%` }}
            ></div>
          </div>
        )}
      {frame.orientation === "Leva vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 4 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute bottom-0 right-0 bg-red-500 w-2"
            style={{ height: `${bottom}%` }}
          ></div>
        )}
      {/* ************ */}

      {/* IF DESNA VRATA */}
      {frame.orientation === "Desna vrata"
        ? frame.handles?.handleProfile?.id &&
          frame.handles.profilePositionOption === 0 && (
            <div className="absolute left-0 w-2 bg-red-500 h-full"></div>
          )
        : null}
      {frame.orientation === "Desna vrata"
        ? frame.handles?.handleProfile?.id &&
          frame.handles.profilePositionOption === 1 && (
            <div className="absolute top-0 h-2 bg-red-500 w-full"></div>
          )
        : null}
      {frame.orientation === "Desna vrata"
        ? frame.handles?.handleProfile?.id &&
          frame.handles.profilePositionOption === 2 && (
            <div className="absolute bottom-0 h-2 bg-red-500 w-full"></div>
          )
        : null}

      {/* ************ */}

      {/* IF KIP VRATA */}
      {frame.orientation === "Kip vrata"
        ? frame.handles?.handleProfile?.id && (
            <div className="absolute bottom-0 h-2 bg-red-500 w-full"></div>
          )
        : null}
      {/* ********** */}
    </div>
  );
};

export default RenderHandleProfileDetails;
