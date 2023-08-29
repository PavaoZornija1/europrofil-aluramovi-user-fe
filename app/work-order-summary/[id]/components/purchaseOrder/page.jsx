"use client";
import React from "react";
import PurchaseOrderInfo from "./purchaseOrderInfo/page";
import CustomerData from "../workOrder/customerData/page";
import Specifications from "../workOrder/specification/page";
import DetailedPrice from "./detailedPrice/page";
import Signature from "./signature/page";

function PurchaseOrder() {
  return (
    <div className="m-auto mt-4 flex w-11/12 flex-col gap-4 text-black">
      <PurchaseOrderInfo />
      <CustomerData />
      <Signature />
      <Specifications />
      <DetailedPrice />
    </div>
  );
}

export default PurchaseOrder;
