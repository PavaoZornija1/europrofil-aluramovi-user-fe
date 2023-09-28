"use client";
import React, { useState } from "react";
import Link from "next/link";
import WorkOrder from "./components/workOrder/page";
import PurchaseOrder from "./components/purchaseOrder/page";
import Navbar from "@/app/navbar/page";
import { usePathname } from "next/navigation";
import createWorkOrderPdf from "./components/pdf/pdf";

function WorkOrderMain(props) {
  const [workOrderActive, setWorkOrderActive] = useState(true);
  const [purchaseOrderActive, setPurchaseOrderActive] = useState(false);
  const pathname = usePathname();
  return (
    <div>
      <Navbar />
      <div className="m-auto mt-2 flex max-w-[1250px] flex-col items-center justify-center gap-4 p-2">
        <div className="flex w-full flex-col justify-around gap-2 overflow-hidden rounded-lg border bg-slate-300 text-white sm:flex-row ">
          <div className="w-full border-black bg-sky-800 px-3 py-2 text-center">
            <Link
              className={
                workOrderActive
                  ? "text-2xl font-semibold tracking-wider underline"
                  : "text-2xl font-semibold tracking-wider"
              }
              href={`${`/work-order-summary/${pathname.replace(
                "/work-order-summary",
                ""
              )}`}`}
              onClick={() => {
                setWorkOrderActive(true);
                setPurchaseOrderActive(false);
              }}
            >
              Radni Nalog
            </Link>
          </div>
          <div className="w-full bg-sky-800 py-2 text-center">
            <Link
              className={
                purchaseOrderActive
                  ? "text-2xl font-semibold tracking-wider underline"
                  : "text-2xl font-semibold tracking-wider"
              }
              href={`${`/work-order-summary/${pathname.replace(
                "/work-order-summary",
                ""
              )}`}`}
              onClick={() => {
                setWorkOrderActive(false);
                setPurchaseOrderActive(true);
              }}
            >
              Porudžbenica
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center sm:flex-row sm:justify-between text-black">
          <h3 className="w-full text-start text-2xl font-semibold uppercase tracking-wider sm:w-1/3">
            {workOrderActive ? "Radni nalog" : "Porudžbenica"}
          </h3>
          <div className="my-2 flex w-full flex-col items-center gap-2 sm:max-w-lg sm:flex-row">
            {/* <Link
              className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-lg font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
              href={"/rams/1?step=1"}
            >
              Izmeni Nalog
            </Link> */}
            <div
              className="w-full max-w-[320px] cursor-pointer rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-lg font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
              onClick={createWorkOrderPdf}
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
        {workOrderActive && <WorkOrder />}
        {purchaseOrderActive && <PurchaseOrder />}
      </div>
    </div>
  );
}

export default WorkOrderMain;
