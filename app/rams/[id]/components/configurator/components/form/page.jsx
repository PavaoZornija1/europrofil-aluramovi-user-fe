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
      </form>
    </>
  );
}

export default Form;
