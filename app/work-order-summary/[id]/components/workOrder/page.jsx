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
      <div className="flex w-full flex-col items-center sm:flex-row sm:justify-between">
        <h3 className="w-full text-start text-2xl font-semibold uppercase tracking-wider sm:w-1/3">
          Radni Nalog
        </h3>
        <div className="my-2 flex w-full flex-col items-center gap-2 sm:max-w-lg sm:flex-row">
          <Link
            className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-lg font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
            href={"/mechanisms/1?step=1"}
          >
            Izmeni Nalog
          </Link>
          <div
            className="w-full max-w-[320px] cursor-pointer rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-lg font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
            // onClick={createWorkOrderPdf}
          >
            Štampa
          </div>
          <Link
            className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-lg font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
            href={""}
          >
            Sačuvaj
          </Link>
        </div>
      </div>
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
