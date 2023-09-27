"use client";
import {
  setAdditionalFillTreatment,
  setFill,
  setSubfill,
} from "@/app/features/ram/ramData";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Accordion(props) {
  const { items, accordionFor } = props;
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeSubfillIndex, setActiveSubfillIndex] = useState(-1);
  const [noFillChosen, setNoFillChosen] = useState(false);
  const [additionalTreatment, setAdditionalTreatment] = useState("");

  const dispatch = useDispatch();

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? index : index);
  };

  const handleFillClick = (item) => {
    dispatch(setFill(item));
  };

  const handleSubfillClick = (index, item) => {
    setActiveSubfillIndex(index === activeSubfillIndex ? index : index);
    dispatch(setSubfill(item));
  };

  const handleNoFillChosen = (bool) => {
    setNoFillChosen(bool);
  };

  const handleAdditionalTreatment = (e) => {
    setAdditionalTreatment(e.target.value);
    dispatch(setAdditionalFillTreatment(e.target.value));
  };

  return (
    <div>
      {items?.cmsAluFills?.map(
        (item, index) =>
          !item.parentId && (
            <div key={item.name} className="py-2">
              <div className="flex items-center justify-between">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => {
                    handleClick(index);
                    handleNoFillChosen(true);
                    handleFillClick(item);
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
                            handleSubfillClick(optionId, option);
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
              value={additionalTreatment}
              onChange={handleAdditionalTreatment}
            >
              <option value="Bez dodatne obrade">Bez dodatne obrade</option>
              <option value="KP obrada">KP obrada</option>
              <option value="Peskaža cele staklene površine">
                Peskaža cele staklene površine
              </option>
              <option value="Kaljenje stakla">Kaljenje stakla</option>
              <optgroup label="Fazetiranje">
                <option value="Fazetiranje 5 mm">Fazetiranje 5 mm</option>
                <option value="Fazetiranje 10 mm">Fazetiranje 10 mm</option>
                <option value="Fazetiranje 15 mm">Fazetiranje 15 mm</option>
              </optgroup>
              <optgroup label="Lepljenje folija">
                <option value="Lepljenje zaštitne folije">
                  Lepljenje zaštitne folije
                </option>
                <option value="Lepljenje dekorativne folije">
                  Lepljenje dekorativne folije
                </option>
                <option value="Lepljenje folije po motivu">
                  Lepljenje folije po motivu
                </option>
                <option value="Lepljenje peskirne folije">
                  Lepljenje peskirne folije
                </option>
              </optgroup>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
