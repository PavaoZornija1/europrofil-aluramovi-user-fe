"use client";
import Navbar from "@/app/navbar/page";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import createWorkOrderPdf from "./components/pdf/pdf";
import PurchaseOrder from "./components/purchaseOrder/page";
import WorkOrder from "./components/workOrder/page";
import { Config } from "@/config";
import {
  calculateAluFrameFillSurfaces,
  calculateAluFrameSurfaces,
  calculateMetalCornersQuantity,
  calculateTotalNumberOfFronts,
} from "@/app/utils/calculations";
import { useAuth } from "@/app/context/AuthContext";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./components/pdf/ComponentToPrint";
import store from "@/app/store/store";

function WorkOrderMain(props) {
  const { token } = useAuth();
  const [workOrderActive, setWorkOrderActive] = useState(true);
  const [purchaseOrderActive, setPurchaseOrderActive] = useState(false);
  const pathname = usePathname();
  const data = store.getState();

  const frameType = useSelector((state) => state.data.frameType);
  const totalCost = useSelector((state) => state.data.totalCost);
  const individualFronts = useSelector((state) => state.data.individualFronts);
  const treatment = useSelector((state) => state.data.treatment);
  const fill = useSelector((state) => state.data.fill);
  const user = useSelector((state) => state.data.user);
  const vat = useSelector((state) => state.data.vat);
  const additionalTreatment = useSelector(
    (state) => state.data.additionalFillTreatment.name
  );

  const cornerCoverCount = calculateMetalCornersQuantity(individualFronts);
  const totalFillArea = calculateAluFrameFillSurfaces(
    frameType,
    individualFronts,
    fill
  );
  const totalFrameLength = calculateAluFrameSurfaces(
    individualFronts,
    treatment
  );

  const totalFrameCount = calculateTotalNumberOfFronts(individualFronts);
  const costPerMeterTotal =
    calculateAluFrameSurfaces(individualFronts, treatment) *
      treatment?.pricePerMeter -
    (calculateAluFrameSurfaces(individualFronts, treatment) *
      treatment?.pricePerMeter *
      user?.discountHardware) /
      100;
  const costPerMeterBase =
    calculateAluFrameSurfaces(individualFronts, treatment) *
    treatment?.pricePerMeter;

  let costVat = totalCost * (vat / 100);
  let costBase = totalCost - costVat;

  const handlePostOrder = async (e) => {
    // setIsMiniLoading(true);
    // setIsSaved(true);
    // setShowMoreActionButtons(true);
    // setShowSavedButton(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.post(
      `${Config.baseURL}/api/alu-orders`,
      {
        // customerDesiredDeliveryDate:
        //   createAluOrderDto.customerDesiredDeliveryDate,
        customerDeliveryAddress: user?.deliveryAddress,
        customerAddress: user?.address,
        customerPhone: user?.phone,
        // codeMonth: createAluOrderDto.codeMonth,
        frameTreatmentPrice: treatment?.pricePerMeter,
        frameTreatmentName: treatment?.name,
        frameTreatmentCode: treatment?.productCode,
        frameTypeName: frameType?.name,
        frameTypeCode: frameType?.productCode,
        // customerInternalOrderNumber:
        //   createAluOrderDto.customerInternalOrderNumber,
        customerNotes: user?.note,
        // customerDiscount: createAluOrderDto.customerDiscount, koji je ovo popust posto imaju 2
        fillPriceIncrease: fill?.priceIncrease,
        fillPrice: fill?.pricePerSquareMeter,
        fillName: fill?.name,
        fillCode: fill?.productCode,
        frameTreatmentPriceIncrease: treatment?.priceIncrease,
        // cornerCoverProductCode: createAluOrderDto.cornerCoverProductCode, ???
        // confirmedOn: createAluOrderDto.confirmedOn,
        // confirmed: createAluOrderDto.confirmed,
        // jsonCost: createAluOrderDto.jsonCost,
        // jsonFronts: createAluOrderDto.jsonFronts,
        // jsonHeader: createAluOrderDto.jsonHeader,
        // jsonOrder: createAluOrderDto.jsonOrder,
        // jsonConfiguration: createAluOrderDto.jsonConfiguration,
        orderDate: new Date(),
        totalFillArea: totalFillArea,
        totalFrameLength: totalFrameLength,
        totalFrameCount: totalFrameCount,
        costPerMeterTotal: costPerMeterTotal, //sa %
        costPerMeterBase: costPerMeterBase, //bez %
        costTotal: totalCost, //finalna cijena
        costVat: costVat, // cijena pdv-a
        costBase: costBase,
        costVatRate: vat,
        cornerCoverCount: cornerCoverCount,
      },
      config
    );

    // setIsMiniLoading(false);
    // setPostType(e.target.innerText);
    // await new Promise((resolve) => setTimeout(resolve, 3350));
    // setIsSaved(false);
    return response;
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "europrofil-aluRamovi",
  });
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
            <Link
              className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-lg font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
              href={`/rams/${frameType?.id}?step=1`}
            >
              Izmeni Nalog
            </Link>
            <div
              className="w-full max-w-[320px] cursor-pointer rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-lg font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
              // onClick={() =>
              //   createWorkOrderPdf(
              //     frameType?.name,
              //     treatment?.name,
              //     fill?.name,
              //     additionalTreatment
              //   )
              // }
              onClick={handlePrint}
            >
              Štampa
            </div>
            <button
              className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-lg font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
              onClick={(e) => handlePostOrder(e)}
            >
              Sačuvaj
            </button>
          </div>
        </div>
        {workOrderActive && (
          <WorkOrder
            activeFrame={frameType}
            individualFronts={individualFronts}
          />
        )}
        {purchaseOrderActive && <PurchaseOrder />}
      </div>
      <div style={{ display: "none" }}>
        <ComponentToPrint ref={componentRef} data={data} />
      </div>
    </div>
  );
}

export default WorkOrderMain;
