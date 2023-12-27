"use client";
import React from "react";
import { useSelector } from "react-redux";

function HingesRenderer(props) {
  const { frontsData, activeFrontId, dimensions } = props;
  const individualFronts = useSelector((state) => state.data.individualFronts);

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left:
          individualFronts[activeFrontId].orientation === "Desna vrata"
            ? `calc(100% - ${(1000 / dimensions.h) * 1.8 + "%"})`
            : "0px",
        height: "100%",
        width:
          individualFronts[activeFrontId].orientation === "Kip vrata"
            ? "100%"
            : "auto",
      }}
    >
      {individualFronts[activeFrontId].hinges?.centerDistanceOfHoles?.map(
        (holeDistance) => (
          <div
            key={Math.random()}
            style={{
              position: "absolute",
              bottom:
                individualFronts[activeFrontId].orientation === "Kip vrata"
                  ? "auto"
                  : `calc(${(100 / dimensions.h) * holeDistance + "%"} - ${
                      ((1000 / dimensions.h) * 1.8) / 2 + "%"
                    })`,
              left:
                individualFronts[activeFrontId].orientation === "Kip vrata"
                  ? `calc(${(100 / dimensions.h) * holeDistance + "%"} - ${
                      ((1000 / dimensions.h) * 1.8) / 2 + "%"
                    })`
                  : "auto",
              height: (1000 / dimensions.h) * 1.8 + "%",
            }}
            className="border border-gray-800 aspect-square rounded-full bg-white"
          ></div>
        )
      )}
    </div>
  );
}

export default HingesRenderer;
