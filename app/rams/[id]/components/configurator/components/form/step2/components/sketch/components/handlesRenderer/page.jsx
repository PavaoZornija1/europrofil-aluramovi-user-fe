"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function HandlesRenderer(props) {
  const { frontsData, activeFrontId, dimensions } = props;
  const [top, setTop] = useState("");
  const [left, setLeft] = useState("");
  const [orientation, setOrientation] = useState("row");
  const individualFronts = useSelector((state) => state.data.individualFronts);

  let manualDistanceInput = individualFronts[activeFrontId].handles
    .holeDistanceManualValue
    ? Number(individualFronts[activeFrontId].handles.holeDistanceManualValue)
    : 0;
  const wheelBasesArr = [
    32,
    64,
    96,
    128,
    160,
    192,
    224,
    256,
    282,
    320,
    352,
    384,
    416,
    448,
    480,
    +manualDistanceInput,
  ];
  console.log(wheelBasesArr);

  const generateTop = () => {
    if (
      individualFronts[activeFrontId].orientation === "Leva vrata" ||
      individualFronts[activeFrontId].orientation === "Desna vrata"
    ) {
      if (individualFronts[activeFrontId].handles.positionOption === 0) {
        setTop(
          `calc(0% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} + ${
            (100 / dimensions.h) *
              individualFronts[activeFrontId].handles.centerDistanceOfHole[1] +
            "%"
          })`
        );
      }

      if (individualFronts[activeFrontId].handles.positionOption === 1) {
        setTop(
          `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
            (100 / dimensions.h) *
              individualFronts[activeFrontId].handles.centerDistanceOfHole[1] +
            "%"
          } + 1px)`
        );
      } else if (individualFronts[activeFrontId].handles.positionOption === 4) {
        setTop(
          `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
            (100 / dimensions.h) *
              Number(
                individualFronts[activeFrontId].handles.centerDistanceOfHole[1]
              ) +
            "%"
          }
          
           + 1px)`
        );
      }
      if (individualFronts[activeFrontId].handles.positionOption === 2) {
        setTop(
          `calc(0% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} + ${
            (100 / dimensions.h) *
              individualFronts[activeFrontId].handles.centerDistanceOfHole[1] +
            "%"
          })`
        );
      }

      if (individualFronts[activeFrontId].handles.positionOption === 3) {
        setTop(
          `calc(50% - ${(1000 / dimensions.h) * 1.8 * 1 + "%"} - ${
            ((100 / dimensions.h) *
              wheelBasesArr[
                individualFronts[activeFrontId].handles.wheelbaseOption
              ]) /
              2 +
            "%"
          } + 1px)`
        );
      }
    }
    if (individualFronts[activeFrontId].orientation === "Kip vrata") {
      setTop(
        `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
          (100 / dimensions.h) *
            individualFronts[activeFrontId].handles.centerDistanceOfHole[1] +
          "%"
        } + 1px)`
      );
    }
  };

  const generateLeft = () => {
    if (individualFronts[activeFrontId].orientation === "Desna vrata") {
      setLeft(
        `calc(0% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} + ${
          (100 / dimensions.h) *
            individualFronts[activeFrontId].handles.centerDistanceOfHole[0] +
          "%"
        })`
      );
    }
    if (individualFronts[activeFrontId].orientation === "Leva vrata") {
      if (
        individualFronts[activeFrontId].handles.positionOption === 0 ||
        individualFronts[activeFrontId].handles.positionOption === 1
      ) {
        if (individualFronts[activeFrontId].handles.wheelbaseOption === 15) {
          // setLeft(
          //   `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
          //     (100 / dimensions.h) *
          //       Number(
          //         individualFronts[activeFrontId].handles
          //           .centerDistanceOfHole[0]
          //       ) +
          //     "%"
          //   } - ${
          //     (100 / dimensions.h) *
          //       individualFronts[activeFrontId].handles
          //         .centerDistanceOfHole[0] +
          //     "%"
          //   } + 1px)`
          // );
          setLeft(
            `calc(100% - ${1000 / dimensions.h + "%"} - ${
              (100 / dimensions.h) *
                Number(
                  individualFronts[activeFrontId].handles
                    .centerDistanceOfHole[0]
                ) +
              "%"
            }`
          );
        } else {
          setLeft(
            `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
              (100 / dimensions.h) *
                wheelBasesArr[
                  individualFronts[activeFrontId].handles.wheelbaseOption
                ] +
              "%"
            } - ${
              (100 / dimensions.h) *
                individualFronts[activeFrontId].handles
                  .centerDistanceOfHole[0] +
              "%"
            } + 1px)`
          );
        }
      } else {
        setLeft(
          `calc(100% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} - ${
            (100 / dimensions.h) *
              individualFronts[activeFrontId].handles.centerDistanceOfHole[0] +
            "%"
          } + 1px)`
        );
      }
    }
    if (individualFronts[activeFrontId].orientation === "Kip vrata") {
      if (individualFronts[activeFrontId].handles.positionOption === 0) {
        setLeft(
          `calc(0% - ${(1000 / dimensions.h) * 1.8 * 0.5 + "%"} + ${
            (100 / dimensions.h) *
              individualFronts[activeFrontId].handles.centerDistanceOfHole[0] +
            "%"
          })`
        );
      }
      if (individualFronts[activeFrontId].handles.positionOption === 1) {
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
    individualFronts[activeFrontId].orientation,
    individualFronts[activeFrontId].handles.positionOption,
    individualFronts[activeFrontId].handles.wheelbaseOption,
    individualFronts[activeFrontId].handles.centerDistanceOfHole,
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
            (individualFronts[activeFrontId].handles.wheelbaseOption === 16
              ? Number(
                  individualFronts[activeFrontId].handles
                    .holeDistanceManualValue
                )
              : wheelBasesArr[
                  individualFronts[activeFrontId].handles.wheelbaseOption
                ]) +
          "%"
        } - ${(1000 / dimensions.h) * 1.8 * 1 + "%"})`,
      }}
    >
      {individualFronts[activeFrontId].handles.wheelbaseOption === 15 ? (
        <div
          key={`singleHoleDistance`}
          style={{
            height: (1000 / dimensions.h) * 1.8 + "%",
          }}
          className="border border-gray-800 aspect-square rounded-full bg-white"
        ></div>
      ) : (
        individualFronts[activeFrontId].handles.centerDistanceOfHole.map(
          (holeDistance, id) => (
            <div
              key={`holeDistance - ${id}`}
              style={{
                height: (1000 / dimensions.h) * 1.8 + "%",
                backgroundColor: id === 0 ? "red" : "blue",
              }}
              className="border border-gray-800 aspect-square rounded-full bg-white"
            ></div>
          )
        )
      )}
    </div>
  );
}

export default HandlesRenderer;
