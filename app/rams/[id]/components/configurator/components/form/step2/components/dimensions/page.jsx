"use client";
import { setHeight, setQty, setWidth } from "@/app/features/ram/ramData";
import React from "react";
import { useDispatch } from "react-redux";

function Dimensions(props) {
  const {
    frontsData,
    setFrontsData,
    activeFrontId,
    createCenterDistanceOfHolesArr,
  } = props;
  const dispatch = useDispatch();

  const updateNumberOfPieces = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          dimensions: { ...obj.dimensions, numberOfPieces: value },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
    dispatch(setQty(updatedFrontsData[activeFront].dimensions.numberOfPieces));
  };

  const updateWidth = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          dimensions: { ...obj.dimensions, width: value },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
    dispatch(setWidth(updatedFrontsData[activeFront].dimensions.width));
  };

  const updateHeight = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          dimensions: { ...obj.dimensions, height: value },
          hinges: {
            ...obj.hinges,
            centerDistanceOfHoles: createCenterDistanceOfHolesArr(
              value,
              frontsData[activeFront].hinges.numberOfHinges
            ),
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
    dispatch(setHeight(updatedFrontsData[activeFront].dimensions.height));
  };

  return (
    <div className="flex flex-col gap-6 justify-center">
      <div className="flex justify-between border-b border-gray-300 pb-6 flex-col sm:flex-row">
        <label
          htmlFor="numberOfPieces"
          className="mr-8 inline text-xl text-black sm:block mb-2 sm:mb-0"
        >
          Broj komada:
        </label>
        <div className="flex justify-items-start">
          <input
            type="number"
            id="numberOfPieces"
            value={frontsData[activeFrontId].dimensions.numberOfPieces}
            onChange={(e) =>
              updateNumberOfPieces(activeFrontId, +e.target.value)
            }
            className="w-full border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none border-r-0"
          />
          <span className="inline-flex items-center border border-l-0 border-gray-500 px-3 text-sm">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
      <div className="flex justify-between border-b border-gray-300 pb-4 flex-col sm:flex-row">
        <label
          htmlFor="width"
          className="mr-8 inline text-xl text-black sm:block mb-2 sm:mb-0"
        >
          Širina:
        </label>
        <div className="flex justify-items-start">
          <input
            type="number"
            id="width"
            value={frontsData[activeFrontId].dimensions.width}
            onChange={(e) => updateWidth(activeFrontId, +e.target.value)}
            className="w-full border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
          />
          <span className="inline-flex items-center border border-l-0 border-gray-500 px-3 text-sm">
            mm
          </span>
        </div>
      </div>
      <div className="flex justify-between flex-col sm:flex-row">
        <label
          htmlFor="height"
          className="mr-8 inline text-xl text-black sm:block mb-2 sm:mb-0"
        >
          Visina:
        </label>
        <div className="flex justify-items-start">
          <input
            type="number"
            id="height"
            value={frontsData[activeFrontId].dimensions.height}
            onChange={(e) => updateHeight(activeFrontId, +e.target.value)}
            className="w-full border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
          />
          <span className="inline-flex items-center border border-l-0 border-gray-500 px-3 text-sm">
            mm
          </span>
        </div>
      </div>
    </div>
  );
}

export default Dimensions;
