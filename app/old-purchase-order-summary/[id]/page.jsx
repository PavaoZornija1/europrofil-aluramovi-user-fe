"use client";
import React, { useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import PreviousWorkOrder from "./components/previousWorkOrder/page";
import PreviousPurchaseOrder from "./components/previousPurchaseOrder/page";
import Navbar from "@/app/navbar/page";

function PreviouseWorkOrderMain(props) {
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
              href={`${`/old-purchase-order-summary/${pathname.replace(
                "/old-purchase-order-summary",
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
              href={`${`/old-purchase-order-summary/${pathname.replace(
                "/old-purchase-order-summary",
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
        {workOrderActive && <PreviousWorkOrder />}
        {purchaseOrderActive && <PreviousPurchaseOrder />}
      </div>
    </div>
  );
}

export default PreviouseWorkOrderMain;
