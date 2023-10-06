"use client";
import React, { useState } from "react";
import Link from "next/link";
import WorkOrder from "./components/workOrder/page";
import PurchaseOrder from "./components/purchaseOrder/page";
import Navbar from "@/app/navbar/page";
import { usePathname } from "next/navigation";
import createWorkOrderPdf from "./components/pdf/pdf";
import { useSelector } from "react-redux";
import { messages } from "app/localization/messages.js";
import { Config } from "@/config.js";

function WorkOrderMain(props, locale) {
  console.log(messages.workOrderMain);
  const { workOrderTitle, purchaseTitle, printTitle, saveTitle } =
    messages[Config.locale].workOrderMain;
  const [workOrderActive, setWorkOrderActive] = useState(true);
  const [purchaseOrderActive, setPurchaseOrderActive] = useState(false);
  const pathname = usePathname();

  const frameType = useSelector((state) => state.data.frameType.name);
  const treatment = useSelector((state) => state.data.treatment.name);
  const fill = useSelector((state) => state.data.fill.name);
  const additionalTreatment = useSelector(
    (state) => state.data.additionalFillTreatment.name
  );
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
              {workOrderTitle}
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
              {purchaseTitle}
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center sm:flex-row sm:justify-between text-black">
          <h3 className="w-full text-start text-2xl font-semibold uppercase tracking-wider sm:w-1/3">
            {workOrderActive ? workOrderTitle : purchaseTitle}
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
              onClick={() =>
                createWorkOrderPdf(
                  frameType,
                  treatment,
                  fill,
                  additionalTreatment
                )
              }
            >
              {printTitle}
            </div>
            <Link
              className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-lg font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
              href={""}
            >
              {saveTitle}
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
