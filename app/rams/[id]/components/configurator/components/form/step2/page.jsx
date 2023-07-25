"use client";
import React, { useState } from "react";
import FrontsPreview from "./components/frontsPreview/page";
import Orientations from "./components/orientations/page";
import Dimensions from "./components/dimensions/page";

function Step2() {
  const [frontsData, setFrontsData] = useState([
    {
      orientation: "Leva vrata",
      dimensions: {
        width: "100",
        height: "100",
        numberOfPieces: "1",
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

  const updateOrientation = (activeFront, newOrientation) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return { ...obj, orientation: newOrientation };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
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
            width: "100",
            height: "100",
            numberOfPieces: "1",
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
      <div className="relative w-full self-start rounded-lg p-3 shadow-md shadow-gray-500 mt-8">
        <h2 className="text-xl font-semibold uppercase tracking-wider text-black">
          Orijentacija i dimenzije
        </h2>
        <div className="grid grid-cols-2 gap-32 p-8">
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
          />
        </div>
      </div>
    </div>
  );
}

export default Step2;
