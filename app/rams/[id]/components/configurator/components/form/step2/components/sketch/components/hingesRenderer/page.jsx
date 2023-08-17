"use client";
import React from "react";

function HingesRenderer(props) {
  const { frontsData, activeFrontId, dimensions } = props;

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left:
          frontsData[activeFrontId].orientation === "Desna vrata"
            ? `calc(100% - ${(100 / dimensions.h) * 3.5 + "%"})`
            : "0px",
        height: "100%",
        width:
          frontsData[activeFrontId].orientation === "Kip vrata"
            ? "100%"
            : "auto",
      }}
    >
      {frontsData[activeFrontId].hinges.centerDistanceOfHoles.map(
        (holeDistance) => (
          <div
            key={Math.random()}
            style={{
              position: "absolute",
              bottom:
                frontsData[activeFrontId].orientation === "Kip vrata"
                  ? "auto"
                  : `calc(${(100 / dimensions.h) * holeDistance + "%"} - ${
                      ((100 / dimensions.h) * 3.5) / 2 + "%"
                    })`,
              left:
                frontsData[activeFrontId].orientation === "Kip vrata"
                  ? `calc(${(100 / dimensions.h) * holeDistance + "%"} - ${
                      ((100 / dimensions.h) * 3.5) / 2 + "%"
                    })`
                  : "auto",
              height: (100 / dimensions.h) * 3.5 + "%",
            }}
            className="border border-gray-800 aspect-square rounded-full bg-white"
          ></div>
        )
      )}
    </div>
  );
}

export default HingesRenderer;
