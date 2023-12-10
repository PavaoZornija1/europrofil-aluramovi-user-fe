"use client";
import {
  setIndividualFronts,
  setLiftingSystem,
} from "@/app/features/ram/ramData";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function LiftingSystem(props) {
  const { frontsData, setFrontsData, activeFrontId } = props;
  const [lift, setLift] = useState("");

  const dispatch = useDispatch();
  const individualFronts = useSelector((state) => state.data.individualFronts);

  const handleRadioClick = (activeFront, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));

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
    if (value === 0) {
      fronts[activeFront].liftingSystem.liftSupport = {};
      dispatch(setIndividualFronts(fronts));
    }
  };

  const handlePositionOption = (activeFront, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));

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

    fronts[activeFront].liftingSystem.activePositionOption = value;
    setFrontsData(updatedFrontsData);
    dispatch(setIndividualFronts(fronts));
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

  const handleChooseLiftSupport = (e, activeFront) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));
    let liftSupport = e.target.value;
    for (let i = 0; i < props.ram?.cmsAluLiftSupports.length; ++i) {
      if (props.ram?.cmsAluLiftSupports[i].id === e.target.value) {
        liftSupport = props.ram?.cmsAluLiftSupports[i];
      }
    }

    setLift(liftSupport);
    fronts[activeFront].liftingSystem.liftSupport = liftSupport;
    dispatch(setIndividualFronts(fronts));
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
                  individualFronts[activeFrontId]?.liftingSystem?.liftSupport
                    ?.id
                }
                onChange={(e) => {
                  handleMechanismOption(activeFrontId, Number(e.target.value));
                  handleChooseLiftSupport(e, activeFrontId);
                }}
              >
                <option value={null} key={`option-LiftSupport`}>
                  -Izaberite-
                </option>
                {props.ram?.cmsAluLiftSupports?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LiftingSystem;
