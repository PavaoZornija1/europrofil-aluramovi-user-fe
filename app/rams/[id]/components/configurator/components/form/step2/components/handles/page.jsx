"use client";

import { setIndividualFronts } from "@/app/features/ram/ramData";
import store from "@/app/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Handles(props) {
  const { activeFrontId } = props;

  const [profileDistanceStartPosition, setProfileDistanceStartPosition] =
    useState("");

  const [isManualInput, setIsManualInput] = useState(false);
  const [
    handlesHorizontalPositionOptionText,
    setHandlesHorizontalPositionOptionText,
  ] = useState("");
  const [
    handlesVerticalPositionOptionText,
    setHandlesVerticalPositionOptionText,
  ] = useState("");

  const dispatch = useDispatch();
  const individualFronts = useSelector((state) => state.data.individualFronts);
  const handlePosition = [
    "Horizontalno, uz gornju ivicu",
    "Horizontalno, uz donju ivicu",
    "Vertikalno, pri gornjoj ivici",
    "Vertikalno, na sredini",
    "Vertikalno, pri donjoj ivici",
  ];
  const holeDistanceOptions = [
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
    "Samo jedna rupa (dugme rucica)",
    "Rucni unos osnovnog rastojanja",
  ];

  const handleRadioClick = (activeFront, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));

    const updatedFrontsData = individualFronts.map((obj, id) => {
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

    // fronts[activeFront].handles = {
    //   ...fronts[activeFront].handles,
    //   activeOption: value,
    //   shouldDrillHoles: value === 1 ? true : false,
    //   shouldMountProfile: value === 2 ? true : false,
    // };

    dispatch(setIndividualFronts(updatedFrontsData));
  };

  const updatePosition = (activeFront, value, positionName) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));
    const updatedFrontsData = individualFronts.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            positionOption: Number(value),
            positionName: positionName,
          },
        };
      }
      return obj;
    });

    dispatch(setIndividualFronts(updatedFrontsData));
  };

  const updateWheelbaseOption = (activeFront, value, holeValue) => {
    const updatedFrontsData = individualFronts.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            wheelbaseOption: Number(value),
            holeDistanceValue:
              typeof holeValue === "number" ? `${holeValue} mm` : holeValue,
          },
        };
      }
      return obj;
    });

    if (updatedFrontsData[activeFront].handles.wheelbaseOption === 16) {
      setIsManualInput(true);
    } else {
      setIsManualInput(false);
    }

    dispatch(setIndividualFronts(updatedFrontsData));
  };

  const updateCenterDistanceOfHole = (activeFront, value, index) => {
    const updatedFrontsData = individualFronts.map((obj, id) => {
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

    dispatch(setIndividualFronts(updatedFrontsData));
  };

  const updateProfilePositionOption = (activeFront, value) => {
    const updatedFrontsData = individualFronts.map((obj, id) => {
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

    console.log(store.getState());
    dispatch(setIndividualFronts(updatedFrontsData));
  };

  const updateProfileLengthOption = (activeFront, value) => {
    const updatedFrontsData = individualFronts.map((obj, id) => {
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

    dispatch(setIndividualFronts(updatedFrontsData));
  };

  const updateProfileDistance = (activeFront, value) => {
    const updatedFrontsData = individualFronts.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          handles: {
            ...obj.handles,
            profileDistance: Number(value),
          },
        };
      }
      return obj;
    });

    dispatch(setIndividualFronts(updatedFrontsData));
  };

  const updateProfileLength = (activeFront, value) => {
    const front = JSON.parse(JSON.stringify(individualFronts));

    front[activeFront].handles.profileLength = Number(value);
    dispatch(setIndividualFronts(front));
  };

  const handleChooseHandleProfile = (activeFront, e) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));
    let profileType = e.target.value;
    for (let i = 0; i < props.ram?.cmsAluHandleProfiles.length; ++i) {
      if (props.ram?.cmsAluHandleProfiles[i].id === e.target.value) {
        profileType = props.ram?.cmsAluHandleProfiles[i];
      }
    }

    fronts[activeFront].handles = {
      ...fronts[activeFront].handles,
      handleProfile: profileType,
    };
    dispatch(setIndividualFronts(fronts));
  };

  const handleProfilePositionText = () => {
    switch (individualFronts[activeFrontId]?.orientation) {
      case "Leva vrata":
        switch (
          individualFronts[activeFrontId]?.handles?.profilePositionOption
        ) {
          case 0:
          case 1:
            setProfileDistanceStartPosition("desnu");
            break;
          case 2:
            setProfileDistanceStartPosition("gornju");
            break;

          case 4:
            setProfileDistanceStartPosition("donju");
            break;
          default:
            break;
        }
        break;
      case "Desna vrata":
        switch (
          individualFronts[activeFrontId]?.handles?.profilePositionOption
        ) {
          case 0:
          case 1:
            setProfileDistanceStartPosition("levu");
            break;
          case 2:
            setProfileDistanceStartPosition("gornju");
            break;
          case 3:
            break;
          case 4:
            setProfileDistanceStartPosition("donju");
            break;
          default:
            break;
        }
        break;
      case "Kip vrata":
        switch (
          individualFronts[activeFrontId]?.handles?.profilePositionOption
        ) {
          case 0:
            setProfileDistanceStartPosition("levu");
            break;
          case 1:
            break;
          case 2:
            setProfileDistanceStartPosition("desnu");
            break;
          default:
            break;
        }
        break;
    }
  };
  const handleHandlesPositionText = () => {
    switch (individualFronts[activeFrontId]?.orientation) {
      case "Leva vrata":
        switch (individualFronts[activeFrontId]?.handles?.positionOption) {
          case 0: {
            setHandlesHorizontalPositionOptionText("desne");
            setHandlesVerticalPositionOptionText("gornje");
            break;
          }
          case 1: {
            setHandlesHorizontalPositionOptionText("desne");
            setHandlesVerticalPositionOptionText("donje");
            break;
          }
          case 2: {
            setHandlesHorizontalPositionOptionText("desne");
            setHandlesVerticalPositionOptionText("gornje");
            break;
          }
          case 3: {
            setHandlesHorizontalPositionOptionText("desne");
            break;
          }
          case 4: {
            setHandlesHorizontalPositionOptionText("desne");
            setHandlesVerticalPositionOptionText("donje");
            break;
          }
        }
        break;
      case "Desna vrata":
        switch (individualFronts[activeFrontId]?.handles?.positionOption) {
          case 0: {
            setHandlesHorizontalPositionOptionText("leve");
            setHandlesVerticalPositionOptionText("gornje");
            break;
          }
          case 1: {
            setHandlesHorizontalPositionOptionText("leve");
            setHandlesVerticalPositionOptionText("donje");
            break;
          }
          case 2: {
            setHandlesHorizontalPositionOptionText("gornje");
            setHandlesVerticalPositionOptionText("leve");
            break;
          }
          case 3: {
            setHandlesHorizontalPositionOptionText("leve");
            break;
          }
          case 4: {
            setHandlesHorizontalPositionOptionText("donje");
            setHandlesVerticalPositionOptionText("leve");
            break;
          }
        }
        break;
      case "Kip vrata":
        switch (individualFronts[activeFrontId]?.handles?.positionOption) {
          case 0: {
            setHandlesHorizontalPositionOptionText("leve");
            setHandlesVerticalPositionOptionText("donje");
            break;
          }
          case 1: {
            setHandlesHorizontalPositionOptionText("donje");
            break;
          }
          case 2: {
            setHandlesHorizontalPositionOptionText("desne");
            setHandlesVerticalPositionOptionText("donje");
            break;
          }
        }
        break;
    }
  };

  const handleManualHoleDistance = (e, activeFront) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));

    fronts[activeFront].handles.holeDistanceManualValue = Number(
      e.target.value
    );
    dispatch(setIndividualFronts(fronts));
  };

  useEffect(() => {
    handleProfilePositionText();
    handleHandlesPositionText();
  }, [
    individualFronts[activeFrontId]?.orientation,
    individualFronts[activeFrontId]?.handles?.profilePositionOption,
    individualFronts[activeFrontId]?.handles?.positionOption,
  ]);

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
              checked={
                individualFronts[activeFrontId]?.handles?.activeOption === 0
              }
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
              checked={
                individualFronts[activeFrontId]?.handles?.activeOption === 1
              }
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
              checked={
                individualFronts[activeFrontId]?.handles?.activeOption === 2
              }
              onChange={() => {
                handleRadioClick(activeFrontId, 2);
              }}
            />
            <label htmlFor="third" className="text-lg cursor-pointer">
              Postavljanja profila rucice
            </label>
          </div>
        </div>
        {individualFronts[activeFrontId]?.handles?.shouldDrillHoles && (
          <div className="ml-6 my-2">
            {individualFronts[activeFrontId]?.orientation === "Leva vrata" ||
            individualFronts[activeFrontId]?.orientation === "Desna vrata" ? (
              <div className="mb-4">
                <label htmlFor="numOfStandardHinges" className="text-lg mr-8">
                  Polozaj
                </label>
                <select
                  type="number"
                  id="numOfStandardHinges"
                  className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                  value={
                    individualFronts[activeFrontId]?.handles?.positionOption
                  }
                  onChange={(e) => {
                    updatePosition(
                      activeFrontId,
                      e.target.value,
                      handlePosition[e.target.value]
                    );
                  }}
                >
                  {handlePosition?.map((handle, index) => (
                    <option key={`handle-${index}`} value={index}>
                      {handle}
                    </option>
                  ))}
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
                  value={
                    individualFronts[activeFrontId]?.handles?.positionOption
                  }
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
                Osnovno rastojanje rupa
              </label>
              <select
                type="number"
                id="numOfStandardHinges"
                className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                value={
                  individualFronts[activeFrontId]?.handles?.wheelbaseOption
                }
                onChange={(e) => {
                  updateWheelbaseOption(
                    activeFrontId,
                    e.target.value,
                    holeDistanceOptions[e.target.value]
                  );
                }}
              >
                <optgroup label="Udaljenost">
                  {holeDistanceOptions?.map((hole, index) => (
                    <option key={`hole-${index}`} value={index}>
                      {typeof hole === "number" ? `${hole} mm` : hole}
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {isManualInput ? (
              <div className="flex justify-between mb-2 mt-2 flex-col 2xl:flex-row lg:flex-col md:flex-row">
                <label htmlFor={`firstHole`} className="text-lg mb-2 2xl:mb-0">
                  Unesite osnovno rastojanje
                </label>
                <input
                  type="text"
                  id={`firstHole`}
                  value={
                    individualFronts[activeFrontId]?.handles
                      ?.holeDistanceManualValue
                  }
                  onChange={(e) => handleManualHoleDistance(e, activeFrontId)}
                  className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
                />
              </div>
            ) : null}
            <div className="flex justify-between mb-2 mt-2 flex-col 2xl:flex-row lg:flex-col md:flex-row">
              <label htmlFor={`firstHole`} className="text-lg mb-2 2xl:mb-0">
                Centar prve rupe od {handlesHorizontalPositionOptionText}{" "}
                spoljne ivice (mm)
              </label>
              <input
                type="text"
                id={`firstHole`}
                value={
                  individualFronts[activeFrontId]?.handles
                    ?.centerDistanceOfHole[0]
                }
                onChange={(e) => {
                  updateCenterDistanceOfHole(activeFrontId, e.target.value, 0);
                }}
                className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
              />
            </div>

            {((individualFronts[activeFrontId]?.orientation === "Leva vrata" ||
              individualFronts[activeFrontId]?.orientation === "Desna vrata") &&
              individualFronts[activeFrontId]?.handles?.positionOption !== 3) ||
            (individualFronts[activeFrontId]?.orientation === "Kip vrata" &&
              individualFronts[activeFrontId]?.handles?.positionOption !==
                1) ? (
              <div className="flex justify-between flex-col 2xl:flex-row lg:flex-col md:flex-row">
                <label htmlFor={`secondHole`} className="text-lg mb-2 2xl:mb-0">
                  Centar prve rupe od {handlesVerticalPositionOptionText}{" "}
                  spoljne ivice (mm)
                </label>
                <input
                  type="text"
                  id={`secondHole`}
                  value={
                    individualFronts[activeFrontId]?.handles
                      ?.centerDistanceOfHole[1]
                  }
                  onChange={(e) => {
                    updateCenterDistanceOfHole(
                      activeFrontId,
                      e.target.value,
                      1
                    );
                  }}
                  className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
                />
              </div>
            ) : null}
          </div>
        )}
        {individualFronts[activeFrontId]?.handles?.shouldMountProfile && (
          <div className="ml-6 my-2">
            <div className="mb-4">
              <label htmlFor="profiless" className="text-lg mr-8">
                Profil
              </label>
              <select
                id="profiless"
                value={
                  individualFronts[activeFrontId]?.handles?.handleProfile?.id
                }
                onChange={(e) => handleChooseHandleProfile(activeFrontId, e)}
                className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
              >
                <option value={null} key={`defaultKey`}>
                  -Izaberite profil-
                </option>
                {props.ram?.cmsAluHandleProfiles?.map((handle) => (
                  <option value={handle.id} key={handle.id}>
                    {handle.name}
                  </option>
                ))}
              </select>
            </div>

            {individualFronts[activeFrontId]?.handles?.handleProfile?.id ? (
              <div className="mb-4">
                <label htmlFor="duzina" className="text-lg mr-8">
                  Duzina
                </label>
                <select
                  id="duzina"
                  className="border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                  value={
                    individualFronts[activeFrontId]?.handles
                      ?.profileLengthOption
                  }
                  onChange={(e) => {
                    updateProfileLengthOption(activeFrontId, e.target.value);
                  }}
                >
                  <option value="0">Celom duzinom</option>
                  <option value="1">Delimicno</option>
                </select>
              </div>
            ) : null}

            {individualFronts[activeFrontId]?.handles?.handleProfile?.id ? (
              individualFronts[activeFrontId]?.handles?.profileLengthOption ===
              0 ? (
                individualFronts[activeFrontId]?.orientation === "Leva vrata" ||
                individualFronts[activeFrontId]?.orientation ===
                  "Desna vrata" ? (
                  individualFronts[activeFrontId]?.orientation ===
                  "Leva vrata" ? (
                    <div className="mb-4">
                      <label htmlFor="polozaj" className="text-lg mr-8">
                        Polozaj
                      </label>
                      <select
                        id="polozaj"
                        className="border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                        value={
                          individualFronts[activeFrontId].handles
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
                          individualFronts[activeFrontId].handles
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
              ) : individualFronts[activeFrontId].orientation ===
                  "Leva vrata" ||
                individualFronts[activeFrontId].orientation ===
                  "Desna vrata" ? (
                individualFronts[activeFrontId].orientation === "Leva vrata" ? (
                  <div className="mb-4">
                    <label htmlFor="polozaj" className="text-lg mr-8">
                      Polozaj
                    </label>
                    <select
                      id="polozaj"
                      className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                      value={
                        individualFronts[activeFrontId].handles
                          .profilePositionOption
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
                        individualFronts[activeFrontId].handles
                          .profilePositionOption
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
                      individualFronts[activeFrontId].handles
                        .profilePositionOption
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

            {individualFronts[activeFrontId].handles.profileLengthOption ===
            1 ? (
              <>
                <div className="flex justify-between mb-2 mt-2 flex-col 2xl:flex-row lg:flex-col md:flex-row">
                  <label
                    htmlFor={`startEdge`}
                    className="text-lg mb-2 2xl:mb-0"
                  >
                    Pocetak u odnosu na {profileDistanceStartPosition} spoljnu
                    ivicu
                  </label>
                  <input
                    type="text"
                    id={`startEdge`}
                    value={
                      individualFronts[activeFrontId].handles.profileDistance
                    }
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
                    value={
                      individualFronts[activeFrontId].handles.profileLength
                    }
                    onChange={(e) => {
                      updateProfileLength(activeFrontId, +e.target.value);
                    }}
                    className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
                  />
                </div>
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default Handles;
