"use client";
import { setTreatment, setRalCode } from "@/app/features/ram/ramData";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Treatments(props) {
  const { treatments, accordionFor } = props;
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeSubfillIndex, setActiveSubfillIndex] = useState(-1);
  const [noFillChosen, setNoFillChosen] = useState(false);
  const [ral, setRal] = useState("");

  const dispatch = useDispatch();

  const handleClick = (index, treatment) => {
    setActiveIndex(index === activeIndex ? index : index);
    dispatch(setTreatment(treatment));
  };

  const handleSubfillClick = (index) => {
    setActiveSubfillIndex(index === activeSubfillIndex ? index : index);
  };

  const handleNoFillChosen = (bool) => {
    setNoFillChosen(bool);
  };

  const handleRalCode = (e) => {
    setRal(e.target.value);
    dispatch(setRalCode(ral));
  };

  return (
    <div>
      {treatments?.cmsAluFrameTreatments?.map(
        (item, index) =>
          !item.parentId && (
            <div key={item.name} className="py-2">
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => {
                    handleClick(index, item);
                    handleNoFillChosen(true);
                  }}
                >
                  <input
                    type="radio"
                    name={accordionFor}
                    id={`${accordionFor}${index}`}
                    className="mr-2 cursor-pointer"
                    onClick={() => {
                      handleClick(index);
                      handleNoFillChosen(true);
                    }}
                  />
                  <label
                    htmlFor={`${accordionFor}${index}`}
                    className="text-lg cursor-pointer"
                  >
                    {item.name}
                  </label>
                </div>
                {item?.gallery ? (
                  <div className="hover:underline cursor-pointer">Gallery</div>
                ) : null}
              </div>

              {item.customColorAvailable && index === activeIndex && (
                <div className="ml-6 my-2">
                  <label
                    htmlFor={`ral${index}`}
                    className="mr-2 block md:inline"
                  >
                    RAL kod za boju:
                  </label>
                  <input
                    type="text"
                    name=""
                    id={`ral${index}`}
                    className=" border-2 focus:outline-none focus:border-black"
                    value={ral}
                    onChange={handleRalCode}
                  />
                </div>
              )}

              {item?.children &&
                index === activeIndex &&
                item.children.map((option, optionId) => {
                  return (
                    <div key={optionId} className="py-1">
                      <div className="flex items-center justify-between ml-6">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={() => {
                            handleSubfillClick(optionId);
                          }}
                        >
                          <input
                            type="radio"
                            name={`${accordionFor}-subfills`}
                            id={`${accordionFor}${optionId}-subfills`}
                            className="mr-2 cursor-pointer"
                            onClick={() => {
                              handleSubfillClick(optionId);
                            }}
                          />
                          <label
                            htmlFor={`${accordionFor}${optionId}-subfills`}
                            className="text-lg cursor-pointer"
                          >
                            {option.name}
                          </label>
                        </div>

                        {option.gallery ? (
                          <div className="hover:underline cursor-pointer">
                            Gallery
                          </div>
                        ) : null}
                      </div>

                      {option.inputRAL &&
                        index === activeIndex &&
                        optionId === activeSubfillIndex && (
                          <div className="ml-12 my-2">
                            <label
                              htmlFor={`ral${index}${optionId}`}
                              className="mr-2 block md:inline"
                            >
                              RAL kod za boju:
                            </label>
                            <input
                              type="text"
                              name=""
                              id={`ral${index}${optionId}`}
                              className=" border-2 focus:outline-none focus:border-black"
                            />
                          </div>
                        )}
                    </div>
                  );
                })}
            </div>
          )
      )}
      {accordionFor === "fills" && (
        <div
          className="flex items-center cursor-pointer"
          //   onClick={() => {
          //     handleClick(index);
          //   }}
        >
          <input
            type="radio"
            name="fills"
            id="noFill"
            className="mr-2 cursor-pointer"
            onClick={() => {
              handleClick(-1);
              handleNoFillChosen(false);
            }}
          />
          <label htmlFor="noFill" className="text-lg cursor-pointer">
            Bez ispune
          </label>
        </div>
      )}
      {accordionFor === "fills" && noFillChosen && (
        <div className="mt-4 pt-4 border-t-2">
          <p className="text-xl font-semibold uppercase tracking-wider text-black">
            Opcije za ispunu
          </p>
          <div className="flex flex-col mt-4 sm:flex-row">
            <p className="text-lg">Dodatna obrada</p>
            <select
              name="additionalWork"
              id=""
              className="sm:ml-8 border focus:outline-none border-r-sm"
            >
              <option value="noTretment">Bez dodatne obrade</option>
              <option value="kpTreatment">KP obrada</option>
              <option value="wholeGlassTreatment">
                Peskaža cele staklene površine
              </option>
              <option value="temperingGlass">Kaljenje stakla</option>
              <optgroup label="Fazetiranje">
                <option value="faceting-0.5">Fazetiranje 5 mm</option>
                <option value="faceting-1">Fazetiranje 10 mm</option>
                <option value="faceting-1.5">Fazetiranje 15 mm</option>
              </optgroup>
              <optgroup label="Lepljenje folija">
                <option value="protectiveFoil">
                  Lepljenje zaštitne folije
                </option>
                <option value="decorativeFoil">
                  Lepljenje dekorativne folije
                </option>
                <option value="motiveFoil">Lepljenje folije po motivu</option>
                <option value="sandyFoil">Lepljenje peskirne folije</option>
              </optgroup>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Treatments;
