"use client";
import React, { useState } from "react";

function Handles(props) {
  const { frontsData, setFrontsData, activeFrontId } = props;

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
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            positionOption: Number(value),
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const updateWheelbaseOption = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            wheelbaseOption: Number(value),
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
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
                  }}
                >
                  <option value="0">Horizontalno, uz gornju ivicu</option>
                  <option value="1">Horizontalno, uz donju ivicu</option>
                  <option value="2">Vertikalno, pri gornjoj ivici</option>
                  <option value="3">Vertikalno, na sredini</option>
                  <option value="4">Vertikalno, pri donjoj ivici</option>
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
                  }}
                >
                  <option value="0">Pri levoj ivici</option>
                  <option value="1">Centrirano</option>
                  <option value="2">Pri desnoj ivici</option>
                </select>
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="numOfStandardHinges" className="text-lg mr-8">
                Osno rastojanje rupa
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
                <option value="0">3.2 cm</option>
                <option value="1">6.4 cm</option>
                <option value="2">9.6 cm</option>
                <option value="3">12.8 cm</option>
                <option value="4">16.0 cm</option>
                <option value="5">19.2 cm</option>
                <option value="6">22.4 cm</option>
                <option value="7">25.6 cm</option>
                <option value="8">28.2 cm</option>
                <option value="9">32.0 cm</option>
                <option value="10">35.2 cm</option>
                <option value="11">38.4 cm</option>
                <option value="12">41.6 cm</option>
                <option value="13">44.8 cm</option>
                <option value="14">48.0 cm</option>
                <option value="15">Samo jedna rupa (dugme rucica)</option>
                <option value="16">Rucni unos osnog rastojanja</option>
              </select>
            </div>

            <div className="flex justify-between mb-2 mt-2">
              <label htmlFor={`firstHole`} className="text-lg">
                Centar prve rupe od desne spoljne ivice
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

            <div className="flex justify-between">
              <label htmlFor={`secondHole`} className="text-lg">
                Centar prve rupe od gornje spoljne ivice
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
                value={frontsData[activeFrontId].handles.profileOption}
                onChange={(e) => {
                  updateProfileOption(activeFrontId, Number(e.target.value));
                }}
                className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
              >
                <option value="0">- Izaberite profil -</option>
                <option value="1">RU 5025, TCH - Tamni choco</option>
                <option value="2">RU 5025, ANT - Antracit</option>
                <option value="3">RU 5025, CH - Chocco</option>
                <option value="4">RU 5025, Plastifikacija spec. efekat</option>
                <option value="5">RU 5025, SM - Srebro Mat</option>
                <option value="6">RU Brusena Bronza Mat - BBM</option>
                <option value="7">RU 5025</option>
                <option value="8">RU 1013 CS</option>
                <option value="9">RU 1013 CS, SM - Srebro Mat</option>
                <option value="10">RU 1013 CS, PL - Plastifikacija Mat</option>
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

            {/* 
            {frontsData[activeFrontId].handles.profileLengthOption === 0 &&
            frontsData[activeFrontId].handles.profileOption > 0 ? (
              <div className="mb-4">
                <label htmlFor="polozaj" className="text-lg mr-8">
                  Polozaj
                </label>
                <select
                  id="polozaj"
                  className="border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                  value={
                    frontsData[activeFrontId].handles.profilePositionOption
                  }
                  onChange={(e) => {
                    updateProfilePositionOption(activeFrontId, e.target.value);
                  }}
                >
                  <option value="0">Duz desne ivice</option>
                  <option value="1">Duz gornje ivice</option>
                  <option value="2">Duz donje ivice</option>
                </select>
              </div>
            ) : frontsData[activeFrontId].orientation === "Kip vrata" ? (
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
                    updateProfilePositionOption(activeFrontId, e.target.value);
                  }}
                >
                  <option value="0">Duz donje ivice, u levoj zoni</option>
                  <option value="1">Duz donje ivice, centrirano</option>
                  <option value="2">Duz donje ivice, u desnoj zoni</option>
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
                    updateProfilePositionOption(activeFrontId, e.target.value);
                  }}
                >
                  <option value="0">Duz gornje ivice</option>
                  <option value="1">Duz donje ivice</option>
                  <option value="2">Duz desne ivice, u gornjoj zoni</option>
                  <option value="3">Duz desne ivice, centrirano</option>
                  <option value="4">Duz desne ivice, u donjoj zoni</option>
                </select>
              </div>
            )} */}

            {frontsData[activeFrontId].handles.profileLengthOption === 1 && (
              <div>
                <div className="flex justify-between mb-2 mt-2">
                  <label htmlFor={`startEdge`} className="text-lg">
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
                <div className="flex justify-between mb-2 mt-2">
                  <label htmlFor={`lengthOfProfile`} className="text-lg">
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
