"use client";
import React from "react";

function LiftingSystem(props) {
  const { frontsData, setFrontsData, activeFrontId } = props;

  const handleRadioClick = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          liftingSystem: {
            ...obj.liftingSystem,
            activeOption: value,
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const handlePositionOption = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          liftingSystem: {
            ...obj.liftingSystem,
            activePositionOption: value,
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const handleMechanismOption = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          liftingSystem: {
            ...obj.liftingSystem,
            activeMechanismOption: value,
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
        Podizni sistem
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
              name="liftingSystem"
              id="noLiftingSystem"
              className="mr-2 cursor-pointer"
              checked={
                frontsData[activeFrontId].liftingSystem.activeOption === 0
              }
              onChange={() => {
                handleRadioClick(activeFrontId, 0);
              }}
            />
            <label htmlFor="noLiftingSystem" className="text-lg cursor-pointer">
              Bez podiznog sistema
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
              name="liftingSystem"
              id="yesLiftingSystem"
              className="mr-2 cursor-pointer"
              checked={
                frontsData[activeFrontId].liftingSystem.activeOption === 1
              }
              onChange={() => {
                handleRadioClick(activeFrontId, 1);
              }}
            />
            <label
              htmlFor="yesLiftingSystem"
              className="text-lg cursor-pointer"
            >
              Sa podiznim sistemom
            </label>
          </div>
        </div>
        {frontsData[activeFrontId].liftingSystem.activeOption === 1 && (
          <div className="ml-6 my-2">
            <div className="mb-4">
              <label htmlFor="numOfStandardHinges" className="text-lg mr-8">
                Polozaj:
              </label>
              <select
                type="number"
                id="numOfStandardHinges"
                className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                value={
                  frontsData[activeFrontId].liftingSystem.activePositionOption
                }
                onChange={(e) => {
                  handlePositionOption(activeFrontId, Number(e.target.value));
                }}
              >
                <option value="0">Na levoj strani</option>
                <option value="1">Na desnoj strani</option>
                <option value="2">Na obe strane</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="numOfStandardHinges" className="text-lg mr-8">
                Mehanizam:
              </label>
              <select
                type="number"
                id="numOfStandardHinges"
                className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                value={
                  frontsData[activeFrontId].liftingSystem.activeMechanismOption
                }
                onChange={(e) => {
                  handleMechanismOption(activeFrontId, Number(e.target.value));
                }}
              >
                <option value="0">- Izaberite mehanizam -</option>
                <option value="1">OPM Amort.gasni 80N GTV</option>
                <option value="2">OPM Amort.gasni 100N GTV</option>
                <option value="3">OPM Amort.gasni 80N kratki GTV</option>
                <option value="4">OPM Amort.gasni 100N slow HS</option>
                <option value="5">OPM DUO STANDARD mehanizam HF</option>
                <option value="6">OPM DUO FORTE Mehanizam HF</option>
                <option value="7">OPM FREE FLAP B Mehanizam HF</option>
                <option value="8">OPM FREE Flap C Mehanizam HF</option>
                <option value="9">OPM FREE Flap D Mehanizam HF</option>
                <option value="10">OPM FREE Flap F Mehanizam HF</option>
                <option value="11">OPM FREE Flap G Mehanizam HF</option>
                <option value="12">OPM FREE Flap E Mehanizam HF</option>
                <option value="13">OPM HL Mehanizam BLUM</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LiftingSystem;
