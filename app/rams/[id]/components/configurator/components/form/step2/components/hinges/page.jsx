"use client";
import { setIndividualFronts } from "@/app/features/ram/ramData";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Hinges(props) {
  const {
    frontsData,
    setFrontsData,
    activeFrontId,
    createCenterDistanceOfHolesArr,
    ram,
  } = props;

  const [hinge, setHinge] = useState({});
  const [chosenHinge, setChosenHinge] = useState("");
  const individualFronts = useSelector((state) => state.data.individualFronts);

  const dispatch = useDispatch();

  useEffect(() => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFrontId) {
        return {
          ...obj,
          hinges: {
            ...obj.hinges,
            centerDistanceOfHoles: obj?.hinges?.centerDistanceOfHoles?.map(
              (hole, index) => {
                let a =
                  100 +
                  ((Number(individualFronts[activeFrontId].dimensions.height) -
                    200) /
                    Number(obj.hinges.centerDistanceOfHoles.length - 1)) *
                    index;
                return a;
              }
            ),
          },
        };
      }
      return obj;
    });

    dispatch(setIndividualFronts(updatedFrontsData));
  }, [individualFronts[activeFrontId].dimensions.height]);

  const handleRadioClick = (activeFront, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));

    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          hinges: {
            ...obj.hinges,
            activeOption: value,
            hasHinge: Boolean(value),
            shouldMount: value === 2 ? true : false,
          },
        };
      }
      return obj;
    });
    fronts[activeFront].hinges = {
      ...fronts[activeFront].hinges,
      activeOption: value,
      hasHinge: Boolean(value),
      shouldMount: value === 2 ? true : false,
    };
    setFrontsData(updatedFrontsData);
    dispatch(setIndividualFronts(fronts));
  };

  const handleResetHinges = (activeFront) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));
    fronts[activeFront].hinges = {
      ...fronts[activeFront].hinges,
      hasHinge: false,
      shouldMount: false,
      activeOption: 0,
      hinge: {},
      numberOfHinges: 2,
      centerDistanceOfHoles: ["100", "900"],
    };
    dispatch(setIndividualFronts(fronts));
  };

  const updateCenterDistanceOfHole = (activeFront, holeId, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));

    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          hinges: {
            ...obj.hinges,
            centerDistanceOfHoles: obj.hinges.centerDistanceOfHoles.map(
              (hole, index) => (holeId === index ? value : hole)
            ),
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
    fronts[activeFront].hinges.centerDistanceOfHoles[holeId] = value;

    dispatch(setIndividualFronts(fronts));
  };

  const updateNumberOfHinges = (activeFront, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));

    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          hinges: {
            ...obj.hinges,
            numberOfHinges: Number(value),
            centerDistanceOfHoles: createCenterDistanceOfHolesArr(
              frontsData[activeFront].dimensions.height,
              value
            ),
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
    fronts[activeFront].hinges.numberOfHinges = Number(value);
    fronts[activeFront].hinges.centerDistanceOfHoles =
      createCenterDistanceOfHolesArr(
        fronts[activeFront].dimensions.height,
        Number(value)
      );
    dispatch(setIndividualFronts(fronts));
  };

  const handleChooseHingeType = (e, activeFront) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));
    let hingeType;
    for (let i = 0; i < ram?.cmsAluHinges.length; ++i) {
      if (ram?.cmsAluHinges[i].id === e.target.value) {
        hingeType = ram?.cmsAluHinges[i];
      }
    }
    setChosenHinge(e.target.value);
    setHinge(hingeType);

    fronts[activeFront].hinges.hinge = hingeType;
    fronts[activeFront].hinges.hasHinge = true;
    dispatch(setIndividualFronts(fronts));
  };

  return (
    <div className="relative w-full self-start rounded-lg shadow-md shadow-gray-500 p-6">
      <h2 className="text-xl font-semibold uppercase tracking-wider text-black">
        Šarke
      </h2>

      <div className="mt-4 mx-2">
        <div className="py-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              handleRadioClick(activeFrontId, 0);
              handleResetHinges(activeFrontId);
            }}
          >
            <input
              type="radio"
              name="hinges"
              id="noHinges"
              className="mr-2 cursor-pointer"
              value={0}
              checked={
                individualFronts[activeFrontId].hinges.activeOption === 0
              }
              onChange={() => {
                handleRadioClick(activeFrontId, 0);
                handleResetHinges(activeFrontId);
              }}
            />
            <label htmlFor="noHinges" className="text-lg cursor-pointer">
              Bez bušenja rupa za šarke
            </label>
          </div>
        </div>

        <div className="py-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              handleRadioClick(activeFrontId, 1);
            }}
          >
            <input
              type="radio"
              name="hinges"
              id="standardHinge"
              className="mr-2 cursor-pointer"
              value={1}
              checked={
                individualFronts[activeFrontId].hinges.activeOption === 1
              }
              onChange={() => {
                handleRadioClick(activeFrontId, 1);
              }}
              disabled={ram?.requiresSpecialHinges ?? false}
            />
            <label
              htmlFor="standardHinge"
              className={`text-lg ${
                ram?.requiresSpecialHinges
                  ? "text-slate-400 cursor-not-allowed line-through pointer-events-none"
                  : "cursor-pointer"
              }`}
            >
              Bušenje rupa za standardne šarke 35 mm
            </label>
          </div>
        </div>

        <div className="py-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              handleRadioClick(activeFrontId, 2);
            }}
          >
            <input
              type="radio"
              name="hinges"
              id="montingHinge"
              className="mr-2 cursor-pointer"
              value={2}
              checked={
                individualFronts[activeFrontId].hinges.activeOption === 2
              }
              onChange={() => {
                handleRadioClick(activeFrontId, 2);
              }}
            />
            <label htmlFor="montingHinge" className="text-lg cursor-pointer">
              Bušenje rupa sa montažom šarki
            </label>
          </div>
        </div>
        {individualFronts[activeFrontId].hinges.hasHinge && (
          <div className="ml-6 my-2">
            {individualFronts[activeFrontId].hinges.shouldMount && (
              <div className="mb-4">
                <label htmlFor="montingHinges" className="text-lg mr-8">
                  Šarke za montazu
                </label>
                <select
                  type="number"
                  id="montingHinges"
                  className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                  value={individualFronts[activeFrontId]?.hinges?.hinge?.id}
                  onChange={(e) => handleChooseHingeType(e, activeFrontId)}
                >
                  <option value={null} key={`initial-option-1`}>
                    -Izaberi-
                  </option>
                  {ram?.cmsAluHinges?.map((hinge) => (
                    <option value={hinge.id} key={hinge.id}>
                      {hinge.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {individualFronts[activeFrontId].hinges?.hinge?.id ? (
              <>
                <div>
                  <label htmlFor="numOfStandardHinges" className="text-lg mr-8">
                    Ukupan broj šarki:
                  </label>
                  <select
                    type="number"
                    id="numOfStandardHinges"
                    className="border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                    value={
                      individualFronts[activeFrontId].hinges.numberOfHinges
                    }
                    onChange={(e) => {
                      updateNumberOfHinges(activeFrontId, e.target.value);
                    }}
                  >
                    <option value={null}>-Izaberi-</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <div>
                  <p className="text-lg mt-4">
                    Pozicija svih šarki se uzima od
                    {individualFronts[activeFrontId].orientation === "Kip vrata"
                      ? " leve "
                      : " donje "}
                    spoljne ivice.
                  </p>
                  <div className="flex flex-col gap-2 mt-4">
                    {individualFronts[
                      activeFrontId
                    ].hinges?.centerDistanceOfHoles?.map((hole, id) => {
                      return (
                        <div
                          key={id}
                          className="flex justify-between flex-col 2xl:flex-row lg:flex-col md:flex-row"
                        >
                          <label
                            htmlFor={`hole-${id}`}
                            className="text-lg mb-2 2xl:mb-0"
                          >
                            Centar {id + 1}. rupe od{" "}
                            {individualFronts[activeFrontId].orientation ===
                            "Kip vrata"
                              ? "leve"
                              : "donje"}{" "}
                            spoljne ivice (mm)
                          </label>
                          <input
                            type="text"
                            id={`hole-${id}`}
                            value={
                              individualFronts[activeFrontId].hinges
                                ?.centerDistanceOfHoles[id]
                            }
                            onChange={(e) => {
                              updateCenterDistanceOfHole(
                                activeFrontId,
                                id,
                                e.target.value
                              );
                            }}
                            className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hinges;
