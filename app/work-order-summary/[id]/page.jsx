"use client";
import { useAuth } from "@/app/context/AuthContext";
import Navbar from "@/app/navbar/page";
import store from "@/app/store/store";
import {
  calculateAluFrameFillSurfaces,
  calculateAluFrameSurfaces,
  calculateMetalCornersQuantity,
  calculateTotalNumberOfFronts,
} from "@/app/utils/calculations";
import { Config } from "@/config";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./components/pdf/ComponentToPrint";
import PurchaseOrder from "./components/purchaseOrder/page";
import WorkOrder from "./components/workOrder/page";
import SnackMessage from "@/app/UI/snackMessage/SnackMessage";

function WorkOrderMain({
  showSavedButton,
  setShowSavedButton,
  showMoreActionButtons,
  setShowMoreActionButtons,
}) {
  const { token } = useAuth();
  const [workOrderActive, setWorkOrderActive] = useState(true);
  const [purchaseOrderActive, setPurchaseOrderActive] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [postType, setPostType] = useState("");
  const [isMiniLoading, setIsMiniLoading] = useState(false);
  const [getOrder, setGetOrder] = useState();
  const lastOrder = getOrder?.at(-1);

  const pathname = usePathname();
  const data = store.getState();

  const frameType = useSelector((state) => state.data.frameType);
  const totalCost = useSelector((state) => state.data.totalCost);
  const individualFronts = useSelector((state) => state.data.individualFronts);
  const treatment = useSelector((state) => state.data.treatment);
  const fill = useSelector((state) => state.data.fill);
  const user = useSelector((state) => state.data.user);
  const vat = useSelector((state) => state.data.vat);
  const additionalFillTreatment = useSelector(
    (state) => state.data.additionalFillTreatment
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
    setIsMiniLoading(true);
    setIsSaved(true);
    setShowMoreActionButtons(true);
    setShowSavedButton(true);
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
        user: JSON.stringify(user),
        treatment: JSON.stringify(treatment),
        frameType: JSON.stringify(frameType),
        additionallFillTreatment: JSON.stringify(additionalFillTreatment),
        fill: JSON.stringify(fill),
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
        jsonFronts: JSON.stringify(individualFronts),
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

    setIsMiniLoading(false);
    setPostType(e.target.innerText);
    console.log(e.target.innerText);
    await new Promise((resolve) => setTimeout(resolve, 3350));
    setIsSaved(false);
    return response;
  };
  const handlePatchOrder = async (id) => {
    setIsMiniLoading(true);
    setShowMoreActionButtons(true);
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.patch(
      `${Config.baseURL}/api/alu-orders/send-to-create/${id}`,
      {},
      config
    );
    setIsMiniLoading(false);

    return response;
  };
  const getOrders = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${Config.baseURL}/api/alu-orders/`); //api/alu-orders
      setGetOrder(res?.data);
      console.log("DATAAAAA: ", res?.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

  const handleDeleteOrder = async (id) => {
    await axios.delete(`${Config.baseURL}/api/alu-orders/${id}`); //api/alu-orders
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
        {isSaved && (
          <SnackMessage
            message={
              postType === "Sačuvaj"
                ? "Vaša porudžbina je sačuvana"
                : "Vaša porudžbina je kopirana"
            }
          />
        )}
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
          {isMiniLoading ? (
            <div role="status" className="m-auto">
              <svg
                aria-hidden="true"
                className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              <h3 className="w-full text-start text-2xl font-semibold uppercase tracking-wider ">
                {workOrderActive ? "Radni nalog" : "Porudžbenica"}
              </h3>
              <div className="my-2 flex w-full flex-col items-center gap-2 sm:justify-end min-[1080px]:flex-row">
                <Link
                  className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-yellow-500 to-yellow-600 px-3 py-1 text-center text-sm font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
                  href={`/rams/${frameType?.id}?step=1`}
                >
                  Izmeni Nalog
                </Link>
                {showMoreActionButtons ? (
                  <>
                    <button
                      className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-sky-500 to-sky-600 px-3 py-1 text-center text-sm font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
                      onClick={() => handlePatchOrder(lastOrder?.id)}
                    >
                      Prosledi na izradu
                    </button>
                    <button
                      className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-red-500 to-red-600 px-3 py-1 text-center text-sm font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
                      onClick={() => handleDeleteOrder(lastOrder?.id)}
                    >
                      Obriši
                    </button>
                    <button
                      className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-sm font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
                      onClick={(e) => handlePostOrder(e)}
                    >
                      Napravi kopiju
                    </button>
                  </>
                ) : null}
                <div
                  className="w-full max-w-[320px] cursor-pointer rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-sm font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
                  onClick={handlePrint}
                >
                  Štampa
                </div>
                <button
                  className="w-full max-w-[320px] rounded-md border bg-gradient-to-tr from-green-500 to-green-600 px-3 py-1 text-center text-sm font-semibold uppercase text-white transition-all duration-200 hover:brightness-125"
                  onClick={(e) => handlePostOrder(e)}
                >
                  Sačuvaj
                </button>
              </div>
            </div>
          )}
        </div>
        {workOrderActive && (
          <WorkOrder
            activeFrame={frameType}
            individualFronts={individualFronts}
            isLoading={isLoading}
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
