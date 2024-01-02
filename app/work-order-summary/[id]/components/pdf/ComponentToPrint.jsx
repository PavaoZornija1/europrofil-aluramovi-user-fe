import Image from "next/image";
import React, { forwardRef } from "react";
import SketchDetails from "../workOrder/doorDetails.jsx/sketch/page";

const ComponentToPrint = forwardRef((props, ref) => {
  const { data } = props;
  const completeData = data.data;

  // Calculate fill width
  const calculateFillWidth = (front, frame) => {
    const surface =
      Number(front?.dimensions?.width) -
      Number(frame.fillingWidthReduction * 10 * 2);
    // -
    // Number(front.handles?.handleProfile?.frameLengthReduction * 10);
    return surface;
  };

  // Calculate fill height
  const calculateFillHeight = (front, frame) => {
    const surface =
      Number(front?.dimensions?.height) -
      Number(frame.fillingHeightReduction * 10 * 2);
    // -
    // Number(front.handles?.handleProfile?.frameLengthReduction * 10);
    return surface;
  };
  console.log("data", completeData);
  return (
    <div ref={ref} className="mx-8 my-10 px-1 flex flex-col gap-10">
      {/* HEADER */}
      <header className="flex justify-between items-center border-b px-1">
        <span>RADNI NALOG</span>
        <div className="flex items-center gap-2">
          <Image
            src={"/images/ep-iso-standardi-1.png"}
            alt="iso-standards"
            width={175}
            height={75}
          />
          <Image
            src={"/images/ep-iso-standardi-2.png"}
            alt="iso-standards"
            width={175}
            height={75}
          />
          <Image
            src={"/images/bonitet.jpg"}
            alt="iso-standards"
            width={75}
            height={75}
          />
          <Image
            src={"/images/europrofil-iso.png"}
            alt="iso-standards"
            width={75}
            height={100}
          />
        </div>
      </header>
      {/* CUSTOMER INFO */}
      <section className="border">
        <h4 className="bg-slate-700 text-white px-1">PODACI O KUPCU</h4>
        <div className="grid grid-cols-4 place-items-center justify-items-stretch gap-4 p-2 text-sm">
          <div className="flex flex-col">
            <span>IME:</span>
            <span>{completeData?.user?.username}</span>
          </div>
          <div className="flex flex-col">
            <span>TELEFON:</span>
            <span>{completeData?.user?.phone}</span>
          </div>
          <div className="flex flex-col">
            <span>EMAIL ADRESA:</span>
            <span>{completeData?.user?.email}</span>
          </div>
          <div className="flex flex-col">
            <span>POPUST:</span>
            <span>{completeData?.user?.discountHardware}</span>
          </div>
          <div className="flex flex-col self-start">
            <span>ADRESA:</span>
            <span>{completeData?.user?.address}</span>
          </div>
          <div className="flex flex-col self-start">
            <span>ADRESA ZA DOSTAVU:</span>
            <span>{completeData?.user?.deliveryAddress}</span>
          </div>
          <div className="flex flex-col self-start">
            <span>ŽELJENI DATUM ISPORUKE:</span>
            <span>treba ubaciti</span>
          </div>
          <div className="flex flex-col self-start">
            <span>INTERNI BROJ:</span>
            <span>treba ubaciti</span>
          </div>
        </div>
      </section>
      {/* NOTE */}
      <section className="border">
        <h4 className="bg-slate-700 text-white px-1">DODATNE NAPOMENE</h4>
        <div className="italic">{completeData?.user?.note}</div>
      </section>
      {/*BASIC SPECIFICATIONS */}
      <section className="border">
        <h4 className="bg-slate-700 text-white px-1">OSNOVNA SPECIFIKACIJA</h4>
        <div className="flex justify-between">
          <div className="flex flex-col px-1">
            <span>TIP RAMA:</span>
            <span>{completeData?.frameType?.name}</span>
          </div>
          <div className="flex flex-col px-1">
            <span>OBRADA:</span>
            <span>{completeData?.treatment?.name}</span>
          </div>
          <div className="flex flex-col px-1">
            <span>ISPUNA:</span>
            <span>{completeData?.fill?.name}</span>
          </div>
          <div className="flex flex-col px-1">
            <span>DODATNA OBRADA:</span>
            <span
              className={`text-${
                !completeData?.additionalFillTreatment?.name
                  ? "center"
                  : "start"
              }`}
            >
              {completeData?.additionalFillTreatment?.name ?? "-"}
            </span>
          </div>
        </div>
      </section>
      {/* INDIVIDUAL FRONTS */}
      <section className="grid grid-cols-2 gap-2">
        {completeData?.individualFronts?.map((frame, index) => (
          <div key={index} className="border border-black break-after-page">
            <h4 className="bg-slate-700 text-white px-1">
              Front {index + 1} - {frame.orientation}, komada{" "}
              {frame.dimensions.numberOfPieces}
            </h4>
            {completeData?.additionalFillTreatment?.id ? (
              <div className="flex justify-between px-1">
                <span>{completeData?.additionalFillTreatment?.name}</span>
                <span className="px-2">
                  {calculateFillWidth(frame, completeData?.frameType)} x{" "}
                  {calculateFillHeight(frame, completeData?.frameType)}mm
                </span>
              </div>
            ) : null}
            <div className="flex justify-between px-1">
              {frame.hinges?.hinge?.id ? (
                <>
                  <span>Šarke: {frame.hinges?.hinge?.name}</span>
                  <span className="px-2">
                    {frame?.hinges?.numberOfHinges} kom
                  </span>
                </>
              ) : null}
            </div>
            {frame.handles?.handleProfile?.id ? (
              <div className="flex justify-between px-1">
                <span>Profil ručice: {frame.handles?.handleProfile?.name}</span>

                <span className="px-2">{frame.handles?.profileLength}mm</span>
              </div>
            ) : null}
            <SketchDetails frame={frame} />
          </div>
        ))}
      </section>
    </div>
  );
});
ComponentToPrint.displayName = "ComponentToPrint";
export default ComponentToPrint;
