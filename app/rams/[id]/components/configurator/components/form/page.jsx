"use client";

import React from "react";
import Step1 from "./step1/page";
import Step2 from "./step2/page";

function Form(props) {
  return (
    <>
      <form className="flex w-full flex-col gap-y-6">
        {props.selectedStep === 1 && <Step1 ram={props.ram} />}
        {props.selectedStep === 2 && <Step2 ram={props.ram} />}
      </form>
    </>
  );
}

export default Form;
