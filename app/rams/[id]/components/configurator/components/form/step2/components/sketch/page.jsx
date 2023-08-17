"use client";
import React, { useState, useEffect, useRef } from "react";
import HingesRenderer from "./components/hingesRenderer/page";
import HandlesRenderer from "./components/handlesRenderer/page";
import ProfileRenderer from "./components/profileRenderer/page";
import LocksRenderer from "./components/locksRenderer/page";

function Sketch(props) {
  const { frontsData, activeFrontId } = props;

  const scheme = useRef(null);

  const [dimensions, setDimensions] = useState({
    w: frontsData[activeFrontId].dimensions.width,
    h: frontsData[activeFrontId].dimensions.height,
  });

  useEffect(() => {
    setDimensions({
      w: frontsData[activeFrontId].dimensions.width,
      h: frontsData[activeFrontId].dimensions.height,
    });
  }, [
    frontsData[activeFrontId].dimensions.width,
    frontsData[activeFrontId].dimensions.height,
  ]);

  const liftingSystemMechanismsArr = [
    "OPM Amort.gasni 80N GTV",
    "OPM Amort.gasni 100N GTV",
    "OPM Amort.gasni 80N kratki GTV",
    "OPM Amort.gasni 100N slow HS",
    "OPM DUO STANDARD mehanizam HF",
    "OPM DUO FORTE Mehanizam HF",
    "OPM FREE FLAP B Mehanizam HF",
    "OPM FREE Flap C Mehanizam HF",
    "OPM FREE Flap D Mehanizam HF",
    "OPM FREE Flap F Mehanizam HF",
    "OPM FREE Flap G Mehanizam HF",
    "OPM FREE Flap E Mehanizam HF",
    "OPM HL Mehanizam BLUM",
  ];

  return (
    <div className="relative w-full self-start rounded-lg shadow-md shadow-gray-500 p-6 overflow-hidden">
      <h2 className="text-xl font-semibold uppercase tracking-wider text-black">
        Tehnicki crtez
      </h2>
      <div className="py-4 px-8">
        <div className="aspect-square w-full flex justify-center items-center">
          <div className="w-full grid grid-cols-[30px_1fr_30px] grid-rows-[30px_1fr] gap-1">
            <div
              style={{
                backgroundColor:
                  frontsData[activeFrontId].orientation === "Kip vrata"
                    ? "palevioletred"
                    : "",
                width:
                  100 *
                    (dimensions.w / dimensions.h > 1
                      ? 1
                      : dimensions.w / dimensions.h) +
                  "%",
              }}
              className="col-[2/3] flex justify-center items-center px-2"
            >
              {frontsData[activeFrontId].orientation === "Kip vrata" && (
                <p className="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-semibold">
                  STRANA SA SARKAMA
                </p>
              )}
            </div>
            <div
              style={{
                backgroundColor:
                  frontsData[activeFrontId].orientation === "Leva vrata"
                    ? "palevioletred"
                    : frontsData[activeFrontId].orientation === "Kip vrata" &&
                      frontsData[activeFrontId].liftingSystem
                        .activeMechanismOption > 0 &&
                      (frontsData[activeFrontId].liftingSystem
                        .activePositionOption === 0 ||
                        frontsData[activeFrontId].liftingSystem
                          .activePositionOption === 2) &&
                      frontsData[activeFrontId].liftingSystem.activeOption != 0
                    ? "#4682B4"
                    : "",
                height:
                  100 *
                    (dimensions.h / dimensions.w > 1
                      ? 1
                      : dimensions.h / dimensions.w) +
                  "%",
              }}
              className="col-[1/2] flex justify-center items-center py-2"
            >
              {frontsData[activeFrontId].orientation === "Leva vrata" && (
                <p
                  style={{ writingMode: "vertical-lr" }}
                  className="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-semibold"
                >
                  STRANA SA SARKAMA
                </p>
              )}
              {frontsData[activeFrontId].orientation === "Kip vrata" &&
                frontsData[activeFrontId].liftingSystem.activeMechanismOption >
                  0 &&
                (frontsData[activeFrontId].liftingSystem
                  .activePositionOption === 0 ||
                  frontsData[activeFrontId].liftingSystem
                    .activePositionOption === 2) &&
                frontsData[activeFrontId].liftingSystem.activeOption != 0 && (
                  <p
                    style={{ writingMode: "vertical-lr" }}
                    className="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-semibold"
                  >
                    {
                      liftingSystemMechanismsArr[
                        frontsData[activeFrontId].liftingSystem
                          .activeMechanismOption - 1
                      ]
                    }
                  </p>
                )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection:
                  Number(dimensions.w) > Number(dimensions.h)
                    ? "column"
                    : "row",
                justifyContent:
                  frontsData[activeFrontId].orientation === "Desna vrata" &&
                  Number(dimensions.h) > Number(dimensions.w)
                    ? "flex-end"
                    : "flex-start",
              }}
              className="aspect-square col-[2/3]"
            >
              <div
                ref={scheme}
                style={{
                  aspectRatio: `${Number(dimensions.w)}/${Number(
                    dimensions.h
                  )}`,
                }}
                className={`bg-green-200 border-gray-800 border relative`}
              >
                {frontsData[activeFrontId].hinges.activeOption > 0 && (
                  <HingesRenderer
                    frontsData={frontsData}
                    activeFrontId={activeFrontId}
                    dimensions={dimensions}
                  />
                )}
                {frontsData[activeFrontId].handles.activeOption === 1 && (
                  <HandlesRenderer
                    frontsData={frontsData}
                    activeFrontId={activeFrontId}
                    dimensions={dimensions}
                  />
                )}
                {frontsData[activeFrontId].handles.activeOption === 2 &&
                  frontsData[activeFrontId].handles.profileOption > 0 && (
                    <ProfileRenderer
                      frontsData={frontsData}
                      activeFrontId={activeFrontId}
                      dimensions={dimensions}
                    />
                  )}
                {frontsData[activeFrontId].locks.activeOption === 1 &&
                  (frontsData[activeFrontId].orientation === "Leva vrata" ||
                    frontsData[activeFrontId].orientation ===
                      "Desna vrata") && (
                    <LocksRenderer
                      frontsData={frontsData}
                      activeFrontId={activeFrontId}
                      dimensions={dimensions}
                    />
                  )}
              </div>
            </div>
            <div
              style={{
                backgroundColor:
                  frontsData[activeFrontId].orientation === "Desna vrata"
                    ? "palevioletred"
                    : frontsData[activeFrontId].orientation === "Kip vrata" &&
                      frontsData[activeFrontId].liftingSystem
                        .activeMechanismOption > 0 &&
                      (frontsData[activeFrontId].liftingSystem
                        .activePositionOption === 1 ||
                        frontsData[activeFrontId].liftingSystem
                          .activePositionOption === 2) &&
                      frontsData[activeFrontId].liftingSystem.activeOption != 0
                    ? "#4682B4"
                    : "",
                height:
                  100 *
                    (dimensions.h / dimensions.w > 1
                      ? 1
                      : dimensions.h / dimensions.w) +
                  "%",
              }}
              className="col-[3/4] flex justify-center items-center py-2"
            >
              {frontsData[activeFrontId].orientation === "Desna vrata" && (
                <p
                  style={{ writingMode: "vertical-lr" }}
                  className="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-semibold"
                >
                  STRANA SA SARKAMA
                </p>
              )}
              {frontsData[activeFrontId].orientation === "Kip vrata" &&
                frontsData[activeFrontId].liftingSystem.activeMechanismOption >
                  0 &&
                (frontsData[activeFrontId].liftingSystem
                  .activePositionOption === 1 ||
                  frontsData[activeFrontId].liftingSystem
                    .activePositionOption === 2) &&
                frontsData[activeFrontId].liftingSystem.activeOption != 0 && (
                  <p
                    style={{ writingMode: "vertical-lr" }}
                    className="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-semibold"
                  >
                    {
                      liftingSystemMechanismsArr[
                        frontsData[activeFrontId].liftingSystem
                          .activeMechanismOption - 1
                      ]
                    }
                  </p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sketch;
