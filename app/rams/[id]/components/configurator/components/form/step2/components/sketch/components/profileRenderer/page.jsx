"use client";
import React, { useState, useEffect } from "react";

function ProfileRenderer(props) {
  const { frontsData, activeFrontId, dimensions } = props;
  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");

  const generateTop = () => {
    switch (frontsData[activeFrontId].handles.profileLengthOption) {
      case 0:
        switch (frontsData[activeFrontId].orientation) {
          case "Leva vrata":
          case "Desna vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
              case 1:
                setTop("0%");
                break;
              case 2:
                setTop("95%");
                break;
            }
            break;
          case "Kip vrata":
            setTop("95%");
            break;
        }
        break;
      case 1:
        switch (frontsData[activeFrontId].orientation) {
          case "Leva vrata":
          case "Desna vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
                setTop("0%");
                break;
              case 1:
                setTop("95%");
                break;
              case 2:
                setTop(
                  `calc(0% + ${
                    (100 / dimensions.h) *
                      Number(
                        frontsData[activeFrontId].handles.profileDistance
                      ) +
                    "%"
                  })`
                );
                break;
              case 3:
                setTop(
                  `calc(50% - ${
                    ((100 / dimensions.h) *
                      Number(frontsData[activeFrontId].handles.profileLength)) /
                      2 +
                    "%"
                  })`
                );
                break;
              case 4:
                setTop(
                  `calc(100% - ${
                    (100 / dimensions.h) *
                      Number(frontsData[activeFrontId].handles.profileLength) +
                    "%"
                  } - ${
                    (100 / dimensions.h) *
                      Number(
                        frontsData[activeFrontId].handles.profileDistance
                      ) +
                    "%"
                  })`
                );
                break;
            }
            break;
          case "Kip vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              default:
                setTop("95%");
            }
            break;
        }
        break;
    }
  };

  const generateLeft = () => {
    switch (frontsData[activeFrontId].handles.profileLengthOption) {
      case 0:
        switch (frontsData[activeFrontId].orientation) {
          case "Leva vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
                setLeft("95%");
                break;
              case 1:
              case 2:
                setLeft("0%");
                break;
            }
            break;
          case "Desna vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
              case 1:
              case 2:
                setLeft("0%");
                break;
            }
            break;
          case "Kip vrata":
            setLeft("0%");
            break;
        }
        break;
      case 1:
        switch (frontsData[activeFrontId].orientation) {
          case "Leva vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
              case 1:
                setLeft(
                  `calc(100% - ${
                    (100 / dimensions.h) *
                      Number(frontsData[activeFrontId].handles.profileLength) +
                    "%"
                  } - ${
                    (100 / dimensions.h) *
                      Number(
                        frontsData[activeFrontId].handles.profileDistance
                      ) +
                    "%"
                  })`
                );
                break;
              default:
                setLeft(`calc(95%)`);
                break;
            }
            break;
          case "Desna vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
              case 1:
                setLeft(
                  `calc(0% + ${
                    (100 / dimensions.h) *
                      Number(
                        frontsData[activeFrontId].handles.profileDistance
                      ) +
                    "%"
                  })`
                );
                break;
              default:
                setLeft("0%");
            }
            break;
          case "Kip vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
                setLeft(
                  `calc(0% + ${
                    (100 / dimensions.h) *
                      Number(
                        frontsData[activeFrontId].handles.profileDistance
                      ) +
                    "%"
                  })`
                );
                break;
              case 1:
                setLeft(
                  `calc(50% - ${
                    ((100 / dimensions.h) *
                      Number(frontsData[activeFrontId].handles.profileLength)) /
                      2 +
                    "%"
                  })`
                );
                break;
              case 2:
                setLeft(
                  `calc(100% - ${
                    (100 / dimensions.h) *
                      Number(frontsData[activeFrontId].handles.profileLength) +
                    "%"
                  } - ${
                    (100 / dimensions.h) *
                      Number(
                        frontsData[activeFrontId].handles.profileDistance
                      ) +
                    "%"
                  })`
                );
                break;
            }
            break;
        }
        break;
    }
  };

  const generateHeight = () => {
    switch (frontsData[activeFrontId].handles.profileLengthOption) {
      case 0:
        switch (frontsData[activeFrontId].orientation) {
          case "Leva vrata":
          case "Desna vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
                setHeight("100%");
                break;
              case 1:
              case 2:
                setHeight("5%");
                break;
            }
            break;
          case "Kip vrata":
            setHeight("5%");
            break;
        }
        break;
      case 1:
        switch (frontsData[activeFrontId].orientation) {
          case "Leva vrata":
          case "Desna vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
              case 1:
                setHeight("5%");
                break;
              default:
                setHeight(
                  `calc(${
                    (100 / dimensions.h) *
                      Number(frontsData[activeFrontId].handles.profileLength) +
                    "%"
                  })`
                );
            }
            break;
          case "Kip vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              default:
                setHeight("5%");
                break;
            }
            break;
        }
        break;
    }
  };

  const generateWidth = () => {
    switch (frontsData[activeFrontId].handles.profileLengthOption) {
      case 0:
        switch (frontsData[activeFrontId].orientation) {
          case "Leva vrata":
          case "Desna vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
                setWidth("5%");
                break;
              case 1:
              case 2:
                setWidth("100%");
                break;
            }
            break;
          case "Kip vrata":
            setWidth("100%");
            break;
        }
        break;
      case 1:
        switch (frontsData[activeFrontId].orientation) {
          case "Leva vrata":
          case "Desna vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              case 0:
              case 1:
                setWidth(
                  `calc(${
                    (100 / dimensions.h) *
                      Number(frontsData[activeFrontId].handles.profileLength) +
                    "%"
                  })`
                );
                break;

              default:
                setWidth("5%");
                break;
            }
            break;
          case "Kip vrata":
            switch (frontsData[activeFrontId].handles.profilePositionOption) {
              default:
                setWidth(
                  `calc(${
                    (100 / dimensions.h) *
                      Number(frontsData[activeFrontId].handles.profileLength) +
                    "%"
                  })`
                );
                break;
            }
            break;
        }
        break;
    }
  };

  useEffect(() => {
    generateTop();
    generateLeft();
    generateHeight();
    generateWidth();
  }, [
    frontsData[activeFrontId].orientation,
    frontsData[activeFrontId].handles.profileOption,
    frontsData[activeFrontId].handles.profileLengthOption,
    frontsData[activeFrontId].handles.profilePositionOption,
    frontsData[activeFrontId].handles.profileLength,
    frontsData[activeFrontId].handles.profileDistance,
  ]);

  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        height: height,
        width: width,
      }}
      className="bg-red-400"
    ></div>
  );
}

export default ProfileRenderer;