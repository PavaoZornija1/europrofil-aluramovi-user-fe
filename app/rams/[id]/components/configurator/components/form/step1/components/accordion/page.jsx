"use client";
import {
  setAdditionalFillTreatment,
  setFill,
} from "@/app/features/ram/ramData";
import store from "@/app/store/store";
import { Config } from "@/config";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Accordion(props) {
  const { items, accordionFor } = props;
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeSubfillIndex, setActiveSubfillIndex] = useState(-1);
  const [noFillChosen, setNoFillChosen] = useState(false);
  const [additionalTreatment, setAdditionalTreatment] = useState("");
  const [bevelOptions, setBevelOptions] = useState([]);
  const [sandBlastingOptions, setSandBlastingOptions] = useState([]);
  const [add, setAdd] = useState({});
  const fill = useSelector((state) => state.data.fill);

  useEffect(() => {
    const response = async () => {
      const res = await axios.get(`${Config.baseURL}/api/bevel-options`);
      setBevelOptions(res.data);
      const res_2 = await axios.get(
        `${Config.baseURL}/api/sand-blasting-options`
      );
      setSandBlastingOptions(res_2.data);
    };
    response();
  }, []);

  const dispatch = useDispatch();

  const additionalFillTreatment = useSelector(
    (state) => state.data.additionalFillTreatment
  );

  const handleChooseSandblasting = (e) => {
    let addition;
    for (let i = 0; i < sandBlastingOptions?.length; ++i) {
      if (sandBlastingOptions[i]?.id === e.target.value) {
        addition = sandBlastingOptions[i];
      }
    }
    for (let i = 0; i < bevelOptions?.length; ++i) {
      if (bevelOptions[i]?.id === e.target.value) {
        addition = bevelOptions[i];
      }
    }
    setAdd(addition);

    setAdditionalTreatment(e.target.value);

    dispatch(setAdditionalFillTreatment(addition));
  };

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? index : index);
  };

  const handleFillClick = (item) => {
    dispatch(setFill(item));
  };

  const handleSubfillClick = (index, item) => {
    setActiveSubfillIndex(index === activeSubfillIndex ? index : index);
    dispatch(setFill({ ...fill, subfill: item }));
  };

  const handleNoFillChosen = (bool) => {
    setNoFillChosen(bool);
    dispatch(setFill({}));
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
              className="sm:ml-8 border focus:outline-none border-r-sm text-center"
              value={additionalTreatment}
              onChange={(e) => handleChooseSandblasting(e)}
            >
              <option value={null} key={`defaultOptionKey`}>
                -Izaberite-
              </option>
              <optgroup label="Peskirenje">
                {sandBlastingOptions?.map((options) => (
                  <option key={options.id} value={options.id}>
                    {options.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
