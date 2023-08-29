"use client";
import React, { useState, useEffect } from "react";

function HandlesRenderer(props) {
  const { frontsData, activeFrontId, dimensions } = props;
  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");
  const [orientation, setOrientation] = useState("row");

  // console.table(frontsData[activeFrontId].handles);

  const wheelBasesArr = [
    32, 64, 96, 128, 160, 192, 224, 256, 282, 320, 352, 384, 416, 448, 480,
  ];

  const generateTop = () => {
    if (
      frontsData[activeFrontId].orientation === "Leva vrata" ||
      frontsData[activeFrontId].orientation === "Desna vrata"
    ) {
      if (
        frontsData[activeFrontId].handles.positionOption === 0 ||
        frontsData[activeFrontId].handles.positionOption === 2
      ) {
        setTop(
          `calc(0% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} + ${
            (100 / dimensions.h) *
              frontsData[activeFrontId].handles.centerDistanceOfHole[1] +
            "%"
          })`
        );
      }

      if (frontsData[activeFrontId].handles.positionOption === 1) {
        setTop(
          `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
            (100 / dimensions.h) *
              frontsData[activeFrontId].handles.centerDistanceOfHole[1] +
            "%"
          } + 1px)`
        );
      } else if (frontsData[activeFrontId].handles.positionOption === 4) {
        setTop(
          `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
            (100 / dimensions.h) *
              frontsData[activeFrontId].handles.centerDistanceOfHole[1] +
            "%"
          } - ${
            (100 / dimensions.h) *
              wheelBasesArr[frontsData[activeFrontId].handles.wheelbaseOption] +
            "%"
          } + 1px)`
        );
      }

      if (frontsData[activeFrontId].handles.positionOption === 3) {
        setTop(
          `calc(50% - ${(1000 / dimensions.h) * 1.8 * 1 + "%"} - ${
            ((100 / dimensions.h) *
              wheelBasesArr[
                frontsData[activeFrontId].handles.wheelbaseOption
              ]) /
              2 +
            "%"
          } + 1px)`
        );
      }
    }
    if (frontsData[activeFrontId].orientation === "Kip vrata") {
      setTop(
        `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
          (100 / dimensions.h) *
            frontsData[activeFrontId].handles.centerDistanceOfHole[1] +
          "%"
        } + 1px)`
      );
    }
  };

  const generateLeft = () => {
    if (frontsData[activeFrontId].orientation === "Desna vrata") {
      setLeft(
        `calc(0% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} + ${
          (100 / dimensions.h) *
            frontsData[activeFrontId].handles.centerDistanceOfHole[0] +
          "%"
        })`
      );
    }
    if (frontsData[activeFrontId].orientation === "Leva vrata") {
      if (
        frontsData[activeFrontId].handles.positionOption === 0 ||
        frontsData[activeFrontId].handles.positionOption === 1
      ) {
        setLeft(
          `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
            (100 / dimensions.h) *
              wheelBasesArr[frontsData[activeFrontId].handles.wheelbaseOption] +
            "%"
          } - ${
            (100 / dimensions.h) *
              frontsData[activeFrontId].handles.centerDistanceOfHole[0] +
            "%"
          } + 1px)`
        );
      } else {
        setLeft(
          `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
            (100 / dimensions.h) *
              frontsData[activeFrontId].handles.centerDistanceOfHole[0] +
            "%"
          } + 1px)`
        );
      }
    }
    if (frontsData[activeFrontId].orientation === "Kip vrata") {
      if (frontsData[activeFrontId].handles.positionOption === 0) {
        setLeft(
          `calc(0% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} + ${
            (100 / dimensions.h) *
              frontsData[activeFrontId].handles.centerDistanceOfHole[0] +
            "%"
          })`
        );
      }
      if (frontsData[activeFrontId].handles.positionOption === 1) {
        setLeft(
          `calc(50% - ${(1000 / dimensions.h) * 1.8 * 1 + "%"} - ${
            ((100 / dimensions.h) *
              wheelBasesArr[
                frontsData[activeFrontId].handles.wheelbaseOption
              ]) /
              2 +
            "%"
          } + 1px)`
        );
      }
      if (frontsData[activeFrontId].handles.positionOption === 2) {
        setLeft(
          `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
            (100 / dimensions.h) *
              wheelBasesArr[frontsData[activeFrontId].handles.wheelbaseOption] +
            "%"
          } - ${
            (100 / dimensions.h) *
              frontsData[activeFrontId].handles.centerDistanceOfHole[0] +
            "%"
          } + 1px)`
        );
      }
    }
  };

  const generateOrientation = () => {
    if (
      frontsData[activeFrontId].orientation === "Leva vrata" ||
      frontsData[activeFrontId].orientation === "Desna vrata"
    ) {
      if (
        frontsData[activeFrontId].handles.positionOption === 0 ||
        frontsData[activeFrontId].handles.positionOption === 1
      ) {
        setOrientation("row");
      } else {
        setOrientation("column");
      }
    } else {
      setOrientation("row");
    }
  };

  useEffect(() => {
    generateTop();
    generateLeft();
    generateOrientation();
  }, [
    frontsData[activeFrontId].orientation,
    frontsData[activeFrontId].handles.positionOption,
    frontsData[activeFrontId].handles.wheelbaseOption,
    frontsData[activeFrontId].handles.centerDistanceOfHole,
  ]);

  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: orientation,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: `calc(${
          (100 / dimensions.h) *
            wheelBasesArr[frontsData[activeFrontId].handles.wheelbaseOption] +
          "%"
        } - ${(1000 / dimensions.h) * 1.8 * 1 + "%"})`,
      }}
    >
      {frontsData[activeFrontId].handles.centerDistanceOfHole.map(
        (holeDistance, id) => (
          <div
            key={Math.random()}
            style={{
              height: (1000 / dimensions.h) * 1.8 + "%",
            }}
            className="border border-gray-800 aspect-square rounded-full bg-white"
          ></div>
        )
      )}
    </div>
  );
}

export default HandlesRenderer;
