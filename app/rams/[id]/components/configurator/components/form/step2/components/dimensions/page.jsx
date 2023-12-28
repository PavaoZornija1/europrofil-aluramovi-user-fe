"use client";
import { setIndividualFronts } from "@/app/features/ram/ramData";
import store from "@/app/store/store";
import { useDispatch, useSelector } from "react-redux";

function Dimensions(props) {
  const { activeFrontId } = props;
  const dispatch = useDispatch();
  const individualFronts = useSelector((state) => state.data.individualFronts);

  const updateNumberOfPieces = (activeFront, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));

    fronts[activeFront].dimensions.numberOfPieces = Number(value);

    dispatch(setIndividualFronts(fronts));
  };

  const updateWidth = (activeFront, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));

    // if (fronts[activeFront]?.handles?.profileLengthOption === 0) {
    //   fronts[activeFront].handles.profileLength = Number(value);
    // }
    switch (fronts[activeFront]?.handles?.profileLengthOption) {
      case 0:
        switch (fronts[activeFront]?.handles?.profilePositionOption) {
          case 1:
          case 2:
            fronts[activeFront].handles.profileLength = Number(value);
            break;
        }
        break;
      case 1:
        switch (fronts[activeFront]?.handles?.profilePositionOption) {
          case 0:
          case 1:
            fronts[activeFront].handles.profileLength = Number(value);
            break;
        }
    }

    fronts[activeFront].dimensions.width = Number(value);
    dispatch(setIndividualFronts(fronts));
  };

  const updateHeight = (activeFront, value) => {
    const fronts = JSON.parse(JSON.stringify(individualFronts));
    switch (fronts[activeFront]?.handles?.profileLengthOption) {
      case 0:
        switch (fronts[activeFront]?.handles?.profilePositionOption) {
          case 0:
            fronts[activeFront].handles.profileLength = Number(value);
            break;
        }
        break;
      case 1:
        switch (fronts[activeFront]?.handles?.profilePositionOption) {
          case 2:
          case 3:
          case 4:
            fronts[activeFront].handles.profileLength = Number(value);
            break;
        }
    }

    fronts[activeFront].dimensions.height = Number(value);

    dispatch(setIndividualFronts(fronts));
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
            value={individualFronts[activeFrontId]?.dimensions?.numberOfPieces}
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
            value={individualFronts[activeFrontId]?.dimensions?.width}
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
            value={individualFronts[activeFrontId]?.dimensions?.height}
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
