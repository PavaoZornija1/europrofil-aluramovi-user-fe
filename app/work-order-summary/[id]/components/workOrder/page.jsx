"use client";
import React from "react";
import CustomerData from "./customerData/page";
import Specifications from "./specification/page";
import PersonsInCharge from "./personsInCharge/page";
import DoorDetails from "./doorDetails.jsx/page";
import Loading from "@/app/loading";

// import createWorkOrderPdf from "./customerData/workOrderPdf/pdf";

const WorkOrder = ({ activeFrame, individualFronts, isLoading }) => {
  return (
    <div className="mt-4 flex w-full flex-col items-center gap-4 text-black">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="w-full">
          <CustomerData />
          <Specifications />
          <DoorDetails
            activeFrame={activeFrame}
            individualFronts={individualFronts}
          />
          <PersonsInCharge />
          {/* <Rails /> */}
          {/* <SchemaView /> */}
        </div>
      )}
    </div>
  );
};

export default WorkOrder;
