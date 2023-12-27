"use client";
import { setIndividualFronts } from "@/app/features/ram/ramData";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dimensions from "./components/dimensions/page";
import FrontsPreview from "./components/frontsPreview/page";
import Handles from "./components/handles/page";
import Hinges from "./components/hinges/page";
import LiftingSystem from "./components/lifting -system/page";
import Locks from "./components/locks/page";
import Orientations from "./components/orientations/page";
import Sketch from "./components/sketch/page";

function Step2(props) {
  const [frontsData, setFrontsData] = useState([
    {
      orientation: "Leva vrata",
      dimensions: {
        width: 1000,
        height: 1000,
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
        positionName: "",
        wheelbaseOption: 0,
        holeDistanceValue: "",
        centerDistanceOfHole: ["32", "32"],
        profileOption: 0,
        profileLengthOption: 0,
        profilePositionOption: 0,
        profileLength: 1000,
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
  const individualFronts = useSelector((state) => state.data.individualFronts);

  const [activeFrontId, setActiveFrontId] = useState(0);
  const [activeOrientation, setActiveOrientation] = useState(0);

  const orientationData = [
    {
      name: "Leva vrata",
      imageName: "left.jpg",
    },
    {
      name: "Kip vrata",
      imageName: "top.jpg",
    },
    {
      name: "Desna vrata",
      imageName: "right.jpg",
    },
  ];
  const dispatch = useDispatch();

  const updateOrientation = (activeFront, newOrientation) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return { ...obj, orientation: newOrientation };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
    fronts[activeFront].orientation =
      updatedFrontsData[activeFront].orientation;
    dispatch(setIndividualFronts(fronts));
  };

  const addNewFront = () => {
    if (individualFronts.length >= 8) {
      alert("Maksimalan broj frontova u porudzbenici je 8");
    } else {
      dispatch(
        setIndividualFronts([
          ...individualFronts,
          {
            orientation: "Leva vrata",
            dimensions: {
              width: 1000,
              height: 1000,
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
              profileLength: 1000,
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
        ])
      );
    }
  };

  const copyFront = (activeFront) => {
    if (individualFronts.length >= 8) {
      alert("Maksimalan broj frontova u porudzbenici je 8");
    } else {
      setFrontsData((prev) => [...prev, prev[activeFront]]);
    }
  };

  const deleteFront = (activeFront) => {
    if (individualFronts.length === 1) {
      alert("Minimalan broj frontova u porudzbenici je 1");
    } else {
      setFrontsData((prev) => {
        const filteredArray = Array.from(prev);
        filteredArray.splice(activeFront, 1);
        dispatch(setIndividualFronts(filteredArray));

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

  const createCenterDistanceOfHolesArr = (height, numOfItems) => {
    const newDistancesArray = [];

    for (let i = 0; i < Number(numOfItems); i++) {
      let a = 100 + ((Number(height) - 200) / Number(numOfItems - 1)) * i;
      newDistancesArray.push(Number(a).toFixed());
    }
    return newDistancesArray;
  };

  return (
    <div className="gap-8 w-full">
      <FrontsPreview
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
            activeFrontId={activeFrontId}
            createCenterDistanceOfHolesArr={createCenterDistanceOfHolesArr}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-16">
        <div className="flex flex-col gap-4">
          <Hinges
            activeFrontId={activeFrontId}
            createCenterDistanceOfHolesArr={createCenterDistanceOfHolesArr}
            ram={props.ram}
          />
          <Handles activeFrontId={activeFrontId} ram={props.ram} />
          {individualFronts[activeFrontId].orientation === "Leva vrata" ||
          individualFronts[activeFrontId].orientation === "Desna vrata" ? (
            <Locks activeFrontId={activeFrontId} />
          ) : (
            <LiftingSystem activeFrontId={activeFrontId} ram={props.ram} />
          )}
        </div>
        <Sketch frontsData={frontsData} activeFrontId={activeFrontId} />
      </div>
    </div>
  );
}

export default Step2;
