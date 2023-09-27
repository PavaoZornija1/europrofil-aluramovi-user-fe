"use client";
import { setLockHole } from "@/app/features/ram/ramData";
import React from "react";
import { useDispatch } from "react-redux";

function Locks(props) {
  const { frontsData, setFrontsData, activeFrontId } = props;

  const dispatch = useDispatch();

  const handleRadioClick = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          locks: {
            ...obj.locks,
            activeOption: value,
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
    dispatch(
      setLockHole({ lockPrice: 165, lockAmount: updatedFrontsData.length })
    );
  };

  const updateHoleDiameter = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          locks: {
            ...obj.locks,
            holeDiameter: value,
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
        const updatedDistanceArray = obj.locks.centerDistanceOfHole.map(
          (hole, id) => {
            if (id === index) {
              return value;
            }
            return hole;
          }
        );
        return {
          ...obj,
          locks: {
            ...obj.locks,
            centerDistanceOfHole: updatedDistanceArray,
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
        Bravica
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
              name="bravica"
              id="noBravica"
              className="mr-2 cursor-pointer"
              checked={frontsData[activeFrontId].locks.activeOption === 0}
              onChange={() => {
                handleRadioClick(activeFrontId, 0);
              }}
            />
            <label htmlFor="noBravcica" className="text-lg cursor-pointer">
              Bez rupe za bravicu
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
              name="bravica"
              id="yesBravica"
              className="mr-2 cursor-pointer"
              checked={frontsData[activeFrontId].locks.activeOption === 1}
              onChange={() => {
                handleRadioClick(activeFrontId, 1);
              }}
            />
            <label htmlFor="yesBravica" className="text-lg cursor-pointer">
              Busenje rupe za bravicu
            </label>
          </div>
        </div>
        {frontsData[activeFrontId].locks.activeOption === 1 && (
          <div className="ml-6 my-2">
            <div className="flex justify-between mb-2 mt-2 flex-col 2xl:flex-row lg:flex-col md:flex-row">
              <label htmlFor={`precnikRupe`} className="text-lg mb-2 2xl:mb-0">
                Precnik rupe
              </label>
              <input
                type="text"
                id={`precnikRupe`}
                value={frontsData[activeFrontId].locks.holeDiameter}
                onChange={(e) => {
                  updateHoleDiameter(activeFrontId, e.target.value);
                }}
                className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
              />
            </div>

            <div className="flex justify-between mb-2 mt-2 flex-col 2xl:flex-row lg:flex-col md:flex-row">
              <label htmlFor={`crodsi`} className="text-lg mb-2 2xl:mb-0">
                Centar rupe od donje spoljne ivice (mm)
              </label>
              <input
                type="text"
                id={`crodsi`}
                value={frontsData[activeFrontId].locks.centerDistanceOfHole[0]}
                onChange={(e) => {
                  updateCenterDistanceOfHole(activeFrontId, e.target.value, 0);
                }}
                className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
              />
            </div>

            <div className="flex justify-between mb-2 mt-2 flex-col 2xl:flex-row lg:flex-col md:flex-row">
              <label htmlFor={`croddsi`} className="text-lg mb-2 2xl:mb-0">
                Centar rupe od desne spoljne ivice (mm)
              </label>
              <input
                type="text"
                id={`croddsi`}
                value={frontsData[activeFrontId].locks.centerDistanceOfHole[1]}
                onChange={(e) => {
                  updateCenterDistanceOfHole(activeFrontId, e.target.value, 1);
                }}
                className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
              />
            </div>
            <p
              className="text-center mt-6 text-blue-400 cursor-pointer"
              onClick={() => {
                updateCenterDistanceOfHole(
                  activeFrontId,
                  Number(frontsData[activeFrontId].dimensions.height) / 2,
                  0
                );
              }}
            >
              Postavi rupu za bravicu na centar
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Locks;
