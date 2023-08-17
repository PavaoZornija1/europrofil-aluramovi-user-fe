"use client";
import React from "react";

function Hinges(props) {
  const {
    frontsData,
    setFrontsData,
    activeFrontId,
    createCenterDistanceOfHolesArr,
  } = props;

  const handleRadioClick = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          hinges: {
            ...obj.hinges,
            activeOption: value,
            hasHinge: Boolean(value),
            shouldMount: value === 2 ? true : false,
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const updateCenterDistanceOfHole = (activeFront, holeId, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          hinges: {
            ...obj.hinges,
            centerDistanceOfHoles: obj.hinges.centerDistanceOfHoles.map(
              (hole, index) => (holeId === index ? value : hole)
            ),
          },
        };
      }
      return obj;
    });

    setFrontsData(updatedFrontsData);
  };

  const updateNumberOfHinges = (activeFront, value) => {
    const updatedFrontsData = frontsData.map((obj, id) => {
      if (id === activeFront) {
        return {
          ...obj,
          hinges: {
            ...obj.hinges,
            numberOfHinges: Number(value),
            centerDistanceOfHoles: createCenterDistanceOfHolesArr(
              frontsData[activeFront].dimensions.height,
              value
            ),
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
        Šarke
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
              name="hinges"
              id="noHinges"
              className="mr-2 cursor-pointer"
              value={0}
              checked={frontsData[activeFrontId].hinges.activeOption === 0}
              onChange={() => {
                handleRadioClick(activeFrontId, 0);
              }}
            />
            <label htmlFor="noHinges" className="text-lg cursor-pointer">
              Bez bušenja rupa za šarke
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
              name="hinges"
              id="standardHinge"
              className="mr-2 cursor-pointer"
              value={1}
              checked={frontsData[activeFrontId].hinges.activeOption === 1}
              onChange={() => {
                handleRadioClick(activeFrontId, 1);
              }}
            />
            <label htmlFor="standardHinge" className="text-lg cursor-pointer">
              Bušenje rupa za standardne šarke 35 mm
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
              name="hinges"
              id="montingHinge"
              className="mr-2 cursor-pointer"
              value={2}
              checked={frontsData[activeFrontId].hinges.activeOption === 2}
              onChange={() => {
                handleRadioClick(activeFrontId, 2);
              }}
            />
            <label htmlFor="montingHinge" className="text-lg cursor-pointer">
              Bušenje rupa sa montažom šarki
            </label>
          </div>
        </div>
        {frontsData[activeFrontId].hinges.hasHinge && (
          <div className="ml-6 my-2">
            {frontsData[activeFrontId].hinges.shouldMount && (
              <div className="mb-4">
                <label htmlFor="montingHinges" className="text-lg mr-8">
                  Sarke za montazu
                </label>
                <select
                  type="number"
                  id="montingHinges"
                  className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                  // value={frontsData[activeFrontId].hinges.numberOfHinges}
                  // onChange={(e) => {
                  //   updateNumberOfHinges(activeFrontId, e.target.value);
                  // }}
                >
                  <option value="0">- Izaberite sarke -</option>
                  <option value="art. 6921">art. 6921</option>
                  <option value="art. 6920">art. 6920</option>
                  <option value="art. 6397">art. 6397</option>
                  <option value="art. 9480">art. 9480</option>
                  <option value="art. 9479">art. 9479</option>
                  <option value="art. 9640">art. 9640</option>
                  <option value="toBeDelivered">
                    Sarke ce biti dostavljene za montazu
                  </option>
                </select>
              </div>
            )}
            <div>
              <label htmlFor="numOfStandardHinges" className="text-lg mr-8">
                Ukupan broj šarki:
              </label>
              <select
                type="number"
                id="numOfStandardHinges"
                className=" border border-gray-500 bg-white px-1 text-lg text-gray-700 focus:outline-none"
                value={frontsData[activeFrontId].hinges.numberOfHinges}
                onChange={(e) => {
                  updateNumberOfHinges(activeFrontId, e.target.value);
                }}
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
            <div>
              <p className="text-lg mt-4">
                Pozicija svih šarki se uzima od
                {frontsData[activeFrontId].orientation === "Kip vrata"
                  ? " leve "
                  : " donje "}
                spoljne ivice
              </p>
              <div className="flex flex-col gap-2 mt-4">
                {frontsData[activeFrontId].hinges.centerDistanceOfHoles.map(
                  (hole, id) => {
                    return (
                      <div key={id} className="flex justify-between">
                        <label htmlFor={`hole-${id}`} className="text-lg">
                          Centar {id + 1}. rupe od{" "}
                          {frontsData[activeFrontId].orientation === "Kip vrata"
                            ? "leve"
                            : "donje"}{" "}
                          spoljne ivice
                        </label>
                        <input
                          type="text"
                          id={`hole-${id}`}
                          value={hole}
                          onChange={(e) => {
                            updateCenterDistanceOfHole(
                              activeFrontId,
                              id,
                              e.target.value
                            );
                          }}
                          className="border border-gray-500 bg-white px-1 text-xl text-gray-700 focus:outline-none"
                        />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hinges;
