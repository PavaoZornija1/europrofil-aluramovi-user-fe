"use client";

import React from "react";
import Step1 from "./step1/page";

function Form(props) {
  return (
    <>
      <form className="flex w-full flex-col gap-y-6">
        {props.selectedStep === 1 && (
          <Step1
            height={props.height}
            setHeight={props.setHeight}
            width={props.width}
            setWidth={props.setWidth}
            handleOpenModal={props.handleOpenModal}
            handleCloseModal={props.handleCloseModal}
          />
        )}
        {/*
        {props.selectedStep === 2 && (
          <Step2
            selectedOption={props.selectedOption}
            setSelectedOption={props.setSelectedOption}
            leftClicked={props.leftClicked}
            setLeftClicked={props.setLeftClicked}
            rightClicked={props.rightClicked}
            setRightClicked={props.setRightClicked}
            leftRetClicked={props.leftRetClicked}
            setLeftRetClicked={props.setLeftRetClicked}
            rightRetClicked={props.rightRetClicked}
            setRightRetClicked={props.setRightRetClicked}
          />
        )}
        {props.selectedStep === 3 && (
          <Step3
            selectedOption={props.selectedOption}
            mech={props.mech}
            verticalDoorsQty={props.verticalDoorsQty}
            setVerticalDoorsQty={props.setVerticalDoorsQty}
            height={props.height}
            updateFills={props.updateFills}
            width={props.width}
            activeLink={props.activeLink}
            setActiveLink={props.setActiveLink}
            activeDoorID={props.activeDoorID}
            setActiveDoorID={props.setActiveDoorID}
            typeOfFillLength={props.typeOfFillLength}
            copyOverDoorConfig={props.copyOverDoorConfig}
            chosenFill={props.chosenFill}
            setChosenFill={props.setChosenFill}
            chosenGlassFill={props.chosenGlassFill}
            handleSetChosenGlassFill={props.handleSetChosenGlassFill}
          />
        )}
        {props.selectedStep === 4 && (
          <Step4 selectedOption={props.selectedOption} />
        )} */}
      </form>
    </>
  );
}

export default Form;
