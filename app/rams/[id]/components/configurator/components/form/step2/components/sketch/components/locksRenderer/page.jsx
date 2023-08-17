"use client";
import React, { useState, useEffect } from "react";

function LocksRenderer(props) {
  const { frontsData, activeFrontId, dimensions } = props;

  return (
    <div
      style={{
        position: "absolute",
        top: `calc(100% - ${
          ((100 / dimensions.h) *
            (frontsData[activeFrontId].locks.holeDiameter / 10)) /
            2 +
          "%"
        } - ${
          (100 / dimensions.h) *
            frontsData[activeFrontId].locks.centerDistanceOfHole[0] +
          "%"
        })`,
        left:
          frontsData[activeFrontId].orientation === "Leva vrata"
            ? `calc(100% - ${
                ((100 / dimensions.h) *
                  (frontsData[activeFrontId].locks.holeDiameter / 10)) /
                  2 +
                "%"
              } - ${
                (100 / dimensions.h) *
                  frontsData[activeFrontId].locks.centerDistanceOfHole[1] +
                "%"
              })`
            : `calc(0% - ${
                ((100 / dimensions.h) *
                  (frontsData[activeFrontId].locks.holeDiameter / 10)) /
                  2 +
                "%"
              } +  ${
                (100 / dimensions.h) *
                  frontsData[activeFrontId].locks.centerDistanceOfHole[1] +
                "%"
              })`,
        height:
          (100 / dimensions.h) *
            (frontsData[activeFrontId].locks.holeDiameter / 10) +
          "%",
      }}
      className="border border-gray-800 aspect-square rounded-full bg-white"
    ></div>
  );
}

export default LocksRenderer;
