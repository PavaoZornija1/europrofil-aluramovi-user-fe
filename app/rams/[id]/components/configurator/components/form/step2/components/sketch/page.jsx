"use client";
import React, { useState, useEffect, useRef } from "react";
import HingesRenderer from "./components/hingesRenderer/page";
import HandlesRenderer from "./components/handlesRenderer/page";
import ProfileRenderer from "./components/profileRenderer/page";
import LocksRenderer from "./components/locksRenderer/page";
import { useSelector } from "react-redux";

function Sketch(props) {
  const { frontsData, activeFrontId } = props;

  const scheme = useRef(null);
  const individualFronts = useSelector((state) => state.data.individualFronts);

  const [dimensions, setDimensions] = useState({
    w: individualFronts[activeFrontId]?.dimensions?.width,
    h: individualFronts[activeFrontId]?.dimensions?.height,
  });

  useEffect(() => {
    setDimensions({
      w: individualFronts[activeFrontId]?.dimensions?.width,
      h: individualFronts[activeFrontId]?.dimensions?.height,
    });
  }, [
    individualFronts[activeFrontId]?.dimensions?.width,
    individualFronts[activeFrontId]?.dimensions?.height,
  ]);

  return (
    <div className="relative w-full self-start rounded-lg shadow-md shadow-gray-500 md:p-6 px-4 py-6 overflow-hidden">
      <h2 className="text-xl font-semibold uppercase tracking-wider text-black">
        Tehnicki crtez
      </h2>
      <div className="md:py-4 md:px-8 lg:py-0 lg:px-0 2xl:py-4 2xl:px-8">
        <div className="aspect-square w-full flex justify-center items-center">
          <div className="w-full grid grid-cols-[30px_1fr_30px] grid-rows-[30px_1fr] gap-1">
            <div
              style={{
                backgroundColor:
                  individualFronts[activeFrontId]?.orientation === "Kip vrata"
                    ? "palevioletred"
                    : "",
                // width:
                //   100 *
                //     (dimensions.w / dimensions.h > 1
                //       ? 1
                //       : dimensions.w / dimensions.h) +
                //   "%",
              }}
              className="col-[2/3] flex justify-center items-center px-2"
            >
              {individualFronts[activeFrontId]?.orientation === "Kip vrata" && (
                <p className="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-semibold">
                  STRANA SA SARKAMA
                </p>
              )}
            </div>
            <div
              style={{
                backgroundColor:
                  individualFronts[activeFrontId]?.orientation === "Leva vrata"
                    ? "palevioletred"
                    : individualFronts[activeFrontId]?.orientation ===
                        "Kip vrata" &&
                      individualFronts[activeFrontId]?.liftingSystem
                        ?.liftSupport?.id &&
                      (individualFronts[activeFrontId]?.liftingSystem
                        ?.activePositionOption === 0 ||
                        individualFronts[activeFrontId]?.liftingSystem
                          ?.activePositionOption === 2)
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
              {individualFronts[activeFrontId]?.orientation ===
                "Leva vrata" && (
                <p
                  style={{ writingMode: "vertical-lr" }}
                  className="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-semibold"
                >
                  STRANA SA SARKAMA
                </p>
              )}
              {((individualFronts[activeFrontId]?.orientation === "Kip vrata" &&
                individualFronts[activeFrontId]?.liftingSystem
                  ?.activePositionOption === 0) ||
                individualFronts[activeFrontId]?.liftingSystem
                  ?.activePositionOption === 2) &&
                individualFronts[activeFrontId]?.liftingSystem?.liftSupport
                  ?.id && (
                  <p
                    style={{ writingMode: "vertical-lr" }}
                    className="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-semibold bg-[#4682B4] w-full py-2"
                  >
                    {
                      individualFronts[activeFrontId]?.liftingSystem
                        ?.liftSupport?.name
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
                  individualFronts[activeFrontId]?.orientation ===
                    "Desna vrata" && Number(dimensions.h) > Number(dimensions.w)
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
                className={`bg-green-200 border-gray-800 border relative w-full`}
              >
                {individualFronts[activeFrontId]?.hinges?.hasHinge && (
                  <HingesRenderer
                    frontsData={frontsData}
                    activeFrontId={activeFrontId}
                    dimensions={dimensions}
                  />
                )}
                {individualFronts[activeFrontId]?.handles?.activeOption ===
                  1 && (
                  <HandlesRenderer
                    frontsData={frontsData}
                    activeFrontId={activeFrontId}
                    dimensions={dimensions}
                  />
                )}

                {individualFronts[activeFrontId]?.handles?.handleProfile?.id ? (
                  <ProfileRenderer
                    frontsData={frontsData}
                    activeFrontId={activeFrontId}
                    dimensions={dimensions}
                  />
                ) : null}
                {/* // )} */}
                {individualFronts[activeFrontId]?.locks?.activeOption === 1 &&
                  (individualFronts[activeFrontId]?.orientation ===
                    "Leva vrata" ||
                    individualFronts[activeFrontId]?.orientation ===
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
                  individualFronts[activeFrontId]?.orientation === "Desna vrata"
                    ? "palevioletred"
                    : individualFronts[activeFrontId]?.orientation ===
                        "Kip vrata" &&
                      individualFronts[activeFrontId]?.liftingSystem
                        ?.liftSupport?.id &&
                      (individualFronts[activeFrontId]?.liftingSystem
                        .activePositionOption === 1 ||
                        individualFronts[activeFrontId]?.liftingSystem
                          .activePositionOption === 2)
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
              {individualFronts[activeFrontId]?.orientation ===
                "Desna vrata" && (
                <p
                  style={{ writingMode: "vertical-lr" }}
                  className="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-semibold"
                >
                  STRANA SA SARKAMA
                </p>
              )}

              {/* individualFronts[activeFrontId].liftingSystem
                  ?.activePositionOption === 0) ||
                individualFronts[activeFrontId].liftingSystem
                  ?.activePositionOption === 2) &&
                individualFronts[activeFrontId].liftingSystem?.liftSupport
                  ?.id */}

              {individualFronts[activeFrontId]?.orientation === "Kip vrata" &&
                (individualFronts[activeFrontId]?.liftingSystem
                  ?.activePositionOption === 1 ||
                  individualFronts[activeFrontId]?.liftingSystem
                    ?.activePositionOption === 2) &&
                individualFronts[activeFrontId]?.liftingSystem?.liftSupport
                  ?.id && (
                  <p
                    style={{ writingMode: "vertical-lr" }}
                    className="inline-block overflow-hidden overflow-ellipsis whitespace-nowrap text-white font-semibold"
                  >
                    {
                      individualFronts[activeFrontId]?.liftingSystem
                        ?.liftSupport?.name
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
