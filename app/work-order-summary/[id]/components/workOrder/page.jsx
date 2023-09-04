"use client";
import Link from "next/link";
import React from "react";
import CustomerData from "./customerData/page";
import Specifications from "./specification/page";
import PersonsInCharge from "./personsInCharge/page";
// import SchemaView from "./schemaView/page";
// import Rails from "./rails/page";
// import DoorDetails from "./doorDetails/page";
// import createWorkOrderPdf from "./customerData/workOrderPdf/pdf";

const WorkOrder = () => {
  return (
    <div className="mt-4 flex w-full flex-col items-center gap-4 text-black">
      <div className="w-full">
        <CustomerData />
        <Specifications />
        <PersonsInCharge />
        {/* <Rails />
        <DoorDetails />
        <SchemaView />
         */}
      </div>
    </div>
  );
};

export default WorkOrder;
