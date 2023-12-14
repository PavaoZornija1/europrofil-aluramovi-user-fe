import React from "react";

const RenderHandleProfileDetails = ({ frame }) => {
  let left = Number(frame.handles.profileLength / 10);
  let right = Number(frame.handles.profileLength / 10);
  let top = Number(frame.handles.profileLength / 10);
  let bottom = Number(frame.handles.profileLength / 10);
  return (
    <>
      {/* IF LEVA VRATA */}
      {/* OPTION #1 */}
      {frame.orientation === "Leva vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 0 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute right-0 h-2 bg-red-500"
            style={{ width: `${left}%` }}
          >
            <div className="mt-1 text-center w-full">
              {frame.handles.profileLength}mm
            </div>
          </div>
        )}
      {frame.orientation === "Leva vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 0 &&
        frame.handles.profileLengthOption === 0 && (
          <div className="absolute right-0 w-2 bg-red-500 h-full">
            <div className="text-center w-full [writing-mode:vertical-lr] -ml-5 m-auto h-full">
              {frame.handles.profileLength}mm
            </div>
          </div>
        )}
      {/* ******************* */}
      {/* OPTION #2 */}
      {frame.orientation === "Leva vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 1 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className={`absolute bottom-0 right-0 h-2 bg-red-500 `}
            style={{ width: `${right}%` }}
          >
            <div className=" text-center w-full">
              {frame.handles.profileLength}mm
            </div>
          </div>
        )}
      {frame.orientation === "Leva vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profileLengthOption === 0 &&
        frame.handles.profilePositionOption === 1 && (
          <div className="absolute top-0 w-full h-2 bg-red-500">
            <div className="text-center w-full mt-1">
              {frame.handles.profileLength}mm
            </div>
          </div>
        )}
      {/* ******************************** */}
      {/* OPTION #3 */}
      {frame.orientation === "Leva vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 2 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute right-0 bg-red-500 w-2"
            style={{ height: `${top}%` }}
          >
            <div className="text-center w-full [writing-mode:vertical-lr] ml-1 mt-1">
              {frame.handles.profileLength}mm
            </div>
          </div>
        )}

      {frame.orientation === "Leva vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profileLengthOption === 0 &&
        frame.handles.profilePositionOption === 2 && (
          <div className="absolute bottom-0 w-full h-2 bg-red-500">
            {" "}
            <div className="text-center w-full -mt-5">
              {frame.handles.profileLength}mm
            </div>
          </div>
        )}
      {/* ******************************** */}
      {frame.orientation === "Leva vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 3 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute z-10 right-0 bg-red-500 w-2"
            style={{
              height: `${top}%`,
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
            }}
          >
            {" "}
            <div className="text-center w-full [writing-mode:vertical-lr] -ml-5 mt-1">
              {frame.handles.profileLength}mm
            </div>
          </div>
        )}
      {frame.orientation === "Leva vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 4 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute bottom-0 right-0 bg-red-500 w-2"
            style={{ height: `${bottom}%` }}
          >
            <div className="text-center w-full [writing-mode:vertical-lr] -ml-5 mt-1">
              {frame.handles.profileLength}mm
            </div>
          </div>
        )}
      {/* ************ */}

      {/* IF DESNA VRATA */}
      {/* OPTION #! */}
      {frame.orientation === "Desna vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 0 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute top-0 left-0 h-2 bg-red-500"
            style={{ width: `${left}%` }}
          ></div>
        )}
      {frame.orientation === "Desna vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 0 && (
          <div className="absolute left-0 w-2 bg-red-500 h-full"></div>
        )}
      {/* **************** */}
      {/* OPTION #2 */}
      {frame.orientation === "Desna vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 1 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className={`absolute bottom-0 left-0 right-0 h-2 bg-red-500 `}
            style={{ width: `${left}%` }}
          ></div>
        )}
      {frame.orientation === "Desna vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 1 && (
          <div className="absolute top-0 w-full bg-red-500 h-2"></div>
        )}
      {/* ********************* */}
      {/* OPTION #3 */}
      {frame.orientation === "Desna vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 2 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute left-0 top-0 bg-red-500 w-2"
            style={{ height: `${top}%` }}
          ></div>
        )}
      {frame.orientation === "Desna vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 2 && (
          <div className="absolute bottom-0 w-full bg-red-500 h-2"></div>
        )}
      {/* ******************* */}
      {frame.orientation === "Desna vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 3 &&
        frame.handles.profileLengthOption === 1 && (
          <div className="h-full w-2 relative flex items-center mr-auto">
            <div
              className="absolute left-0 bg-red-500 w-2"
              style={{ height: `${top}%` }}
            ></div>
          </div>
        )}
      {frame.orientation === "Desna vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 4 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute bottom-0 left-0 bg-red-500 w-2"
            style={{ height: `${bottom}%` }}
          ></div>
        )}
      {/* ********** */}

      {/* IF KIP VRATA */}
      {/* OPTION #1 */}
      {frame.orientation === "Kip vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profileLengthOption === 0 && (
          <div className="absolute bottom-0 w-full bg-red-500 h-2"></div>
        )}
      {frame.orientation === "Kip vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 0 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute bottom-0 left-0 bg-red-500 h-2"
            style={{ width: `${right}%` }}
          ></div>
        )}
      {/* *********************** */}
      {/* OPTION #2 */}
      {frame.orientation === "Kip vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 1 &&
        frame.handles.profileLengthOption === 1 && (
          <div className="w-full absolute bottom-0 flex justify-center h-2">
            <div className="bg-red-500 h-2" style={{ width: `${left}%` }}></div>
          </div>
        )}
      {/* ******************** */}
      {/* OPTION #3 */}

      {frame.orientation === "Kip vrata" &&
        frame.handles?.handleProfile?.id &&
        frame.handles.profilePositionOption === 2 &&
        frame.handles.profileLengthOption === 1 && (
          <div
            className="absolute bottom-0 right-0 bg-red-500 h-2"
            style={{ width: `${right}%` }}
          ></div>
        )}
      {/* ************* */}
      {/* ***************************** */}
    </>
  );
};

export default RenderHandleProfileDetails;
