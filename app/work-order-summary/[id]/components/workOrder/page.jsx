"use client";
import React from "react";
import CustomerData from "./customerData/page";
import Specifications from "./specification/page";
import PersonsInCharge from "./personsInCharge/page";
import DoorDetails from "./doorDetails.jsx/page";

// import createWorkOrderPdf from "./customerData/workOrderPdf/pdf";

const WorkOrder = () => {
  return (
    <div className="mt-4 flex w-full flex-col items-center gap-4 text-black">
      <div className="w-full">
        <CustomerData />
        <Specifications />
        <PersonsInCharge />
        <DoorDetails />
        {/* <Rails />
        <SchemaView />
         */}
      </div>
    </div>
  );
};

export default WorkOrder;
