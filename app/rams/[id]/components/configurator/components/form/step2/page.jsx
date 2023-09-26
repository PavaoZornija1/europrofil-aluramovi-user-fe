"use client";
import React, { useState } from "react";
import FrontsPreview from "./components/frontsPreview/page";
import Orientations from "./components/orientations/page";
import Dimensions from "./components/dimensions/page";
import Hinges from "./components/hinges/page";
import Handles from "./components/handles/page";
import Sketch from "./components/sketch/page";
import Locks from "./components/locks/page";
import LiftingSystem from "./components/lifting -system/page";
import { useDispatch } from "react-redux";
import { setOrientation } from "@/app/features/ram/ramData";

function Step2(props) {
  const [frontsData, setFrontsData] = useState([
    {
      orientation: "Leva vrata",
      dimensions: {
        width: "1000",
        height: "1000",
        numberOfPieces: "1",
      },
      hinges: {
        hasHinge: false,
        shouldMount: false,
        activeOption: 0,
        numberOfHinges: 2,
        centerDistanceOfHoles: ["100", "900"],
      },
      handles: {
        shouldDrillHoles: false,
        shouldMountProfile: false,
        activeOption: 0,
        positionOption: 0,
        wheelbaseOption: 0,
        centerDistanceOfHole: ["38", "38"],
        profileOption: 0,
        profileLengthOption: 0,
        profilePositionOption: 0,
        profileLength: "250",
        profileDistance: "0",
      },
      locks: {
        activeOption: 0,
        holeDiameter: "250",
        centerDistanceOfHole: ["200", "24"],
      },
      liftingSystem: {
        activeOption: 0,
        activePositionOption: 0,
        activeMechanismOption: 0,
      },
    },
  ]);

  const [activeFrontId, setActiveFrontId] = useState(0);
  const [activeOrientation, setActiveOrientation] = useState(0);

  const orientationData = [
    {
      name: "Leva vrata",
      imageName: "left.png",
    },
    {
      name: "Kip vrata",
      imageName: "top.png",
    },
    {
      name: "Desna vrata",
      imageName: "right.png",
    },
  ];
  const dispatch = useDispatch();

  const updateOrientation = (activeFront, newOrientation) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return { ...obj, orientation: newOrientation };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
    dispatch(setOrientation(updatedFrontsData[activeFront].orientation));
  };

  const addNewFront = () => {
    if (frontsData.length >= 8) {
      alert("Maksimalan broj frontova u porudzbenici je 8");
    } else {
      setFrontsData((prev) => [
        ...prev,
        {
          orientation: "Leva vrata",
          dimensions: {
            width: "1000",
            height: "1000",
            numberOfPieces: "1",
          },
          hinges: {
            hasHinge: false,
            shouldMount: false,
            activeOption: 0,
            numberOfHinges: 2,
            centerDistanceOfHoles: ["100", "900"],
          },
          handles: {
            shouldDrillHoles: false,
            shouldMountProfile: false,
            activeOption: 0,
            positionOption: 0,
            wheelbaseOption: 0,
            centerDistanceOfHole: ["38", "38"],
            profileOption: 0,
            profileLengthOption: 0,
            profilePositionOption: 0,
            profileLength: "250",
            profileDistance: "0",
          },
          locks: {
            activeOption: 0,
            holeDiameter: "250",
            centerDistanceOfHole: ["200", "24"],
          },
          liftingSystem: {
            activeOption: 0,
            activePositionOption: 0,
            activeMechanismOption: 0,
          },
        },
      ]);
    }
  };

  const copyFront = (activeFront) => {
    if (frontsData.length >= 8) {
      alert("Maksimalan broj frontova u porudzbenici je 8");
    } else {
      setFrontsData((prev) => [...prev, prev[activeFront]]);
    }
  };

  const deleteFront = (activeFront) => {
    if (frontsData.length === 1) {
      alert("Minimalan broj frontova u porudzbenici je 1");
    } else {
      setFrontsData((prev) => {
        const filteredArray = Array.from(prev);
        filteredArray.splice(activeFront, 1);

        if (activeFront === 0) {
          setActiveOrientation(() =>
            orientationData.indexOf(
              orientationData.find(
                (item) => item.name === filteredArray[0]?.orientation
              )
            )
          );
        } else {
          setActiveOrientation(() =>
            orientationData.indexOf(
              orientationData.find(
                (item) =>
                  item.name === filteredArray[activeFront - 1]?.orientation
              )
            )
          );
          setActiveFrontId(
            filteredArray.indexOf(filteredArray[activeFront - 1])
          );
        }

        return filteredArray;
      });
    }
  };

  const roundToTwoDecimals = (num) => {
    if (String(num).includes(".")) {
      let stringNum = String(num).split(".");

      let decimal = stringNum[1][2];

      let finish;
      if (decimal < 5) {
        finish = stringNum[0] + "." + stringNum[1][0] + stringNum[1][1];
      }
      if (decimal > 5) {
        let f_ = String(Number(stringNum[1][1]) + 1);
        if (f_ == 10) {
          let f__ = String(Number(stringNum[1][0]) + 1);
          if (f__ == 10) {
            let f___ = String(Number(stringNum[0]) + 1);
            finish = f___ + "." + "00";
          } else {
            finish = stringNum[0] + "." + f__ + "0";
          }
        } else {
          finish = stringNum[0] + "." + stringNum[1][0] + f_;
        }
      }
      let check = false;
      for (let i = 3; i < stringNum[1].length; i++) {
        if (stringNum[1][i] > 0) {
          check = true;
        }
      }
      if (decimal == 5 && check) {
        for (let i = 3; i < stringNum[1].length; i++) {
          if (stringNum[1][i] > 0) {
            let f_ = String(Number(stringNum[1][1]) + 1);
            if (f_ == 10) {
              let f__ = String(Number(stringNum[1][0]) + 1);
              if (f__ == 10) {
                let f___ = String(Number(stringNum[0]) + 1);
                finish = f___ + "." + "00";
              } else {
                finish = stringNum[0] + "." + f__ + "0";
              }
            } else {
              finish = stringNum[0] + "." + stringNum[1][0] + f_;
            }
            break;
          }
        }
      }
      if (decimal == 5 && stringNum[1].length == 3) {
        if (Number(stringNum[1][1] % 2 == 0)) {
          finish = stringNum[0] + "." + stringNum[1][0] + stringNum[1][1];
        } else {
          let f_ = String(Number(stringNum[1][1]) + 1);
          if (f_ == 10) {
            let f__ = String(Number(stringNum[1][0]) + 1);
            if (f__ == 10) {
              let f___ = String(Number(stringNum[0]) + 1);
              finish = f___ + "." + "00";
            } else {
              finish = stringNum[0] + "." + f__ + "0";
            }
          } else {
            finish = stringNum[0] + "." + stringNum[1][0] + f_;
          }
        }
      }
      return finish;
    } else {
      return `${num}`;
    }
  };

  const createCenterDistanceOfHolesArr = (height, numOfItems) => {
    const newDistancesArray = [];

    for (let i = 0; i < Number(numOfItems); i++) {
      let a = 100 + ((Number(height) - 200) / Number(numOfItems - 1)) * i;
      newDistancesArray.push(roundToTwoDecimals(a));
    }
    return newDistancesArray;
  };

  return (
    <div className="gap-8 w-full">
      <FrontsPreview
        frontsData={frontsData}
        activeFrontId={activeFrontId}
        addNewFront={addNewFront}
        copyFront={copyFront}
        deleteFront={deleteFront}
        setActiveFrontId={setActiveFrontId}
        orientationData={orientationData}
        activeOrientation={activeOrientation}
        setActiveOrientation={setActiveOrientation}
      />

      <div className="relative w-full self-start rounded-lg shadow-md shadow-gray-500 mt-8 p-6">
        <h2 className="text-xl font-semibold uppercase tracking-wider text-black">
          Orijentacija i dimenzije
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-32 p-8">
          <Orientations
            activeFrontId={activeFrontId}
            orientationData={orientationData}
            activeOrientation={activeOrientation}
            setActiveOrientation={setActiveOrientation}
            updateOrientation={updateOrientation}
          />
          <Dimensions
            frontsData={frontsData}
            setFrontsData={setFrontsData}
            activeFrontId={activeFrontId}
            createCenterDistanceOfHolesArr={createCenterDistanceOfHolesArr}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-16">
        <div className="flex flex-col gap-4">
          <Hinges
            frontsData={frontsData}
            setFrontsData={setFrontsData}
            activeFrontId={activeFrontId}
            createCenterDistanceOfHolesArr={createCenterDistanceOfHolesArr}
            ram={props.ram}
          />
          <Handles
            frontsData={frontsData}
            setFrontsData={setFrontsData}
            activeFrontId={activeFrontId}
            ram={props.ram}
          />
          {frontsData[activeFrontId].orientation === "Leva vrata" ||
          frontsData[activeFrontId].orientation === "Desna vrata" ? (
            <Locks
              frontsData={frontsData}
              setFrontsData={setFrontsData}
              activeFrontId={activeFrontId}
            />
          ) : (
            <LiftingSystem
              frontsData={frontsData}
              setFrontsData={setFrontsData}
              activeFrontId={activeFrontId}
            />
          )}
        </div>
        <Sketch frontsData={frontsData} activeFrontId={activeFrontId} />
      </div>
    </div>
  );
}

export default Step2;
