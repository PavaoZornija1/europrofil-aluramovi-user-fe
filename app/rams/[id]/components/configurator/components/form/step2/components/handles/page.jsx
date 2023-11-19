"use client";

import {
  setHandleHole,
  setHandleHoleQty,
  setHandleProfile,
  setIndividualFronts,
} from "@/app/features/ram/ramData";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Handles(props) {
  const { frontsData, setFrontsData, activeFrontId } = props;
  const [handle, setHandle] = useState({});
  const [chosenHandle, setChosenHandle] = useState("");

  const dispatch = useDispatch();
  const individualFronts = useSelector((state) => state.data.individualFronts);

  const handleRadioClick = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            activeOption: value,
            shouldDrillHoles: value === 1 ? true : false,
            shouldMountProfile: value === 2 ? true : false,
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const updatePosition = (activeFront, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            positionOption: value,
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
    fronts[activeFront].handles.positionOption =
      updatedFrontsData[activeFront].handles.positionOption;
    dispatch(setIndividualFronts(fronts));
  };

  const updateWheelbaseOption = (activeFront, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            wheelbaseOption: value,
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
    fronts[activeFront].handles.wheelbaseOption =
      updatedFrontsData[activeFront].handles.wheelbaseOption;
    dispatch(setIndividualFronts(fronts));
  };

  const updateCenterDistanceOfHole = (activeFront, value, index) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        const updatedDistanceArray = obj.handles.centerDistanceOfHole.map(
          (hole, id) => {
            if (id === index) {
              return value;
            }
            return hole;
          }
        );
        return {
          ...obj,
          handles: {
            ...obj.handles,
            centerDistanceOfHole: updatedDistanceArray,
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const updateProfileOption = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            profileOption: Number(value),
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const updateProfilePositionOption = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            profilePositionOption: Number(value),
          },
        };
      }

      return obj;
    });
    setFrontsData(updatedFrontsData);
  };

  const updateProfileLengthOption = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            profileLengthOption: Number(value),
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const updateProfileDistance = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            profileDistance: value,
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const updateProfileLength = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            profileLength: value,
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const handleChooseHandleProfile = (e) => {
    let profileType = e.target.value;
    for (let i = 0; i < props.ram?.cmsAluHandleProfiles.length; ++i) {
      if (props.ram?.cmsAluHandleProfiles[i].id === e.target.value) {
        profileType = props.ram?.cmsAluHandleProfiles[i];
      }
    }
    setChosenHandle(e.target.value);
    setHandle(profileType);

    dispatch(setHandleProfile(profileType));
  };

  return (
    <div className="relative w-full self-start rounded-lg shadow-md shadow-gray-500 p-6">
      <h2 className="text-xl font-semibold uppercase tracking-wider text-black">
        RUČICE
      </h2>
      <div className="mt-4 mx-2">
        <div className="py-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              handleRadioClick(activeFrontId, 0);
            }}
          >
            <input
              type="radio"
              name="handles"
              id="first"
              className="mr-2 cursor-pointer"
              checked={frontsData[activeFrontId].handles.activeOption === 0}
              onChange={() => {
                handleRadioClick(activeFrontId, 0);
              }}
            />
            <label htmlFor="first" className="text-lg cursor-pointer">
              Bez rupa za rucicu
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
              name="handles"
              id="second"
              className="mr-2 cursor-pointer"
              value={1}
              checked={frontsData[activeFrontId].handles.activeOption === 1}
              onChange={() => {
                handleRadioClick(activeFrontId, 1);
              }}
            />
            <label htmlFor="second" className="text-lg cursor-pointer">
              Bušenje rupa za rucicu
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
              name="handles"
              id="third"
              className="mr-2 cursor-pointer"
              value={2}
              checked={frontsData[activeFrontId].handles.activeOption === 2}
              onChange={() => {
                handleRadioClick(activeFrontId, 2);
              }}
            />
            <label htmlFor="third" className="text-lg cursor-pointer">
              Postavljanja profila rucice
            </label>
          </div>
        </div>
        {frontsData[activeFrontId].handles.shouldDrillHoles && (
          <div className="ml-6 my-2">
            {frontsData[activeFrontId].orientation === "Leva vrata" ||
            frontsData[activeFrontId].orientation === "Desna vrata" ? (
              <div className="mb-4">
                <label htmlFor="numOfStandardHinges" className="text-lg mr-8">
                  Polozaj
                </label>
                <select
                  type="number"
                  id="numOfStandardHinges"
                  className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                  value={frontsData[activeFrontId].handles.positionOption}
                  onChange={(e) => {
                    updatePosition(activeFrontId, e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="Horizontalno, uz gornju ivicu">
                    Horizontalno, uz gornju ivicu
                  </option>
                  <option value="Horizontalno, uz donju ivicu">
                    Horizontalno, uz donju ivicu
                  </option>
                  <option value="Vertikalno, pri gornjoj ivici">
                    Vertikalno, pri gornjoj ivici
                  </option>
                  <option value="Vertikalno, na sredini">
                    Vertikalno, na sredini
                  </option>
                  <option value="Vertikalno, pri donjoj ivici">
                    Vertikalno, pri donjoj ivici
                  </option>
                </select>
              </div>
            ) : (
              <div className="mb-4">
                <label htmlFor="numOfStandardHinges" className="text-lg mr-8">
                  Polozaj
                </label>
                <select
                  type="number"
                  id="numOfStandardHinges"
                  className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                  value={frontsData[activeFrontId].handles.positionOption}
                  onChange={(e) => {
                    updatePosition(activeFrontId, e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option value="Pri levoj ivici">Pri levoj ivici</option>
                  <option value="Centrirano">Centrirano</option>
                  <option value="Pri desnoj ivici">Pri desnoj ivici</option>
                </select>
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="numOfStandardHinges" className="text-lg mr-8">
                Osnovno rastojanje rupa
              </label>
              <select
                type="number"
                id="numOfStandardHinges"
                className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                value={frontsData[activeFrontId].handles.wheelbaseOption}
                onChange={(e) => {
                  updateWheelbaseOption(activeFrontId, e.target.value);
                }}
              >
                <option value="32 mm">32 mm</option>
                <option value="64 mm">64 mm</option>
                <option value="96 mm">96 mm</option>
                <option value="128 mm">128 mm</option>
                <option value="160 mm">160 mm</option>
                <option value="192 mm">192 mm</option>
                <option value="224 mm">224 mm</option>
                <option value="256 mm">256 mm</option>
                <option value="282 mm">282 mm</option>
                <option value="320 mm">320 mm</option>
                <option value="352 mm">352 mm</option>
                <option value="384 mm">384 mm</option>
                <option value="416 mm">416 mm</option>
                <option value="448 mm">448 mm</option>
                <option value="480 mm">480 mm</option>
                <option value="Samo jedna rupa (dugme rucica)">
                  Samo jedna rupa (dugme rucica)
                </option>
                <option value="Rucni unos osnog rastojanja">
                  Rucni unos osnog rastojanja
                </option>
              </select>
            </div>

            <div className="flex justify-between mb-2 mt-2 flex-col 2xl:flex-row lg:flex-col md:flex-row">
              <label htmlFor={`firstHole`} className="text-lg mb-2 2xl:mb-0">
                Centar prve rupe od desne spoljne ivice (mm)
              </label>
              <input
                type="text"
                id={`firstHole`}
                value={
                  frontsData[activeFrontId].handles.centerDistanceOfHole[0]
                }
                onChange={(e) => {
                  updateCenterDistanceOfHole(activeFrontId, e.target.value, 0);
                }}
                className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
              />
            </div>

            <div className="flex justify-between flex-col 2xl:flex-row lg:flex-col md:flex-row">
              <label htmlFor={`secondHole`} className="text-lg mb-2 2xl:mb-0">
                Centar prve rupe od gornje spoljne ivice (mm)
              </label>
              <input
                type="text"
                id={`secondHole`}
                value={
                  frontsData[activeFrontId].handles.centerDistanceOfHole[1]
                }
                onChange={(e) => {
                  updateCenterDistanceOfHole(activeFrontId, e.target.value, 1);
                }}
                className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
              />
            </div>
          </div>
        )}
        {frontsData[activeFrontId].handles.shouldMountProfile && (
          <div className="ml-6 my-2">
            <div className="mb-4">
              <label htmlFor="profiless" className="text-lg mr-8">
                Profil
              </label>
              <select
                id="profiless"
                value={chosenHandle}
                onChange={(e) => handleChooseHandleProfile(e)}
                className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
              >
                {props.ram?.cmsAluHandleProfiles?.map((handle) => (
                  <option value={handle.id} key={handle.id}>
                    {handle.name}
                  </option>
                ))}
              </select>
            </div>

            {frontsData[activeFrontId].handles.profileOption > 0 && (
              <div className="mb-4">
                <label htmlFor="duzina" className="text-lg mr-8">
                  Duzina
                </label>
                <select
                  id="duzina"
                  className="border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                  value={frontsData[activeFrontId].handles.profileLengthOption}
                  onChange={(e) => {
                    updateProfileLengthOption(activeFrontId, e.target.value);
                  }}
                >
                  <option value="0">Celom duzinom</option>
                  <option value="1">Delimicno</option>
                </select>
              </div>
            )}

            {frontsData[activeFrontId].handles.profileOption > 0 ? (
              frontsData[activeFrontId].handles.profileLengthOption === 0 ? (
                frontsData[activeFrontId].orientation === "Leva vrata" ||
                frontsData[activeFrontId].orientation === "Desna vrata" ? (
                  frontsData[activeFrontId].orientation === "Leva vrata" ? (
                    <div className="mb-4">
                      <label htmlFor="polozaj" className="text-lg mr-8">
                        Polozaj
                      </label>
                      <select
                        id="polozaj"
                        className="border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                        value={
                          frontsData[activeFrontId].handles
                            .profilePositionOption
                        }
                        onChange={(e) => {
                          updateProfilePositionOption(
                            activeFrontId,
                            e.target.value
                          );
                        }}
                      >
                        <option value="0">Duz desne ivice</option>
                        <option value="1">Duz gornje ivice</option>
                        <option value="2">Duz donje ivice</option>
                      </select>
                    </div>
                  ) : (
                    <div className="mb-4">
                      <label htmlFor="polozaj" className="text-lg mr-8">
                        Polozaj
                      </label>
                      <select
                        id="polozaj"
                        className="border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                        value={
                          frontsData[activeFrontId].handles
                            .profilePositionOption
                        }
                        onChange={(e) => {
                          updateProfilePositionOption(
                            activeFrontId,
                            e.target.value
                          );
                        }}
                      >
                        <option value="0">Duz leve ivice</option>
                        <option value="1">Duz gornje ivice</option>
                        <option value="2">Duz donje ivice</option>
                      </select>
                    </div>
                  )
                ) : (
                  ""
                )
              ) : frontsData[activeFrontId].orientation === "Leva vrata" ||
                frontsData[activeFrontId].orientation === "Desna vrata" ? (
                frontsData[activeFrontId].orientation === "Leva vrata" ? (
                  <div className="mb-4">
                    <label htmlFor="polozaj" className="text-lg mr-8">
                      Polozaj
                    </label>
                    <select
                      id="polozaj"
                      className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                      value={
                        frontsData[activeFrontId].handles.profilePositionOption
                      }
                      onChange={(e) => {
                        updateProfilePositionOption(
                          activeFrontId,
                          e.target.value
                        );
                      }}
                    >
                      <option value="0">Duz gornje ivice</option>
                      <option value="1">Duz donje ivice</option>
                      <option value="2">Duz desne ivice, u gornjoj zoni</option>
                      <option value="3">Duz desne ivice, centrirano</option>
                      <option value="4">Duz desne ivice, u donjoj zoni</option>
                    </select>
                  </div>
                ) : (
                  <div className="mb-4">
                    <label htmlFor="polozaj" className="text-lg mr-8">
                      Polozaj
                    </label>
                    <select
                      id="polozaj"
                      className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                      value={
                        frontsData[activeFrontId].handles.profilePositionOption
                      }
                      onChange={(e) => {
                        updateProfilePositionOption(
                          activeFrontId,
                          e.target.value
                        );
                      }}
                    >
                      <option value="0">Duz gornje ivice</option>
                      <option value="1">Duz donje ivice</option>
                      <option value="2">Duz leve ivice, u gornjoj zoni</option>
                      <option value="3">Duz leve ivice, centrirano</option>
                      <option value="4">Duz leve ivice, u donjoj zoni</option>
                    </select>
                  </div>
                )
              ) : (
                <div className="mb-4">
                  <label htmlFor="polozaj" className="text-lg mr-8">
                    Polozaj
                  </label>
                  <select
                    id="polozaj"
                    className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                    value={
                      frontsData[activeFrontId].handles.profilePositionOption
                    }
                    onChange={(e) => {
                      updateProfilePositionOption(
                        activeFrontId,
                        e.target.value
                      );
                    }}
                  >
                    <option value="0">Duz donje ivice, u levoj zoni</option>
                    <option value="1">Duz donje ivice, centrirano</option>
                    <option value="2">Duz donje ivice, u desnoj zoni</option>
                  </select>
                </div>
              )
            ) : (
              ""
            )}

            {frontsData[activeFrontId].handles.profileLengthOption === 1 && (
              <div>
                <div className="flex justify-between mb-2 mt-2 flex-col 2xl:flex-row lg:flex-col md:flex-row">
                  <label
                    htmlFor={`startEdge`}
                    className="text-lg mb-2 2xl:mb-0"
                  >
                    Pocetak u odnosu na levu spoljnu ivicu
                  </label>
                  <input
                    type="text"
                    id={`startEdge`}
                    value={frontsData[activeFrontId].handles.profileDistance}
                    onChange={(e) => {
                      updateProfileDistance(activeFrontId, e.target.value);
                    }}
                    className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
                  />
                </div>
                <div className="flex justify-between mb-2 mt-2 flex-col 2xl:flex-row lg:flex-col md:flex-row">
                  <label
                    htmlFor={`lengthOfProfile`}
                    className="text-lg mb-2 2xl:mb-0"
                  >
                    Duzina profila rucice
                  </label>
                  <input
                    type="text"
                    id={`lengthOfProfile`}
                    value={frontsData[activeFrontId].handles.profileLength}
                    onChange={(e) => {
                      updateProfileLength(activeFrontId, e.target.value);
                    }}
                    className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Handles;
